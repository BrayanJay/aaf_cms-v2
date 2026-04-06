import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { useState } from 'react';

//Overlayed Icon Bar (Social Media, Branch Network and FD Rate)
const SocialMediaIcons = ({ children, direction = "up" }) => {
  const [show, setShow] = useState(true);

  //Can use which direction to expand the icon bar
  const getPosition = (i) => {
    if (direction === "up") return { top: `${-(i + 1) * 50}px`, left: 0 };
    if (direction === "down") return { top: `${(i + 1) * 50}px`, left: 0 };
    if (direction === "left") return { left: `${-(i + 1) * 50}px`, top: 0 };
    if (direction === "right") return { left: `${(i + 1) * 50}px`, top: 0 };
  };

  //Animation effect
  const getTransitionDelay = (i) => {
    if (show) return { transitionDelay: `${i * 100}ms` };
    else return { transitionDelay: `${(children.length - i - 1) * 100}ms` };
  };

  return (
    <div id='main-container' className="inline-block relative w-fit h-fit" onClick={() => setShow((prevShow) => !prevShow)}>
      <span
        className={`text-white w-10 h-10 flex justify-center items-center`}
      >
        {/* Dynamically change icon */}
        <FontAwesomeIcon
          icon={['fas', show ? 'minus' : 'plus']}
          className={`text-black text-xs md:text-sm lg:text-2xl border-2 border-black/50 hover:border-2 hover:border-black/50 hover:bg-black/10 rounded-full p-2 cursor-pointer transition ${
            show ? "rotate-180" : ""
          }`}
        />
      </span>

      <ul className={!show ? "pointer-events-none" : ""}>
        {children.map((item, i) => (
          <li
            key={i}
            className={`absolute z-50 ${show ? "scale-100" : "scale-0"} transition duration-300`}
            style={{ ...getTransitionDelay(i), ...getPosition(i) }}
            aria-label={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

// PropTypes validation
SocialMediaIcons.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,  // Expect an array of React elements
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),  // Expect one of the four possible directions
};

export default SocialMediaIcons;
