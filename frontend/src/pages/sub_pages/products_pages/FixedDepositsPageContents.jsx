import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Landmark, Upload, FileText } from "lucide-react";
import ProductDescription from "../../../components/ProductDescription";
import FileTable from "../../../components/FileTable";
import UploadCard from "../../../components/UploadCard";

function FixedDepositsPageContents() {
    
//Carousel ----- API
  const table_name = "fixed_deposits";
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        await axios.get(`${import.meta.env.VITE_API_BASE_URL}/auth/fixeddepositspagecontents`, {
          withCredentials: true,
        })
      } catch(err){
        navigate('/login')
        console.log(err)
      }
    }

    fetchUser()
  }, [navigate])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg">
              <Landmark className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">Fixed Deposits Page Management</h1>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Manage content, banners, and documents for the fixed deposits product page</p>
            </div>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>

        {/* Banner Upload Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-8 transition-colors duration-300">
          <div className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600 px-6 py-4 transition-colors duration-300">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 transition-colors duration-300">
                <Upload className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">Page Banner</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">Upload banner image for the fixed deposits product page</p>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="max-w-2xl">
              <UploadCard
                label="Fixed Deposits Banner Image"
                uploadUrl={`${import.meta.env.VITE_API_BASE_URL}/fileUpload/upload/image`}
                acceptedTypes="image/png,image/webp"
                maxSizeMB={1}
                customFileName="fdPgBanner.webp"
                customDirectory="media/products"
                onUploadSuccess={(data) => console.log("Uploaded!", data)}
              />
            </div>
            
            {/* Banner Guidelines */}
            <div className="mt-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 transition-colors duration-300">
              <div className="flex items-start gap-3">
                <Upload className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 transition-colors duration-300" />
                <div>
                  <h4 className="font-medium text-green-900 dark:text-green-100 mb-1 transition-colors duration-300">Banner Guidelines</h4>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 transition-colors duration-300">
                    <li>• Recommended resolution: 1920x600 pixels or 16:5 aspect ratio</li>
                    <li>• Supported formats: PNG or WebP</li>
                    <li>• Maximum file size: 1MB</li>
                    <li>• Use professional images related to savings and investments</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Description Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-8 transition-colors duration-300">
          <div className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600 px-6 py-4 transition-colors duration-300">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 transition-colors duration-300">
                <FileText className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">Product Description</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">Manage content and descriptions for fixed deposit products</p>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <ProductDescription 
              table_name={table_name} 
            />
          </div>
        </div>

        {/* Files & Documents Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors duration-300">
          <div className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600 px-6 py-4 transition-colors duration-300">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 transition-colors duration-300">
                <FileText className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">Documents & Files</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">Manage downloadable files and documents for fixed deposit products</p>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <FileTable 
              fileDirectory='products/fixedDeposit/kfd' category="Key Fact Documents"
            />
          </div>
          <div className="p-6">
            <FileTable 
              fileDirectory='products/fixedDeposit/rates' category="FD Rates"
            />
          </div>
          <div className="p-6">
            <FileTable 
              fileDirectory='products/fixedDeposit/accounts' category="collection accounts"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FixedDepositsPageContents;
