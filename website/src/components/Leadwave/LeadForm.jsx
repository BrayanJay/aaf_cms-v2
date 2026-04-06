import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Form = () => {
  const location = useLocation();
  const employeeNumber = location.state?.employeeNumber || '';
  const token = import.meta.env.VITE_AUTH_TOKEN;

  // State for dropdowns
  const [branches, setBranches] = useState([]);
  const [products, setProducts] = useState([]);
  const [locations, setLocations] = useState([]);
  const [occupations, setOccupations] = useState([]);
  const [amount, setAmount] = useState('');

  const [languages, setLanguages] = useState([]);
  const [channels, setChannels] = useState([]);
  const [campaigns, setCampaigns] = useState([]);
  const [leadSources, setLeadSources] = useState([]);

  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedOccupation, setSelectedOccupation] = useState('');
  const [amountError, setAmountError] = useState('');

  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedChannel, setSelectedChannel] = useState('');
  const [selectedCampaign, setSelectedCampaign] = useState('');
  const [selectedLeadSource, setSelectedLeadSource] = useState('');
  const [remark, setRemark] = useState('');

  const [isShowSelectBranch, setIsShowSelectBranch] = useState(false);

  // Customer info states
  const [customerName, setCustomerName] = useState('');
  const [customerMobile, setCustomerMobile] = useState('');
  const [customerNIC, setCustomerNIC] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');

  // Validation states
  const [mobileError, setMobileError] = useState('');
  const [emailError, setEmailError] = useState('');

  // Search states for Location and Occupation
  const [locationSearch, setLocationSearch] = useState('');
  const [occupationSearch, setOccupationSearch] = useState('');

  // Dropdown open states
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const [occupationDropdownOpen, setOccupationDropdownOpen] = useState(false);

  // Refs for closing dropdowns on outside click
  const locationDropdownRef = useRef(null);
  const occupationDropdownRef = useRef(null);

  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch branch and product data
  useEffect(() => {
    fetch('https://asiaassetfinance.net/aafleadwave/api/v1/application/api.php/getbranches')
      .then(res => res.json())
      .then(data => setBranches(data))
      .catch(() => setBranches([]));

    fetch('https://asiaassetfinance.net/aafleadwave/api/v1/application/api.php/getproducts')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(() => setProducts([]));

    fetch('https://asiaassetfinance.net/aafleadwave/api/v1/application/api.php/getcities')
      .then(res => res.json())
      .then(data => setLocations(data))
      .catch(() => setLocations([]));

    fetch('https://asiaassetfinance.net/aafleadwave/api/v1/application/api.php/getoccupations')
      .then(res => res.json())
      .then(data => setOccupations(data))
      .catch(() => setOccupations([]));

    fetch('https://asiaassetfinance.net/aafleadwave/api/v1/application/api.php/getlanguages')
      .then(res => res.json())
      .then(data => setLanguages(data))
      .catch(() => setLanguages([]));

    fetch('https://asiaassetfinance.net/aafleadwave/api/v1/application/api.php/getchannels')
      .then(res => res.json())
      .then(data => setChannels(data))
      .catch(() => setChannels([]));

    fetch('https://asiaassetfinance.net/aafleadwave/api/v1/application/api.php/getcampaigns')
      .then(res => res.json())
      .then(data => setCampaigns(data))
      .catch(() => setCampaigns([]));

    fetch('https://asiaassetfinance.net/aafleadwave/api/v1/application/api.php/getleadsources')
      .then(res => res.json())
      .then(data => setLeadSources(data))
      .catch(() => setLeadSources([]));
  }, []);

  // Function to clear submit errors when user starts interacting with form
  const clearSubmitError = () => {
    if (submitError) {
      setSubmitError('');
    }
  };

  // Mobile validation
  const handleMobileChange = (e) => {
    clearSubmitError();
    const value = e.target.value.replace(/\D/g, '');
    setCustomerMobile(value);
    if (value.length !== 10) {
      setMobileError('Mobile number must be 10 digits');
    } else {
      setMobileError('');
    }
  };

  // Email validation (not mandatory)
  const handleEmailChange = (e) => {
    clearSubmitError();
    const value = e.target.value;
    setCustomerEmail(value);
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const handleAmountChange = (e) => {
    clearSubmitError();
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setAmount(value);
    if (!value || isNaN(value) || Number(value) <= 0) {
      setAmountError('Amount is required and must be greater than 0');
    } else {
      setAmountError('');
    }
  };

  const handleBranchChange = (e) => {
    clearSubmitError();
    const value = e.target.value;
    setSelectedBranch(value);
    localStorage.setItem('selectedBranch', value);
  }

  const handleChannelChange = (e) => {
    clearSubmitError();
    const value = e.target.value;
    setSelectedChannel(value);
    
    // Show/hide branch dropdown based on channel selection
    if (value === '2') {
      setIsShowSelectBranch(true);
    } else {
      setIsShowSelectBranch(false);
      setSelectedBranch(''); // Clear branch selection if hidden
    }
  }
  // Filtered lists for search
  const filteredLocations = locations.filter(location =>
    `${location.CityName}, ${location.DisName}`.toLowerCase().startsWith(locationSearch.toLowerCase())
  );
  const filteredOccupations = occupations.filter(occupation =>
    occupation.OccupationDesc.toLowerCase().includes(occupationSearch.toLowerCase())
  );

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        locationDropdownRef.current &&
        !locationDropdownRef.current.contains(event.target)
      ) {
        setLocationDropdownOpen(false);
      }
      if (
        occupationDropdownRef.current &&
        !occupationDropdownRef.current.contains(event.target)
      ) {
        setOccupationDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // On mount, load branch from localStorage if available and check channel state
  useEffect(() => {
    const storedBranch = localStorage.getItem('selectedBranch');
    if (storedBranch) {
      setSelectedBranch(storedBranch);
    }
    
    // Check if channel is already set to show branch dropdown
    if (selectedChannel === '2') {
      setIsShowSelectBranch(true);
    }
  }, [selectedChannel]);

  const resetForm = () => {
  setSelectedProduct('');
  setAmount('');
  setAmountError('');
  setSelectedLocation('');
  setSelectedOccupation('');
  setCustomerName('');
  setCustomerMobile('');
  setCustomerNIC('');
  setCustomerEmail('');
  setMobileError('');
  setEmailError('');
  setLocationSearch('');
  setOccupationSearch('');
  setSelectedLanguage('');
  setSelectedChannel('');
  setSelectedCampaign('');
  setSelectedLeadSource('');
  setRemark('');
  // Reset branch-related states
  setSelectedBranch('');
  setIsShowSelectBranch(false);
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prevent multiple submissions
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitError('');
    
    try {
      // Detailed validation with specific error messages
      const validationErrors = [];
      
      if (!selectedChannel) validationErrors.push('Preferred Channel is required');
      if (!selectedProduct) validationErrors.push('Interested Product is required');
      if (isShowSelectBranch && !selectedBranch) validationErrors.push('Select Branch is required');
      if (!amount) validationErrors.push('Amount is required');
      if (amountError) validationErrors.push('Please fix the amount error');
      if (!customerName.trim()) validationErrors.push('Customer Name is required');
      if (!customerMobile) validationErrors.push('Mobile Number is required');
      if (mobileError) validationErrors.push('Please fix the mobile number error');
      if (!selectedLocation) validationErrors.push('Location/Nearest City is required');
      if (!selectedOccupation) validationErrors.push('Occupation is required');
      if (emailError) validationErrors.push('Please fix the email error');
      if (!selectedLanguage) validationErrors.push('Preferred Language is required');
      if (!selectedLeadSource) validationErrors.push('Lead Source is required');
      
      if (validationErrors.length > 0) {
        setSubmitError(`Please fix the following errors:\n• ${validationErrors.join('\n• ')}`);
        setIsSubmitting(false);
        return;
      }

      // Validate token
      if (!token) {
        setSubmitError('Authentication token is missing. Please refresh the page and try again.');
        setIsSubmitting(false);
        return;
      }

      // Prepare payload
      const payload = {
        customerName: customerName.trim(),
        mobile: customerMobile,
        amount: amount,
        nic: customerNIC.trim(),
        city: selectedLocation,
        occupation: selectedOccupation,
        email: customerEmail.trim(),
        language: selectedLanguage,
        channel: selectedChannel,
        campaign: selectedCampaign || '',
        remarks: remark.trim(),
        product: selectedProduct,
        leadSource: selectedLeadSource,
        userBranchd: selectedBranch || '',
        userId: employeeNumber,
      };

      // API call with timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

      const response = await fetch('https://asiaassetfinance.net/aafleadwave/api/v2/application/api.php/leadgenerate-branch', { 
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 
          'Content-Type': 'application/json', 
          Authorization: `Bearer ${token}` 
        },
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      // Handle different response status codes
      if (!response.ok) {
        let errorMessage = 'Submission failed. Please try again.';
        
        try {
          const errorData = await response.json();
          if (errorData.message) {
            errorMessage = errorData.message;
          } else if (errorData.error) {
            errorMessage = errorData.error;
          }
        } catch {
          // If we can't parse the error response, use status-based messages
          switch (response.status) {
            case 400:
              errorMessage = 'Invalid request data. Please check your inputs.';
              break;
            case 401:
              errorMessage = 'Authentication failed. Please refresh and try again.';
              break;
            case 403:
              errorMessage = 'Access denied. You may not have permission to submit leads.';
              break;
            case 404:
              errorMessage = 'Service not found. Please contact support.';
              break;
            case 422:
              errorMessage = 'Validation failed. Please check all required fields.';
              break;
            case 429:
              errorMessage = 'Too many requests. Please wait a moment and try again.';
              break;
            case 500:
              errorMessage = 'Server error. Please try again later.';
              break;
            case 503:
              errorMessage = 'Service temporarily unavailable. Please try again later.';
              break;
            default:
              errorMessage = `Request failed with status ${response.status}. Please try again.`;
          }
        }
        
        setSubmitError(errorMessage);
        setIsSubmitting(false);
        return;
      }

      // Parse successful response
      const data = await response.json();
      setSubmitMessage(data.message || 'Lead submitted successfully!');
      
      // Reset form only on successful submission
      setTimeout(() => {
        resetForm();
        setSubmitMessage('');
      }, 3000); // Clear success message after 3 seconds
      
    } catch (error) {
      console.error('Submission error:', error);
      
      let errorMessage = 'An unexpected error occurred. Please try again.';
      
      if (error.name === 'AbortError') {
        errorMessage = 'Request timed out. Please check your connection and try again.';
      } else if (error.name === 'TypeError' && error.message.includes('fetch')) {
        errorMessage = 'Network error. Please check your internet connection.';
      } else if (error.message) {
        errorMessage = `Error: ${error.message}`;
      }
      
      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center relative bg-leadwaveBg px-10 py-10 lg:px-40">
      <div className="bg-white bg-opacity-95 p-8 rounded-xl shadow-lg max-w-3xl w-full">
        
        <div  className="flex flex-col md:flex-row md:justify-between text-center">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">New Lead Submission</h2>
            <div className="w-56 h-12 flex flex-row relative gap-2">
                <div className='flex flex-col justify-center w-full h-full'>
                    <div className="text-right justify-start"><span className="text-stone-900 text-base font-medium">Employee ID :</span><span className="text-blue-600 text-base font-bold"> {employeeNumber}</span></div>
                </div>
            </div>
          </div>

        <form className="space-y-6">

            {/* -------------------------------------------------- General Information Section --------------------------------------------------------------- */}

            {/* Row 01 */}
            <div className="justify-start text-gray-500 text-xl font-bold">General Information</div>  
                <div className="flex flex-col md:flex-row gap-4">
                    {/* Select Preferred Channel Dropdown */}
                    <div className="flex-1">
                      <label className="block mb-1 font-medium">Preferred Channel<span className="text-rose-600 text-base font-bold">*</span></label>
                      <select
                          className="w-full border border-gray-300 rounded-md px-3 py-2"
                          value={selectedChannel}
                          onChange={handleChannelChange}
                          required
                      >
                          <option value="">Select Channel</option>
                          {channels.map(channel => (
                          <option
                          key={channel.ChannelId}
                          value={channel.ChannelId}
                          >
                          {channel.ChannelName}
                          </option>
                          ))}
                      </select>
                    </div>

                    {/* Select Product Dropdown */}
                    <div className="flex-1">
                    <label className="block mb-1 font-medium">Interested Product<span className="text-rose-600 text-base font-bold">*</span></label>
                    <select
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        value={selectedProduct}
                        onChange={e => {
                          clearSubmitError();
                          setSelectedProduct(e.target.value);
                        }}
                        required
                    >
                        <option value="">Select Product</option>
                        {products.map(product => (
                        <option
                        key={product.productId}
                        value={product.productId}
                        >
                        {product.ProductName}
                        </option>
                        ))}
                    </select>
                    </div>
                </div>
                
                {/* Row 02 */}
                <div className="flex flex-col md:flex-row gap-4">
                    
                    {/* Select Branch Dropdown - Conditionally displayed */}
                    {isShowSelectBranch && (
                      <div className="flex-1">
                        <label className="block mb-1 font-medium">Select Branch<span className="text-rose-600 text-base font-bold">*</span></label>
                        <select
                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                            value={selectedBranch}
                            onChange={handleBranchChange}
                            required
                        >
                            <option value="">Select Branch</option>
                            {branches.map(branch => (
                            <option 
                            key={branch.Code}
                            value={branch.Code}
                            >
                            {branch.Name}
                            </option>
                            ))}
                        </select>
                      </div>
                    )}

                    {/* Set Amount Field */}
                    <div className="flex-1">
                      <label className="block mb-1 font-medium">
                        Amount<span className="text-rose-600 text-base font-bold">*</span>
                      </label>
                      <input
                        type="number"
                        min="1"
                        placeholder="Enter Amount"
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        value={amount}
                        onChange={handleAmountChange}
                        required
                        inputMode="numeric"
                        maxLength={10}
                        style={{ MozAppearance: 'textfield' }}
                        onWheel={e => e.target.blur()}
                      />
                      {amountError && (
                        <div className="text-rose-600 text-xs mt-1">{amountError}</div>
                      )}
                    </div>
                  </div>

            {/* -------------------------------------------- End of General Information Section ------------------------------------------------------ */}

            {/* -------------------------------------------------- Customer Information Section ----------------------------------------------------------- */}
            <div className="justify-start text-gray-500 text-xl font-bold mt-8">Customer Information</div>
              {/* Row 1 */}
              <div className="flex flex-col md:flex-row gap-4">
                  {/* Set Name Field */}
                  <div className="flex-1">
                      <label className="block mb-1 font-medium">Name<span className="text-rose-600 text-base font-bold">*</span></label>
                      <input
                          type="text"
                          placeholder="Customer Name"
                          className="w-full border border-gray-300 rounded-md px-3 py-2"
                          value={customerName}
                          onChange={e => {
                            clearSubmitError();
                            setCustomerName(e.target.value);
                          }}
                          required
                      />
                  </div>
                  {/* Set Mobile Field */}
                  <div className="flex-1">
                    <label className="block mb-1 font-medium">Mobile Number<span className="text-rose-600 text-base font-bold">*</span></label>
                    <input
                          type="text"
                          placeholder="Mobile Number"
                          className="w-full border border-gray-300 rounded-md px-3 py-2"
                          value={customerMobile}
                          onChange={handleMobileChange}
                          maxLength={10}
                          required
                    />
                    {mobileError && <div className="text-rose-600 text-xs mt-1">{mobileError}</div>}
                  </div>
              </div>
              {/* Row 2 */}
              <div className="flex flex-col md:flex-row gap-4">
                {/* Select Location/Nearest City Dropdown */}
                <div className="flex-1" ref={locationDropdownRef}>
                  <label className="block mb-1 font-medium">
                    Location/ Nearest City<span className="text-rose-600 text-base font-bold">*</span>
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-left bg-white"
                      onClick={() => setLocationDropdownOpen(open => !open)}
                    >
                        <div className='flex justify-between items-center'>
                            <div>
                                {selectedLocation
                                    ? (() => {
                                        const loc = locations.find(l => l.CityId === selectedLocation);
                                        return loc ? `${loc.CityId} | ${loc.CityName}` : 'Select Location/ Nearest City';
                                    })()
                                    : 'Select Location/ Nearest City'}
                            </div>
                            <div>
                                ˅
                            </div>
                        </div>
                    </button>
                    {locationDropdownOpen && (
                      <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto shadow-lg">
                        <input
                          type="text"
                          className="w-full px-3 py-2 border-b border-gray-200 outline-none"
                          placeholder="Search Location"
                          value={locationSearch}
                          onChange={e => setLocationSearch(e.target.value)}
                          autoFocus
                        />
                        <div>
                          {filteredLocations.length === 0 && (
                            <div className="px-3 py-2 text-gray-400">No locations found</div>
                          )}
                          {filteredLocations.map(location => (
                            <div
                              key={location.CityId}
                              className={`px-3 py-2 cursor-pointer hover:bg-blue-100 ${selectedLocation === location.CityId ? 'bg-blue-50' : ''}`}
                              onClick={() => {
                                clearSubmitError();
                                setSelectedLocation(location.CityId);
                                setLocationDropdownOpen(false);
                                setLocationSearch('');
                              }}
                            >
                              {location.PostalCode} | {location.CityName}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {/* Select Occupation City Dropdown */}
                <div className="flex-1" ref={occupationDropdownRef}>
                  <label className="block mb-1 font-medium">
                    Occupation<span className="text-rose-600 text-base font-bold">*</span>
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-left bg-white"
                      onClick={() => setOccupationDropdownOpen(open => !open)}
                    >
                        <div className='flex justify-between items-center'>
                            <div>
                      {selectedOccupation
                        ? (() => {
                            const occ = occupations.find(o => o.OccupationId === selectedOccupation);
                            return occ ? occ.OccupationDesc : 'Select Occupation';
                          })()
                        : 'Select Occupation'}
                            </div>
                            <div>
                                ˅
                            </div> 
                        </div>
                    </button>
                    {occupationDropdownOpen && (
                      <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto shadow-lg">
                        <input
                          type="text"
                          className="w-full px-3 py-2 border-b border-gray-200 outline-none"
                          placeholder="Search Occupation"
                          value={occupationSearch}
                          onChange={e => setOccupationSearch(e.target.value)}
                          autoFocus
                        />
                        <div>
                          {filteredOccupations.length === 0 && (
                            <div className="px-3 py-2 text-gray-400">No occupations found</div>
                          )}
                          {filteredOccupations.map(occupation => (
                            <div
                              key={occupation.OccupationId}
                              className={`px-3 py-2 cursor-pointer hover:bg-blue-100 ${selectedOccupation === occupation.OccupationId ? 'bg-blue-50' : ''}`}
                              onClick={() => {
                                clearSubmitError();
                                setSelectedOccupation(occupation.OccupationId);
                                setOccupationDropdownOpen(false);
                                setOccupationSearch('');
                              }}
                            >
                              {occupation.OccupationDesc}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* Row 3 */}
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Set NIC/ Driving License / Passport Field */}
                  <div className="flex-1">
                    <label className="block mb-1 font-medium">NIC/ Driving License / Passport</label>
                    <input
                        type="text"
                        placeholder="NIC"
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        value={customerNIC}
                        onChange={e => setCustomerNIC(e.target.value)}
                    />
                  </div>
                  {/* Set Email Field */}
                  <div className="flex-1">
                    <label className="block mb-1 font-medium">Email</label>
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        value={customerEmail}
                        onChange={handleEmailChange}
                    />
                    {emailError && <div className="text-rose-600 text-xs mt-1">{emailError}</div>}
                  </div>
                </div>

            {/* ------------------------------------------------ End Customer Information Section -------------------------------------------------------- */}

            {/* ------------------------------------------------ Other Information Section -------------------------------------------------------- */}
            <div className="justify-start text-gray-500 text-xl font-bold mt-8">Other Information</div>
                {/* Row 1 */}
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Select Preferred Language Dropdown */}
                  <div className="flex-1">
                    <label className="block mb-1 font-medium">Preferred Language<span className="text-rose-600 text-base font-bold">*</span></label>
                    <select
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        value={selectedLanguage}
                        onChange={e => setSelectedLanguage(e.target.value)}
                        required
                    >
                        <option value="">Select Language</option>
                        {languages.map(lang => (
                        <option 
                        key={lang.Id || lang.DESCRIPTION} 
                        value={lang.Id}
                        >
                        {lang.DESCRIPTION}
                        </option>
                        ))}
                    </select>
                  </div>
                  
                </div>
                {/* Row 2 */}
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Select Lead Source Dropdown */}
                  <div className="flex-1">
                    <label className="block mb-1 font-medium">Lead Source<span className="text-rose-600 text-base font-bold">*</span></label>
                    <select
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        value={selectedLeadSource}
                        onChange={e => setSelectedLeadSource(e.target.value)}
                        required
                    >
                        <option value="">Select Lead Source</option>
                        {leadSources.map(source => (
                        <option key={source.Id} value={source.Id}>{source.DESCRIPTION}</option>
                        ))}
                    </select>
                  </div>
                  {/* Select Campaign Dropdown */}
                  <div className="flex-1">
                    <label className="block mb-1 font-medium">Select Campaign</label>
                    <select
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                        value={selectedCampaign}
                        onChange={e => setSelectedCampaign(e.target.value)}
                    >
                        <option value="">Select Campaign</option>
                        {campaigns.map(campaign => (
                        <option key={campaign.CampaignId} value={campaign.CampaignId}>{campaign.CampaignName}</option>
                        ))}
                    </select>
                  </div>
                </div>
                {/* Row 3 - Set Remark Field */}
                <div className="flex flex-col">
                    <label className="block mb-1 font-medium">Remark</label>
                    <textarea
                    rows="3"
                    placeholder="Type your remark..."
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    value={remark}
                    onChange={e => setRemark(e.target.value)}
                    ></textarea>
                </div>

            {/* ------------------------------------------------ End Other Information Section ---------------------------------------------------------- */}

            {/* --------------------------------------------- Button Section --------------------------------------------- */}
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`w-full py-2 px-4 rounded-md transition duration-300 ${
              isSubmitting 
                ? 'bg-gray-400 text-gray-700 cursor-not-allowed' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </div>
            ) : (
              'Submit'
            )}
          </button>

          {/* -------------------------------------- Success/Error Messages ------------------------------------ */}
          {submitMessage && (
            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-md">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-green-700 font-semibold">{submitMessage}</span>
              </div>
            </div>
          )}
          {submitError && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div className="text-red-700">
                  {submitError.split('\n').map((line, index) => (
                    <div key={index} className={index > 0 ? 'mt-1' : ''}>{line}</div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ---------------------------------------------------- End Button Section ---------------------------------------------------------- */}
          
        </form>
      </div>
    </div>
  );
};

export default Form;
