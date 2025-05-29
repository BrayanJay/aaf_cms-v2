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
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold text-blue-800 mb-4">Update Description</h2>

        {error && <p className="text-red-500">{error}</p>}

        <form onSubmit={handleSubmit}>
          <label className="block text-gray-700">Language:</label>
          <p className="w-full p-2 border border-gray-300 rounded mt-1 bg-gray-100">
            {languageMap[lang] || "Unknown"}
          </p>

          <label className="block text-gray-700 mt-3">New Description:</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
          />

          <div className="flex justify-end space-x-3 mt-4">
            <button
              type="button"
              className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded-md"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
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
