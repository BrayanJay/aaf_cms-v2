import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [activeLanguage, setActiveLanguage] = useState("en");
  const [isOpen, setIsOpen] = useState(false); // For controlling dropdown open/close
  const dropdownRef = useRef(null); // Reference for the dropdown container

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setActiveLanguage(language);
  

  // Change font class on the <html> element
  const htmlElement = document.documentElement;
  htmlElement.classList.remove("font-roboto", "font-sinhala_sans", "font-tamil_sans");
  
  switch (language) {
    case "en":
      document.documentElement.classList.add("font-roboto");
      break;
    case "si":
      document.documentElement.classList.add("font-sinhala_sans");
      break;
    case "ta":
      document.documentElement.classList.add("font-tamil_sans");
      break;
    default:
      document.documentElement.classList.add("font-roboto");
  }

  setIsOpen(false); // Close the dropdown after selecting a language
};

// Close the dropdown when clicking outside
useEffect(() => {
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

  return (
    <div>
      {/*Desktop & Tab Version */}
      {/*<div className="hidden lg:block flex flex-row space-x-1 text-white text-xs md:text-sm lg:text-base font-semibold">
  <button
    className={`h-5 md:h-8 lg:h-10 w-5 md:w-8 lg:w-10 rounded-md border-2 border-white hover:bg-white/20 ${
      activeLanguage === "en" ? "bg-goldgradient" : "bg-transparent text-white"
    }`}
    onClick={() => changeLanguage("en")}
  >
    E
  </button>
  <button
    className={`h-5 md:h-8 lg:h-10 w-5 md:w-8 lg:w-10 rounded-md border-2 hover:text-blue-90 border-white hover:bg-white/20 ${
      activeLanguage === "si" ? "bg-goldgradient" : "bg-transparent text-white"
    }`}
    onClick={() => changeLanguage("si")}
  >
    සි
  </button>
  <button
    className={`h-5 md:h-8 lg:h-10 w-5 md:w-8 lg:w-10 rounded-md border-2 hover:text-blue-90 border-white hover:bg-white/20 ${
      activeLanguage === "ta" ? "bg-goldgradient" : "bg-transparent text-white"
    }`}
    onClick={() => changeLanguage("ta")}
  >
    த
  </button>
</div>*/}




    {/*Mobile Version */}
    <div ref={dropdownRef} className="relative self-center content-center z-50">
      {/* Dropdown button */}
      <button
        className="text-white text-xs md:text-sm lg:text-base font-semibold flex items-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Click here to Select Language"
      >
        <span className="flex h-5 md:h-8 lg:h-10 w-5 md:w-8 lg:w-10 rounded-md bg-goldgradient border-2 justify-center items-center text-xs lg:text-sm">
          {activeLanguage === "en" ? "E" : activeLanguage === "si" ? "සි" : "த"}
        </span>
        <FontAwesomeIcon icon={['fas', 'caret-down']}/>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="max-w-11 absolute bg-white rounded-md shadow-lg">
          <button
            className={`w-full text-left px-2 py-1 lg:px-4 lg:py-2 text-xs lg:text-sm ${
              activeLanguage === "en" ? "bg-blue-200" : ""
            }`}
            onClick={() => changeLanguage("en")}
            aria-label="English"
          >
            E
          </button>
          <button
            className={`w-full text-left px-2 py-1 lg:px-4 lg:py-2 text-xs lg:text-sm ${
              activeLanguage === "si" ? "bg-blue-200" : ""
            }`}
            onClick={() => changeLanguage("si")}
            aria-label="Sinhala"
          >
            සි
          </button>
          <button
            className={`w-full text-left px-2 py-1 lg:px-4 lg:py-2 text-xs lg:text-sm ${
              activeLanguage === "ta" ? "bg-blue-200" : ""
            }`}
            onClick={() => changeLanguage("ta")}
            aria-label="Tamil"
          >
            த
          </button>
        </div>
      )}
    </div>

    </div>
  );
};

export default LanguageSelector;
