import { useState } from "react";
import { motion } from "framer-motion";
import { IoIosCopy } from "react-icons/io";
import { toast } from "react-hot-toast";

const EmailGenerator = () => {
  const [formData, setFormData] = useState({
    recipient: "",
    subject: "",
    tone: "formal",
    keywords: "",
  });
  const [generatedEmail, setGeneratedEmail] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const generateEmail = () => {
    const { recipient, subject, tone, keywords } = formData;
    let emailContent;

    switch (tone) {
      case "formal":
        emailContent = `
          Dear ${recipient},

          I hope this email finds you well. We are thrilled to offer you an exciting sponsorship opportunity with our brand. As a key influencer in your field, we believe that a partnership between us would be mutually beneficial.

          ${keywords
            .split(",")
            .map((keyword) => `- ${keyword}`)
            .join("\n")}

          We are excited to discuss how we can work together to create amazing content that resonates with your audience.

          Best regards,
          Your Brand Name
        `;
        break;

      case "informal":
        emailContent = `
          Hey ${recipient},

          Hope you're doing great! We're super excited to tell you about a fantastic sponsorship opportunity with our brand. We think you'd be an amazing partner and would love to work with you!

          Here are some key points: ${keywords
            .split(",")
            .map((keyword) => `- ${keyword}`)
            .join("\n")}

          Can't wait to chat more about how we can create awesome content together!

          Cheers,
          Your Brand Name
        `;
        break;

      case "friendship":
        emailContent = `
          Hi ${recipient},

          I hope this email finds you well. I wanted to share an amazing sponsorship opportunity with you. Given our great connection, I believe we could make this a fantastic collaboration.

          Key points to consider: ${keywords
            .split(",")
            .map((keyword) => `- ${keyword}`)
            .join("\n")}

          Looking forward to hearing your thoughts!

          Best,
          Your Brand Name
        `;
        break;

      case "promotion":
        emailContent = `
          Hi ${recipient},

          As you know, ${subject} is coming up. We at Your Brand Name decided to take things one step further!

          Here's what we have in store for you: ${keywords
            .split(",")
            .map((keyword) => `- ${keyword}`)
            .join("\n")}

          Remember, this offer won't last forever. You can make your purchase from [date] to [date] and use [discount code] at checkout for an additional [offer/discount].

          Best wishes,
          Your friends at Your Brand Name
        `;
        break;

      default:
        emailContent = "";
    }

    setGeneratedEmail(emailContent.trim());
    setCopySuccess(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedEmail);
    setCopySuccess(true);
    toast.success("Email copied to clipboard!");
  };

  return (
    <div className="absolute w-[90%] md:w-[30rem] mx-auto p-4 md:p-8 bg-gray-100 shadow-lg shadow-gray-400 rounded-xl">
      <h1 className="text-2xl font-semibold mb-4 text-center text-gray-800">
        AI Email Generator
      </h1>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Recipient
          </label>
          <input
            type="text"
            name="recipient"
            value={formData.recipient}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tone
          </label>
          <select
            name="tone"
            value={formData.tone}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="formal">Formal</option>
            <option value="informal">Informal</option>
            <option value="friendship">Friendship</option>
            <option value="promotion">Promotion</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Keywords
          </label>
          <input
            type="text"
            name="keywords"
            value={formData.keywords}
            onChange={handleChange}
            placeholder="comma separated keywords"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          onClick={generateEmail}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-150"
        >
          Generate Email
        </button>
      </div>
      {generatedEmail && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-6 p-4 border border-gray-300 rounded-md bg-gray-50 max-h-60 overflow-y-scroll"
        >
          <h2 className="text-lg font-semibold">Generated Email:</h2>
          <p className="whitespace-pre-line text-gray-800">{generatedEmail}</p>
          <button
            onClick={copyToClipboard}
            className="mt-2 flex items-center text-blue-600 hover:underline"
          >
            <IoIosCopy className="mr-1" />{" "}
            {copySuccess ? "Copied!" : "Copy to Clipboard"}
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default EmailGenerator;


