import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
const map = '/media/landingPage/map.svg';
import { HashLink } from 'react-router-hash-link';

// Branch images
//import deniyaya from '../media/branches/deniyaya.svg';

const BranchDetails = () => {
  const { t } = useTranslation();
  const branchDetails = t("branchDetailsLandingPage", { returnObjects: true });
  const navigate = useNavigate();  // For programmatic navigation
  
  const handleBranchNetworkClick = () => {
    // Navigate to /about route (you can specify the full URL if needed)
    navigate('/branchnetwork', { replace: true });
    
    // Scroll to the #branches section after navigation
    setTimeout(() => {
      const element = document.getElementById('branches');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 200); // Delay to allow for navigation before scrolling
  };

  return (
    <div id="main-container" className="flex flex-col lg:flex-row justify-center relative bg-bgdesign bg-cover text-roboto">
      {/* White Fading Layer for Background */}
      <div className="absolute inset-0 bg-white bg-opacity-80"></div>
      {/* Map Image - Left Section */}
      <div className="hidden lg:block lg:basis-1/2 pt-10 md:pt-0 z-10" data-aos="zoom-in">
        <HashLink smooth to="/branchnetwork"><img src={map} alt="Map Image" loading="lazy" /></HashLink>
      </div>
      {/* Contents - Right Section */}
      <div className="lg:basis-1/2 z-10" data-aos="fade-up">
        <div className="relative px-10 lg:px-20 pt-10 lg:pt-20 " data-aos="fade-up">
          <h1 className="border-r-4 lg:border-r-8 border-blue-500 pl-5 pr-5 text-xl md:text-2xl lg:text-4xl font-semibold text-blue-700 text-right">
            {branchDetails.title1} <span className="font-black text-blue-900">{branchDetails.title2}</span>
          </h1>
          <h2 className="border-r-4 lg:border-r-8 border-blue-500 pl-5 pr-5 lg:pt-1 text-xs lg:text-xl font-md text-blue-500 italic text-right">
            {branchDetails.subtitle}
          </h2>
          <p className="pb-5 pt-5 text-xs lg:text-sm font-md text-black/50 text-right">
            {branchDetails.description1} <span className="font-bold text-blue-700">{branchDetails.description2}</span> {branchDetails.description3} <span className="font-bold text-blue-700">{branchDetails.description4}</span> {branchDetails.description5}
          </p>
          <div aria-label="Branch Network Button" onClick={handleBranchNetworkClick} className="z-10 lg:hidden right-10 flex absolute py-1.5 px-3 mt-2 bg-lightbluegradient rounded-tl-lg rounded-br-lg cursor-pointer hover:bg-bluegradient transition delay-200 ease-in-out rounded-sm text-white text-sm font-medium font-roboto">
          {branchDetails.our_branch_network_btn}
          </div>
          {/*<p className="hidden lg:block lg:pl-5 lg:pr-5 lg:pt-5 text-sm lg:text-xl font-bold text-blue-500 italic text-right">{branchDetails.newbranches_title}</p>
          <p className="hidden lg:block pb-5 pt-5 text-xs lg:text-sm font-md text-black/50 text-justify">{branchDetails.newbranches_description}</p>
          */}
          <div className="hidden lg:block flex-col lg:flex-row">
            {/*<div className="lg:basis-1/2">
              <img className="rounded-2xl shadow-lg" src={deniyaya} alt="Deniyaya Branch" />
            </div>*/}
            <div className="lg:pl-3">
              {/*<p className="text-xl font-black text-blue-900">{branchDetails.newest_branch_name}</p>
              <p className="pt-1 text-sm font-md text-blue-900/80 text-justify">{branchDetails.newest_branch_address}</p>
              <p className="text-sm font-md text-blue-900/80 text-justify">{branchDetails.newest_branch_tp}</p>
              <p className="text-sm font-md text-blue-900/80 text-justify">{branchDetails.newest_branch_email}</p>*/}
              <div
                onClick={handleBranchNetworkClick}
                className="right-20 flex absolute py-1.5 px-3 mt-2 bg-lightbluegradient rounded-tl-lg rounded-br-lg cursor-pointer hover:bg-bluegradient transition delay-200 ease-in-out rounded-sm text-white text-sm font-medium font-roboto">
                {branchDetails.our_branch_network_btn}
              </div>
            </div>
          </div>

          {/* Map image for smaller screens */}
          <div className="lg:hidden lg:basis-1/2 pt-10 md:pt-0 z-10" data-aos="zoom-in">
          <HashLink smooth to="/branchnetwork"><img src={map} alt="Branch Map Image" loading="lazy" /></HashLink>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default BranchDetails;
