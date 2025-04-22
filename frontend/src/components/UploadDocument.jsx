import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';


const UploadDocument = ({tokenUrl, documentNameWithExtention, filePath,  documentName}) => {

    //Upload Popup Flyer
    const [files, setFiles] = useState({});

    const handleFile = (e, key) => {
    setFiles({ ...files, [key]: e.target.files[0] });
    };

    const handleUpload = async (key) => {
        if (!files[key]) {
        alert(`No file selected for uploading!`);
        return;
    }
  
    const formData = new FormData();
    formData.append("file", files[key]);
    formData.append("filename", `${documentNameWithExtention}`);
    formData.append("file_directory", `media/attachments/${filePath}`);

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post("http://localhost:3000/data/upload", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      window.location.reload();
      alert(response.data.message);
      
        } catch (error) {
        alert(`Upload failed: ${error.response?.data?.message || error.message}`);
        }
    };

    const handleClear = (key) => {
        setFiles({ ...files, [key]: null });
        document.getElementById(key).value = ""; // Reset input field
    };

    const navigate = useNavigate()
    const fetchUser = async () => {
        try {
        const token = localStorage.getItem('token')
        const response = await axios.get(tokenUrl, {
            headers: {
            "Authorization" : `Bearer ${token}`
            }
        })
        if(response.status !== 201) {
            navigate('/login')
        }
        } catch(err){
        navigate('/login')
        console.log(err)
        }
    }

    useEffect(() => {
        fetchUser()
    }, [])

  return (
    <div className="flex flex-col pt-2">
        <form>
        <label className="text-blue-600 font-semibold text-base pt-2">Annual Reports</label>
          <table className="w-full mt-2">
            <tbody>
              {[{documentName}].map((key) => (
                <tr key={key} className="odd:bg-blue-50 even:bg-blue-100 transition duration-200">
                  <td className="px-4 py-1 font-medium text-gray-800">{documentName}</td>
                  <td className="px-4 py-2 border-x-2 border-white">
                    <input
                      id={key}
                      type="file"
                      onChange={(e) => handleFile(e, key)}
                      className="w-full text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    />
                  </td>
                  <td className="flex justify-end items-center px-4 py-2 space-x-3">
                    <button
                      type="button"
                      className="bg-green-600 hover:bg-green-700 text-white font-semibold py-1.5 px-4 rounded-md transition duration-200"
                      onClick={() => handleUpload(key)}
                    >
                      Upload
                    </button>
                    <button
                      type="button"
                      className="bg-red-600 hover:bg-red-700 text-white font-semibold py-1.5 px-4 rounded-md transition duration-200"
                      onClick={() => handleClear(key)}
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
  )
}
UploadDocument.propTypes = {
  tokenUrl: PropTypes.string.isRequired,
  documentNameWithExtention: PropTypes.string.isRequired,
  filePath: PropTypes.string.isRequired,
  documentName: PropTypes.string.isRequired
};

export default UploadDocument