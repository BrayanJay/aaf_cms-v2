import axios from "axios";
import { useEffect, useState, useRef, useCallback } from "react";
import PropTypes from 'prop-types';

const FileTable = ({fileDirectory, category}) => {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null); // ref for hidden input
  const updateFileInputRef = useRef(null); // ref for update hidden input
  const [newFile, setNewFile] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [fileToUpdate, setFileToUpdate] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [updateFile, setUpdateFile] = useState(null);
  const [customFileName, setCustomFileName] = useState("");

  const fetchFiles = useCallback(async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/data/getFiles?folder=media/attachments/${fileDirectory}`, {
      });
      setFiles(response.data);
    } catch (err) {
      console.error(err);
      alert("Failed to load files");
    }
  }, [fileDirectory]);

  const handleDelete = async (filePath) => {
    if (!window.confirm("Are you sure you want to delete this file?")) return;
    try {
      await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/data/delete-file`, {
        withCredentials: true,
        data: { path: filePath },
      });
      fetchFiles();
    } catch (err) {
      alert("Delete failed");
      console.error(err);
    }
  };

  const handleUploadClick = () => {
    setShowUploadModal(true);
  };

  const handleUploadFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setNewFile(file);
    setCustomFileName(file.name); // Set default name to original filename
  };

  const handleUploadSubmit = async () => {
    if (!newFile) {
      alert("Please select a file to upload");
      return;
    }

    if (!customFileName.trim()) {
      alert("Please enter a filename");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", newFile); // Fixed field name from "image" to "file"
      formData.append("filename", customFileName);
      formData.append("file_directory", `media/attachments/${fileDirectory}`);

      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/data/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      alert(response.data.message);
      fetchFiles(); // refresh table
      closeUploadModal();
    } catch (err) {
      alert("Upload failed");
      console.error(err);
    }
  };

  const closeUploadModal = () => {
    setShowUploadModal(false);
    setNewFile(null);
    setCustomFileName("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
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
      const formData = new FormData();
      formData.append("file", updateFile); // Fixed field name from "image" to "file"
      formData.append("filename", fileToUpdate.fileName); // Keep the same filename
      formData.append("file_directory", `media/attachments/${fileDirectory}`); // Use fileDirectory parameter

      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/data/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
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
  }, [fetchFiles]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white transition-colors duration-300">{category}</h2>
        <button
          onClick={handleUploadClick}
          className="bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 text-white px-4 py-2 rounded transition-colors duration-300"
        >
          + New Upload
        </button>
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={handleUploadFileChange}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
          <thead className="bg-gray-50 dark:bg-gray-700 transition-colors duration-300">
            <tr>
              <th className="px-4 py-3 border-b border-gray-200 dark:border-gray-600 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider transition-colors duration-300">File Name</th>
              <th className="px-4 py-3 border-b border-gray-200 dark:border-gray-600 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider transition-colors duration-300">Path</th>
              <th className="px-4 py-3 border-b border-gray-200 dark:border-gray-600 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider transition-colors duration-300">Last Updated</th>
              <th className="px-4 py-3 border-b border-gray-200 dark:border-gray-600 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider transition-colors duration-300">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700 transition-colors duration-300">
            {files.map((file, idx) => (
              <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
                <td className="px-4 py-4 text-sm text-gray-900 dark:text-white max-w-xs truncate transition-colors duration-300">{file.fileName}</td>
                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-400 max-w-md truncate transition-colors duration-300">{file.path}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white transition-colors duration-300">{new Date(file.updatedAt).toLocaleString()}</td>
                <td className="px-4 py-4 text-center">
                  <button
                    className="bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 text-white px-3 py-1 rounded mr-2 transition-colors duration-300 text-sm"
                    onClick={() => handleUpdateClick(file)}
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white px-3 py-1 rounded transition-colors duration-300 text-sm"
                    onClick={() => handleDelete(file.path)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {files.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300">No files found in this directory.</p>
        </div>
      )}

      {/* Update Modal */}
      {showUpdateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md mx-4 transition-colors duration-300">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 transition-colors duration-300">Update File</h3>
            <p className="mb-4 text-gray-600 dark:text-gray-300 transition-colors duration-300">Current file: <span className="font-semibold text-gray-800 dark:text-white transition-colors duration-300">{fileToUpdate?.fileName}</span></p>
            
            <div 
              className={`border-2 border-dashed p-8 mb-6 text-center rounded-lg transition-colors duration-300 ${isDragging ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700'}`}
              onDragEnter={handleDragEnter}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {updateFile ? (
                <div>
                  <p className="text-green-600 dark:text-green-400 font-semibold transition-colors duration-300">File selected: {updateFile.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">({Math.round(updateFile.size / 1024)} KB)</p>
                </div>
              ) : (
                <div>
                  <p className="mb-2 text-gray-600 dark:text-gray-300 transition-colors duration-300">Drag & drop your file here</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 transition-colors duration-300">or</p>
                  <button 
                    onClick={() => updateFileInputRef.current.click()}
                    className="bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 text-white px-4 py-2 rounded transition-colors duration-300"
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

            <div className="flex justify-end space-x-3">
              <button
                onClick={closeUpdateModal}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateFileSubmit}
                className="px-4 py-2 bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 text-white rounded transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!updateFile}
              >
                Update File
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md mx-4 transition-colors duration-300">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 transition-colors duration-300">Upload New File</h3>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                Select File
              </label>
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 p-6 text-center rounded-lg transition-colors duration-300">
                {newFile ? (
                  <div>
                    <p className="text-green-600 dark:text-green-400 font-semibold transition-colors duration-300">File selected: {newFile.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">({Math.round(newFile.size / 1024)} KB)</p>
                  </div>
                ) : (
                  <div>
                    <p className="mb-3 text-gray-600 dark:text-gray-300 transition-colors duration-300">Choose a file to upload</p>
                    <button 
                      onClick={() => fileInputRef.current.click()}
                      className="bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 text-white px-4 py-2 rounded transition-colors duration-300"
                    >
                      Choose File
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                File Name
              </label>
              <input
                type="text"
                value={customFileName}
                onChange={(e) => setCustomFileName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors duration-300"
                placeholder="Enter filename..."
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 transition-colors duration-300">
                The file will be saved in: media/attachments/{fileDirectory}
              </p>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                onClick={closeUploadModal}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleUploadSubmit}
                className="px-4 py-2 bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 text-white rounded transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!newFile || !customFileName.trim()}
              >
                Upload File
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