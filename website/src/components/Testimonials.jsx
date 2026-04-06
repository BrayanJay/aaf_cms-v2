import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const Testimonial = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1024) setVisibleCount(3); // Large screens
      else if (window.innerWidth >= 768) setVisibleCount(2); // Medium screens
      else setVisibleCount(1); // Small screens
    };

    updateVisibleCount(); // Initialize on mount
    window.addEventListener("resize", updateVisibleCount); // Update on resize

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  // Automatically move to the next set of testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + visibleCount) % testimonials.length);
    }, 2000);

    // Cleanup interval on component unmount or dependency change
    return () => clearInterval(interval);
  }, [visibleCount, testimonials.length]);

  // Get the visible testimonials
  const visibleTestimonials = testimonials
    .slice(currentIndex, currentIndex + visibleCount)
    .concat(
      testimonials.slice(
        0,
        Math.max(0, currentIndex + visibleCount - testimonials.length)
      )
    );

  // Move to the previous set of testimonials
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - visibleCount + testimonials.length) % testimonials.length
    );
  };

  // Move to the next set of testimonials
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + visibleCount) % testimonials.length);
  };

  return (
    <div className="relative w-full py-10">
      {/* Slider Controls */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-blue-700 text-white p-3 rounded-full shadow-lg hover:bg-blue-800"
        onClick={handlePrev}
        title="Previous"
        aria-label="Previous Button"
      >
        <FontAwesomeIcon icon={["fas", "chevron-left"]} size="lg" />
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-700 text-white p-3 rounded-full shadow-lg hover:bg-blue-800"
        onClick={handleNext}
        title="Next"
        aria-label="Next Button"
      >
        <FontAwesomeIcon icon={["fas", "chevron-right"]} size="lg" />
      </button>

      {/* Dynamic Testimonials Component*/}
      <div className="flex justify-center items-stretch gap-4 px-6 overflow-hidden">
        {visibleTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] flex-shrink-0 flex flex-col"
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={testimonial.imageUrl}
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {testimonial.personName}
              </h3>
              <p className="text-sm text-gray-500">{testimonial.location}</p>
            </div>
            <div className="flex-1 mt-4 text-gray-600 text-sm text-center">
              {testimonial.quote}
            </div>
            <div className="flex gap-1 mt-2 justify-center text-yellow-400">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <FontAwesomeIcon key={i} icon={["fas", "star"]} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


// Prop validation
Testimonial.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired, // URL for the profile image
      personName: PropTypes.string.isRequired, // Name of the person
      location: PropTypes.string, // Location (optional)
      quote: PropTypes.string.isRequired, // Testimonial quote
      rating: PropTypes.number.isRequired, // Rating out of 5
    })
  ).isRequired,
};

export default Testimonial;
