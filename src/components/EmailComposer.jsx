// src/components/EmailComposer.jsx
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addEmail, fetchEmailTemplates} from "./firseStore";
import { collection, addDoc } from "firebase/firestore";

const EmailComposer = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    to: "",
    subject: "",
    message: "",
  });
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState("");

  useEffect(() => {
    // Fetch email templates on component mount
    async function fetchTemplates() {
      try {
        const templatesFromFirestore = await fetchEmailTemplates();
        setTemplates(templatesFromFirestore);
      } catch (error) {
        console.error("Error fetching templates: ", error);
      }
    }
    fetchTemplates();
  }, []);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const selectTemplate = (template) => {
    setSelectedTemplate(template);
    setFormData({
      ...formData,
      subject: template.subject,
      message: template.message,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      // Example of using addEmail function from firestore.js
      await addEmail(formData);

      // Example of using addDoc function from firestore.js
      const emailsCollection = collection("emails");
      await addDoc(emailsCollection, {
        to: formData.to,
        subject: formData.subject,
        message: formData.message,
        timestamp: new Date(),
      });

      console.log("Email added successfully:", formData);
      // Reset form or navigate to another page
      setFormData({
        to: "",
        subject: "",
        message: "",
      });
      setSelectedTemplate("");
    } catch (error) {
      console.error("Error adding email:", error);
      // Handle error as needed
    }
  };

  return (
    <div className="email-composer max-w-3xl mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4">Email Composer</h2>
      <form onSubmit={submitHandler} className="space-y-4">
        <input
          name="to"
          value={formData.to}
          onChange={changeHandler}
          type="email"
          placeholder="To"
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
        <input
          name="subject"
          value={formData.subject}
          onChange={changeHandler}
          type="text"
          placeholder="Subject"
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={changeHandler}
          placeholder="Message"
          required
          rows="8"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
        <select
          value={selectedTemplate}
          onChange={(e) =>
            selectTemplate(
              templates.find((template) => template.id === e.target.value)
            )
          }
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="">Select Template</option>
          {templates.map((template) => (
            <option key={template.id} value={template.id}>
              {template.subject}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
        >
          Send Email
        </button>
      </form>
    </div>
  );
};

export default EmailComposer;
