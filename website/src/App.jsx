import { useEffect, useState, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

//Dependancies and Libraries
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Header } from './components/Header';
import ScrollToTopBtn from './components/ScrollToTopBtn';
import ScrollToTop from './components/ScrollToTop';
import SocialMediaIcons from './components/SocialMediaIcons';

//Pages
const LandingPage          = lazy(() => import('./pages/LandingPage'));
const AboutPage            = lazy(() => import('./pages/AboutPage'));
const InvesterRelationsPage = lazy(() => import('./pages/InvesterRelationsPage'));
const CareerPortal         = lazy(() => import('./pages/subpages/careers/CareerPortal'));
const Downloads            = lazy(() => import('./pages/Downloads'));
const NotFound             = lazy(() => import('./pages/NotFound'));
const NewsAndEvents        = lazy(() => import('./pages/NewsAndEvents'));
const ArticleDetails       = lazy(() => import('./pages/ArticleDetails'));
const Contacts             = lazy(() => import('./pages/Contacts'));
const PersonalProfile      = lazy(() => import('./pages/PersonalProfile'));
const GoldLoanPage         = lazy(() => import('./pages/subpages/products/GoldLoanPage'));
const FixedDepositPage     = lazy(() => import('./pages/subpages/products/FixedDepositPage'));
const LeasingPage          = lazy(() => import('./pages/subpages/products/LeasingPage'));
const MortgagePage         = lazy(() => import('./pages/subpages/products/Mortgage'));
const ForeignExchangePage  = lazy(() => import('./pages/subpages/products/ForeignExchange'));
const LuckewalletPage      = lazy(() => import('./pages/subpages/products/LuckewalletPage'));
const Promotions           = lazy(() => import('./pages/Promotions'));

