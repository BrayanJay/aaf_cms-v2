import axios from "axios";
import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import { CiSearch, CiMap } from "react-icons/ci";
import { FaBuildingColumns, FaLocationDot, FaChartArea } from "react-icons/fa6";
import { IoCall, IoMail } from "react-icons/io5";
import { MdDriveFileRenameOutline } from "react-icons/md";
import UpdateBranchPopup from "../components/UpdateBranchPopup";

const BranchNetwork = () => {
  const [branches, setBranches] = useState([]);
  const [filteredBranches, setFilteredBranches] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedBranchId, setSelectedBranchId] = useState(null); // Store the ID to maintain selection across language changes
  const [selectedLang, setSelectedLang] = useState("en");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const tokenUrl = `${import.meta.env.VITE_API_BASE_URL}/auth/branchdetails`;
  const navigate = useNavigate();

  // Fetch branches data
  const fetchBranches = useCallback(async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/branch/branches/lang/${selectedLang}`,
        { withCredentials: true }
      );
      setBranches(response.data);
      setFilteredBranches(response.data);
      
      // If we have a selected branch ID, find and update the selected branch in the new language
      if (selectedBranchId && response.data.length > 0) {
        const translatedBranch = response.data.find(branch => branch.id === selectedBranchId);
        if (translatedBranch) {
          setSelectedBranch(translatedBranch);
          setSearch(translatedBranch.branch_name);
        }
      }
    } catch (error) {
      console.error("Error fetching branches:", error);
      if (error.response?.status === 401) {
        navigate("/login");
      }
      throw error;
    }
  }, [selectedLang, selectedBranchId, navigate]);



  useEffect(() => {
    const initializeData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Fetch user authentication
        await axios.get(tokenUrl, {
          withCredentials: true,
        });

        // Fetch branches data
        await fetchBranches();
      } catch (err) {
        if (err.response?.status === 401) {
          navigate("/login");
        } else {
          setError("Failed to load branch data. Please try again.");
        }
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    initializeData();
  }, [navigate, tokenUrl, selectedLang, selectedBranchId, fetchBranches]);

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
  const handleSelectBranch = (branch) => {
    setSelectedBranch(branch);
    setSelectedBranchId(branch.id); // Store the ID to maintain selection across language changes
    setSearch(branch.branch_name);
    setDropdownOpen(false);
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

  const handleRemoveBranch = async () => {
    if (!selectedBranch) return;

    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${selectedBranch?.branch_name}"? This action cannot be undone.`
    );

    if (!confirmDelete) return;

    setIsDeleting(true);
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_BASE_URL}/branch/branches/delete/${selectedBranch.id}`,
        { withCredentials: true }
      );

      // Reset selected branch and details
      setSelectedBranch(null);
      setSelectedBranchId(null); // Clear the stored ID
      setSearch("");

      // Refresh the branches list
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/branch/branches/lang/${selectedLang}`,
        { withCredentials: true }
      );
      setBranches(response.data);
      setFilteredBranches(response.data);

      alert("Branch deleted successfully!");

    } catch (err) {
      console.error("Error deleting branch:", err);
      alert(err.response?.data?.message || "Failed to delete branch");
    } finally {
      setIsDeleting(false);
    }
  };

  // Format region name for display
  const formatRegionName = (regionId) => {
    return regionId.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  // Get branch image URL
  const getBranchImageUrl = (branchNameEn) => {
    if (!branchNameEn) return null;
    // Convert to lowercase and replace spaces with empty string, keep only alphanumeric characters
    const imageName = branchNameEn
      .toLowerCase()
      .replace(/\s+/g, '') // Remove all spaces
      .replace(/[^a-z0-9]/g, ''); // Remove all non-alphanumeric characters
    
    return `${import.meta.env.VITE_API_BASE_URL}/media/branches/${imageName}.webp`;
  };
  

  return (
    <div className="p-4 md:p-6 pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Loading State */}
        {loading && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition-colors duration-300">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 dark:border-blue-400 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Loading branch network data...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-500 rounded-lg p-4 mb-6 transition-colors duration-300">
            <div className="flex items-center">
              <div className="text-red-600 dark:text-red-400 mr-3">⚠️</div>
              <div>
                <p className="text-red-800 dark:text-red-200 font-medium transition-colors duration-300">Error</p>
                <p className="text-red-700 dark:text-red-300 text-sm transition-colors duration-300">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Page Header with Region Statistics */}
        {!loading && !error && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 transition-colors duration-300">Branch Network Management</h1>
          

          
          {/* Branch Selection and Language Filter */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Branch Selection Dropdown */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 transition-colors duration-300">Select Branch</label>
              <div className="relative" ref={dropdownRef}>
                <div
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 cursor-pointer flex items-center justify-between hover:border-blue-500 dark:hover:border-blue-400 focus-within:border-blue-500 dark:focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-200 dark:focus-within:ring-blue-500/20 transition-colors duration-300"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <span className="text-gray-900 dark:text-white transition-colors duration-300">{selectedBranch?.branch_name || "Select Branch"}</span>
                  <BiChevronDown className={`transform transition-transform ${dropdownOpen ? 'rotate-180' : ''} text-gray-500 dark:text-gray-400`} />
                </div>

                {dropdownOpen && (
                  <div className="absolute z-20 w-full mt-1 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md shadow-lg transition-colors duration-300">
                    <div className="flex items-center border-b border-gray-200 dark:border-gray-600 px-3 py-2">
                      <CiSearch className="text-gray-400 dark:text-gray-500 mr-2" />
                      <input
                        type="text"
                        value={search}
                        onChange={handleSearch}
                        placeholder="Search branches..."
                        className="w-full py-1 text-sm focus:outline-none bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      />
                    </div>
                    <ul className="max-h-48 overflow-y-auto">
                      {filteredBranches.length > 0 ? (
                        filteredBranches.map((branch) => (
                          <li
                            key={branch.id}
                            onClick={() => handleSelectBranch(branch)}
                            className="px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-300 cursor-pointer transition-colors duration-300 border-b border-gray-50 dark:border-gray-600 last:border-b-0"
                          >
                            <div className="flex justify-between items-center">
                              <span className="font-medium">{branch.branch_name}</span>
                              <span className="text-xs text-gray-500 dark:text-gray-400">{formatRegionName(branch.region_id)}</span>
                            </div>
                          </li>
                        ))
                      ) : (
                        <li className="px-4 py-3 text-gray-500 dark:text-gray-400">No branches found</li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Language Selection */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 transition-colors duration-300">Display Language</label>
              <select
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-500/20 transition-colors duration-300 text-gray-900 dark:text-white"
                onChange={(e) => setSelectedLang(e.target.value)}
                value={selectedLang}
              >
                <option value="en">English</option>
                <option value="si">Sinhala</option>
                <option value="ta">Tamil</option>
              </select>
            </div>
          </div>
        </div>
        )}

        {/* Display Selected Branch Details */}
        {!loading && !error && selectedBranch && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-6">
              <FaBuildingColumns className="text-blue-600 dark:text-blue-400 text-xl" />
              <h2 className="text-xl font-bold text-gray-800 dark:text-white transition-colors duration-300">Branch Details</h2>
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium transition-colors duration-300">
                {formatRegionName(selectedBranch.region_id)}
              </span>
            </div>

            {/* Branch Image */}
            {selectedBranch.branch_name_en && (
              <div className="mb-6">
                <div className="relative max-w-80 overflow-hidden bg-gray-100">
                  <img
                    src={getBranchImageUrl(selectedBranch.branch_name_en)}
                    alt={`${selectedBranch.branch_name} Branch`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="absolute inset-0 bg-gray-200 items-center justify-center"
                    style={{ display: 'none' }}
                  >
                    <div className="text-center text-gray-500">
                      <FaBuildingColumns className="mx-auto text-4xl mb-2" />
                      <p className="text-sm">Branch Image Not Available</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Branch Name */}
              <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg transition-colors duration-300">
                <MdDriveFileRenameOutline className="text-blue-600 dark:text-blue-400 text-lg mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300 transition-colors duration-300">Branch Name</p>
                  <p className="text-gray-900 dark:text-white font-semibold transition-colors duration-300">{selectedBranch.branch_name}</p>
                </div>
              </div>

              {/* Region */}
              <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg transition-colors duration-300">
                <FaChartArea className="text-blue-600 dark:text-blue-400 text-lg mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300 transition-colors duration-300">Region</p>
                  <p className="text-gray-900 dark:text-white font-semibold transition-colors duration-300">{selectedBranch.region_name}</p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg transition-colors duration-300">
                <IoCall className="text-blue-600 dark:text-blue-400 text-lg mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300 transition-colors duration-300">Contact</p>
                  <p className="text-gray-900 dark:text-white font-semibold transition-colors duration-300">{selectedBranch.phone}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg transition-colors duration-300">
                <IoMail className="text-blue-600 dark:text-blue-400 text-lg mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300 transition-colors duration-300">Email</p>
                  <p className="text-gray-900 dark:text-white font-semibold transition-colors duration-300">{selectedBranch.email}</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg md:col-span-2 transition-colors duration-300">
                <FaLocationDot className="text-blue-600 dark:text-blue-400 text-lg mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300 transition-colors duration-300">Address</p>
                  <p className="text-gray-900 dark:text-white font-semibold transition-colors duration-300">{selectedBranch.branch_address}</p>
                </div>
              </div>

              {/* Coordinates */}
              <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg transition-colors duration-300">
                <CiMap className="text-blue-600 dark:text-blue-400 text-lg mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300 transition-colors duration-300">Coordinates</p>
                  <p className="text-gray-900 dark:text-white font-semibold transition-colors duration-300">
                    {selectedBranch.coordinates_latitude}, {selectedBranch.coordinates_longitude}
                  </p>
                </div>
              </div>
            </div>

            {/* Last Updated Info */}
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
              <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                Last updated: {new Date(selectedBranch.last_updated_time).toLocaleString()} by {selectedBranch.last_updated_by}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
              <button
                className="bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                onClick={() => setIsPopupOpen(true)}
              >
                Edit Branch
              </button>
              <button
                className="border-2 border-red-500 dark:border-red-400 text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:border-red-600 dark:hover:border-red-300 hover:text-red-600 dark:hover:text-red-300 font-medium py-2 px-4 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleRemoveBranch}
                disabled={isDeleting}
              >
                {isDeleting ? "Removing..." : "Remove Branch"}
              </button>
            </div>
          </div>
        )}

        {/* Add New Branch Section */}
        {!loading && !error && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <FaBuildingColumns className="text-blue-600 dark:text-blue-400 text-xl" />
              <div>
                <h2 className="text-xl font-bold text-gray-800 dark:text-white transition-colors duration-300">Add New Branch</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300">Create a new branch with complete details and image</p>
              </div>
            </div>
            
            <button
              onClick={() => navigate('/branches/add')}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 hover:from-blue-700 hover:to-indigo-700 dark:hover:from-blue-600 dark:hover:to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <FaBuildingColumns className="w-4 h-4" />
              Add New Branch
            </button>
          </div>
          
          <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700 transition-colors duration-300">
            <div className="flex items-start gap-3">
              <div className="bg-blue-600 dark:bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">i</div>
              <div className="text-sm text-blue-800 dark:text-blue-200 transition-colors duration-300">
                <p className="font-medium mb-1">Multi-step Process:</p>
                <ul className="list-disc list-inside space-y-1 text-blue-700 dark:text-blue-300 transition-colors duration-300">
                  <li>Enter branch details in all languages (English, Sinhala, Tamil)</li>
                  <li>Add location coordinates and contact information</li>
                  <li>Upload branch picture</li>
                  <li>Review and confirm</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        )}

        {/* Update Branch Popup */}
        {!loading && !error && isPopupOpen && selectedBranch && (
          <UpdateBranchPopup
            isOpen={isPopupOpen}
            onClose={() => setIsPopupOpen(false)}
            branch={selectedBranch}
            tokenUrl={tokenUrl}
            onUpdate={() => {
              // Refresh branches after update
              const fetchBranches = async () => {
                try {
                  const response = await axios.get(
                    `${import.meta.env.VITE_API_BASE_URL}/branch/branches/lang/${selectedLang}`,
                    { withCredentials: true }
                  );
                  setBranches(response.data);
                  setFilteredBranches(response.data);
                  
                  // Update selected branch if it's still in the list
                  const updatedBranch = response.data.find(b => b.id === selectedBranch.id);
                  if (updatedBranch) {
                    setSelectedBranch(updatedBranch);
                    setSelectedBranchId(updatedBranch.id); // Ensure ID is maintained
                    setSearch(updatedBranch.branch_name);
                  }
                } catch (error) {
                  console.error("Error fetching updated branches:", error);
                  if (error.response?.status === 401) {
                    navigate("/login");
                  }
                }
              };
              fetchBranches();
            }}
          />
        )}
      </div>
    </div>
  );
};

export default BranchNetwork;