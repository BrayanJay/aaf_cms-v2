import { useState } from "react";
import axios from "axios";

const Test = ({ fileName, file_directory }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [status, setStatus] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setStatus("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("filename", fileName);
    formData.append("file_directory", file_directory);

    try {
      const response = await axios.post("http://localhost:3000/data/upload", formData, {
        withCredentials: true, // Required to send httpOnly cookies
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setStatus(`✅ Upload successful: ${response.data.filePath}`);
    } catch (error) {
      console.error("Upload error:", error);
      setStatus("❌ Upload failed. Please check console.");
    }
  };

  return (
    <div className="p-4 border rounded shadow-md max-w-md">
      <h2 className="text-lg font-semibold mb-2">Upload a File</h2>
      <input
        type="file"
        onChange={handleFileChange}
        className="mb-2"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Upload
      </button>
      {status && <p className="mt-2 text-sm">{status}</p>}
    </div>
  );
};

export default Test;
