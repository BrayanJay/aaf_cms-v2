import axios from "axios";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const DashboardUpload = () => {

  const navigate = useNavigate()
  const fetchUser = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.get('http://localhost:3000/auth/uploadspage', {
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
      <div className="min-h-screen bg-white overflow-hidden relative">

        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-6 md:gap-12 p-6 max-w-screen-xl mx-auto py-28">
          <div className="flex flex-wrap gap-6 justify-center w-full bg-white p-10 rounded-3xl drop-shadow-lg ">

            {/* Card 1 - Landing Page */}
            <Link to="/landingPage">
            <div className="bg-blue-200 w-full sm:w-72 md:w-96 lg:w-72 h-44 rounded-3xl shadow-md transition-transform hover:scale-105 duration-300 ease-in-out hover:shadow-lg flex items-center justify-center p-5">
              <div className="text-center text-blue-950 text-2xl font-bold">Landing Page</div>
            </div>
            </Link>
  
            {/* Card 2 - About Page */}
            <Link to="/aboutPage">
            <div className="bg-blue-200 w-full sm:w-72 md:w-96 lg:w-72 h-44 rounded-3xl shadow-md transition-transform hover:scale-105 duration-300 ease-in-out hover:shadow-lg flex items-center justify-center p-5">
              <div className="text-center text-blue-950 text-2xl font-bold">About Page</div>
            </div>
            </Link>
  
            {/* Card 3 - Products Page */}
            <Link to="/productsPage">
            <div className="bg-blue-200 w-full sm:w-72 md:w-96 lg:w-72 h-44 rounded-3xl shadow-md transition-transform hover:scale-105 duration-300 ease-in-out hover:shadow-lg flex items-center justify-center p-5">
              <div className="text-center text-blue-950 text-2xl font-bold">Products Page</div>
            </div>
            </Link>
  
            {/* Card 4 - Investor Relations Page */}
            <Link to="/investorRelationsPage">
            <div className="bg-blue-200 w-full sm:w-72 md:w-96 lg:w-72 h-44 rounded-3xl shadow-md transition-transform hover:scale-105 duration-300 ease-in-out hover:shadow-lg flex items-center justify-center p-5">
              <div className="text-center text-blue-950 text-2xl font-bold">Investor Relations Page</div>
            </div>
            </Link>
  
            {/* Card 5 - Careers Page */}
            <Link to="/careers">
            <div className="bg-blue-200 w-full sm:w-72 md:w-96 lg:w-72 h-44 rounded-3xl shadow-md transition-transform hover:scale-105 duration-300 ease-in-out hover:shadow-lg flex items-center justify-center p-5">
              <div className="text-center text-blue-950 text-2xl font-bold">Careers Page</div>
            </div>
            </Link>
  
            {/* Card 6 - Contact Page */}
            <Link to="/contacts">
            <div className="bg-blue-200 w-full sm:w-72 md:w-96 lg:w-72 h-44 rounded-3xl shadow-md transition-transform hover:scale-105 duration-300 ease-in-out hover:shadow-lg flex items-center justify-center p-5">
              <div className="text-center text-blue-950 text-2xl font-bold">Contact Page</div>
            </div>
            </Link>

          </div>
        </div>
      </div>
    );
  };
  
  export default DashboardUpload;
  