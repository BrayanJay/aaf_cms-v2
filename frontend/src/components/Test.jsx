import { useState } from "react";
import { Trash2 } from "lucide-react";

export default function Test() {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [description, setDescription] = useState([""]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Add new description field
  const handleAddDescription = () => {
    setDescription([...description, ""]);
  };

  // Update description array
  const handleDescriptionChange = (index, value) => {
    const newDescription = [...description];
    newDescription[index] = value;
    setDescription(newDescription);
  };

  // Remove a description field
  const handleRemoveDescription = (index) => {
    if (description.length > 1) {
      setDescription(description.filter((_, i) => i !== index));
    }
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const payload = {
      profile_name: name,
      designation: designation,
      description: description,
    };

    try {
      const response = await fetch("http://localhost:3000/data/api/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Profile saved successfully!");
        setName("");
        setDesignation("");
        setDescription([""]); // Reset form
      } else {
        setMessage("Error: " + result.error);
      }
    } catch (error) {
      setMessage("Failed to save profile.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-bold mb-4">Profile Form</h2>
      {message && <p className="mb-4 text-center font-semibold">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <div>
          <label className="block font-semibold">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Designation Input */}
        <div>
          <label className="block font-semibold">Designation:</label>
          <input
            type="text"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter your designation"
            required
          />
        </div>

        {/* Description Section */}
        <div>
          <label className="block font-semibold">Description:</label>
          {description.map((desc, index) => (
            <div key={index} className="flex items-center gap-2 mb-2">
              <textarea
                value={desc}
                onChange={(e) => handleDescriptionChange(index, e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Enter description"
                required
              />
              {description.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveDescription(index)}
                  className="p-2 text-red-500 hover:text-red-700"
                >
                  <Trash2 size={20} />
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddDescription}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add New Line
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
          disabled={loading}
        >
          {loading ? "Saving..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
