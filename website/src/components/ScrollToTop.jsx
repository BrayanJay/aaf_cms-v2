import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

//This hooker is used to scroll to the top of the page when navigate between pages
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Use scrollIntoView to ensure proper scrolling behavior
    const topElement = document.getElementById('top');
    if (topElement) {
      topElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location]);

  return (
    <div
      id="top"
      className="absolute top-1" 
    ></div>
  );
};

export default ScrollToTop;
