import axios from "axios";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function ProductsPageContents() {

  const navigate = useNavigate()
  const fetchUser = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.get('http://localhost:3000/auth/productspagecontents', {
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
                <Link to="/goldLoanPage">
                <div className="bg-amber-200 w-full sm:w-72 md:w-96 lg:w-72 h-44 rounded-3xl shadow-md transition-transform hover:scale-105 duration-300 ease-in-out hover:shadow-lg flex items-center justify-center p-5">
                  <div className="text-center text-amber-950 text-2xl font-bold">Gold Loan Page</div>
                </div>
                </Link>
      
                {/* Card 2 - About Page */}
                <Link to="/fixedDepositsPage">
                <div className="bg-amber-200 w-full sm:w-72 md:w-96 lg:w-72 h-44 rounded-3xl shadow-md transition-transform hover:scale-105 duration-300 ease-in-out hover:shadow-lg flex items-center justify-center p-5">
                  <div className="text-center text-amber-950 text-2xl font-bold">Fixed Deposits Page</div>
                </div>
                </Link>
      
                {/* Card 3 - Products Page */}
                <Link to="/leasingPage">
                <div className="bg-amber-200 w-full sm:w-72 md:w-96 lg:w-72 h-44 rounded-3xl shadow-md transition-transform hover:scale-105 duration-300 ease-in-out hover:shadow-lg flex items-center justify-center p-5">
                  <div className="text-center text-amber-950 text-2xl font-bold">Leasing Page</div>
                </div>
                </Link>
      
                {/* Card 4 - Investor Relations Page */}
                <Link to="/mortgagePage">
                <div className="bg-amber-200 w-full sm:w-72 md:w-96 lg:w-72 h-44 rounded-3xl shadow-md transition-transform hover:scale-105 duration-300 ease-in-out hover:shadow-lg flex items-center justify-center p-5">
                  <div className="text-center text-amber-950 text-2xl font-bold">Mortgage Page</div>
                </div>
                </Link>
      
                {/* Card 5 - Careers Page */}
                <Link to="/forexPage">
                <div className="bg-amber-200 w-full sm:w-72 md:w-96 lg:w-72 h-44 rounded-3xl shadow-md transition-transform hover:scale-105 duration-300 ease-in-out hover:shadow-lg flex items-center justify-center p-5">
                  <div className="text-center text-amber-950 text-2xl font-bold">Forex Page</div>
                </div>
                </Link>
      
                {/* Card 6 - Contact Page */}
                <Link to="/luckewalletPage">
                <div className="bg-amber-200 w-full sm:w-72 md:w-96 lg:w-72 h-44 rounded-3xl shadow-md transition-transform hover:scale-105 duration-300 ease-in-out hover:shadow-lg flex items-center justify-center p-5">
                  <div className="text-center text-amber-950 text-2xl font-bold">Luckewallet Page</div>
                </div>
                </Link>
    
              </div>
            </div>
          </div>
  );
}

export default ProductsPageContents;
