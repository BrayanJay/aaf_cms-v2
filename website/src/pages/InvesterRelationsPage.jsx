import { useTranslation } from 'react-i18next';
import Carousel from '../components/Carousel';
import CorporateInformation from '../components/CorporateInformation';
import FinancialKeys from '../components/FinancialKeys';
import { Helmet } from 'react-helmet';
//import Documents from '../components/Documents';

const InvesterRelationsPage = () => {
  const { t } = useTranslation();
  const bannerDetails = t("bannerIR", { returnObjects: true });
  return (
    <>
    <Helmet>
        <title>Investor Relations – Asia Asset Finance</title>
        <meta name="description" content="Find financial reports, shareholder updates, and corporate governance details for investors and stakeholders." />
        <meta name="keywords" content="Investor Relations Sri Lanka"></meta>
        <link rel="canonical" href="https://www.asiaassetfinance.com/ir" />
      </Helmet>

      <div className='container mx-auto'>
        <Carousel image={bannerDetails}/>
        <div id='corporate-information' className=' bg-white'>
        <CorporateInformation/>
        </div>
        <div id='financial-keys' className='pt-20 md:pt-28 bg-white'>
        <FinancialKeys/>
        </div>
        {/*<Documents/>*/}
    </div>
    </>
    
  )
}

export default InvesterRelationsPage
