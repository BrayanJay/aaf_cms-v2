import axios from 'axios';
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import UpdatePopup from './UpdatePopup';
import RemovePopup from './RemovePopup';

const ProductDescription = ({table_name}) => {

    const [data, setData] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isRemovePopupOpen, setIsRemovePopupOpen] = useState(false); 
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get(`http://localhost:3000/data/read/${table_name}`);
            setData(Array.isArray(res.data) ? res.data : []);
          } catch (err) {
            console.log("Error fetching data:", err.message);
          }
        };
      
        fetchData();
      }, [table_name]);

      

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
            <label className="text-blue-800 font-semibold text-xl">Product Description</label>
            <table className="table mt-2">
                    <thead>
                        <tr className="bg-blue-400 text-white">
                            <th className="rounded-tl-lg">Content</th>
                            <th className="border-x-2 border-blue-300 px-2">Language</th>
                            <th className="border-x-2 border-blue-300">Current Value</th>
                            <th className="rounded-tr-lg">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? (
                          data.map( (product, index) => (
                            <tr className='h-full odd:bg-blue-50 even:bg-blue-100' key={index}>
                              <th className="px-5 text-center">Description</th>
                                <td className="px-5 text-center font-semibold">{product.lang}</td>
                                <td className="py-2 px-2">{product.description}</td>
                                <td className="flex items-center justify-center space-x-2 py-2 h-full px-2">
                                  <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-1.5 px-2 rounded-md transition duration-200" 
                                    onClick={() => handleUpdateClick(product)}>
                                    Update
                                  </button>
                                  <button className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-1.5 px-2 rounded-md transition duration-200"
                                    onClick={() => handleRemoveClick(product)}>
                                    Remove
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
        <UpdatePopup
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          initialLang={selectedItem.lang}
          initialDescription={selectedItem.description}
          table_name={table_name} // Set dynamically if needed
        />
      )}

      {isRemovePopupOpen && selectedItem && (
        <RemovePopup
          isOpen={isRemovePopupOpen}
          onClose={() => setIsRemovePopupOpen(false)}
          initialLang={selectedItem.lang}
          table_name={table_name} // Set dynamically if needed
        />
      )}

        </div>
  )
}
ProductDescription.propTypes = {
  table_name: PropTypes.string.isRequired,
};

export default ProductDescription