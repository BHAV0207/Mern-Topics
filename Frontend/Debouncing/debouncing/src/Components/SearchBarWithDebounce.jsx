import React, { useState, useEffect } from "react";
import axios from "axios";

function SearchBarWithDebounce() {
  const [inputValue, setInputValue] = useState(""); // User input
  const [debouncedValue, setDebouncedValue] = useState(""); // Debounced input
  const [results, setResults] = useState([]); // API results
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state

  // Debouncing logic: Update debouncedValue after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 300);

    return () => clearTimeout(timer); // Cleanup on input change
  }, [inputValue]);

  // Fetch API data when debouncedValue changes
  useEffect(() => {
    const fetchData = async () => {
      if (!debouncedValue) {
        setResults([]); // Clear results if input is empty
        return;
      }

      setLoading(true);
      setError("");
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users`
        );
        const filteredResults = response.data.filter((user) =>
          user.name.toLowerCase().includes(debouncedValue.toLowerCase())
        );
        setResults(filteredResults);
      } catch (err) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [debouncedValue]);

  // Handle input change
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Search Users</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search for a user..."
        className="w-full p-2 border border-gray-300 rounded"
      />
      {loading && <p className="mt-4 text-blue-600">Loading...</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}
      <ul className="mt-4">
        {results.map((user) => (
          <li key={user.id} className="mb-2">
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
      {!loading && results.length === 0 && debouncedValue && (
        <p className="mt-4 text-gray-500">No users found.</p>
      )}
    </div>
  );
}

export default SearchBarWithDebounce;
