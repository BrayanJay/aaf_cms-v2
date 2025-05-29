import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductDescription from "../../../components/ProductDescription";

function LuckewalletPageContents() {
    
  const [files, setFiles] = useState({});
  const table_name = "luckewallet";

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
    formData.append("filename", `luckewalletPgBanner.webp`);
    formData.append("file_directory", "media/products"); // Custom File Path
  
    try {
      const response = await axios.post("http://localhost:3000/data/upload", formData, {
        withCredentials: true,
        headers: {
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
      const response = await axios.get('http://localhost:3000/auth/luckewalletpagecontents', {
        withCredentials: true,
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
    <div className="flex justify-center container py-20">
      <div className="w-full m-10 px-20">
        <form>
          <label className="text-blue-800 font-semibold text-xl">Carousel</label>
          <table className="w-full table-auto border">
            <thead className='bg-blue-200'>
              <tr>
                <th className="px-3 py-2 text-left min-w-24">Slide</th>
                <th className="px-3 py-2 text-left">File</th>
                <th className="px-3 py-2 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {[1].map((num) => (
                <tr key={num} className="odd:bg-blue-50 even:bg-blue-100 transition duration-200">
                  <td className="py-2 px-3">Slide 0{num}</td>
                  <td className="py-2 px-3">
                    <input
                      id={`slide${num}`}
                      type="file"
                      onChange={(e) => handleFile(e, num)}
                      className="w-full text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    />
                  </td>
                  <td className="px-3 py-2 text-center min-w-36">
                    <button
                      type="button"
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded mr-2"
                      onClick={() => handleUpload(num)}
                    >
                      Upload
                    </button>
                    <button
                      type="button"
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
        
        <div>
          <ProductDescription table_name={table_name} tokenUrl="http://localhost:3000/auth/luckewalletpagecontents"/>
        </div>
        
      </div>
    </div>
  );
}

export default LuckewalletPageContents;
