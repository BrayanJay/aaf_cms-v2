import { useState, useEffect, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Building2, MapPin, Upload, CheckCircle, ArrowLeft, ArrowRight, RotateCcw, X } from "lucide-react";
import UploadCard from "./UploadCard";

const AddBranch = () => {
  const [currentStep, setCurrentStep] = useState(1);
  
  // Branch Details for all languages
  const [branchNameEn, setBranchNameEn] = useState("");
  const [branchNameSi, setBranchNameSi] = useState("");
  const [branchNameTa, setBranchNameTa] = useState("");
  
  const [branchAddressEn, setBranchAddressEn] = useState("");
  const [branchAddressSi, setBranchAddressSi] = useState("");
  const [branchAddressTa, setBranchAddressTa] = useState("");
  
  const [regionNameEn, setRegionNameEn] = useState("");
  const [regionNameSi, setRegionNameSi] = useState("");
  const [regionNameTa, setRegionNameTa] = useState("");
  
  const [regionId, setRegionId] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [coordinatesLongitude, setCoordinatesLongitude] = useState("");
  const [coordinatesLatitude, setCoordinatesLatitude] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageUploaded, setImageUploaded] = useState(false);

  const tokenUrl = `${import.meta.env.VITE_API_BASE_URL}/auth/branchdetails`;
  const navigate = useNavigate();

  // Region options
  const regionOptions = useMemo(() => [
    { id: 'HEAD_OFFICE', name: 'Head Office' },
    { id: 'WESTERN_REGION', name: 'Western Region' },
    { id: 'SOUTHERN_REGION', name: 'Southern Region' },
    { id: 'EASTERN_REGION', name: 'Eastern Region' },
    { id: 'NORTHERN_REGION', name: 'Northern Region' },
    { id: 'CENTRAL_REGION', name: 'Central Region' },
    { id: 'NORTH-WESTERN_REGION', name: 'North-Western Region' },
    { id: 'UVA_REGION', name: 'Uva Region' },
    { id: 'SABARAGAMUWA_REGION', name: 'Sabaragamuwa Region' },
  ], []);

  // Fetch user authentication
  const fetchUser = useCallback(async () => {
    try {
      await axios.get(tokenUrl, {
        withCredentials: true,
      });
    } catch (err) {
      navigate("/login");
      console.log(err);
    }
  }, [tokenUrl, navigate]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  // Add new branch
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation for step 1
    if (currentStep === 1) {
      if (!branchNameEn || !branchNameSi || !branchNameTa || 
          !branchAddressEn || !branchAddressSi || !branchAddressTa ||
          !regionNameEn || !regionNameSi || !regionNameTa ||
          !regionId || !contactNumber || !email || 
          !coordinatesLongitude || !coordinatesLatitude) {
        setError("All fields are required");
        return;
      }
      
      // Move to step 2
      setCurrentStep(2);
      setError("");
      return;
    }

    // Validation for step 2
    if (currentStep === 2) {
      // Move to step 3
      setCurrentStep(3);
      return;
    }

    // Final submission on step 3
    if (currentStep === 3) {
      setLoading(true);
      setError("");

      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/branch/branches/add`,
          {
            region_id: regionId,
            branch_name_en: branchNameEn,
            branch_name_si: branchNameSi,
            branch_name_ta: branchNameTa,
            branch_address_en: branchAddressEn,
            branch_address_si: branchAddressSi,
            branch_address_ta: branchAddressTa,
            region_name_en: regionNameEn,
            region_name_si: regionNameSi,
            region_name_ta: regionNameTa,
            contact_number: contactNumber,
            email: email,
            coordinates_longitude: coordinatesLongitude,
            coordinates_latitude: coordinatesLatitude,
          },
          { 
            withCredentials: true,
            headers: { "Content-Type": "application/json" }
          }
        );

        console.log("Branch created with ID:", response.data.id);
        alert("Branch added successfully!");
        navigate("/branch-network");

      } catch (err) {
        console.error("Submission failed:", err);
        setError(err.response?.data?.message || "Failed to add branch");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleReset = () => {
    setBranchNameEn("");
    setBranchNameSi("");
    setBranchNameTa("");
    setBranchAddressEn("");
    setBranchAddressSi("");
    setBranchAddressTa("");
    setRegionNameEn("");
    setRegionNameSi("");
    setRegionNameTa("");
    setRegionId("");
    setContactNumber("");
    setEmail("");
    setCoordinatesLongitude("");
    setCoordinatesLatitude("");
    setError("");
    setCurrentStep(1);
    setImageUploaded(false);
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setError("");
    }
  };

  // Auto-fill region names when region ID changes
  useEffect(() => {
    if (regionId) {
      const selectedRegion = regionOptions.find(r => r.id === regionId);
      if (selectedRegion) {
        setRegionNameEn(selectedRegion.name);
        setRegionNameSi(selectedRegion.name); // You can add Sinhala translations
        setRegionNameTa(selectedRegion.name); // You can add Tamil translations
      }
    }
  }, [regionId, regionOptions]);

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl p-6 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 transition-colors duration-300">
                  <Building2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">Branch Information</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">Enter the complete details for the new branch location</p>
                </div>
              </div>
            
              {/* Region Selection */}
              <div className="space-y-3 mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300">Region</label>
                <select
                  value={regionId}
                  onChange={(e) => setRegionId(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  required
                >
                  <option value="">Select Region</option>
                  {regionOptions.map((region) => (
                    <option key={region.id} value={region.id}>
                      {region.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Branch Names */}
              <div className="space-y-6">
                <h4 className="font-medium text-gray-800 dark:text-gray-200 flex items-center gap-2 transition-colors duration-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Branch Names
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300">English</label>
                    <input
                      type="text"
                      value={branchNameEn}
                      onChange={(e) => setBranchNameEn(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400"
                      placeholder="Enter branch name in English"
                      required
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300">Sinhala</label>
                    <input
                      type="text"
                      value={branchNameSi}
                      onChange={(e) => setBranchNameSi(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400"
                      placeholder="සිංහල නම"
                      required
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300">Tamil</label>
                    <input
                      type="text"
                      value={branchNameTa}
                      onChange={(e) => setBranchNameTa(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400"
                      placeholder="தமிழ் பெயர்"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Addresses */}
              <div className="space-y-6">
                <h4 className="font-medium text-gray-800 dark:text-gray-200 flex items-center gap-2 pt-5">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Branch Addresses
                </h4>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Address (English)</label>
                    <textarea
                      value={branchAddressEn}
                      onChange={(e) => setBranchAddressEn(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 resize-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400"
                      placeholder="Enter complete address in English"
                      rows="3"
                      required
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Address (Sinhala)</label>
                    <textarea
                      value={branchAddressSi}
                      onChange={(e) => setBranchAddressSi(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 resize-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400"
                      placeholder="සිංහල ලිපිනය"
                      rows="3"
                      required
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Address (Tamil)</label>
                    <textarea
                      value={branchAddressTa}
                      onChange={(e) => setBranchAddressTa(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 resize-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400"
                      placeholder="தமிழ் முகவரி"
                      rows="3"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <h4 className="font-medium text-gray-800 dark:text-gray-200 flex items-center gap-2 pt-5">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Contact Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Contact Number</label>
                    <input
                      type="text"
                      value={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400"
                      placeholder="0712345678"
                      required
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400"
                      placeholder="branch@aaf.lk"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Coordinates */}
              <div className="space-y-6">
                <h4 className="font-medium text-gray-800 dark:text-gray-200 flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  Location Coordinates
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-500 dark:text-gray-100" />
                      Latitude
                    </label>
                    <input
                      type="text"
                      value={coordinatesLatitude}
                      onChange={(e) => setCoordinatesLatitude(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400"
                      placeholder="6.1234567"
                      required
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-500 dark:text-gray-100" />
                      Longitude
                    </label>
                    <input
                      type="text"
                      value={coordinatesLongitude}
                      onChange={(e) => setCoordinatesLongitude(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400"
                      placeholder="80.1234567"
                      required
                    />
                  </div>
                </div>
                
                {/* Coordinates Info */}
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-amber-600 mt-0.5" />
                    <div>
                      <h5 className="font-medium text-amber-900 mb-1">Location Guidelines</h5>
                      <p className="text-sm text-amber-700">
                        Use Google Maps to find precise coordinates. Right-click on the branch location and select &ldquo;What&rsquo;s here?&rdquo; to get exact latitude and longitude values.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl p-6 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 transition-colors duration-300">
                  <Upload className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">Branch Image Upload</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">Upload a representative image for this branch location</p>
                </div>
              </div>
              
              <div className="max-w-2xl">
                <UploadCard
                  label="Branch Image"
                  uploadUrl={`${import.meta.env.VITE_API_BASE_URL}/fileUpload/upload/image`}
                  acceptedTypes="image/png,image/webp"
                  maxSizeMB={1}
                  customFileName={`${branchNameEn.toLowerCase().replace(/\s+/g, '').replace(/_+/g, '')}.webp`}
                  customDirectory="media/branches"
                  onUploadSuccess={(data) => {
                    console.log("Uploaded!", data);
                    setImageUploaded(true);
                  }}
                />
              </div>
              
              {/* Guidelines */}
              <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 transition-colors duration-300">
                <div className="flex items-start gap-3">
                  <Upload className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 transition-colors duration-300" />
                  <div>
                    <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-1 transition-colors duration-300">Image Guidelines</h4>
                    <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 transition-colors duration-300">
                      <li>• Recommended resolution: 1200x800 pixels or 3:2 aspect ratio</li>
                      <li>• Supported formats: PNG or WebP</li>
                      <li>• Maximum file size: 1MB</li>
                      <li>• Use clear, professional photos of the branch exterior or interior</li>
                      <li>• Avoid blurry or low-quality images</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-600 pb-2 transition-colors duration-300">Review & Confirm</h3>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg space-y-4 transition-colors duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 transition-colors duration-300">Region</p>
                  <p className="text-gray-900 dark:text-white transition-colors duration-300">{regionOptions.find(r => r.id === regionId)?.name}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 transition-colors duration-300">Branch Name (EN)</p>
                  <p className="text-gray-900 dark:text-white transition-colors duration-300">{branchNameEn}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 transition-colors duration-300">Contact Number</p>
                  <p className="text-gray-900 dark:text-white transition-colors duration-300">{contactNumber}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 transition-colors duration-300">Email</p>
                  <p className="text-gray-900 dark:text-white transition-colors duration-300">{email}</p>
                </div>
                
                <div className="md:col-span-2">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 transition-colors duration-300">Address (EN)</p>
                  <p className="text-gray-900 dark:text-white transition-colors duration-300">{branchAddressEn}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 transition-colors duration-300">Coordinates</p>
                  <p className="text-gray-900 dark:text-white transition-colors duration-300">{coordinatesLatitude}, {coordinatesLongitude}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 transition-colors duration-300">Image Upload</p>
                  <p className="text-gray-900 dark:text-white transition-colors duration-300">{imageUploaded ? "✅ Uploaded" : "❌ Not uploaded"}</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 transition-colors duration-300">
              <p className="text-blue-800 dark:text-blue-200 text-sm transition-colors duration-300">
                <strong>Note:</strong> Please review all information carefully. Once confirmed, the branch will be added to the system.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">Add New Branch</h1>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Create a new branch location with details and media</p>
            </div>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>

        {/* Progress Indicator */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 mb-8 transition-colors duration-300">
          <div className="flex items-center justify-between">
            {[
              { step: 1, title: "Branch Details", icon: Building2, description: "Basic information" },
              { step: 2, title: "Branch Image", icon: Upload, description: "Upload media" },
              { step: 3, title: "Review & Confirm", icon: CheckCircle, description: "Final review" }
            ].map(({ step, title, icon: Icon, description }, index) => (
              <div key={step} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                      currentStep >= step
                        ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500"
                    }`}
                  >
                    {currentStep > step ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      <Icon className="w-6 h-6" />
                    )}
                  </div>
                  <div className="mt-3 text-center">
                    <div className={`font-medium text-sm transition-colors duration-300 ${
                      currentStep >= step ? "text-blue-600 dark:text-blue-400" : "text-gray-500 dark:text-gray-400"
                    }`}>
                      {title}
                    </div>
                    <div className="text-xs text-gray-400 dark:text-gray-500 mt-1 transition-colors duration-300">{description}</div>
                  </div>
                </div>
                {index < 2 && (
                  <div className={`flex-1 h-0.5 mx-4 transition-colors duration-300 ${
                    currentStep > step ? "bg-gradient-to-r from-blue-500 to-blue-600" : "bg-gray-200 dark:bg-gray-600"
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Form */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors duration-300">
          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-4 m-6 rounded-lg transition-colors duration-300">
              <div className="flex items-center">
                <X className="w-5 h-5 text-red-400 mr-3" />
                <p className="text-red-700 dark:text-red-300 text-sm transition-colors duration-300">{error}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="p-6">
            {renderStepContent()}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200 dark:border-gray-600 transition-colors duration-300">
              <div className="flex gap-3">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex items-center gap-2 px-6 py-3 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 font-medium"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                )}
                
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex items-center gap-2 px-6 py-3 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 font-medium"
                >
                  <RotateCcw className="w-4 h-4" />
                  Reset
                </button>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => navigate("/branch-network")}
                  className="px-6 py-3 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 font-medium"
                >
                  Cancel
                </button>
                
                <button
                  type="submit"
                  className={`flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium shadow-lg ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Adding...
                    </>
                  ) : currentStep === 3 ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Add Branch
                    </>
                  ) : (
                    <>
                      Next
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBranch;
