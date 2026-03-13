import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function RemoveProfilePopup({ isOpen, onClose, initialLang, id }) {
  const [lang] = useState(initialLang); // ✅ Allow language selection
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Optional fetch user data (if needed for your logic)
  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:3000/auth/goldloanpagecontents", {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      if (response.status !== 201) {
        navigate("/login");
      }
    } catch (err) {
      navigate("/login");
      console.log(err);
    }
  };

  // This can be optional depending on your usage
  useEffect(() => {
    fetchUser(); // Call only if user info is required
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    setLoading(true);
    setError(""); // Clear previous errors
  
    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(
        `http://localhost:3000/data/update/${id}`,
        { description, lang }, // Include 'lang' in the request body
        { headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" } }
      );
      
      //alert(res.data.message); // Assuming the response message gives feedback
      setDescription(""); // Clear the description field after successful update
      onClose(); // Close popup after successful update
    
      // Reload the page to reflect changes
      window.location.reload();

    } catch (err) {
      console.error("Update failed:", err);
      if (err.response && err.response.data) {
        setError(err.response.data.message || "Failed to update description");
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 dark:bg-gray-950 bg-opacity-50 dark:bg-opacity-75 z-50 transition-colors duration-300">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96 transition-colors duration-300">
      <h2 className="block text-gray-700 dark:text-gray-300 mt-3 text-lg font-semibold transition-colors duration-300">Are you sure?</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-300">This action will clear the description.</p>

        {error && <p className="text-red-500 dark:text-red-400 mb-4 transition-colors duration-300">{error}</p>} {/* Display error message */}

        <form onSubmit={handleSubmit}>
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
              {loading ? "Removing..." : "Confirm"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

RemoveProfilePopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  initialLang: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default RemoveProfilePopup;
