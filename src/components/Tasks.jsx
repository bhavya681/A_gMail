import { useState, useEffect } from 'react';
import { MdDelete } from 'react-icons/md';

const Tasks = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (newNote.trim() !== '') {
      const updatedNotes = [...notes, newNote.trim()];
      setNotes(updatedNotes);
      setNewNote('');
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((note, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md mb-4 flex justify-center items-center text-center flex-col h-screen">
      <h2 className="text-lg font-semibold mb-4">Notes</h2>
      <div className="mb-4">
        <textarea
          className="border border-gray-300 rounded px-3 py-2 w-full"
          rows="3"
          placeholder="Add a new note"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          onClick={addNote}
        >
          Add Note
        </button>
      </div>
      <ul className="divide-y divide-gray-300">
        {notes.map((note, index) => (
          <li key={index} className="py-2 flex items-center justify-between">
            <p className="whitespace-pre-wrap">{note}</p>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => deleteNote(index)}
            >
              <MdDelete size={20} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
