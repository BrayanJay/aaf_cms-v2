import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UploadCard from "../../components/UploadCard";
import GetProfileDetails from "../../components/profiles/ProfileData";

function AboutPageContents() {

  const tokenUrl = `${import.meta.env.VITE_API_BASE_URL}/auth/aboutpagecontents`

  const navigate = useNavigate()
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        await axios.get(tokenUrl, {
          withCredentials: true 
        })
      } catch(err){
        navigate('/login')
        console.log(err)
      }
    }
    
    fetchUser()
  }, [navigate, tokenUrl])

  return (
    <div className="flex justify-center container py-20 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="flex flex-col gap-10 w-full m-10 px-20">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">About Page Banner</h2>
          <UploadCard
            label={`Carousel`}
            uploadUrl={`${import.meta.env.VITE_API_BASE_URL}/fileUpload/upload/image`}
            acceptedTypes="image/webp"
            maxSizeMB={2}
            customFileName={`bannerAbout.webp`}
            customDirectory="media/landingpage"
            onUploadSuccess={(data) => console.log(`Uploaded bannerAbout.webp!`, data)}
          />
        </div>
        {/* <div className="">
          <label className="text-blue-800 font-semibold text-xl">Profile Details</label>
          {ids.length > 0 && 
            ids.map((id) => (
              <div key={id} className="pt-2.5">
                <label className="text-blue-600 font-semibold text-lg">Profile {id}</label>
                <ProfileData id={id} tokenUrl={tokenUrl}/>
              </div>
            ))
          }
        </div> */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">Profile Management</h2>
          <GetProfileDetails/>
        </div>
      </div>
    </div>
  );
}

export default AboutPageContents;