const CustomerInformation = lazy(() => import('./pages/subpages/CustomerInformation'));
const PrivacyPolicy     = lazy(() => import('./pages/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));
const LuckewalletTutues = lazy(() => import('./pages/subpages/LuckewalletTutes'));
const BranchNetwork     = lazy(() => import('./components/BranchNetwork'));

import Loader from './components/Loader';
import { useTranslation } from 'react-i18next';
import { HashLink } from 'react-router-hash-link';
import Modal from './components/Modal';
import Popup from './components/temporary/Popup';

function App() {
  const { t } = useTranslation();
  //const forexPage = t("forexPage", { returnObjects: true });
  const fdPage = t("fdPage", { returnObjects: true });

  const [isModalOpen, setIsModalOpen] = useState(false);
  //const [isForexModalOpen, setIsForexModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    });
  }, []); // The empty array ensures the effect runs only once when the component mounts.


  const socialMediaIcons = [
    <span key="facebook" className="rounded-full  w-10 h-10 flex justify-center items-center cursor-pointer ">
      <a href="https://www.facebook.com/AsiaAssetFinancePLC/" target="_blank" rel="noopener noreferrer" className="">
            <FontAwesomeIcon icon={['fab', 'facebook']} className="text-blue-700 hover:text-blue-900 text-2xl lg:text-4xl"/>
          </a>
    </span>,

    <span key="instagram" className="rounded-full  w-10 h-10 flex justify-center items-center cursor-pointer ">
    <a href="https://www.instagram.com/asiaassetfinance.lk/" target="_blank" rel="noopener noreferrer" className="">
          <FontAwesomeIcon icon={['fab', 'instagram']} className="text-pink-600 hover:text-pink-800 text-2xl lg:text-4xl"/>
        </a>
    </span>,

    <span key="linkedin" className="rounded-full  w-10 h-10 flex justify-center items-center cursor-pointer ">
    <a href="https://lk.linkedin.com/company/asia-asset-finance-plc?trk=public_post_feed-actor-name" target="_blank" rel="noopener noreferrer" className="">
          <FontAwesomeIcon icon={['fab', 'linkedin']} className="text-blue-500 hover:text-blue-700 text-2xl lg:text-4xl"/>
        </a>
    </span>,

<span key="tiktok" className="rounded-full  w-10 h-10 flex justify-center items-center cursor-pointer ">
    <a href="https://www.tiktok.com/@asia_asset_finance" target="_blank" rel="noopener noreferrer" className="">
          <FontAwesomeIcon icon={['fab', 'tiktok']} className="text-black/80 hover:text-black text-2xl lg:text-4xl"/>
        </a>
    </span>,

    <span key="branch-network" className="rounded-md w-10 h-10 flex justify-center items-center cursor-pointer">
    <HashLink smooth to="/branchnetwork">
          {/*<FontAwesomeIcon icon={['fas', 'location-dot']} className="text-green-500 hover:text-green-600 text-2xl lg:text-4xl"/>*/}
          <img src='/media/icons/map_icon.png' alt='map icon'/>
          </HashLink>
    </span>,

    <span key="fd-rates">
        <button
        className="rounded-full  w-10 h-10 flex justify-center items-center cursor-pointer"
        onClick={() => setIsModalOpen(true)}
        aria-label='Fixed Deposit Rates'
      >
        <FontAwesomeIcon icon={['fas', 'percent']} className="text-amber-400 hover:text-amber-500 text-2xl lg:text-4xl"/>
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="max-w-[600px] mx-10"
      >
        <div className="">
        <div className="flex gap-2 items-center">
        <a href={fdPage.fdRates} download="AAF_FD_RATES" className="ml-auto justify-end">
              <FontAwesomeIcon icon={['fas', 'download']} className="text-white/80 hover:text-white transition-colors duration-300 ease-in-out text-2xl"/>
            </a>
            <button
              className="text-white/60 hover:text-white/80 bg-rose-800 hover:bg-rose-700 transition-colors duration-300 ease-in-out p-2"
              onClick={() => setIsModalOpen(false)}
            >
              X
            </button>

          </div>
          <img src={fdPage.fdRates} alt='Fixed Deposit Rates' className='' loading="lazy" />

        </div>
      </Modal>
    </span>,

    // <span key="forex-rates">
    //     <button
    //     className="rounded-full  w-10 h-10 flex justify-center items-center cursor-pointer"
    //     onClick={() => setIsForexModalOpen(true)}
    //     aria-label='Forex Rates'
    //   >
    //     <FontAwesomeIcon icon={['fas', 'arrow-right-arrow-left']} className="text-indigo-600 hover:text-indigo-700 text-2xl lg:text-4xl"/>
    //   </button>

    //   <Modal
    //     isOpen={isForexModalOpen}
    //     onClose={() => setIsForexModalOpen(false)}
    //     className="max-w-[600px] mx-10"
    //   >
    //     <div className="">
    //     <div className="flex gap-2 items-center">
    //     <a href={forexPage.forexRate} download="AAF_FOREX_RATES" className="ml-auto justify-end">
    //           <FontAwesomeIcon icon={['fas', 'download']} className="text-white/80 hover:text-white transition-colors duration-300 ease-in-out text-2xl"/>
    //         </a>
    //         <button
    //           className="text-white/60 hover:text-white/80 bg-rose-800 hover:bg-rose-700 transition-colors duration-300 ease-in-out p-2"
    //           onClick={() => setIsForexModalOpen(false)}
    //         >
    //           X
    //         </button>

    //       </div>
    //       <img src={forexPage.forexRate} className=''/>

    //     </div>
    //   </Modal>
    // </span>,

    <span key="loan calculator" className="rounded-md w-10 h-10 flex justify-center items-center cursor-pointer">
    <HashLink smooth to="/#loan_calculator">
          <FontAwesomeIcon icon={['fas', 'calculator']} className="text-gray-700 hover:text-gray-800 text-2xl lg:text-4xl"/>
          </HashLink>
    </span>,
  ];

  return (
    <Router basename={import.meta.env.BASE_URL}>
      {/* Default meta — overridden per-page by individual Helmet instances */}
      <Helmet>
        <title>Asia Asset Finance | Gold Loans, Fixed Deposits, Sri Lanka</title>
        <meta name="description" content="Asia Asset Finance PLC offers gold loans, fixed deposits, leasing, mortgage and forex services across 100+ branches in Sri Lanka." />
        <meta name="keywords" content="gold loan Sri Lanka, fixed deposits, leasing, mortgage, foreign exchange, finance company Sri Lanka, Asia Asset Finance" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.asiaassetfinance.com/" />
        <meta property="og:title" content="Asia Asset Finance | Gold Loans, Fixed Deposits, Sri Lanka" />
        <meta property="og:description" content="Asia Asset Finance PLC offers gold loans, fixed deposits, leasing, mortgage and forex services across 100+ branches in Sri Lanka." />
        <meta property="og:image" content="https://www.asiaassetfinance.com/media/logos/logo.webp" />
        <meta property="og:site_name" content="Asia Asset Finance" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Asia Asset Finance | Gold Loans, Fixed Deposits, Sri Lanka" />
        <meta name="twitter:description" content="Asia Asset Finance PLC offers gold loans, fixed deposits, leasing, mortgage and forex services across 100+ branches in Sri Lanka." />
        <meta name="twitter:image" content="https://www.asiaassetfinance.com/media/logos/logo.webp" />
      </Helmet>
      <Loader duration={2000}/>
      <Popup/>

      <div className=''>

        <ScrollToTop/>
        <ScrollToTopBtn/>
        <Header/>
        <Navbar/>
        <div className='z-40 fixed bottom-5 left-5'>
        <SocialMediaIcons direction='up'>{socialMediaIcons}</SocialMediaIcons>
        </div>
        <Suspense fallback={<div className="min-h-screen"><Loader duration={3000} /></div>}>
          <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            {/*<Route path='/products' element={<ProductsAndServicesPage/>}/>*/}
            <Route path='/ir' element={<InvesterRelationsPage/>}/>
            <Route path="/profile/:id" element={<PersonalProfile />} />
            <Route path='/branchnetwork' element={<BranchNetwork/>}/>

            <Route path="/gold-loan" element={<GoldLoanPage />} />
            <Route path="/fixed-deposit" element={<FixedDepositPage />} />
            <Route path="/leasing" element={<LeasingPage />} />
            <Route path="/mortgage" element={<MortgagePage />} />
            <Route path="/foreign-exchange" element={<ForeignExchangePage />} />
            <Route path="/luckewallet" element={<LuckewalletPage />} />

            <Route path="/careers" element={<CareerPortal />} />

            <Route path='/contacts' element={<Contacts/>}/>
            <Route path='/downloads' element={<Downloads/>}/>
            <Route path='/news-and-events' element={<NewsAndEvents/>}/>
            <Route path="/news-and-events/article/:slug" element={<ArticleDetails />} />
            <Route path='/promotions' element={<Promotions/>}/>
            <Route path='/downloads/customer-information' element={<CustomerInformation/>}/>
            <Route path='/downloads/luckewallet-guidelines' element={<LuckewalletTutues/>}/>
            <Route path='/downloads/privacy-policy' element={<PrivacyPolicy/>}/>
            <Route path='/app-privacy-policy' element={<PrivacyPolicy/>}/> {/*Duplicated route coz the old version support*/}

            <Route path='contacts/complaints' element={<Contacts formType='complaint'/>}/> {/*Duplicated route coz the old version support*/}
            <Route path='/customer-complaints' element={<Contacts formType='complaint'/>}/> {/*Duplicated route coz the KYD document*/}

            {/* Lead Wave */}
            {/* <Route path='/test/leadWave/login' element={<Login />} />
            <Route path='/test/leadWave/leadForm' element={<LeadForm />} /> */}

            {/* 404 Page - Catch all unmatched routes */}
            <Route path='*' element={<NotFound />} />

          </Routes>
        </Suspense>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
