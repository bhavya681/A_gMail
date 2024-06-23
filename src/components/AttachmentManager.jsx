// src/components/AttachmentManager.jsx
import  { useState } from "react";
import { storage } from "../firebase";

const AttachmentManager = () => {
  const [attachment, setAttachment] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAttachment(file);
    }
  };

  const uploadAttachment = async () => {
    if (!attachment) return;

    try {
      const storageRef = storage.ref();
      const fileRef = storageRef.child(attachment.name);
      await fileRef.put(attachment);
      console.log("File uploaded successfully!");
      // Handle success, e.g., update UI or notify user
    } catch (error) {
      console.error("Error uploading file: ", error);
      // Handle error, e.g., display error message to user
    }
  };

  return (
    <div className="attachment-manager max-w-md mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4">Attachment Manager</h2>
      <input
        type="file"
        onChange={handleFileChange}
        className="mb-4"
      />
      <button
        onClick={uploadAttachment}
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
      >
        Upload Attachment
      </button>
    </div>
  );
};

export default AttachmentManager;
