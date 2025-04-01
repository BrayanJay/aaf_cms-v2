import axios from "axios";
import { Trash2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";

//icons
import { BiChevronDown } from "react-icons/bi";
import { FaBuildingColumns, FaChartArea, FaLocationDot } from "react-icons/fa6";
import { MdDriveFileRenameOutline } from "react-icons/md";
import UpdateBranchPopup from "../components/UpdateBranchPopup";
import { useNavigate } from "react-router-dom";

const BranchNetwork = () => {
  const [branches, setBranches] = useState([]);
  const [filteredBranches, setFilteredBranches] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [branchDetails, setBranchDetails] = useState(null);
  const [selectedLang, setSelectedLang] = useState("en");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isRemovePopupOpen, setIsRemovePopupOpen] = useState(false); 

  const tokenUrl = "http://localhost:3000/auth/branchdetails"

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
    const fetchBranches = async () => {
      try {
        const response = await axios.get("http://localhost:3000/data/branches/getBranchDetails");
        setBranches(response.data);
        setFilteredBranches(response.data);
      } catch (error) {
        console.error("Error fetching branches:", error);
      }
    };

    fetchBranches();
    fetchUser();
  }, []);

  // Handle search input
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    setFilteredBranches(
      branches.filter((branch) =>
        branch.branch_name.toLowerCase().startsWith(value.toLowerCase())
      )
    );
  };

  // Select a branch from the dropdown
  const handleSelectBranch = async (branch) => {
    setSelectedBranch(branch.branch_name);
    setSearch(branch.branch_name);
    setDropdownOpen(false);

    // Fetch branch details using the selected branch ID
    try {
      const response = await axios.get(`http://localhost:3000/data/branches/getBranchById/${branch.branch_id}/${selectedLang}`);
      setBranchDetails(response.data[0]);
    } catch (error) {
      console.error("Error fetching branch details:", error);
      setBranchDetails(null);
    }
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (e) => {
    setSelectedLang(e.target.value);
  };

  const handleUpdateClick = () => { // Store the selected row's data
    setIsPopupOpen(true);  // Show the popup
  };

  const handleRemoveClick = (item) => {
    setSelectedBranch(item);
    setIsRemovePopupOpen(true);
  };

  return (
    <div className="py-20 px-40">
      <h1 className="text-xl font-bold text-blue-900 mb-5">Branch Network</h1>
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-2 pr-20">
      <div className="relative w-full max-w-md" ref={dropdownRef}>
        <div
          className="w-full px-3 py-2 border rounded-md bg-white cursor-pointer justify-between flex items-center"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {selectedBranch.branch_name || "Select Branch"} <BiChevronDown className="float-right" />
        </div>

        {dropdownOpen && (
          <div className="absolute w-full border rounded-md bg-white shadow-lg mt-1 z-10">
            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Search Branch"
              className="w-full px-3 py-2 border-b focus:outline-none"
            />
            <ul className="max-h-40 overflow-y-auto">
              {filteredBranches.length > 0 ? (
                filteredBranches.map((branch) => (
                  <li
                    key={branch.id}
                    onClick={() => handleSelectBranch(branch)}
                    className="px-3 py-2 hover:bg-blue-200 cursor-pointer"
                  >
                    {branch.branch_name}
                  </li>
                ))
              ) : (
                <li className="px-3 py-2 text-gray-500">No branches found</li>
              )}
            </ul>
          </div>
        )}
      </div>

      <div className="relative w-full max-w-md">
        <select
          className="w-full px-3 py-2 border rounded-md bg-white cursor-pointer justify-between flex items-center"
          onChange={handleLanguageChange}
          value={selectedLang} // Ensure the selected option is highlighted
        >
          <option value="">Select Language</option>
          <option value="en">English</option>
          <option value="si">Sinhala</option>
          <option value="ta">Tamil</option>
        </select>
      </div>

      </div>
      <div>

      </div>
        {/* Display Selected Branch Details */}
      {branchDetails && (
        <div className="my-10 w-full max-w-screen-lg p-4 bg-blue-400 border-blue-600 border hover:shadow-lg transition-all ease-in-out duration-300 rounded-lg shadow-sm sm:p-6">

          <h2 className="text-lg font-bold text-blue-100 underline">Branch Details</h2>

          <div className="flex flex-row gap-2 text-base text-white items-center">
            <FaBuildingColumns/>
            <p className="font-semibold">Branch ID : </p>
            <span>{branchDetails.branch_id}</span>
          </div>
          <div className="flex flex-row gap-2 text-base text-white items-center">
            <MdDriveFileRenameOutline />
            <p className="font-semibold">Name : </p>
            <span>{branchDetails.branch_name}</span>
          </div>
          <div className="flex flex-row gap-2 text-base text-white items-center">
            <FaChartArea />
            <p className="font-semibold">Region : </p>
            <span>{branchDetails.region ? branchDetails.region.charAt(0).toUpperCase() + branchDetails.region.slice(1) : ""}</span>
          </div>
          <div className="flex flex-row gap-2 text-base text-white items-center">
            <FaLocationDot />
            <p className="font-semibold">Address : </p>
            <span>{branchDetails.address}</span>
          </div>
          <div>
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-1.5 px-2 rounded-md transition duration-200" 
              onClick={() => handleUpdateClick(branchDetails)}>
              Edit
            </button>
            <button className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-1.5 px-2 rounded-md transition duration-200"
              onClick={() => handleRemoveClick(branchDetails)}>
              <Trash2/>
            </button>
          </div>


        </div>
      )}

            {/* Render Popup only when isPopupOpen is true */}
            {isPopupOpen && selectedBranch && (
              <UpdateBranchPopup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                initialLang={selectedLang}
                initialBranchName={selectedBranch.branch_name}
                initialRegion={selectedBranch.region}
                initialAddress={selectedBranch.address}
                id={selectedBranch.branch_id}
                tokenUrl={tokenUrl}
              />
            )}

    </div>
  );
};

export default BranchNetwork;
