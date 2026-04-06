import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import DebentureIssueBtn from "./temporary/DebentureIssueBtn";

const HeroBanner = () => {
  const { t } = useTranslation();
  const carouselData = t("carouselLandingPage", { returnObjects: true }); // Translated carousel data
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 3500);

    return () => clearInterval(interval); // Cleanup
  }, [carouselData.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length);
  };


  return (
    <div className="relative w-full aspect-w-16 aspect-h-9 lg:aspect-h-6 overflow-hidden" aria-label="Main Carousel">
      {/* ---------------------- Debenture Issue Button -------------------------------
      <div className="top-5 left-5 hidden sm:block">
      <DebentureIssueBtn
        top="5"
        left="5"
        navigation="/downloads/#debentureIssues"
      >
      </DebentureIssueBtn>
      </div>*/}

      {/* Image slides with text */}
      {carouselData.map((item, idx) => (
        <div
          key={idx}
          className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
            currentIndex === idx ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${item.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay for text */}
          <div className="flex flex-row bg-black/30 h-full">
            <div className="flex-col md:basis-1/2"></div>
            <div className="flex flex-col md:basis-1/2 md:justify-center items-start p-8 h-full gap-2 md:gap-10">
              <h1 className="text-white text-base md:text-lg font-semibold uppercase">
                {item.title}
              </h1>
              <h2 className="border-l-8 border-blue-900 text-white text-2xl md:text-5xl font-bold uppercase pl-4">
                {item.intro}
              </h2>
              <p className="hidden md:block text-white text-xs md:text-md font-medium mt-2 mr-10">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}

      <div className="z-20">
      {/* Previous and Next buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform text-white hover:bg-black/20 bg-opacity-50 rounded-full p-2 z-10"
        aria-label="Pevious Button"
      >
        <FontAwesomeIcon icon={["fas", "chevron-left"]} size="2xl" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform text-white hover:bg-black/20 bg-opacity-50 rounded-full p-2 z-10"
        aria-label="Next Button"
      >
        <FontAwesomeIcon icon={["fas", "chevron-right"]} size="2xl" />
      </button>

      {/* Dots/indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex justify-center items-end pb-12 space-x-2">
        {carouselData.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 lg:w-4 lg:h-4 rounded-full cursor-pointer ${
              currentIndex === idx ? "bg-white" : "bg-white/20"
            }`}
          />
        ))}
      </div>

      </div>


      
    </div>
  );
};

export default HeroBanner;
