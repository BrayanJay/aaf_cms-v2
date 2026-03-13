import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function UpdatePopup({ isOpen, onClose, initialLang, initialDescription, table_name ,tokenUrl }) {
  const [lang] = useState(initialLang); 
  const [description, setDescription] = useState(initialDescription || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(tokenUrl, {
          withCredentials: true,
        });
      } catch (err) {
        navigate("/login");
        console.log(err);
      }
    };

    fetchUser();
  }, [navigate, tokenUrl]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!description.trim()) {
      setError("Description cannot be empty.");
      return;
    }
  
    setLoading(true);
    setError("");

    try {
      const res = await axios.put(`http://localhost:3000/product/update/${table_name}`, 
        { description, lang }, 
        { withCredentials: true }
      );

      setDescription(""); 
      onClose();
      window.location.reload();
    } catch (err) {
      console.error("Update failed:", err);
      setError(err.response?.data?.message || "Failed to update description");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  const languageMap = { en: "English", si: "Sinhala", ta: "Tamil" };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 dark:bg-gray-950 bg-opacity-50 dark:bg-opacity-75 z-50 transition-colors duration-300">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96 transition-colors duration-300">
        <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-400 mb-4 transition-colors duration-300">Update Description</h2>

        {error && <p className="text-red-500 dark:text-red-400 mb-4 transition-colors duration-300">{error}</p>}

        <form onSubmit={handleSubmit}>
          <label className="block text-gray-700 dark:text-gray-300 transition-colors duration-300">Language:</label>
          <p className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded mt-1 transition-colors duration-300">
            {languageMap[lang] || "Unknown"}
          </p>

          <label className="block text-gray-700 dark:text-gray-300 mt-3 transition-colors duration-300">New Description:</label>
          <textarea
            className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded mt-1 transition-colors duration-300"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
          />

          <div className="flex justify-end space-x-3 mt-4">
            <button
              type="button"
              className="bg-gray-400 hover:bg-gray-500 dark:bg-gray-600 dark:hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors duration-300"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors duration-300 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={loading}
            >
              {loading ? "Updating..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

UpdatePopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  initialLang: PropTypes.string.isRequired,
  initialDescription: PropTypes.string,
  table_name: PropTypes.string.isRequired,
  tokenUrl: PropTypes.string.isRequired,
};

export default UpdatePopup;
