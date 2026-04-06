import HeroBanner from '../components/HeroBanner'
import LandingPgCards from '../components/LandingPgCards'
import WhyChooseUs from '../components/WhyChooseUs'
import Luckewallet from '../components/Luckewallet'
import ProductsOverview from '../components/ProductsOverview'
import AllTestimonials from '../components/AllTestimonials'
import BranchDetails from '../components/BranchDetails'
//import TrustedPartners from '../components/TrustedPartners'
import InquiriesForm from '../components/InquiriesForm'
const SideImg = '/media/landingPage/lwallet.webp';
import { Helmet } from 'react-helmet'
import LoanCalculator from '../components/LoanCalculator'


const LandingPage = () => {
  return (
    <>
        {/*Meta Tags for SEO Optimization*/}
        <Helmet>
          <title>Asia Asset Finance | Gold Loans, Fixed Deposits, Sri Lanka</title>
          <meta name="description" content="Asia Asset Finance PLC offers gold loans, fixed deposits, leasing, mortgage and forex services across 100+ branches in Sri Lanka." />
          <meta name="keywords" content="gold loan Sri Lanka, fixed deposits, leasing, mortgage, foreign exchange, finance company Sri Lanka" />
          <link rel="canonical" href="https://www.asiaassetfinance.com/" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.asiaassetfinance.com/" />
          <meta property="og:title" content="Asia Asset Finance | Gold Loans, Fixed Deposits, Sri Lanka" />
          <meta property="og:description" content="Asia Asset Finance PLC offers gold loans, fixed deposits, leasing, mortgage and forex services across 100+ branches in Sri Lanka." />
          <meta property="og:image" content="https://www.asiaassetfinance.com/media/logos/logo.webp" />
          <meta property="og:site_name" content="Asia Asset Finance" />
          <meta property="og:locale" content="en_US" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@AsiaAssetFinance" />
          <meta name="twitter:title" content="Asia Asset Finance | Gold Loans, Fixed Deposits, Sri Lanka" />
          <meta name="twitter:description" content="Asia Asset Finance PLC offers gold loans, fixed deposits, leasing, mortgage and forex services across 100+ branches in Sri Lanka." />
          <meta name="twitter:image" content="https://www.asiaassetfinance.com/media/logos/logo.webp" />

          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            "name": "Asia Asset Finance PLC",
            "url": "https://www.asiaassetfinance.com",
            "logo": "https://www.asiaassetfinance.com/media/logos/logo.webp",
            "description": "Asia Asset Finance PLC offers gold loans, fixed deposits, leasing, mortgage and forex services across 100+ branches in Sri Lanka.",
            "telephone": "+94117699000",
            "email": "info@asiaassetfinance.lk",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "No. 76, Park Street, Colombo 02",
              "addressLocality": "Colombo",
              "addressCountry": "LK"
            },
            "sameAs": [
              "https://www.facebook.com/AsiaAssetFinancePLC/",
              "https://www.instagram.com/asiaassetfinance.lk/",
              "https://lk.linkedin.com/company/asia-asset-finance-plc",
              "https://www.tiktok.com/@asia_asset_finance"
            ]
          })}</script>
        </Helmet>

        <HeroBanner/>
        <LandingPgCards/>
        <WhyChooseUs/>
        <Luckewallet MobilePic={SideImg}/>
        <ProductsOverview/>
        <AllTestimonials/>
        <BranchDetails/>
        {/*<TrustedPartners/>*/}
        <InquiriesForm/>
        <div id='loan_calculator'><LoanCalculator/></div>
    </>
  )
}

export default LandingPage
