import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import Loader from './Loader'; // Import the Loader component
import PropTypes from 'prop-types';


// Email validation: must contain @ and a . after @
const isValidEmail = (email) => {
  if (!email) return false;
  const atIndex = email.indexOf('@');
  if (atIndex < 1) return false;
  const dotIndex = email.indexOf('.', atIndex);
  return dotIndex > atIndex + 1;
};

// Mobile validation: must be numeric and 10 digits
const isValidMobileNumber = (mobileNumber) => {
  return /^\d{10}$/.test(String(mobileNumber));
};

// Validation: all fields except message are required
const validateData = ({
  customer_name,
  address,
  addressCity,
  email,
  mobile,
  employeeName,
  department,
  branch,
  title
}) => {
  const errorObj = {};
  if (!title) errorObj.title = "Please select a title";
  if (!customer_name) errorObj.customer_name = "Please provide your name";
  if (!mobile) {
    errorObj.mobile = "Please provide your mobile number";
  } else if (!isValidMobileNumber(mobile)) {
    errorObj.mobile = "Please provide a valid mobile number with 10 digits.";
  }
  if (!email) {
    errorObj.email = "Please provide your email";
  } else if (!isValidEmail(email)) {
    errorObj.email = "Please provide a valid email address";
  }
  if (!address) errorObj.address = "Please provide your address";
  if (!addressCity) errorObj.addressCity = "Please provide your nearest city";
  if (!employeeName) errorObj.employeeName = "Please provide employee's name";
  if (!department) errorObj.department = "Please provide department name";
  if (!branch) errorObj.branch = "Please provide branch name";
  return errorObj;
};



