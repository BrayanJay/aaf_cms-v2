import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ProfileCard = ({ id, imgSrc, name, title, borderColor, textColor }) => {
  const { t } = useTranslation();
  const data = t("bodTextsAbout", { returnObjects: true });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Enables smooth scrolling
    });
  };
  
  return (
    <div id="top" className="w-40 lg:w-64 lg:h-80 relative mx-auto flex flex-col justify-between">
      
      {/* Profile Image */}
      <div className="flex justify-center mt-4 mb-2">
        <img
          className="w-20 h-20 lg:w-32 lg:h-32 rounded-full shadow border-2 md:border-4"
          src={imgSrc}
          alt={`${name}'s profile`}
          style={{ borderColor }} // Dynamically applying border color
        />
      </div>

      {/* Card Details */}
      <div
        className="flex flex-col justify-center items-center text-center border-t-2 md:border-t-4 pt-4 flex-1"
        style={{ borderColor }} // Dynamic border color for top line
      >
        <h1 className="flex flex-row items-center gap-1">
          <span className="hidden lg:block text-2xl lg:text-4xl font-black" style={{ color: textColor }}>
            “
          </span>
          <span className="text-sm lg:text-2xl font-black" style={{ color: textColor }}>
            {name}
          </span>
        </h1>
        
        <h2 className="text-xs lg:text-sm font-bold md:mt-2" style={{ color: borderColor }}>
          {title}
        </h2>
      </div>

      {/* View Profile - Link to profile page */}
      <div className="pt-2 pb-4 text-black/40 text-xs md:text-sm font-normal text-center cursor-pointer hover:text-black/60">
        <Link to={`/profile/${id}`} onClick={scrollToTop}> 
          <span className="font-medium italic text-black/40 hover:cursor-pointer hover:text-black/60 transition transform ease-in-out duration-300" aria-label='Read More'>
            {data.view_profile_btn}
          </span>
        </Link>
      </div>
    </div>
  );
};

// Prop validation
ProfileCard.propTypes = {
  id: PropTypes.number.isRequired, // id should be a string and is required
  imgSrc: PropTypes.string.isRequired, // imgSrc should be a string and is required
  name: PropTypes.string.isRequired, // name should be a string and is required
  title: PropTypes.string.isRequired, // title should be a string and is required
  borderColor: PropTypes.string, // borderColor should be a string (optional)
  textColor: PropTypes.string, // textColor should be a string (optional)
};

export default ProfileCard;
