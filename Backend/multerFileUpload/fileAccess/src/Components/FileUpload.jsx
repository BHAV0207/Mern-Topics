import React, { useState } from "react";

export default function FileUpload() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [uploadedFilePath, setUploadedFilePath] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setMessage("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setMessage("File uploaded successfully!");
      setUploadedFilePath(res.data.filePath);
    } catch (err) {
      console.error(err);
      setMessage("File upload failed.");
    }
  };

  return (
    <div className="file-upload-container">
      <h2>File Upload</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="file" onChange={handleFileChange} />
        </div>
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
      {uploadedFilePath && (
        <p>
          File URL:{" "}
          <a
            href={`http://localhost:5000${uploadedFilePath}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {uploadedFilePath}
          </a>
        </p>
      )}
    </div>
  );
}