const ComplaintForm = () => {
  const { t } = useTranslation();
  const inquiryForm = t("inquiryForm", { returnObjects: true });

  const [formData, setFormData] = useState({
    title: '',
    customer_name: '',
    mobile: '',
    email: '',
    address: '',
    addressCity: '',
    employeeName: '',
    department: '',
    branch: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const [cities, setCities] = useState([]);
  const [branches, setBranches] = useState([]);
  const [departments, setDepartments] = useState([]);
  
    useEffect(() => {
      const fetchCities = async () => {
        try {
          const response = await fetch(
            "https://asiaassetfinance.net/aafleadwave/api/v1/application/api.php/getcities",
            { method: "GET", headers: { "Content-Type": "application/json", }}
          );
          if (!response.ok) throw new Error(`Failed to load cities: ${response.status}`);
          const data = await response.json();
          setCities(data);
        } catch (error) {
          console.error("Error fetching cities:", error);
        }
      };

      const fetchBranches = async () => {
        try {
          const response = await fetch(
              "https://asiaassetfinance.net/imasapi/v2/application/api.php/getBranch",
              { method: "GET", headers: { "Content-Type": "application/json", }}
          );
          if (!response.ok) throw new Error(`Failed to load branches: ${response.status}`);
          const data = await response.json();
          setBranches(data);
        } catch (error) {
          console.error("Error fetching branches:", error);
        }
      };

      const fetchDepartments = async () => {
        try {
          const response = await fetch(
              "https://asiaassetfinance.net/imasapi/v2/application/api.php/getDepartment",
              {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                  }
                }
          );
          const data = await response.json();
          setDepartments(data);
        } catch (error) {
          console.error("Error fetching departments:", error);
        }
      };
  
      fetchCities();
      fetchBranches();
      fetchDepartments();
    }, []);

  //This popup component use to display status of the submited complaint
  const Popup = ({ message, onClose }) => {
    return (
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-40">
        <div className="bg-white p-6 rounded-lg text-center">
          <p>{message}</p>
          <button aria-label='Close Button' onClick={onClose} className="mt-4 bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-md">
            {inquiryForm.close_btn}
          </button>
        </div>
      </div>
    );
  };

  // Props validation
Popup.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

  // Only allow numeric input for mobile and max 10 digits
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'mobile') {
      // Remove non-numeric and limit to 10 digits
      const numeric = value.replace(/[^0-9]/g, '').slice(0, 10);
      setFormData({ ...formData, [name]: numeric });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    const errorObj = validateData(formData);
    setFormErrors(errorObj);
    if (Object.keys(errorObj).length > 0) {
      return; // Stop submission if there are validation errors
    }

    setIsLoading(true); // Show loader

    // Convert title text to ID (1-indexed)
    const titleIndex = inquiryForm.titleOptions.indexOf(formData.title);
    if (titleIndex === -1) {
      setFormErrors(prev => ({ ...prev, title: "Please select a valid title." }));
      setIsLoading(false);
      return;
    }
    const titleId = titleIndex !== -1 ? titleIndex + 1 : 0;

    // Prepare form data according to API requirements
    const complaintData = {
      title: titleId,
      customer_name: formData.customer_name || '',
      mobile_no: formData.mobile || '',
      email: formData.email || '',
      address: formData.address || '',
      nearest_city: formData.addressCity || '',
      employee_name: formData.employeeName || '',
      department: formData.department || '',
      branch: formData.branch || '',
      message: formData.message || '',
    };

    try {
      const response = await fetch(
        "https://asiaassetfinance.net/imasapi/v2/application/api.php/complaints",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(complaintData),
        }
      );

      const result = await response.json();
      console.log("✅ API Response:", result);

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      setPopupMessage("Your complaint has been submitted successfully!"); // Success message
      setShowPopup(true);

      // Reset form after successful submission
      handleClear();

    } catch (error) {
      console.error("❌ API Error:", error);
      setPopupMessage(error.message || "Failed to submit complaint. Please try again."); // Failure message
      setShowPopup(true);
    } finally {
      setIsLoading(false); // Hide loader
    }
  }

  //Clear button process
  const handleClear = () => {
    setFormData({
      title: '',
      customer_name: '',
      mobile: '',
      email: '',
      address: '',
      addressCity: '',
      employeeName: '',
      department: '',
      branch: '',
      message: '',
    });
    setFormErrors({});
  };

  //Common Style for fields
  const inputClasses = (field) => (
    `block w-full sm:text-sm px-3 py-2 bg-white border border-slate-300 shadow-sm rounded-md
    placeholder-slate-400
    focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
    ${formErrors[field] ? "border-pink-500 text-pink-600 focus:border-pink-500 focus:ring-pink-500" : ""}`
  );

  //Common style for error handling
  const fieldErrorClasses = (field) => (
    `mt-2 ${formErrors[field] ? "visible" : "invisible"} text-pink-600 text-sm`
  );

  return (
    <div id='main-container' className='justify-center relative bg-bgdesign bg-cover text-roboto px-10 py-10 lg:px-40'>
      {/* Background Fading layer */}
      <div className='absolute inset-0 bg-white/80 bg-cover'></div>
      {/* Header section */}
      <div className='relative z-10' data-aos="fade-up">
        <h1 className='border-l-4 border-amber-400 pl-5 pr-5 text-xl md:text-2xl lg:text-4xl font-semibold text-blue-700'> {inquiryForm.title} </h1>
      </div>
      
      {/* Body section */}
      <div className="z-10 relative max-w-lg p-4 md:max-w-4xl mx-auto" data-aos="zoom-in">
        <form onSubmit={handleSubmit} className="md:flex lg:flex-col md:gap-4">

        {/*Customer Details Section */}
        <div className='text-xs md:text-base lg:text-xl text-blue-700 font-medium'>{inquiryForm.customer_details}</div>
          <div className='flex flex-row gap-10'>
 
          <div className="md:w-1/2">

          <div className="mb-4">
            <label htmlFor="title" className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-1 text-sm font-medium text-slate-700">
                {inquiryForm.titleLabel} {/* Add this key in the `inquiryForm` JSON for "Title" */}
            </label>
            <select name="title" id="title" className={`${inputClasses("title")}`}  value={formData.title || ''}  onChange={handleChange}
            >
                <option value="" disabled>{inquiryForm.titlePlaceholder}</option>
                {inquiryForm.titleOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
            </select>
            <p className={fieldErrorClasses("title")}>{formErrors.title}</p>
            </div>

            <div className="mb-4">
              <label htmlFor="mobile" className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-1 text-sm font-medium text-slate-700">
                {inquiryForm.label2}
              </label>
              <input type="text" name="mobile" id="mobile" inputMode="numeric" pattern="[0-9]*" className={inputClasses("mobile")} placeholder={inquiryForm.field2} value={formData.mobile || ''} onChange={handleChange} maxLength={10} />
              <p className={fieldErrorClasses("mobile")}>{formErrors.mobile}</p>
            </div>

            <div className="mb-4">
              <label htmlFor="address" className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-1 text-sm font-medium text-slate-700">
                {inquiryForm.label8}
              </label>
              <input type="text" name="address" id="address" className={inputClasses("address")} placeholder={inquiryForm.field8} value={formData.address || ''} onChange={handleChange} />
              <p className={fieldErrorClasses("address")}>{formErrors.address}</p>
            </div>

          </div>

          <div className="md:w-1/2">
        
          <div className="mb-4">
              <label htmlFor="name" className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-1 text-sm font-medium text-slate-700">
                {inquiryForm.label1}
              </label>
              <input type="text" name="customer_name" id="name" className={inputClasses("customer_name")} placeholder={inquiryForm.field1} value={formData.customer_name || ''} onChange={handleChange} />
              <p className={fieldErrorClasses("customer_name")}>{formErrors.customer_name}</p>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-1 text-sm font-medium text-slate-700">
                {inquiryForm.label3}
              </label>
              <input type="email" name="email" id="email" className={inputClasses("email")} placeholder={inquiryForm.field3} value={formData.email || ''} onChange={handleChange} />
              <p className={fieldErrorClasses("email")}>{formErrors.email}</p>
            </div>

            <div className="mb-4">
              <label htmlFor="addressCity" className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-1 text-sm font-medium text-slate-700">
                {inquiryForm.label9}
              </label>
              <p className={fieldErrorClasses("addressCity")}>{formErrors.addressCity}</p>
              <div>
                <select required id='addressCity' name="addressCity" className="w-full px-3 py-2 border rounded-md max-h-10" value={formData.addressCity} onChange={handleChange} >
                  <option value="">{inquiryForm.field9}</option>
                  {cities.map((city) => (
                    <option key={city.CityId} value={city.CityId}>
                      {city.PostalCode} | {city.CityName} | {city.DisName}
                    </option>
                  ))}
                </select>
              </div>
            </div>

          </div>
          </div>
            

            {/*Employee Section */}
        <div className='text-xs md:text-base lg:text-xl text-blue-700 font-medium'>{inquiryForm.employee_details}</div>

          <div className='flex flex-row gap-10'>

            <div className="md:w-1/2">

             <div className="mb-4">
              <label htmlFor="employeeName" className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-1 text-sm font-medium text-slate-700">
                {inquiryForm.label5}
              </label>
              <input type="text" name="employeeName" id="employeeName" className={inputClasses("employeeName")} placeholder={inquiryForm.field5} value={formData.employeeName || ''} onChange={handleChange} />
              <p className={fieldErrorClasses("employeeName")}>{formErrors.employeeName}</p>
            </div>

            <div className="mb-4">
                <label htmlFor="branch" className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-1 text-sm font-medium text-slate-700">
                    {inquiryForm.label7}
                </label>
                <p className={fieldErrorClasses("branch")}>{formErrors.branch}</p>
                <div>
                <select required id='branch' name="branch" className="w-full px-3 py-2 border rounded-md max-h-10" value={formData.branch} onChange={handleChange} >
                  <option value="">{inquiryForm.field7}</option>
                  {branches.map((branch) => (
                    <option key={branch.BranchId} value={branch.BranchId}>
                      {branch.BranchName}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            </div>

            <div className="md:w-1/2">

                <div className="mb-4">
                <label htmlFor="department" className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-1 text-sm font-medium text-slate-700">
                    {inquiryForm.label6}
                </label>
                <div>
                <select required id='department' name="department" className="w-full px-3 py-2 border rounded-md max-h-10" value={formData.department} onChange={handleChange} >
                  <option value="">{inquiryForm.field6}</option>
                  {departments.map((department) => (
                    <option key={department.id} value={department.id}>
                      {department.dep_name}
                    </option>
                  ))}
                </select>
              </div>
              <p className={fieldErrorClasses("department")}>{formErrors.department}</p>
              </div>

            </div>

            </div>

          <div className="mb-4">
              <label htmlFor="message" className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-1 text-sm font-medium text-slate-700">
                {inquiryForm.label4}
              </label>
              <textarea name="message" id="message" className={inputClasses("message")} placeholder={inquiryForm.field4} rows="6" value={formData.message || ''} onChange={handleChange} 
                style={{ height: 'calc(3 * 3.5rem + 2rem)' }}
              />
              {/* message is optional, so no error shown */}
            </div>

        </form>

        <div className="text-right mt-4 flex justify-end gap-5">
          <button onClick={handleClear} type="button" className="bg-gray-500 hover:bg-gray-600 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white">
            {inquiryForm.button1}
          </button>
          <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white">
            {inquiryForm.button2}
          </button>
        </div>

      </div>

      {isLoading && <Loader duration={2000}/>}
      {showPopup && <Popup message={popupMessage} onClose={() => setShowPopup(false)} />}
    </div>
  );
};


export default ComplaintForm;
