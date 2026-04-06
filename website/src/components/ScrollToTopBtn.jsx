import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react'

//This button component is used to navigate to the top of the page when clicked
const ScrollToTopBtn = () => {

  const [visible, setVisible] = useState(false);
  window.onscroll = () => {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      setVisible(true);
    }
    else {
      setVisible(false);
    }
  }

  const scrolltoTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <button aria-label="Scroll to top" onClick={scrolltoTop} className={`${!visible && "hidden"} w-10 h-10 fixed bottom-20 right-1 inline-block p-3 bg-goldgradient text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out z-50`} >
        <span><FontAwesomeIcon icon={['fas', 'arrow-up']} className="text-white hover:transition-all hover:-translate-y-1 text-xl"/></span>
      </button>
    </>
  )
}

export default ScrollToTopBtn
