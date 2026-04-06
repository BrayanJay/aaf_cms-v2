import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from "react-i18next";


const Navbar = () => {
  const { t } = useTranslation();
  const navbarData = t("navbar", { returnObjects: true });

  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const sidebarRef = useRef(null); // Reference for sidebar
  const dropdownRef = useRef(null); // Ref for dropdown

  const liClasses = 'text-white bg-bluegradient hover:bg-darkbluegradient py-1.5 px-2.5 rounded-tl-lg rounded-br-lg text-sm';

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Close the sidebar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false); // Close sidebar if click is outside sidebar
      }
  
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown(null); // Close dropdown if click is outside dropdown
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); // Effect runs when dropdown state changes

  const scrolltoTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <nav className="bg-white shadow-md sticky top-10 md:top-16 lg:top-20 z-30">
      <div className="container mx-auto flex items-center justify-between h-8 lg:h-12 px-2">

      <div className="flex flex-row justify-center items-center sm:gap-2 md:gap-5">
        <a
          href="tel:1369"
          className="flex flex-row items-center"
        >
          <FontAwesomeIcon
            icon={['fas', 'phone']}
            className="border-2 rounded-3xl transition-all duration-300 ease-in-out text-blue-500 border-blue-500 hover:border-bluegradient text-xs p-1"
            aria-label='Contact Us'
          />
          <span className="px-2 text-black/50 hover:text-blue-700 text-xs font-semibold transition-colors duration-300 ease-in-out">
            <span className='hidden sm:block' aria-label='1369'>1369</span>
          </span>
        </a>
        <a
          href="mailto:info@asiaassetfinance.lk"
          className="flex flex-row items-center"
        >
          <FontAwesomeIcon
            icon={['fas', 'envelope']}
            className="border-2 rounded-3xl transition-all duration-300 ease-in-out text-blue-500 border-blue-500 hover:border-bluegradient text-xs p-1"
            aria-label='Email'
          />
          <span className="px-2 text-black/50 hover:text-blue-700 text-xs font-semibold transition-colors duration-300 ease-in-out">
          <span className='hidden sm:block' aria-label='email address info@asiaassetfinance.lk'>info@asiaassetfinance.lk</span>
          </span>
        </a>
      </div>
        {/*Debenture Issue Button*/}
        
          {/*<div className="sm:hidden flex h-full px-5 items-center bg-lightbluegradient hover:bg-darkbluegradient cursor-pointer">
            <HashLink smooth to="/downloads/#debentureIssues">
              <div className='flex text-white text-xs font-medium'>Debenture Issue 2024</div>
            </HashLink>
          </div>*/}
       
        

        {/* Mobile Hamburger Menu for Sidebar */}
        <div className="lg:hidden">
          <button
            className="text-blue-700 hover:text-blue-900 focus:outline-none"
            onClick={toggleSidebar}
            aria-label='Navigation Bar'
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navbar Tabs - Right side (Visible on larger screens only) */}
        <div className="hidden lg:flex space-x-3">
          {/* Home Tab */}
          <Link className={liClasses} to="" onClick={scrolltoTop} aria-label={navbarData.home}>
          {navbarData.home}
          </Link>

          {/* About Tab with Dropdown */}
          <div className="relative">
            <button
              className={liClasses}
              onClick={() => toggleDropdown('about')}
              aria-label={navbarData.about}
            >
              {navbarData.about}
            </button>
            {dropdown === 'about' && (
              <div ref={dropdownRef} className="absolute left-0 mt-2 w-48 bg-white text-blue-900 text-sm shadow-lg z-50 ">
                <HashLink className="block px-4 py-2 hover:bg-blue-100" aria-label={navbarData.about_dropdown0} smooth to="/about" onClick={() => {setDropdown(null); scrolltoTop()}}>
                {navbarData.about_dropdown0}
                </HashLink>
                <HashLink className="block px-4 py-2 hover:bg-blue-100" aria-label={navbarData.about_dropdown1} smooth to="/about/#mission-vision-goal" onClick={() => setDropdown(null)}>
                {navbarData.about_dropdown1}
                </HashLink>
                <HashLink className="block px-4 py-2 hover:bg-blue-100" aria-label={navbarData.about_dropdown2} smooth to="/about/#bod" onClick={() => setDropdown(null)}>
                {navbarData.about_dropdown2}
                </HashLink>
                <HashLink className="block px-4 py-2 hover:bg-blue-100" aria-label={navbarData.about_dropdown3} smooth to="/about/#corporate-management" onClick={() => setDropdown(null)}>
                {navbarData.about_dropdown3}
                </HashLink>
                <HashLink className="block px-4 py-2 hover:bg-blue-100" aria-label={navbarData.about_dropdown4} smooth to="/branchnetwork" onClick={() => setDropdown(null)}>
                {navbarData.about_dropdown4}
                </HashLink>
              </div>
            )}
          </div>

          {/* Products & Services Tab with Dropdown */}
          <div className="relative">
            <button
              className={liClasses}
              onClick={() => toggleDropdown('products')}
              aria-label={navbarData.products}
            >
              {navbarData.products}
            </button>
            {dropdown === 'products' && (
              <div ref={dropdownRef} className="absolute left-0 mt-2 w-48 bg-white text-sm text-blue-900 shadow-lg z-50">
                {/*<HashLink className="block px-4 py-2 hover:bg-blue-100" smooth to="/products" onClick={() => {setDropdown(null); scrolltoTop()}}>
                {navbarData.products_dropdown1}
                </HashLink>*/}
                <HashLink className="block px-4 py-2 hover:bg-blue-100" aria-label={navbarData.products_dropdown2} smooth to="/gold-loan" onClick={() => {setDropdown(null); scrolltoTop()}}>
                {navbarData.products_dropdown2}
                </HashLink>
                <HashLink className="block px-4 py-2 hover:bg-blue-100" aria-label={navbarData.products_dropdown3} smooth to="/fixed-deposit" onClick={() => {setDropdown(null); scrolltoTop()}}>
                {navbarData.products_dropdown3}
                </HashLink>
                <HashLink className="block px-4 py-2 hover:bg-blue-100" aria-label={navbarData.products_dropdown4} smooth to="/leasing" onClick={() => {setDropdown(null); scrolltoTop()}}>
                {navbarData.products_dropdown4}
                </HashLink>
                <HashLink className="block px-4 py-2 hover:bg-blue-100" aria-label={navbarData.products_dropdown5} smooth to="/mortgage" onClick={() => {setDropdown(null); scrolltoTop()}}>
                {navbarData.products_dropdown5}
                </HashLink>
                <HashLink className="block px-4 py-2 hover:bg-blue-100" aria-label={navbarData.products_dropdown6} smooth to="/foreign-exchange" onClick={() => {setDropdown(null); scrolltoTop()}}>
                {navbarData.products_dropdown6}
                </HashLink>
                <HashLink className="block px-4 py-2 hover:bg-blue-100" aria-label={navbarData.products_dropdown7} smooth to="/luckewallet" onClick={() => {setDropdown(null); scrolltoTop()}}>
                {navbarData.products_dropdown7}
                </HashLink>
              </div>
            )}
          </div>

          {/* Investor Relations Tab with Dropdown */}
          <div className="relative">
            <button
              className={liClasses}
              onClick={() => toggleDropdown('ir')}
              aria-label={navbarData.investor_relations}
            >
              {navbarData.investor_relations}
            </button>
            {dropdown === 'ir' && (
              <div ref={dropdownRef} className="absolute left-0 mt-2 w-48 bg-white text-sm text-blue-900 shadow-lg z-50">
                <HashLink className="block px-4 py-2 hover:bg-blue-100" aria-label={navbarData.investor_relations_dropdown1} smooth to="/ir" onClick={() => {setDropdown(null); scrolltoTop();}}>
                {navbarData.investor_relations_dropdown1}
                </HashLink>
                <HashLink className="block px-4 py-2 hover:bg-blue-100" aria-label={navbarData.investor_relations_dropdown2} smooth to="/ir/#financial-keys" onClick={() => setDropdown(null)}>
                {navbarData.investor_relations_dropdown2}
                </HashLink>

                {/* Downloads*/}
                <HashLink className="block px-4 py-2 hover:bg-blue-100" aria-label={navbarData.downloads} smooth to="/downloads" onClick={() => {setDropdown(null); scrolltoTop();}}>
                {navbarData.downloads}
                </HashLink>
              </div>
            )}
          </div>

          {/* Careers Tab (No Dropdown) */}
          <Link className={liClasses} aria-label={navbarData.careers} to="/careers" onClick={scrolltoTop}>
          {navbarData.careers}
          </Link>

          {/* Downloads Tab (No Dropdown) */}
          {/*<Link className={liClasses} to="/downloads" onClick={scrolltoTop}>
          {navbarData.downloads}
          </Link>*/}
          {/* News Tab (No Dropdown) */}
          <Link className={liClasses} aria-label={navbarData.news} to="/news-and-events" onClick={scrolltoTop}>
            {navbarData.news}
          </Link>
        </div>
      </div>

      {/* -------------------------------------- Mobile Sidebar Menu------------------------------------------------- */}
      {isOpen && (
        <div
          ref={sidebarRef} // Attach the ref here
          className="lg:hidden fixed top-10 right-0 h-fit w-60 z-50"
        >
          <div className="flex flex-col space-y-4 py-4 px-4 bg-blue-950 ">
            <Link className="block text-white hover:text-gray-300 transition-all duration-75 ease-in-out hover:border-b-2 border-white" aria-label={navbarData.home} to="" onClick={() => {toggleSidebar(); scrolltoTop()}}>
            {navbarData.home}
            </Link>
            {/* News Tab (No Dropdown) */}
            <Link className="block text-white hover:text-gray-300 transition-all duration-75 ease-in-out hover:border-b-2 border-white" aria-label={navbarData.news} to="/news-and-events" onClick={toggleSidebar}>
              {navbarData.news}
            </Link>
            <div className="relative transition-all duration-75 ease-in-out hover:border-b-2 border-white">
              <button
                className="block text-white hover:text-gray-300"
                onClick={() => toggleDropdown('about')}
                aria-label={navbarData.about}
              >
                {navbarData.about}
              </button>
              {dropdown === 'about' && (
                <div ref={dropdownRef} className="bg-blue-800 text-white space-y-2 py-2 px-4">
                  <HashLink className="block py-2 hover:text-gray-300" aria-label={navbarData.about_dropdown0} smooth to="/about" onClick={() => {toggleSidebar(); scrolltoTop()}}>
                  {navbarData.about_dropdown0}
                  </HashLink>
                  <HashLink className="block py-2 hover:text-gray-300" aria-label={navbarData.about_dropdown1} smooth to="/about/#mission-vision-goal" onClick={toggleSidebar}>
                  {navbarData.about_dropdown1}
                  </HashLink>
                  <HashLink className="block py-2 hover:text-gray-300" aria-label={navbarData.about_dropdown2} smooth to="/about/#bod" onClick={toggleSidebar}>
                  {navbarData.about_dropdown2}
                  </HashLink>
                  <HashLink className="block py-2 hover:text-gray-300" aria-label={navbarData.about_dropdown3} smooth to="/about/#corporate-management" onClick={toggleSidebar}>
                  {navbarData.about_dropdown3}
                  </HashLink>
                  <HashLink className="block py-2 hover:text-gray-300" aria-label={navbarData.about_dropdown4} smooth to="/branchnetwork" onClick={toggleSidebar}>
                  {navbarData.about_dropdown4}
                  </HashLink>
                  
                </div>
              )}
            </div>

            <div className="relative transition-all duration-75 ease-in-out hover:border-b-2 border-white">
              <button
                className="block text-white hover:text-gray-300"
                onClick={() => toggleDropdown('products')}
                aria-label={navbarData.products}
              >
                {navbarData.products}
              </button>
              {dropdown === 'products' && (
                <div ref={dropdownRef} className="bg-blue-800 text-white space-y-2 py-2 px-4">
                  {/*<HashLink className="block py-2 hover:text-gray-300" to="/products" onClick={() => {toggleSidebar(); scrolltoTop()}}>
                  {navbarData.products_dropdown1}
                  </HashLink>*/}
                  <HashLink className="block py-2 hover:text-gray-300" aria-label={navbarData.products_dropdown2} smooth to="/gold-loan" onClick={() => {toggleSidebar(); scrolltoTop()}}>
                  {navbarData.products_dropdown2}
                  </HashLink>
                  <HashLink className="block py-2 hover:text-gray-300" aria-label={navbarData.products_dropdown3} smooth to="/fixed-deposit" onClick={() => {toggleSidebar(); scrolltoTop()}}>
                  {navbarData.products_dropdown3}
                  </HashLink>
                  <HashLink className="block py-2 hover:text-gray-300" aria-label={navbarData.products_dropdown4} smooth to="/leasing" onClick={() => {toggleSidebar(); scrolltoTop()}}>
                  {navbarData.products_dropdown4}
                  </HashLink>
                  <HashLink className="block py-2 hover:text-gray-300" aria-label={navbarData.products_dropdown5} smooth to="/mortgage" onClick={() => {toggleSidebar(); scrolltoTop()}}>
                  {navbarData.products_dropdown5}
                  </HashLink>
                  <HashLink className="block py-2 hover:text-gray-300" aria-label={navbarData.products_dropdown6} smooth to="/foreign-exchange" onClick={() => {toggleSidebar(); scrolltoTop()}}>
                  {navbarData.products_dropdown6}
                  </HashLink>
                  <HashLink className="block py-2 hover:text-gray-300" aria-label={navbarData.products_dropdown7} smooth to="/luckewallet" onClick={() => {toggleSidebar(); scrolltoTop()}}>
                  {navbarData.products_dropdown7}
                  </HashLink>
                </div>
              )}
            </div>

            <div className="relative transition-all duration-75 ease-in-out hover:border-b-2 border-white">
              <button
                className="block text-white hover:text-gray-300"
                onClick={() => toggleDropdown('ir')}
                aria-label={navbarData.investor_relations}
              >
                {navbarData.investor_relations}
              </button>
              {dropdown === 'ir' && (
                <div ref={dropdownRef} className="bg-blue-800 text-white space-y-2 py-2 px-4">
                  <HashLink className="block py-2 hover:text-gray-300" aria-label={navbarData.investor_relations_dropdown1} smooth to="/ir" onClick={() => {toggleSidebar(); scrolltoTop()}}>
                  {navbarData.investor_relations_dropdown1}
                  </HashLink>
                  <HashLink className="block py-2 hover:text-gray-300" aria-label={navbarData.investor_relations_dropdown2} smooth to="/ir/#financial-keys" onClick={toggleSidebar}>
                  {navbarData.investor_relations_dropdown2}
                  </HashLink>
                  <Link className="block text-white hover:text-gray-300 transition-all duration-75 ease-in-out hover:border-b-2 border-white" aria-label={navbarData.downloads} to="/downloads" onClick={() => {toggleSidebar(); scrolltoTop()}}>
                  {navbarData.downloads}
                  </Link>
                </div>
              )}
            </div>

            <Link className="block text-white hover:text-gray-300 transition-all duration-75 ease-in-out hover:border-b-2 border-white" aria-label={navbarData.careers} to="/careers" onClick={() => {toggleSidebar(); scrolltoTop()}}>
            {navbarData.careers}
            </Link>

            {/*<Link className="block text-white hover:text-gray-300 transition-all duration-75 ease-in-out hover:border-b-2 border-white" to="/downloads" onClick={() => {toggleSidebar(); scrolltoTop()}}>
            {navbarData.downloads}
            </Link>*/}

            <Link className="block text-white hover:text-gray-300 transition-all duration-75 ease-in-out hover:border-b-2 border-white" aria-label={navbarData.contacts} to="/contacts" onClick={() => {toggleSidebar(); scrolltoTop()}}>
            {navbarData.contacts}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
