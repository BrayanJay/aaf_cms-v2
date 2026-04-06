import { lazy, Suspense, useState } from 'react';
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
//import SearchStaff from '../components/SearchStaff';

const contactImg = '/media/contactPage/contactPage.webp';
const InquiriesForm = lazy(() => import('../components/InquiriesForm'));
const ComplaintForm = lazy(() => import('../components/ComplaintForm'));

const Contacts = ({formType = 'inquiry'}) => {
  const { t } = useTranslation();
  const data = t("contactsPage", { returnObjects: true });
  const formData = t("inquiryForm", { returnObjects: true });
  
  const [activeTab, setActiveTab] = useState(formType);

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'inquiry':
        return <InquiriesForm />;
      case 'complaint':
        return <ComplaintForm />;
      default:
        return null;
    }
  };

  return (
    <div>
      {/* G Tagging sources */}
    <Helmet>
        <title>Contact Us – Asia Asset Finance</title>
        <meta name="description" content="Reach out for inquiries, loan details, and more. Our friendly team is ready to assist you." />
        <meta name="keywords" content="Finance Support"></meta>
        <link rel="canonical" href="https://www.asiaassetfinance.com/contacts" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FinancialService",
          "name": "Asia Asset Finance PLC",
          "url": "https://www.asiaassetfinance.com",
          "logo": "https://www.asiaassetfinance.com/media/logos/logo.webp",
          "telephone": "1369",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "No. 76, Park Street, Colombo 02",
            "addressLocality": "Colombo",
            "addressCountry": "LK"
          },
          "sameAs": [
            "https://www.facebook.com/AsiaAssetFinancePLC/"
          ]
        })}</script>
      </Helmet>

    <div className="flex flex-col lg:flex-row px-4 sm:px-6 md:px-10 lg:px-20 justify-between">
      {/* Left Content */}
      <div className="flex-1 relative py-6 sm:py-8 md:py-10 flex flex-col gap-3 sm:gap-4">
        <div data-aos="fade-up">
          <h1 className="border-l-4 md:border-l-6 lg:border-l-8 border-blue-500 px-3 sm:px-4 md:px-5 text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold text-blue-900 leading-tight">
            <span className="font-bold text-amber-400">{data.title1} </span>{data.title2} 
          </h1>
          <h2 className="border-l-4 md:border-l-6 lg:border-l-8 border-blue-500 pl-3 sm:pl-4 md:pl-5 pr-3 sm:pr-4 md:pr-5 pb-3 sm:pb-4 md:pb-5 text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-stone-500 leading-relaxed">
          {data.subtitle} 
          </h2>
        </div>
        <div className="flex flex-col py-3 sm:py-4 md:py-5 gap-3 sm:gap-4" data-aos="fade-up" data-aos-delay="200" data-aos-duration="2000">

          <a href="https://maps.app.goo.gl/P8xKjZQj7pUL6R6k9" aria-label='CLick for Directions'>
          <div className="bg-bluegradient hover:bg-darkbluegradient transition-all duration-300 rounded-tl-xl rounded-br-xl text-center text-xs sm:text-sm md:text-base text-white font-extralight py-3 sm:py-4 px-2 sm:px-3 transform hover:scale-105">
            <h3 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl mb-2">{data.card1title}</h3>
            <p className="leading-relaxed">{data.card1Body}</p>
          </div>
          </a>

          <a href="tel:+94117699000" aria-label='CLick to Dial'>
          <div className="bg-bluegradient hover:bg-darkbluegradient transition-all duration-300 rounded-tl-xl rounded-br-xl text-center text-xs sm:text-sm md:text-base text-white font-extralight py-3 sm:py-4 px-2 sm:px-3 transform hover:scale-105">
            <h3 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl mb-2">{data.card3title}</h3>
            <p className="leading-relaxed">{data.card3Body}</p>
          </div>
          </a>

          <a href="tel:+94117170712" aria-label='CLick to Dial'>
          <div className="bg-bluegradient hover:bg-darkbluegradient transition-all duration-300 rounded-tl-xl rounded-br-xl text-center text-xs sm:text-sm md:text-base text-white font-extralight py-3 sm:py-4 px-2 sm:px-3 transform hover:scale-105">
            <h3 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl mb-2">{data.card2title}</h3>
            <p className="leading-relaxed">{data.card2Body}</p>
          </div>
          </a>

          <a href="tel:+94777999922" aria-label='CLick to Dial'>
          <div className="bg-bluegradient hover:bg-darkbluegradient transition-all duration-300 rounded-tl-xl rounded-br-xl text-center text-xs sm:text-sm md:text-base text-white font-extralight py-3 sm:py-4 px-2 sm:px-3 transform hover:scale-105">
            <h3 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl mb-2">{data.card5title}</h3>
            <p className="leading-relaxed">{data.card5Body}</p>
          </div>
          </a>

          <a href="tel:1369" aria-label='CLick to Dial'>
          <div className="bg-bluegradient hover:bg-darkbluegradient transition-all duration-300 rounded-tl-xl rounded-br-xl text-center text-xs sm:text-sm md:text-base text-white font-extralight py-3 sm:py-4 px-2 sm:px-3 transform hover:scale-105">
            <h3 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl mb-2">{data.card6title}</h3>
            <p className="leading-relaxed">{data.card6Body}</p>
          </div>
          </a>

          <a href='mailto:info@asiaassetfinance.lk'>
          <div className="bg-bluegradient hover:bg-darkbluegradient transition-all duration-300 rounded-tl-xl rounded-br-xl text-center text-xs sm:text-sm md:text-base text-white font-extralight py-3 sm:py-4 px-2 sm:px-3 transform hover:scale-105">
            <h3 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl mb-2">{data.card4title}</h3>
            <p className="leading-relaxed">{data.card4Body}</p>
          </div>
          </a>

          <div className="bg-bluegradient rounded-tl-xl rounded-br-xl text-center text-xs sm:text-sm md:text-base text-white font-extralight py-3 sm:py-4 px-2 sm:px-3">
            <h3 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl mb-2">{data.card7title}</h3>
            <div className="leading-relaxed space-y-1">
              <p>{data.card7Body[0]}</p>
              <p>{data.card7Body[1]}</p>
              <p className="font-medium text-xs italic mt-2 text-amber-400">* {data.card7Body[2]}</p>
            </div>
          </div>

        </div>
      </div>

      {/* Right Content (Image) */}
      <div className="flex-1 hidden lg:flex items-center justify-center lg:pl-10" data-aos="fade-in">
        <img className="w-full h-[80vh] object-contain max-h-full" src={contactImg} alt="Contact Us" loading="lazy" />
      </div>
    </div>

    <div id='complaint-form' className="container mx-auto py-8 px-4 mt-20" data-aos="fade-up">
      <div className="flex justify-center mb-6">
        <button
          className={`px-4 py-2 mx-2 rounded-tl-md rounded-br-md ${
            activeTab === 'inquiry'
              ? 'bg-bluegradient text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setActiveTab('inquiry')}
          aria-label='Switch to Inquiry Form'
        >
          {formData.inquiry}
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded-tl-md rounded-br-md ${
            activeTab === 'complaint'
              ? 'bg-bluegradient text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setActiveTab('complaint')}
          aria-label='Switch to Complaints Form'
        >
          {formData.cus_complaint}
        </button>
      </div>
      <div className="content">
        <Suspense fallback={<div className="py-8 text-center text-gray-400">Loading...</div>}>
          {renderActiveTab()}
        </Suspense>
      </div>
      {/* <SearchStaff /> */}
    </div>

    </div>
  );
};

Contacts.propTypes = {
  formType: PropTypes.oneOf(['inquiry', 'complaint'])
};

export default Contacts;
