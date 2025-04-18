import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Documents = () => {
    const tokenUrl = "http://localhost:3000/auth/documents";
    const navigate = useNavigate();

    // Fetch user authentication
  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(tokenUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
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

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="py-20 px-40">
      <h1 className="text-xl font-bold text-blue-900 mb-5">Documents</h1>
      </div>
  )
}

export default Documents