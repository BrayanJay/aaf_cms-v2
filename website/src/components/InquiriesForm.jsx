import { useState } from 'react';
import { useTranslation } from "react-i18next";
import Loader from './Loader'; // Import the Loader component
import PropTypes from 'prop-types';
import CityDropdown from './CityDropdown';

const isValidMobileNumber = (mobileNumber) => {
  return String(mobileNumber).match(/^\d{10}$/);
};

// Form validation function
const validateData = ({ customerName, mobile, product }) => {
  const errorObj = {};
  if (!customerName) errorObj.customerName = "Please provide your name";
  if (!mobile) {
    errorObj.mobile = "Please provide your mobile number";
  } else if (!isValidMobileNumber(mobile)){
    errorObj.mobile = "Please provide a valid mobile number with 10 digits."
  }
  if (!product) errorObj.product = "Please select a product";

  return errorObj;
};

const InquiriesForm = () => {
  const { t } = useTranslation();
  const inquiryForm = t("inquiryForm", { returnObjects: true });

  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    mobile: '',
    product: '',
    nic: '',
    city: '',
    amount: '',  // Keep it as a string initially for controlled input
    remarks: '',
    language: '',
    leadSource: 23, 
  });

  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  // Popup component
  const Popup = ({ message, onClose }) => {
    return (
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-40">
        <div className="bg-white p-6 rounded-lg text-center">
          <p>{message}</p>
          <button aria-label='Close Button' 
          onClick={onClose} 
          className="mt-4 bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-md">
            {inquiryForm.close_btn}
          </button>
        </div>
      </div>
    );
  };

