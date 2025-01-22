import React, { useState } from "react";

function PasswordRegex() {
  let [pass, setPass] = useState(null);
  let [err, setErr] = useState(null);

  const handleChange = (e) => {
    setPass(e.target.value);
  };

  const handleSubmit= (e) => {
    e.preventDefault();

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;

    if (!passwordRegex.test(pass)) {
      setErr("invalid pass");
    } else {
      setPass("");
      alert("valid Password");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="mb-4">
        <label htmlFor="password" className="block mb-2">
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={pass}
          onChange={handleChange}
          className="border px-2 py-1 w-full"
        />
        {err && <p className="text-red-500">{err}</p>}
      </div>
      <button type="submit" className="px-4 py-2 bg-green-600 text-white">
        Validate
      </button>
    </form>
  );
}

export default PasswordRegex;
