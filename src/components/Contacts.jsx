import { useState } from 'react';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({ name: '', email: '' });

  const addContact = () => {
    if (newContact.name.trim() !== "" && newContact.email.trim() !== "") {
      setContacts([...contacts, newContact]);
      setNewContact({ name: '', email: '' });
    }
  };

  const deleteContact = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-4 bg-white rounded-lg shadow-md sm:max-w-md w-full">
        <h2 className="text-lg font-semibold mb-4">Contacts</h2>
        <div className="mb-4">
          <input
            type="text"
            className="border border-gray-300 rounded px-3 py-2 w-full mb-2"
            placeholder="Name"
            value={newContact.name}
            onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
          />
          <input
            type="email"
            className="border border-gray-300 rounded px-3 py-2 w-full mb-2"
            placeholder="Email"
            value={newContact.email}
            onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={addContact}
          >
            Add
          </button>
        </div>
        <ul>
          {contacts.map((contact, index) => (
            <li key={index} className="mb-2 flex justify-between items-center">
              <span>{contact.name} - {contact.email}</span>
              <button
                className="text-red-500"
                onClick={() => deleteContact(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
