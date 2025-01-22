import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`http://localhost:2500/users?page=${page}&limit=5`);
        setUsers(res.data.users);
        setTotalPages(res.data.totalPages);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };

    fetchUsers();
  }, [page]);

  const handlePrevious = () => {
    if (page > 1) setPage((prevPage) => prevPage - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">User Pagination</h1>
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Age</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                <td className="border border-gray-300 px-4 py-2">{user.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={handlePrevious}
            className={`px-4 py-2 rounded-md ${page === 1 ? "bg-gray-300" : "bg-blue-500 text-white hover:bg-blue-600"}`}
            disabled={page === 1}
          >
            Previous
          </button>
          <p>
            Page {page} of {totalPages}
          </p>
          <button
            onClick={handleNext}
            className={`px-4 py-2 rounded-md ${page === totalPages ? "bg-gray-300" : "bg-blue-500 text-white hover:bg-blue-600"}`}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
