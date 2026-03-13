import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Image, Settings, Upload, Eye } from "lucide-react";
import PopupToggle from "../../components/PopupToggle";
import UploadCard from "../../components/UploadCard";

function LandingPageContents() {

  const carousels = [1, 2, 3];

  const tokenUrl = `${import.meta.env.VITE_API_BASE_URL}/auth/landingpagecontents`;

  const navigate = useNavigate()
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(tokenUrl, {
          withCredentials: true  // ✅ Send cookies/session info
        })
        if(response.status !== 200) {
          navigate('/login')
        }
      } catch(err){
        navigate('/login')
        console.log(err)
      }
    }
    
    fetchUser()
  }, [navigate, tokenUrl])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 rounded-xl shadow-lg">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">Landing Page Management</h1>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Manage carousel images and popup settings for the homepage</p>
            </div>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 rounded-full"></div>
        </div>

        {/* Carousel Media Section */}
        <div className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden transition-colors duration-300">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-b border-gray-200 dark:border-gray-700 px-6 py-4 transition-colors duration-300">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm transition-colors duration-300">
                  <Image className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">Carousel Media</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">Upload and manage homepage carousel banners</p>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {carousels.map((index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-200">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">{index}</span>
                      </div>
                      <h3 className="font-medium text-gray-800 dark:text-gray-200 transition-colors duration-300">Banner {String(index).padStart(2, "0")}</h3>
                    </div>
                    <UploadCard
                      label={`Carousel Banner ${index}`}
                      uploadUrl={`${import.meta.env.VITE_API_BASE_URL}/fileUpload/upload/image`}
                      acceptedTypes="image/webp"
                      maxSizeMB={2}
                      customFileName={`bannerimg${index}.webp`}
                      customDirectory="media/landingpage"
                      onUploadSuccess={(data) => console.log(`Uploaded bannerimg${index}.webp!`, data)}
                    />
                  </div>
                ))}
              </div>
              
              {/* Info Card */}
              <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-xl p-4 transition-colors duration-300">
                <div className="flex items-start gap-3">
                  <Upload className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-blue-900 dark:text-blue-200 mb-1 transition-colors duration-300">Carousel Guidelines</h4>
                    <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 transition-colors duration-300">
                      <li>• Recommended resolution: 1920x1080 pixels</li>
                      <li>• File format: WebP for optimal performance</li>
                      <li>• Maximum file size: 2MB per image</li>
                      <li>• Images will be displayed in order (Banner 01, 02, 03)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Popup Management Section */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden transition-colors duration-300">
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border-b border-gray-200 dark:border-gray-700 px-6 py-4 transition-colors duration-300">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm transition-colors duration-300">
                  <Settings className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">Popup Management</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">Control popup display and upload popup content</p>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <PopupToggle />
            </div>
          </div>

          {/* Popup Media Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden transition-colors duration-300">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-b border-gray-200 dark:border-gray-700 px-6 py-4 transition-colors duration-300">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm transition-colors duration-300">
                  <Image className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">Popup Media</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">Upload and manage popup banner image</p>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="max-w-2xl">
                <UploadCard
                  label="Popup Banner Image"
                  uploadUrl={`${import.meta.env.VITE_API_BASE_URL}/fileUpload/upload/image`}
                  acceptedTypes="image/png,image/webp"
                  maxSizeMB={1}
                  customFileName="popup.webp"
                  customDirectory="media/uploads"
                  onUploadSuccess={(data) => console.log("Uploaded!", data)}
                />
              </div>
              
              {/* Info Card */}
              <div className="mt-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-xl p-4 transition-colors duration-300">
                <div className="flex items-start gap-3">
                  <Upload className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-green-900 dark:text-green-200 mb-1 transition-colors duration-300">Popup Image Guidelines</h4>
                    <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 transition-colors duration-300">
                      <li>• Recommended resolution: 800x600 pixels or 4:3 aspect ratio</li>
                      <li>• Supported formats: PNG or WebP</li>
                      <li>• Maximum file size: 1MB</li>
                      <li>• Image will be displayed as a modal popup on the homepage</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPageContents;
