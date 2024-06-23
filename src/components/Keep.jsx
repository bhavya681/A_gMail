import  { useState } from 'react';

const Keep = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  // Add note function
  const addNote = () => {
    if (newNote.trim() !== '') {
      setNotes([...notes, newNote]);
      setNewNote('');
    }
  };

  // Delete note function
  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-4 bg-white rounded-lg shadow-md w-full md:w-96 mx-4">
        <h2 className="text-lg font-semibold mb-4 text-center">Keep</h2>
        <div className="mb-4">
          <input
            type="text"
            className="border border-gray-300 rounded px-3 py-2 w-full mb-2"
            placeholder="Add a new note"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded w-full md:w-auto"
            onClick={addNote}
          >
            Add
          </button>
        </div>
        <ul>
          {notes.map((note, index) => (
            <li key={index} className="mb-2 flex flex-col md:flex-row justify-between items-center">
              <span className="break-words">{note}</span>
              <button
                className="text-red-500 mt-2 md:mt-0 md:ml-2"
                onClick={() => deleteNote(index)}
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

export default Keep;
