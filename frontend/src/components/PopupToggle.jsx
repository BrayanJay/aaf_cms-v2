import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

function PopupToggle({tokenUrl}) {
  const [popupEnabled, setPopupEnabled] = useState(false);

  // Fetch popup state on load
  useEffect(() => {
    axios.get("http://localhost:3000/popup/popup-state")
      .then(response => setPopupEnabled(response.data.popupEnabled))
      .catch(error => console.error("Error fetching popup state:", error));
  }, []);

  // Handle toggle switch
  const handleToggle = () => {
    const newState = !popupEnabled;
    axios.post("http://localhost:3000/popup/popup-state", { enabled: newState })
      .then(() => setPopupEnabled(newState))
      .catch(error => console.error("Error updating popup state:", error));
  };

  //Upload Popup Flyer
  const [files, setFiles] = useState({});

  const handleFile = (e, num) => {
    setFiles({ ...files, [num]: e.target.files[0] });
  };

  const handleUpload = async (num) => {
    if (!files[num]) {
      alert(`No file selected for profile picture${num}`);
      return;
    }
  
    const formData = new FormData();
    formData.append("image", files[num]);
    formData.append("filename", `popup.webp`);
    formData.append("file_directory", "media/uploads");

    try {
      const response = await axios.post("http://localhost:3000/data/upload", formData, {
        withCredentials: true ,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      window.location.reload();
      alert(response.data.message);
      
    } catch (error) {
      alert(`Upload failed: ${error.response?.data?.message || error.message}`);
    }
  };

  const handleClear = (num) => {
    setFiles({ ...files, [num]: null });
    document.getElementById(num).value = ""; // Reset input field
  };

  const navigate = useNavigate()
  const fetchUser = async () => {
    try {
      const response = await axios.get(tokenUrl, {
        withCredentials: true 
      })
    } catch(err){
      navigate('/login')
      console.log(err)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <div className="flex flex-col gap-2">
        <label className="text-blue-800 font-semibold text-xl">Popup Feature</label>
        <div className='flex flex-row'>
        <label className="inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" checked={popupEnabled} onChange={handleToggle} />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
        <span className="pl-2">{popupEnabled ? "Enabled" : "Disabled"}</span>
        </label>
        {/* <button className='ml-5 max-w-24 bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded mr-2'>Save</button> */}
        </div>

        <div className="flex flex-col pt-2">
        <form>
          <label className="text-blue-600 font-normal text-base">Popup Flyer</label>
          <table className="w-full table-auto border mt-2">
            <tbody>
              {["Popup"].map((num) => (
                <tr key={num} className="odd:bg-blue-50 even:bg-blue-100 transition duration-200">
                  <td className="py-2 px-3 text-left min-w-48">{num} Flyer</td>
                  <td className="py-2 px-3 text-left min-w-80 ">
                    <input
                      id={num}
                      type="file"
                      onChange={(e) => handleFile(e, num)}
                      className="w-full text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    />
                  </td>
                  <td className="px-3 py-2 text-center min-w-36">
                    <button
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded mr-2"
                      onClick={() => handleUpload(num)}
                    >
                      Upload
                    </button>
                    <button
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                      onClick={() => handleClear(num)}
                    >
                      Clear
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </form>
        </div>
    </div>
  );
}

PopupToggle.propTypes = {
  tokenUrl: PropTypes.string.isRequired,
};

export default PopupToggle;
