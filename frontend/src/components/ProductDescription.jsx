import axios from 'axios';
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import UpdatePopup from './UpdatePopup';
import RemovePopup from './RemovePopup';

const ProductDescription = ({table_name, tokenUrl}) => {

    const [data, setData] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isRemovePopupOpen, setIsRemovePopupOpen] = useState(false); 
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get(`http://localhost:3000/product/read/${table_name}`);
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
            <table className="w-full table-auto border">
                    <thead className='bg-blue-200'>
                        <tr>
                            <th className="px-3 py-2 text-left min-w-24">Content</th>
                            <th className="px-3 py-2 text-left">Language</th>
                            <th className="px-3 py-2 text-left">Current Value</th>
                            <th className="px-3 py-2 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? (
                          data.map( (product, index) => (
                            <tr className=' odd:bg-blue-50 even:bg-blue-100' key={index}>
                              <th className="py-2 px-3">Description</th>
                                <td className="py-2 px-3">{product.lang}</td>
                                <td className="py-2 px-3 max-w-96">{product.description}</td>
                                <td className="px-3 py-2 text-center min-w-36">
                                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded mr-2" 
                                    onClick={() => handleUpdateClick(product)}>
                                    Update
                                  </button>
                                  <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
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
          table_name={table_name}// Set dynamically if needed
          tokenUrl={tokenUrl}
          updateData={(updatedItem) => {
            setData((prevData) =>
              prevData.map((item) =>
                item.lang === updatedItem.lang ? { ...item, description: updatedItem.description } : item
              )
            );
          }}
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
  tokenUrl: PropTypes.string.isRequired,
};

export default ProductDescription