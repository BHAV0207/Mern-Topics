import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let [role, setRole] = useState("");
  let [error , setError] = useState("");
  let [success , setSuccess] = useState("");
  let navigate = useNavigate();


  const handleRegister = (e) => {
    e.preventDefault();
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="p-6 bg-gray-200 rounded shadow"
        onSubmit={handleRegister}
      >
        <h2 className="text-lg font-bold mb-4">Register</h2>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <div className="mb-4">
          <label className="block mb-1">username</label>
          <input
            type="text"
            className="border p-2 w-full"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            className="border p-2 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            className="border p-2 w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Role</label>
          <select
            className="border p-2 w-full"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
