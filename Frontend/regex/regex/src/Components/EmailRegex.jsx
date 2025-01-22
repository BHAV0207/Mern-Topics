import React, { useContext } from "react";
import { RegexStore } from "../Store/Context";

function EmailRegex() {
  const { email, err, handleChange, handleSubmit } = useContext(RegexStore);

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        // backgroundColor: "#f8f9fa",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ marginBottom: "16px", width: "100%", maxWidth: "400px" }}>
        <label
          htmlFor="email"
          style={{
            display: "block",
            marginBottom: "8px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Email:
        </label>
        <input
          type="email"
          value={email}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            fontSize: "16px",
          }}
        />
        {err && (
          <p style={{ color: "red", fontSize: "14px", marginTop: "8px" }}>
            {err}
          </p>
        )}
      </div>
      <button
        type="submit"
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Validate
      </button>
    </form>
  );
}

export default EmailRegex;
