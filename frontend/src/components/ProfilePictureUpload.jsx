import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const ProfilePictureUpload = ({tokenUrl, id}) => {
    const [files, setFiles] = useState({});

    const fileName = {
        1 : "vap",
        2 : "rja",
        3 : "gm",
        4 : "kr",
        5 : "kgk",
        6 : "rab",
        7 : "jpdr",
        8 : "tcd",
        9 : "rds",
        10 : "tn",
        11 : "ge",
        12 : "jw",
        13 : "mk",
        14 : "sw",
        15 : "sa",
        16 : "ij",
        17 : "pp",
    }
    
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
        formData.append("filename", `${fileName[id]}.webp`);
        formData.append("file_directory", "media/aboutPage/profiles"); // Custom File Path
      
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
    
      const handleClear = (num) => {
        setFiles({ ...files, [num]: null });
        document.getElementById(`profile${num}`).value = ""; // Reset input field
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
    <div className="flex justify-center container my-4">
      <div className="flex flex-col gap-10 w-full">
      <form>
          <label className="text-blue-600 font-normal text-base">Profile Picture</label>
          <table className="w-full mt-2">
            <tbody>
              {[id].map((num) => (
                <tr key={num} className="odd:bg-blue-50 even:bg-blue-100 transition duration-200">
                  <td className="px-4 py-1 font-medium text-gray-800">Profile {num}</td>
                  <td className="px-4 py-2 border-x-2 border-white">
                    <input
                      id={`profile${num}`}
                      type="file"
                      onChange={(e) => handleFile(e, num)}
                      className="w-full text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    />
                  </td>
                  <td className="flex justify-end items-center px-4 py-2 space-x-3">
                    <button
                      type="button"
                      className="bg-green-600 hover:bg-green-700 text-white font-semibold py-1.5 px-4 rounded-md transition duration-200"
                      onClick={() => handleUpload(num)}
                    >
                      Upload
                    </button>
                    <button
                      type="button"
                      className="bg-red-600 hover:bg-red-700 text-white font-semibold py-1.5 px-4 rounded-md transition duration-200"
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
  )
}

ProfilePictureUpload.propTypes = {
  id: PropTypes.number.isRequired,
  tokenUrl: PropTypes.string.isRequired,
};

export default ProfilePictureUpload