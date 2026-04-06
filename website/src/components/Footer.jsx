import { useEffect } from 'react'; //import useState if the subcription sector connect
const logo = '/media/logos/footer_logo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();
  const listItems = t("footerListItems", { returnObjects: true });
  const data = t("footerText", { returnObjects: true });

  //const [email, setEmail] = useState('');
  const navigate = useNavigate();

  // Effect to handle smooth scroll after language change
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const elementId = hash.substring(1); // Remove the '#' symbol
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [t.language]); // Runs when the language changes

  {/*
    const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted email: ${email}`);
  };
  */}

  const handleNavigation = (link) => {
    if (!link.includes('#')) {
      // Navigate to the route and scroll to the top
      window.scrollTo({ top: 0, behavior: 'smooth' });
      navigate(link);
    } else {
      // Navigate to the route first
      navigate(link, { replace: true });
  
      // Extract the element ID and scroll to it after navigation
      const elementId = link.split('#')[1];
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Delay to ensure DOM is updated
    }
  };
  
  const scrolltoTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div
      className="px-5 md:px-10 lg:px-20 py-10 bg-blue-950 md:bg-footerBg bg-cover bg-center relative">
        <div className='absolute inset-0 md:bg-blue-950/80 bg-cover backdrop-blur-xs'></div>
      {/* Subscription Section */}
      {/*<div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-8 border-b">
        <div className="flex-1 text-center lg:text-left" data-aos="fade-up">
          <p className="pb-3 text-lg md:text-xl font-medium text-white/80">{data.subs_title1}</p>
          <h1 className="text-2xl md:text-4xl font-semibold text-white/80">
            {data.subs_title2} <br /> {data.subs_title3}!
          </h1>
        </div>
        <div className="flex-1" data-aos="fade-up">
          <p className="pb-3 text-center lg:text-left font-thin text-white/80">
            {data.subs_message}
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row w-full max-w-md mx-auto lg:mx-0"
          >
            <input
              type="email"
              name="email"
              id="email"
              className="flex-grow border border-slate-300 rounded-sm px-3 py-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-sm"
              placeholder={data.subs_field}
              value={email}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-white hover:bg-bluegradient text-blue-700 hover:text-white mt-3 sm:mt-0 sm:ml-2 px-4 py-2 rounded-sm font-semibold"
            >
              {data.subs_btn}
            </button>
          </form>
        </div>
      </div>*/}

      {/* Main Footer Content */}
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-16 py-10 border-b border-white">
        {/* Left Section */}
        <div className="md:basis-1/4 text-center md:text-left">
          <Link to="/" onClick={scrolltoTop}><img className="max-w-48 mx-auto md:mx-0" src={logo} alt="Logo" loading="lazy" data-aos="fade-up" data-aos-once="true"/></Link>
          <p className="mt-4 mb-6 text-sm leading-relaxed text-white/80" aria-label={data.intro} data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
            {data.intro}
          </p>
          <div className="flex flex-col gap-1 text-sm text-white/80">
            <p data-aos="fade-up" data-aos-delay="200" data-aos-once="true"><FontAwesomeIcon icon={['fas', 'location-dot']} className='pr-3' aria-label={data.address}/>{data.address}</p>
            <p data-aos="fade-up" data-aos-delay="300" data-aos-once="true"><FontAwesomeIcon icon={['fas', 'phone']} className='pr-3' aria-label="hotline: 1369"/>1369</p>
            <p data-aos="fade-up" data-aos-delay="400" data-aos-once="true"><FontAwesomeIcon icon={['fas', 'envelope']} className='pr-3' aria-label="email address: info@asiaassetfinance.lk"/>info@asiaassetfinance.lk</p>
          </div>
          <div className="flex justify-center md:justify-start mt-4 gap-3 text-lg" data-aos="fade-up" data-aos-delay="500" data-aos-once="true">
            {[
                { platform: 'facebook', link: 'https://www.facebook.com/AsiaAssetFinancePLC/' },
                { platform: 'instagram', link: 'https://www.instagram.com/asiaassetfinance.lk/' },
                { platform: 'linkedin', link: 'https://lk.linkedin.com/company/asia-asset-finance-plc?trk=public_post_feed-actor-name' },
                /*{ platform: 'youtube', link: 'https://www.youtube.com/@asiaassetfinance5308' },*/
                { platform: 'tiktok', link: 'https://www.tiktok.com/@asia_asset_finance'}
              ].map((icon, idx) => (
              <a
              key={idx}
              href={icon.link}
              target="_blank" // Opens link in a new tab
              rel="noopener noreferrer" // Security measure for external links
              className="transition-all duration-300 ease-in-out text-white/80 hover:text-white"     
              >
              <FontAwesomeIcon
                key={idx}
                icon={['fab', icon.platform]}
                className="cursor-pointer"
                aria-label={icon.platform}
              />
              </a>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap gap-6 md:gap-10 lg:gap-16" data-aos="fade-up" data-aos-delay="500" data-aos-once="true">
          {listItems.map((item, idx) => (
            <div key={idx} className="w-full sm:w-auto">
              <h5 className="font-semibold mb-3 text-white/80" aria-label={item.title}>{item.title}</h5>
              <ul className="flex flex-col gap-3">
                {item.list.map((listItem, listIdx) => (
                  <li key={listIdx} className="transition-all duration-300 ease-in-out text-white/60 hover:text-white cursor-pointer">
                    <span onClick={() => handleNavigation(item.links[listIdx])} aria-label={listItem}>
                      {listItem}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative items-center justify-center py-5 text-center text-white/70  text-xs" aria-label="2024 © Copyright Asia Asset Finance PLC. All Rights Reserved.">
        2024 &copy; Copyright <span className="font-black cursor-pointer hover:text-white transition-colors ease-in-out duration-500">Asia Asset Finance PLC</span>. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