Popup.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const token = import.meta.env.VITE_AUTH_TOKEN_LIVE;

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const errorObj = validateData(formData);
    setFormErrors(errorObj);
    console.log("Form errors set:", errorObj);
  
    if (Object.keys(errorObj).length > 0) {
      return; // Stop submission if there are validation errors
    }
  
    setIsLoading(true); // Show loader
  
    // Prepare form data with default values for optional fields
    const updatedFormData = {
      ...formData,
      nic: null, // Hardcoded as empty
      city: formData.city, // Hardcoded as empty
      email: formData.email || null,
      remarks: formData.remarks || null, // User input or empty string
      amount: formData.amount ? parseFloat(formData.amount) : 0, // User input or 0
      language: formData.language || 1, // User selection or default to 1
      leadSource: 23, // Default value
    };
  
  
    try {
      const response = await fetch(
        "https://asiaassetfinance.net/aafleadwave/api/v1/application/api.php/leadgenerate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updatedFormData),
        }
      );

      if (!response.ok) {
        throw new Error(`Server error: ${response.status} ${response.statusText}`);
      }
      const result = await response.json();
      console.log("✅ API Response:", result);
  
      setPopupMessage(inquiryForm.response_pass); // Success message
      setShowPopup(true);
  
      // Reset form after successful submission
      handleClear();
  
    } catch (error) {
      console.error("❌ API Error:", error);
      setPopupMessage(inquiryForm.response_fail || error.message); // Failure message
      setShowPopup(true);
    } finally {
      setIsLoading(false); // Hide loader
    }
  };

  const handleClear = () => {
    setFormData({
      customerName: '',
      email: '',
      mobile: '',
      product: '',
      nic: '',
      city: '',
      amount: '',
      remarks: '',
      language: '',
      leadSource: 23,
    });
    setFormErrors({});
  };

  const inputClasses = 
    `block w-full sm:text-sm px-3 py-2 bg-white border border-slate-300 shadow-sm rounded-md
    placeholder-slate-400
    focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none`;

  return (
    <div className='justify-center relative bg-bgdesign bg-cover text-roboto px-10 py-10 lg:px-40'>
      <div className='absolute inset-0 bg-white/80 bg-cover'></div>
      <div className='relative z-10' data-aos="fade-up">
        <h1 className='border-l-4 border-amber-400 pl-5 pr-5 text-xl md:text-2xl lg:text-4xl font-semibold text-blue-700'> {inquiryForm.title} </h1>
      </div>
      <div className="z-10 relative max-w-lg p-4 md:max-w-4xl mx-auto" data-aos="zoom-in">
        
        <form className="md:flex md:gap-4">
          <div className="md:w-1/2">
            
            <div className="mb-4">
              <label className="after:content-['*'] after:ml-0.5 after:text-red block mb-1 text-sm font-medium text-slate-700">
                {inquiryForm.label1}
              </label>
              <input
                type="text"
                name="customerName"
                placeholder={inquiryForm.field1}
                value={formData.customerName}
                onChange={handleChange}
                className={inputClasses}
                required
              />
              {formErrors.customerName && <p className="text-red text-sm">{formErrors.customerName}</p>}
            </div>

            <div className="mb-4">
              <label className="after:content-['*'] after:ml-0.5 after:text-red block mb-1 text-sm font-medium text-slate-700">
                {inquiryForm.label2}
              </label>
              <input
                type="number"
                name="mobile"
                placeholder={inquiryForm.field2}
                value={formData.mobile}
                onChange={handleChange}
                className={inputClasses + 'appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'}
                onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10)} 
              />
              {formErrors.mobile && <p className="text-red text-sm">{formErrors.mobile}</p>}
            </div>

            <div className="mb-4">
              <label className="after:ml-0.5 after:text-red block mb-1 text-sm font-medium text-slate-700">
                {inquiryForm.label3}
              </label>
              <input
                type="email"
                name="email"
                placeholder={inquiryForm.field3}
                value={formData.email}
                onChange={handleChange}
                className={inputClasses}
              />
              {formErrors.email && <p className="text-red text-sm">{formErrors.email}</p>}
            </div>

            <div className="mb-4">
              <label className="after:ml-0.5 after:text-red block mb-1 text-sm font-medium text-slate-700">
                {inquiryForm.label10}
              </label>
              <input
                type="number"
                name="amount"
                placeholder={inquiryForm.field10}
                value={formData.amount}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>

          <div className='mb-4'>
            <label className="after:content-['*'] after:ml-0.5 after:text-red block mb-1 text-sm font-medium text-slate-700">{inquiryForm.label9}</label>
            <CityDropdown value={formData.city} onChange={handleChange} token={token}/>
            {formErrors.city && <p className="text-red text-sm">{formErrors.city}</p>}
          </div>

          </div>

          <div className="md:w-1/2">

          <div className='mb-4'>
            <label className="after:content-['*'] after:ml-0.5 after:text-red block mb-1 text-sm font-medium text-slate-700">Select Product</label>
            <select required name="product" className={inputClasses} value={formData.product} onChange={handleChange}>
              <option value="">Select Product</option>
              <option value="1">Fixed Deposit</option>
              <option value="2">Gold Loan</option>
              <option value="3">Mortgage</option>
              <option value="4">Leasing</option>
              <option value="5">Luckewallet</option>
            </select>
            {formErrors.product && <p className="text-red text-sm">{formErrors.product}</p>}
          </div>

          <div className="mb-4">
            <label className="after:ml-0.5 after:text-red block mb-1 text-sm font-medium text-slate-700">{inquiryForm.label12}</label>
            <select name="language" className={inputClasses} value={formData.language} onChange={handleChange}>
              <option value={inquiryForm.field12}></option>
              <option value="1">English</option>
              <option value="2">සිංහල</option>
              <option value="3">தமிழ்</option>
            </select>
          </div>
          
          <div className="mb-4">
              <label htmlFor="remarks" className="after:ml-0.5 after:text-red block mb-1 text-sm font-medium text-slate-700">
                {inquiryForm.label4}
              </label>
              <textarea name="remarks" id="remarks" className={inputClasses} placeholder={inquiryForm.field4} rows="4" onChange={handleChange} 
                style={{ height: 'calc(3 * 4rem)' }} // Adjust the height here
              />
          </div>
          
          </div>

        </form>

        <div className="text-right mt-4 flex justify-end gap-5">
          <button aria-label='Clear Button' onClick={handleClear} type="button" className="bg-gray-500 hover:bg-gray-600 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white">
            {inquiryForm.button1}
          </button>
          <button 
          type='submit' 
          aria-label='Submit Form'
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white">
            {inquiryForm.button2}
          </button>
        </div>
      </div>

      {isLoading && <Loader duration={2000}/>}
      {showPopup && <Popup message={popupMessage} onClose={() => setShowPopup(false)} />}
    </div>
  );
};


export default InquiriesForm;
