const logo = '/media/logos/logo.webp';
const mLogo = '/media/logos/muthootLogo.webp';
const greatPlace2Work = '/media/logos/gpw.webp';
const fitchA = '/media/logos/fitchA.webp';
const FiftyPlusYearsLight = '/media/logos/50YearsPlus-light.webp';
const FiftyPlusYearsDark = '/media/logos/50YearsPlus-dark.webp';
const HundredPlusBranchesLight = '/media/logos/100PlusBranches-light.webp';
const HundredPlusBranchesDark = '/media/logos/100PlusBranches-dark.webp';
const SldisEn = '/media/logos/SLDIS-en.webp';
const SldisS = '/media/logos/SLDIS-si.webp';
const SldisTa = '/media/logos/SLDIS-ta.webp';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LanguageSelector from './LanguageSelector';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import { HashLink } from 'react-router-hash-link'
import { useEffect, useState } from 'react'
import i18next from 'i18next'

const useIsSmallScreen = () => {
  const [isSmall, setIsSmall] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isSmall;
};

export const Header = () => {
  const { t } = useTranslation();
  const data = t("header", { returnObjects: true });
  const isSmall = useIsSmallScreen();

  const scrolltoTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
<div id='top-navbar' className=' bg-blue-950 sticky top-0 z-40'>
  <div id='inner-container' className='flex flex-initial justify-between'>
    <div className='flex flex-row'>
    <div id='logo-bg' className='flex bg-white px-2'>
      <Link to="/"><img className='lg:h-20 md:h-16 h-10 md:pl-5 max-w-56 py-1 lg:py-2' alt='Asia Asset Finance Logo' aria-label="Asia Asset Finance Logo" src={logo} onClick={scrolltoTop}></img></Link>
    </div>
    <div id='certificates' className='justify-start md:justify-center w-full h-full md:bg-white p-2 flex items-center lg:gap-5 md:gap-3 gap-2'>
    <a href='https://www.muthootfinance.com' target="_blank" rel="noopener noreferrer"><img className='lg:h-10 md:h-8 h-4 max-w-28 justify-end' alt='Muthoot Finance Logo' aria-label="Muthoot Finance" src={mLogo}></img></a>
      <a href='https://greatplacetowork.lk/best-workplace/asia-asset-finance-plc/' target='_blank'><img className='lg:h-16 md:h-12 h-6' alt='Great Place to Work Certification' aria-label="Great Place to work certification" src={greatPlace2Work}></img></a>
      <a href='https://www.fitchratings.com/entity/asia-asset-finance-plc-90601905#ratings' target='_blank'><img className='lg:h-16 md:h-12 h-6' alt='Fitch Ratings' aria-label="Fitch ratings" src={fitchA}></img></a>
      
      <HashLink smooth to='/about'>
        <img
          className='lg:h-16 md:h-12 h-6'
          src={isSmall ? FiftyPlusYearsLight : FiftyPlusYearsDark}
          alt="50 Years Plus Excellence"
          aria-label="50 Years plus excellence"
        />
      </HashLink>
      <HashLink to="/branchnetwork">
        <img
          className='lg:h-16 md:h-12 h-6'
          src={isSmall ? HundredPlusBranchesLight : HundredPlusBranchesDark}
          alt="100+ Branches"
          aria-label="100+ Branches"
        />
      </HashLink>
      <a href="https://www.cbsl.gov.lk/en/sri-lanka-deposit-insurance-scheme">
        <img
          className='lg:h-16 md:h-12 h-6'
          src={i18next.language === 'si' ? SldisS : i18next.language === 'ta' ? SldisTa : SldisEn}
          alt="SLDIS Membership"
          aria-label="SLDIS Membership Certified"
        />
      </a>
    </div>
    {/*<div className='justify-start md:justify-center w-full h-full p-2 flex items-center lg:gap-5 md:gap-3 gap-2'>
      <img className='lg:h-16 md:h-12 h-6' src={legacy_years}></img>
      <HashLink to="/about/#branches"><img className='lg:h-16 md:h-12 h-6' src={branch_logo}></img></HashLink>
    </div>*/}
    </div>

    <div className='flex flex-row items-center pr-2 md:pr-10'>
    <div id='certificates' className='py-2 px-2 lg:px-10 flex justify-end lg:gap-5 md:gap-3 gap-2'>
      {/*<div className="  ButtonType4 h-12 p-2.5 opacity-75 rounded-tl-lg rounded-br-lg border-2 justify-center items-center gap-2.5 inline-flex mt-4 cursor-pointer hover:bg-goldgradient hover:border-white">
        <FontAwesomeIcon icon={['fas', 'location-dot']} className='text-white hover:text-bluegradient border-white hover:font-bold' size='lg'/>
      </div>*/}
      <Link to="/contacts" onClick={scrolltoTop}>
      <div className=''>
      <div className="lg:h-12 p-1 lg:p-2.5 rounded-tl-lg rounded-br-lg border-2 items-center gap-2.5 cursor-pointer hover:bg-goldgradient text-xs lg:text-sm hidden sm:block" aria-label="Contact Us">
        <FontAwesomeIcon icon={['fas', 'phone']} className='text-white hover:text-bluegradient border-white px-1 lg:px-2'/>
        <span className='text-white border-white '>{data.title}</span>
      </div>
      </div>
      </Link>
      {/*<Link to="/contacts" onClick={scrolltoTop}>
      <FontAwesomeIcon icon={['fas', 'phone']} className='sm:hidden text-white hover:text-amber-400 border-white px-2 items-center'/>
      </Link>*/}
    </div>
    <div className="block self-center content-center" aria-label="Select Language">
      <LanguageSelector/>
    </div>
    </div>
  </div>
</div>
  )
}
