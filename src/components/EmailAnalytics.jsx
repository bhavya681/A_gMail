import { useState } from "react";
import axios from "axios";

const EmailAnalytics = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.get(
        "https://api.apilayer.com/auto-complete",
        {
          params: {
            apikey: "tpOALlYQh95YrC7pxPaK9muBESzwwJ2b", // Replace with your YouTube API key
            q: query,
          },
        }
      );

      setResults(response.data);
    } catch (error) {
      console.error("Error fetching auto-complete results:", error);
      setError("Error fetching auto-complete results. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">YouTube Video Search</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Search Query
        </label>
        <input
          type="text"
          className="border border-gray-300 p-2 rounded-md w-full"
          placeholder="Enter search query"
          value={query}
          onChange={handleChange}
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
        onClick={handleSearch}
        disabled={loading || !query.trim()}
      >
        {loading ? "Searching..." : "Search"}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Auto-complete Results:</h3>
        <ul className="border border-gray-300 p-2 rounded-md bg-gray-50">
          {results.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EmailAnalytics;
