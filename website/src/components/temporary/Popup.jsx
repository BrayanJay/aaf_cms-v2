import { useState, useEffect } from "react";
//import { useNavigate } from "react-router-dom";
//import { HashLink } from "react-router-hash-link";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track modal visibility
  const [isMounted, setIsMounted] = useState(false);
  //const navigate = useNavigate();

  useEffect(() => {
    setIsMounted(true);
    // Open the modal on the first load only
    if (!sessionStorage.getItem("modalShown")) {
        const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem("modalShown", "true");
        }, 2000);

        return () => clearTimeout(timer); // Cleanup the timer
    }
  }, []);

  const closeModal = () => setIsOpen(false); // Function to close modal

  /*const handleImageClick = () => {
    closeModal(); // Close modal before navigating
    //navigate("/downloads/#debentures");
  };*/

  if (!isMounted) return null;

  return (
    isOpen && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        onClick={closeModal} // Close modal on outside click
      >
        <div
          className="relative max-w-[600px] max-w-screen top-10 bg-white rounded-lg shadow-lg animate-scaleUp"
          onClick={(e) => e.stopPropagation()} // Prevent outside click from closing
        >
          {/* Close Button */}
          <button
            className="absolute top-2 right-2 bg-rose-500 hover:bg-rose-600 py-0.5 px-1 text-white/80 rounded-sm hover:text-white"
            onClick={closeModal}
          >
            X
          </button>

          {/* Modal Image */}
            <img
              src="/media/uploads/popup.webp"
              alt="Popup Image"
              className="w-full h-auto"
              //onClick={handleImageClick} // Navigate on image click
            />
        </div>
      </div>
    )
  );
};

export default Popup;
