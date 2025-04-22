import axios from "axios";
import { useEffect, useState, useRef } from "react";
import PropTypes from 'prop-types';

const FileTable = ({fileDirectory, category}) => {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null); // ref for hidden input
  const updateFileInputRef = useRef(null); // ref for update hidden input
  const [newFile, setNewFile] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [fileToUpdate, setFileToUpdate] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [updateFile, setUpdateFile] = useState(null);

  const fetchFiles = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`http://localhost:3000/data/getFiles?folder=media/attachments/${fileDirectory}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setFiles(response.data);
    } catch (err) {
      console.error(err);
      alert("Failed to load files");
    }
  };

  const handleDelete = async (filePath) => {
    if (!window.confirm("Are you sure you want to delete this file?")) return;
    try {
      const token = localStorage.getItem("token");
      await axios.delete("http://localhost:3000/data/delete-file", {
        headers: { Authorization: `Bearer ${token}` },
        data: { path: filePath },
      });
      fetchFiles();
    } catch (err) {
      alert("Delete failed");
      console.error(err);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleNewFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setNewFile(file);

    const formData = new FormData();
    formData.append("image", file); // Changed from "image" to "file" to match API
    formData.append("filename", file.name);
    formData.append("file_directory", `media/attachments/${fileDirectory}`);

    const token = localStorage.getItem("token");

    axios
      .post("http://localhost:3000/data/upload", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        alert(res.data.message);
        fetchFiles(); // refresh table
        fileInputRef.current.value = ""; // reset input
      })
      .catch((err) => {
        alert("Upload failed");
        console.error(err);
      });
  };

  const handleUpdateClick = (file) => {
    setFileToUpdate(file);
    setShowUpdateModal(true);
  };

  const handleUpdateFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUpdateFile(file);
  };

  const handleUpdateFileSubmit = async () => {
    if (!updateFile) {
      alert("Please select a file to update");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("image", updateFile);
      formData.append("filename", fileToUpdate.fileName); // Keep the same filename
      formData.append("file_directory", fileToUpdate.path.substring(0, fileToUpdate.path.lastIndexOf('/')));

      const response = await axios.post("http://localhost:3000/data/upload", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert(response.data.message);
      fetchFiles(); // refresh table
      closeUpdateModal();
    } catch (err) {
      alert("Update failed");
      console.error(err);
    }
  };

  const closeUpdateModal = () => {
    setShowUpdateModal(false);
    setFileToUpdate(null);
    setUpdateFile(null);
    setIsDragging(false);
    if (updateFileInputRef.current) {
      updateFileInputRef.current.value = "";
    }
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      setUpdateFile(file);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-blue-600">{category}</h2>
        <button
          onClick={handleUploadClick}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
        >
          + New Upload
        </button>
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={handleNewFileChange}
        />
      </div>

      <table className="w-full table-auto border">
        <thead className="bg-blue-200">
          <tr>
            <th className="px-3 py-2 text-left">File Name</th>
            <th className="px-3 py-2 text-left">Path</th>
            <th className="px-3 py-2 text-left">Last Updated</th>
            <th className="px-3 py-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, idx) => (
            <tr key={idx} className="border-t">
              <td className="px-3 py-2">{file.fileName}</td>
              <td className="px-3 py-2">{file.path}</td>
              <td className="px-3 py-2">{new Date(file.updatedAt).toLocaleString()}</td>
              <td className="px-3 py-2 text-center">
                <button
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded mr-2"
                  onClick={() => handleUpdateClick(file)}
                >
                  Update
                </button>
                <button
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                  onClick={() => handleDelete(file.path)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Update Modal */}
      {showUpdateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Update File</h3>
            <p className="mb-4">Current file: <span className="font-semibold">{fileToUpdate?.fileName}</span></p>
            
            <div 
              className={`border-2 border-dashed p-8 mb-4 text-center ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
              onDragEnter={handleDragEnter}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {updateFile ? (
                <div>
                  <p className="text-green-600 font-semibold">File selected: {updateFile.name}</p>
                  <p className="text-sm text-gray-500">({Math.round(updateFile.size / 1024)} KB)</p>
                </div>
              ) : (
                <div>
                  <p className="mb-2">Drag & drop your file here</p>
                  <p className="text-sm text-gray-500">or</p>
                  <button 
                    onClick={() => updateFileInputRef.current.click()}
                    className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                  >
                    Choose File
                  </button>
                </div>
              )}
              <input
                type="file"
                ref={updateFileInputRef}
                className="hidden"
                onChange={handleUpdateFileChange}
              />
            </div>

            <div className="flex justify-end space-x-2">
              <button
                onClick={closeUpdateModal}
                className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateFileSubmit}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                disabled={!updateFile}
              >
                Update File
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

FileTable.propTypes = {
  fileDirectory: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
};

export default FileTable;