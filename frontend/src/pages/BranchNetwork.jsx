import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { BiChevronDown } from "react-icons/bi";

const BranchNetwork = () => {
  const [branches, setBranches] = useState([]);
  const [filteredBranches, setFilteredBranches] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [branchDetails, setBranchDetails] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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
    setSelectedBranch(branch);
    setSearch(branch.branch_name);
    setDropdownOpen(false);

    // Fetch branch details using the selected branch ID
    try {
      const response = await axios.get(`http://localhost:3000/data/branches/getBranchById/${branch.branch_id}`);
      setBranchDetails(response.data);
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

  return (
    <div className="py-20 px-40">
      <h1 className="text-xl font-bold text-blue-900">Branch Network</h1>
      <div className="relative w-full max-w-md" ref={dropdownRef}>
        <div
          className="w-full px-3 py-2 border rounded-md bg-white cursor-pointer justify-between flex items-center"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {selectedBranch || "Select Branch"} <BiChevronDown className="float-right" />
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

      <div>

      </div>
        {/* Display Selected Branch Details */}
      {branchDetails && (
        <div className="mt-6 p-4 border rounded-md bg-gray-100">
          <h2 className="text-lg font-bold">Branch Details</h2>
          <p><strong>ID:</strong> {branchDetails.branch_id}</p>
          <p><strong>Name:</strong> {branchDetails.branch_name}</p>
          <p><strong>City:</strong> {branchDetails.city}</p>
          <p><strong>Address:</strong> {branchDetails.address}</p>
        </div>
      )}
    </div>
  );
};

export default BranchNetwork;
