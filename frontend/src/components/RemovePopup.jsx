import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function RemovePopup({ isOpen, onClose, initialLang, table_name }) {
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
        `http://localhost:3000/data/update/${table_name}`,
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
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      <h2 className="block text-gray-700 mt-3">Are you sure?</h2>
      <p className="text-gray-600">This action will clear the description.</p>

        {error && <p className="text-red-500">{error}</p>} {/* Display error message */}

        <form onSubmit={handleSubmit}>
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
              {loading ? "Removing..." : "Confirm"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

RemovePopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  initialLang: PropTypes.string.isRequired,
  table_name: PropTypes.string.isRequired,
};

export default RemovePopup;
