import axios from 'axios';
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import UpdateProfilePopup from './UpdateProfilePopup';
import { Trash2 } from 'lucide-react';
import RemoveProfilePopup from './RemoveProfilePopup';
import ProfilePictureUpload from './ProfilePictureUpload';

const ProfileData = ({id, tokenUrl}) => {

    const [data, setData] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isRemovePopupOpen, setIsRemovePopupOpen] = useState(false); 
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get(`http://localhost:3000/data/read/profile/${id}`); //http://localhost/aaf-cms-backend/api/profiles.php?id=1
            const updatedData = res.data.map(profile => ({
              ...profile,
              description: JSON.parse(profile.description || "[]"), // ✅ Parse JSON description
            }));
            setData(Array.isArray(updatedData) ? updatedData : []);
          } catch (err) {
            console.log("Error fetching data:", err.message);
          }
        };
      
        fetchData();
      }, [id]);

      

  const handleUpdateClick = (item) => {
    setSelectedItem(item); // Store the selected row's data
    setIsPopupOpen(true);  // Show the popup
  };

  const handleRemoveClick = (item) => {
    setSelectedItem(item);
    setIsRemovePopupOpen(true);
  };

  return (
        <div>
            <ProfilePictureUpload tokenUrl={tokenUrl} id={id}/>
          <label className="text-blue-600 font-normal text-base">Profile Details</label>

            <table className="table mt-2">
                    <thead>
                        <tr className="bg-blue-400 text-white">
                            <th className="rounded-tl-lg py-2 px-2">Profile ID</th>
                            <th className="border-x-2 border-blue-300 px-2">Name</th>
                            <th className="border-x-2 border-blue-300 px-2">Designation</th>
                            <th className="border-x-2 border-blue-300 px-2">Description</th>
                            <th className="rounded-tr-lg px-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? (
                          data.map( (profile, index) => (
                            <tr className='h-full odd:bg-blue-50 even:bg-blue-100 col-span-6' key={index}>
                              <th className="px-5 text-center">{profile.profile_id}</th>
                                <td className="py-2 px-2">{profile.profile_name}</td>
                                <td className="py-2 px-2">{profile.designation}</td>
                                 {/* ✅ Display JSON array properly */}
                                <td className="py-2 px-2">
                                  <div className='flex flex-col gap-y-5'>
                                  {profile.description.map((desc, i) => (
                                    <div key={i} className="flex items-center">
                                      <span>{desc}</span>
                                    </div>
                                  ))}
                                  </div>
                                  
                                </td>
                                <td className="flex items-center justify-center space-x-2 py-2 h-full px-2">
                                  <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-1.5 px-2 rounded-md transition duration-200" 
                                    onClick={() => handleUpdateClick(profile)}>
                                    Edit
                                  </button>
                                  <button className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-1.5 px-2 rounded-md transition duration-200"
                                    onClick={() => handleRemoveClick(profile)}>
                                    <Trash2/>
                                  </button>
                                </td>
                            </tr>
                            
                            ))
                          ) : (
                            <tr>
                                    <td colSpan="3" className="text-center border border-gray-300 px-4 py-2 text-gray-500">
                                      No data available
                                    </td>
                                  </tr>
                          )}
                    </tbody>
            </table>

            {/* Render Popup only when isPopupOpen is true */}
      {isPopupOpen && selectedItem && (
        <UpdateProfilePopup
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          initialLang={selectedItem.lang}
          initialProfile_name={selectedItem.profile_name}
          initialDesignation={selectedItem.designation}
          initialDescription={selectedItem.description}
          id={id}// Set dynamically if needed
          tokenUrl={tokenUrl}
        />
      )}

      {isRemovePopupOpen && selectedItem && (
        <RemoveProfilePopup
          isOpen={isRemovePopupOpen}
          onClose={() => setIsRemovePopupOpen(false)}
          initialLang={selectedItem.lang}
          id={id} // Set dynamically if needed
        />
      )}

        </div>
  )
}
ProfileData.propTypes = {
  id: PropTypes.number.isRequired,
  tokenUrl: PropTypes.string.isRequired,
};

export default ProfileData