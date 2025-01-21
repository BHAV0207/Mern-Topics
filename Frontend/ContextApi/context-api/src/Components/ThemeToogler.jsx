import React, { useContext } from "react";
import { ThemeContext } from "../ContextStore/context";

function ThemeToogler() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#f3f4f6" : "#1f2937",
        color: theme === "light" ? "#1a202c" : "#f9fafb",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", // Ensure it spans the entire viewport height
        margin: 0, // Remove default margin
        padding: 0, // Remove default padding
        transition: "all 0.5s ease",
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1.5rem" }}>
        {theme === "light" ? "Light Mode" : "Dark Mode"}
      </h1>
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          fontSize: "1.2rem",
          fontWeight: "600",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          backgroundColor: theme === "light" ? "#2563eb" : "#facc15",
          color: theme === "light" ? "#ffffff" : "#1a202c",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          transition: "background-color 0.3s ease",
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToogler;
