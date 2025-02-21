import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductDescription = ({table_name}) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get(`http://localhost:3000/data/read/${table_name}`);
            setData(Array.isArray(res.data) ? res.data : []);
          } catch (err) {
            console.log("Error fetching data:", err);
          }
        };
      
        fetchData();
      }, []);

  return (
        <div>
            <label className="text-blue-800 font-semibold text-xl">Text Contents</label>
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
                            <tr key={index}>
                              <th className="px-5 text-center">Description</th>
                                <td className="px-5 text-center font-semibold">{product.lang}</td>
                                <td className="py-2 px-2">{product.description}</td>
                                <td className="">
                                    <Link to={`/edit/${product.id}`} className='bg-green-600 hover:bg-green-700 text-white font-semibold py-1.5 px-2 mx-2 rounded-md transition duration-200'>Update</Link>
                                    <Link to={`/edit/${product.id}`} className='bg-rose-600 hover:bg-rose-700 text-white font-semibold py-1.5 px-2 rounded-md transition duration-200'>Remove</Link>
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
        </div>
  )
}
ProductDescription.propTypes = {
  table_name: PropTypes.string.isRequired,
};

export default ProductDescription