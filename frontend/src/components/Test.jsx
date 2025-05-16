import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PropTypes from "prop-types";

const Test = ({ tokenUrl }) => {
  const [toggle, setToggle] = useState(null);
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  const fetchUser = async () => {
    try {
      const response = await axios.get(tokenUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status !== 201) {
        navigate('/login');
      }
    } catch (err) {
      console.log(err);
      navigate('/login');
    }
  };

  const fetchInitialToggleState = async () => {
    try {
      const response = await axios.get('http://localhost:3000/data/getPopup');
      setToggle(response.data.status);
    } catch (err) {
      console.error('Error fetching toggle state:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put('http://localhost:3000/data/updatePopup', 
        { status: toggle },
        { headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" } }
    );
      alert('Toggle state updated successfully');
    } catch (err) {
      console.error('Error updating toggle state:', err);
    }
  };

  useEffect(() => {
    fetchUser();
    fetchInitialToggleState();
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-4 bg-white p-4 rounded shadow-md w-fit"
    >
      <label className="flex items-center cursor-pointer">
        <span className="mr-2 text-gray-700">Enable Popup</span>
        <div className="relative">
          <input
            type="checkbox"
            checked={toggle}
            onChange={() => setToggle(!toggle)}
            className="sr-only"
          />
          <div className={`block w-14 h-8 rounded-full ${toggle ? 'bg-green-500' : 'bg-gray-300'}`}></div>
          <div
            className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
              toggle ? 'transform translate-x-6' : ''
            }`}
          ></div>
        </div>
      </label>
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
};


Test.propTypes = {
  tokenUrl: PropTypes.string.isRequired,
};

export default Test;
