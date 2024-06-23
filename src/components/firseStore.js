import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // Adjust import path based on your firebase setup

// Collection references
const emailTemplatesCollection = collection(db, "emailTemplates");
const emailsCollection = collection(db, "emails");

// Function to add an email template to Firestore
export const addEmailTemplate = async (templateData) => {
  try {
    const docRef = await addDoc(emailTemplatesCollection, templateData);
    console.log("Email template added with ID: ", docRef.id);
    return docRef.id; // Return the ID of the newly added document
  } catch (error) {
    console.error("Error adding email template: ", error);
    throw new Error("Failed to add email template.");
  }
};

// Function to fetch all email templates from Firestore
export const fetchEmailTemplates = async () => {
  try {
    const querySnapshot = await getDocs(emailTemplatesCollection);
    const templates = [];
    querySnapshot.forEach((doc) => {
      templates.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    return templates;
  } catch (error) {
    console.error("Error fetching email templates: ", error);
    throw new Error("Failed to fetch email templates.");
  }
};

// Function to add an email to Firestore
export const addEmail = async (emailData) => {
  try {
    const docRef = await addDoc(emailsCollection, {
      ...emailData,
      timestamp: new Date(),
    });
    console.log("Email added with ID: ", docRef.id);
    return docRef.id; // Return the ID of the newly added document
  } catch (error) {
    console.error("Error adding email: ", error);
    throw new Error("Failed to add email.");
  }
};

// Export other Firestore utilities if needed
export { collection, getDocs }; // Exporting collection and getDocs for general Firestore usage
