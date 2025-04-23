import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FileTable from "../components/FileTable";


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
      <div>
        <FileTable fileDirectory="annualReports" category="Annual Reports"/>
      </div>
      <div>
        <FileTable fileDirectory="customerInformation" category="Customer Information"/>
      </div>
      <div>
        <FileTable fileDirectory="customerProtectionFramework" category="Customer Protection Framework"/>
      </div>
      <div>
        <FileTable fileDirectory="interiemFinancials" category="Interiem Financials"/>
      </div>
      <div>
        <FileTable fileDirectory="luckewalletTutes" category="Luckewallet Tutes"/>
      </div>
      <div>
        <FileTable fileDirectory="otherRelatedDocs" category="Other Related Documents"/>
      </div>
      <div>
        <FileTable fileDirectory="promotions" category="promotions Page"/>
      </div>
    </div>
  )
}

export default Documents