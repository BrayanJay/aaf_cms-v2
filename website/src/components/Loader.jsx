import { useEffect, useState } from 'react';
const logo = '/media/logos/logo.webp';
import PropTypes from 'prop-types';

const Loader = ({ duration }) => {
  const [isVisible, setIsVisible] = useState(true);

  // Hide loader after the given duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);
    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, [duration]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-white/70 lg:bg-white/90 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="relative flex justify-center items-center">
        {/* Blinking circle */}
        <div className="absolute w-36 h-36 rounded-full bg-blue-100 animate-blink"></div>
        {/* Logo with zoom-in-out effect */}
        <img
          src={logo}
          alt="Logo"
          className="max-w-48 animate-zoomInOut"
        />
      </div>
    </div>
  );
};

// Prop validation for duration
Loader.propTypes = {
  duration: PropTypes.number.isRequired, // Duration must be a number and is required
};

export default Loader;
