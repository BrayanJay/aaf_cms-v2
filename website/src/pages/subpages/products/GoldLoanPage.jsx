import Carousel from '../../../components/Carousel'
const banner = '/media/products/gloanPgBanner.webp';
import Description from '../../../components/Description';

import { useTranslation } from "react-i18next";
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';


const GoldLoanPage = () => {
  const { t } = useTranslation();
  const data = t("goldLoanPage", { returnObjects: true });

  const image = {
    src: banner,
    title: data.title,
  };

  return (
    <div id='main-container'>

      {/* G Tagging sources */}
      <Helmet>
        <title>Gold Loans – Low Interest, Quick Approvals</title>
        <meta name="description" content="Secure gold loans at competitive rates with flexible repayment plans and fast processing in Sri Lanka." />
        <meta name="keywords" content="Gold Loans Sri Lanka"></meta>
        <link rel="canonical" href="https://www.asiaassetfinance.com/gold-loan" />
      </Helmet>

      {/* Page Carousel */}
      <Carousel image={image}/>

      {/* Body Section */}
      <div className='py-10'>
      <Description description={data.description} />
      </div>
      
      <div className='flex justify-center gap-5 bg-white'>
      <a href={data.kfd} target="_blank" rel="noopener noreferrer"><div className='px-3 py-1.5 border-2 border-blue-500 text-blue-500 text-xs sm:text-base hover:text-white text-center hover:bg-bluegradient transition-colors ease-in-out duration-200 font-medium cursor-pointer rounded-xl items-center justify-center' aria-label={data.btn_1}>{data.btn_1}</div></a>
      <a href={data.charges_tariff}><div className='px-3 py-1.5 border-2 border-blue-500 text-xs sm:text-base text-blue-500 hover:text-white text-center hover:bg-bluegradient transition-colors ease-in-out duration-200 font-medium cursor-pointer rounded-xl items-center justify-center' aria-label={data.btn_2}>{data.btn_2}</div></a>
      <a href="/media/attachments/GL_Terms_and_conditions.pdf"><div className='px-3 py-1.5 border-2 border-blue-500 text-xs sm:text-base text-blue-500 hover:text-white text-center hover:bg-bluegradient transition-colors ease-in-out duration-200 font-medium cursor-pointer rounded-xl items-center justify-center' aria-label="Terms & Conditions">Terms & Conditions</div></a>
      <Link to="/downloads/customer-information"><div className='px-3 py-1.5 border-2 border-blue-500 text-xs sm:text-base text-blue-500 hover:text-white text-center hover:bg-bluegradient transition-colors ease-in-out duration-200 font-medium cursor-pointer rounded-xl items-center justify-center' aria-label={data.btn_3}>{data.btn_3}</div></Link>
      </div>
      <div className='text-rose-800 text-center text-xs sm:text-sm py-2'>{data.note}</div>

      <a href='tel://+941369' aria-label="Click here to Dial">
      <div className="max-w-xs mx-auto bg-amber-300 hover:bg-amber-400 transition-colors duration-300 ease-in-out shadow-lg rounded-lg py-2 px-4 text-center my-10">
      <h2 className="text-lg font-bold text-blue-700">{data.hotline}</h2>
      <p className="mt-1 text-2xl font-semibold text-gray-800">1369</p>
    </div>
    </a>
      
    </div>
  )
}

export default GoldLoanPage
