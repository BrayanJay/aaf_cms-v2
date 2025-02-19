import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function LeasingPageContents() {
    
  const [files, setFiles] = useState({});

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
    formData.append("filename", `leasingPgBanner.webp`);
    formData.append("file_directory", "media/products"); // Custom File Path
  
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
      const response = await axios.get('http://localhost:3000/auth/leasingpagecontents', {
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
    <div className="flex justify-center container py-20">
      <div className="w-full m-10 px-20">
        <form>
          <label className="text-blue-800 font-medium">Leasing Page Carousel</label>
          <table className="w-full border border-blue-300 shadow-lg border-separate">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="border border-blue-300 px-4 py-3 text-left">Slide</th>
                <th className="border border-blue-300 px-4 py-3 text-left">File</th>
                <th className="border border-blue-300 px-4 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {[1].map((num) => (
                <tr key={num} className="odd:bg-blue-100 even:bg-blue-50 transition duration-200">
                  <td className="border border-blue-300 px-4 py-1 font-medium text-slate-800">Slide 0{num}</td>
                  <td className="border border-blue-300 px-4 py-1">
                    <input
                      id={`slide${num}`}
                      type="file"
                      onChange={(e) => handleFile(e, num)}
                      className="file:border file:border-blue-300 file:bg-blue-50 file:text-blue-700 file:px-2 file:py-1 file:rounded-md file:cursor-pointer"
                    />
                  </td>
                  <td className="flex justify-center border border-blue-300 px-4 py-1.5 space-x-2">
                    <button
                      type="button"
                      className="bg-green-800 hover:bg-green-900 text-white font-semibold px-4 py-1 rounded-md transition duration-200"
                      onClick={() => handleUpload(num)}
                    >
                      Upload
                    </button>
                    <button
                      type="button"
                      className="bg-red-700 hover:bg-red-800 text-white font-semibold px-4 py-1 rounded-md transition duration-200"
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

export default LeasingPageContents;
