import { useEffect, useState } from 'react';
import PropTypes from 'prop-types'; // Import prop-types


//Common Carousel Component
const Carousel = ({ image, extraNote="" }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Fade-in effect on load
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100); // Delay to ensure smooth appearance
  }, []);

  return (
    <div
    id='main-container'
      className={`relative h rounded-b-3xl overflow-hidden transition-opacity duration-1000 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      style={{
        backgroundImage: `url(${image.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
    >
      {/* Overlay for text */}
      <div className="flex flex-col bg-blue-950/40 backdrop-blur-none relative h-[30vh] md:h-[50vh] lg:h-[75vh]">
        <div className="flex flex-col relative justify-center items-start pl-10 lg:pl-20 pt-5 lg:pt-10">
          <h1 className="border-l-4 lg:border-l-8 border-blue-900 text-white text-2xl md:text-4xl lg:text-7xl font-bold uppercase pl-2 lg:pl-4">
            {image.title}</h1>
            <h2 className='border-l-4 lg:border-l-8 border-blue-900 text-white text-base md:text-xl lg:text-4xl font- uppercase pl-2 lg:pl-4 lg:pt-2 tracking-widest'>
              {image.intro} <br/>
              <span className='font-semibold italic text-base md:text-xl lg:text-4xl'>{image.specialnote}</span>
            </h2>
            <div className='w-1/2 pt-2 md:pt-10 italic'>
            <h2 className=' text-white text-[8px] sm:text-xs md:text-base lg:text-xl pl-2 lg:pl-4 lg:pt-2 tracking-widest font-semibold'>
              {extraNote}
            </h2>
            </div>
        </div>
        <div className="flex justify-center pt-2 md:pt-5 lg:pt-20 pb-2 lg:pb-5">
          <p className='text-white text-xs md:text-sm lg:text-xl font-thin text-center uppercase tracking-widest border-b-2 border-amber-400 lg:pb-0'>{image.description}</p>
          </div>
      </div>
    </div>
  );
};

// props validation
Carousel.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    intro: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    specialnote: PropTypes.string.isRequired,
  }).isRequired,
  extraNote: PropTypes.string,
};

export default Carousel;
