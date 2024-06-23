//SocialMediaUpdates

import React, { useState } from 'react';
import axios from 'axios';

const SocialMediaUpdates = () => {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('es'); // Default target language is Spanish

  // IBM Watson Language Translator API endpoint and API key
  const apiKey = 'tpOALlYQh95YrC7pxPaK9muBESzwwJ2b'; // Replace with your IBM Watson Language Translator API key
  const apiUrl = `https://api.us-south.language-translator.watson.cloud.ibm.com/instances/123456789/v3/translate`;

  // Function to handle text input change
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  // Function to handle language selection change
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  // Function to handle translation
  const translateText = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await axios.post(
        apiUrl,
        {
          text: text,
          target: selectedLanguage,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa(`apikey:${apiKey}`),
          },
        }
      );

      setTranslatedText(response.data.translations[0].translation);
    } catch (error) {
      console.error('Error translating text:', error);
      setError('Error translating text. Please try again later.');
    }

    setLoading(false);
  };

  // Language options for the dropdown menu
  const languageOptions = [
    { code: 'ar', name: 'Arabic' },
    { code: 'zh', name: 'Chinese (Simplified)' },
    { code: 'zh-TW', name: 'Chinese (Traditional)' },
    { code: 'cs', name: 'Czech' },
    { code: 'da', name: 'Danish' },
    { code: 'nl', name: 'Dutch' },
    { code: 'en', name: 'English' },
    { code: 'fi', name: 'Finnish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'el', name: 'Greek' },
    { code: 'he', name: 'Hebrew' },
    { code: 'hi', name: 'Hindi' },
    { code: 'hu', name: 'Hungarian' },
    { code: 'it', name: 'Italian' },
    { code: 'ja', name: 'Japanese' },
    { code: 'ko', name: 'Korean' },
    { code: 'no', name: 'Norwegian' },
    { code: 'pl', name: 'Polish' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'ru', name: 'Russian' },
    { code: 'es', name: 'Spanish' },
    { code: 'sv', name: 'Swedish' },
    { code: 'th', name: 'Thai' },
    { code: 'tr', name: 'Turkish' },
    { code: 'vi', name: 'Vietnamese' },
  ];

  return (
    <div className="p-4 bg-white shadow-md rounded-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Translate Text</h2>
      <textarea
        className="border border-gray-300 p-2 rounded-md w-full mb-4"
        rows="5"
        placeholder="Enter text to translate..."
        value={text}
        onChange={handleTextChange}
      ></textarea>
      <div className="flex mb-4">
        <select
          className="border border-gray-300 p-2 rounded-md mr-2"
          value={selectedLanguage}
          onChange={handleLanguageChange}
        >
          {languageOptions.map((option) => (
            <option key={option.code} value={option.code}>
              {option.name}
            </option>
          ))}
        </select>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
          onClick={translateText}
          disabled={loading || !text.trim()}
        >
          {loading ? 'Translating...' : 'Translate'}
        </button>
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {translatedText && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Translation:</h3>
          <p className="border border-gray-300 p-2 rounded-md bg-gray-50">{translatedText}</p>
        </div>
      )}
    </div>
  );
};

export default SocialMediaUpdates;
