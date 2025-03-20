import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductDescription from "../../../components/ProductDescription";

function FixedDepositsPageContents() {
    
//Carousel ----- API

  const [files, setFiles] = useState({});
  const table_name = "fixed_deposits";

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
    formData.append("filename", `fdPgBanner.webp`);
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
      const response = await axios.get('http://localhost:3000/auth/fixeddepositspagecontents', {
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


//FD Rates ----- API
  const [FDRateFiles, setFDRateFiles] = useState({});

  const handleFDRateFile = (e, id) => {
    setFDRateFiles({ ...FDRateFiles, [id]: e.target.files[0] });
  };

  const handleFDRateUpload = async (id) => { //can add filename and file_directory as parameters and place them in formData.append 2nd and 3rd rows
    if (!FDRateFiles[id]) {
      alert(`No file selected for FD Rates - ${id}`);
      return;
    }
  
    const formData = new FormData();
    formData.append("image", FDRateFiles[id]);
    formData.append("filename", `${id}_fd_rates.webp`);
    formData.append("file_directory", "media/uploads"); // Custom File Path
  
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

  const handleFDRateClear = (id) => {
    setFDRateFiles({ ...FDRateFiles, [id]: null });
    document.getElementById(id).value = ""; // Reset input field
  };

  return (
    <div className="flex justify-center container py-20">
      <div className="flex flex-col w-full m-10 px-20 gap-y-10">
        <form>
          <label className="text-blue-800 font-semibold text-xl">Carousel</label>
          <table className="w-full mt-2">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="px-4 py-3 text-left rounded-tl-lg">Slide</th>
                <th className="border-x-2 border-blue-300 px-4 py-3 text-left">File</th>
                <th className="px-4 py-3 text-left rounded-tr-lg">Action</th>
              </tr>
            </thead>
            <tbody>
              {[1].map((num) => (
                <tr key={num} className="odd:bg-blue-50 even:bg-blue-100 transition duration-200">
                  <td className="px-4 py-1 font-medium text-gray-800">Slide 0{num}</td>
                  <td className="px-4 py-2 border-x-2 border-white">
                    <input
                      id={`slide${num}`}
                      type="file"
                      onChange={(e) => handleFile(e, num)}
                      className="w-full text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    />
                  </td>
                  <td className="flex justify-center items-center px-4 py-2 space-x-3">
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
        <div>
        <form>
          <label className="text-blue-800 font-semibold text-xl">FD Rates</label>
          <table className="w-full mt-2">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="px-4 py-3 text-left rounded-tl-lg">Language</th>
                <th className="border-x-2 border-blue-300 px-4 py-3 text-left">File</th>
                <th className="px-4 py-3 text-left rounded-tr-lg">Action</th>
              </tr>
            </thead>
            <tbody>
              {["en", "si", "ta"].map((id) => (
                <tr key={id} className="odd:bg-blue-50 even:bg-blue-100 transition duration-200">
                  <td className="px-4 py-2 font-medium text-gray-800">{id}</td>
                  <td className="px-4 py-2 border-x-2 border-white">
                    <input
                      id={id}
                      type="file"
                      onChange={(e) => handleFDRateFile(e, id)}
                      className="w-full text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    />
                  </td>
                  <td className="flex justify-center items-center px-4 py-2 space-x-3">
                    <button
                      type="button"
                      className="bg-green-600 hover:bg-green-700 text-white font-semibold py-1.5 px-4 rounded-md transition duration-200"
                      onClick={() => handleFDRateUpload(id)}
                    >
                      Upload
                    </button>
                    <button
                      type="button"
                      className="bg-red-600 hover:bg-red-700 text-white font-semibold py-1.5 px-4 rounded-md transition duration-200"
                      onClick={() => handleFDRateClear(id)}
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
        <div>
          <ProductDescription table_name={table_name} tokenUrl="http://localhost:3000/auth/fixeddepositspagecontents"/>
        </div>
      </div>
    </div>
  );
}

export default FixedDepositsPageContents;
