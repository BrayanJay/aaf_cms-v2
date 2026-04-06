import { useTranslation } from 'react-i18next';
import Carousel from '../../../components/Carousel';
import Description from '../../../components/Description';
const banner = '/media/products/luckewalletPgBanner4.webp';
const MobilePic = '/media/products/luckewallet.webp';
const luckewallet_logo = '/media/logos/luckewalletlogo.webp';

const Astore = '/media/icons/appStoreBtn.webp';
const Pstore = '/media/icons/playStoreBtn.webp';
import ProductLuckewallet from '../../../components/ProductLuckewallet';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const LuckewalletPage = () => {
  const { t } = useTranslation();
  const data = t("luckewalletPage", { returnObjects: true });

  const image = {
    src: banner,
    title: data.title,
    intro:data.subtitle,
  };

  return (
    <div id='main-container'>

      {/* G Tagging sources */}
      <Helmet>
        <title>Luckewallet – Digital Payment Solutions</title>
        <meta name="description" content="Simplify transactions with our secure digital wallet. Enjoy fast, convenient, and safe payment options." />
        <meta name="keywords" content="Digital Payment Wallet Sri Lanka"></meta>
        <link rel="canonical" href="https://www.asiaassetfinance.com/luckewallet" />
      </Helmet>

      <div className="relative">

        {/* Page Carousel */}
        <Carousel image={image}/>

        <div className="absolute left-0 bottom-0 flex gap-1 sm:gap-2 md:gap-3 lg:gap-5 p-5">
          <a href="https://apps.apple.com/lk/app/asia-asset-luckewallet/id1637028447">
            <img className="w-24 lg:w-36 hover:cursor-pointer hover:shadow-lg" src={Astore} alt="App Store" loading="lazy" width="144" height="48" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.AsiaAsset.luckewallet&pli=1">
            <img className="w-24 lg:w-36 hover:cursor-pointer hover:shadow-lg" src={Pstore} alt="Play Store" loading="lazy" width="144" height="48" />
          </a>
        </div>
      </div>

      {/* Page Body */}
      <div className='py-12'>
      <Description description={data.description}/>
      </div>
      <ProductLuckewallet MobilePic={MobilePic} logo={luckewallet_logo}/>
      <div className='flex justify-center p-10 gap-5 bg-white'>
      <a href={data.kfd}
          target="_blank"
          rel="noopener noreferrer"><div className='px-3 py-1.5 border-2 border-blue-500 text-blue-500 text-xs sm:text-base hover:text-white text-center hover:bg-bluegradient transition-colors ease-in-out duration-200 font-medium cursor-pointer rounded-xl items-center justify-center' aria-label={data.btn_1}>{data.btn_1}</div></a>
      {/*<a href={Upload}><div className='px-3 py-1.5 border-2 border-amber-400 text-amber-400 hover:text-white text-center hover:bg-bluegradient transition-colors ease-in-out duration-200 font-medium cursor-pointer rounded-xl items-center justify-center'>Charges & Tariff Sheet</div></a>*/}
      <Link to="/downloads/customer-information"><div className='px-3 py-1.5 border-2 border-blue-500 text-xs sm:text-base text-blue-500 hover:text-white text-center hover:bg-bluegradient transition-colors ease-in-out duration-200 font-medium cursor-pointer rounded-xl items-center justify-center' aria-label={data.btn_2}>{data.btn_2}</div></Link>
      <Link to="/downloads/luckewallet-guidelines"><p className='px-3 py-1.5 border-2 border-blue-500 text-xs sm:text-base text-blue-500 hover:text-white text-center hover:bg-bluegradient transition-colors ease-in-out duration-200 font-medium cursor-pointer rounded-xl items-center justify-center'>{/*data.btn_3*/}Guideline Tutorials</p></Link>
      </div>

      <a href='tel://+941369' aria-label="Click Here to Dial">
      <div className="max-w-xs mx-auto bg-amber-300 hover:bg-amber-400 transition-colors duration-300 ease-in-out shadow-lg rounded-lg py-2 px-4 text-center mb-10">
      <h2 className="text-lg font-bold text-blue-700">{data.hotline}</h2>
      <p className="mt-1 text-2xl font-semibold text-gray-800">1369</p>
    </div>
    </a>
    </div>
  )
}

export default LuckewalletPage
