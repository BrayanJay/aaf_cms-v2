import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileData from "../../components/ProfileData";
//import Test from "../../components/Test";

function AboutPageContents() {
    
  const [files, setFiles] = useState({});

  const tokenUrl = "http://localhost:3000/auth/aboutpagecontents"

  const handleFile = (e, num) => {
    setFiles({ ...files, [num]: e.target.files[0] });
  };

  const handleUpload = async (num) => {
    if (!files[num]) {
      alert(`No file selected for Slide 0${num}`);
      return;
    }
  
    const formData = new FormData();
    formData.append("image", files[num]);
    formData.append("filename", `bannerAbout.webp`);
    formData.append("file_directory", "media/aboutPage"); // Custom File Path
  
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post("http://localhost:3000/data/upload", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
  
      alert(response.data.message);
    } catch (error) {
      alert(`Upload failed: ${error.response?.data?.message || error.message}`);
    }
  };

  const handleClear = (num) => {
    setFiles({ ...files, [num]: null });
    document.getElementById(`slide${num}`).value = ""; // Reset input field
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

  const ids = Array.from({ length: 17 }, (_, i) => i + 1);

  return (
    <div className="flex justify-center container py-20">
      <div className="flex flex-col gap-10 w-full m-10 px-20">
        <div>
      <form>
          <label className="text-blue-800 font-semibold text-xl">Carousel</label>
          <table className="w-full table-auto border">
            <thead className="bg-blue-200">
              <tr className="">
                <th className="px-4 py-3 text-left">Slide</th>
                <th className="px-3 py-2 text-left">File</th>
                <th className="px-3 py-2 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {[1].map((num) => (
                <tr key={num} className="odd:bg-blue-50 even:bg-blue-100 transition duration-200">
                  <td className="px-3 py-2 min-w-44 max-w-48 whitespace-normal break-words">Slide 0{num}</td>
                  <td className="px-3 py-2 whitespace-normal break-words">
                    <input
                      id={`slide${num}`}
                      type="file"
                      onChange={(e) => handleFile(e, num)}
                      className="w-full text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    />
                  </td>
                  <td className="px-3 py-2 text-center max-w-36">
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
        <div className="">
          <label className="text-blue-800 font-semibold text-xl">Profile Details</label>
          {ids.length > 0 && 
            ids.map((id) => (
              <div key={id} className="pt-2.5">
                <label className="text-blue-600 font-semibold text-lg">Profile {id}</label>
                <ProfileData id={id} tokenUrl={tokenUrl}/>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default AboutPageContents;
