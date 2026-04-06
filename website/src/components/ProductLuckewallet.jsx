import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Astore = '/media/icons/appStoreBtn.webp';
const Pstore = '/media/icons/playStoreBtn.webp';
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';

const Luckewallet = ({MobilePic, logo}) => {
  const { t } = useTranslation();
  const luckewallet = t("luckewalletLandingPage", { returnObjects: true });


  return (
    <div className='flex flex-col lg:flex-row max-w-auto max-h-auto px-10 lg:px-20'>
      <div className=' lg:basis-1/2 w-full h-full relative gap-2'>

        <div className='relative ' data-aos="fade-up">
            <h1 className='border-l-4 lg:border-l-8 border-blue-500 p-5 text-xl md:text-2xl lg:text-4xl font-semibold text-blue-900'>{luckewallet.title1} <span className='font-bold text-amber-400'>{luckewallet.title2}</span> {luckewallet.title3} </h1>

        </div>
        <div className='hidden lg:block relative p-5' data-aos="fade-up">
            <h2 className='text-sm md:text-lg lg:text-xl font-semibold text-blue-900'> {luckewallet.key_features1} <span className='font-bold text-amber-400'>{luckewallet.key_features2}</span></h2>
            <div className='grid grid-cols-2 grid-flow-row gap-2'>
                
                <div className='relative max-w-64 flex gap-2 pt-5'>
                <FontAwesomeIcon icon={['fas', 'list-check']} className='pt-1 text-blue-700' size='lg'/>
                <div className=''>
                <h3 className='text-blue-700 font-bold text-xs md:text-sm lg:text-base'>{luckewallet.feature1_title}</h3>
                <p className='text-xs text-blue-900/50'>{luckewallet.feature1_description}</p>
                </div>
                </div>

                <div className='relative max-w-64 flex gap-2 pt-5'>
                <FontAwesomeIcon icon={['fas', 'hand-holding-dollar']} className='pt-1 text-blue-700 border-white' size='lg'/>
                <div className=''>
                <h3 className='text-blue-700 font-bold text-xs md:text-sm lg:text-base'>{luckewallet.feature2_title}</h3>
                <p className='text-xs text-blue-900/50'>{luckewallet.feature2_description}</p>
                </div>
                </div>

                <div className='relative max-w-64 flex gap-2 pt-5'>
                <FontAwesomeIcon icon={['fas', 'shield-halved']} className='pt-1 text-blue-700 border-white' size='lg'/>
                <div className=''>
                <h3 className='text-blue-700 font-bold text-xs md:text-sm lg:text-base'>{luckewallet.feature3_title}</h3>
                <p className='text-xs text-blue-900/50'>{luckewallet.feature3_description}</p>
                </div>
                </div>

                <div className='relative max-w-64 flex gap-2 pt-5'>
                <FontAwesomeIcon icon={['fas', 'bell']} className='pt-1 text-blue-700 border-white' size='lg'/>
                <div className=''>
                <h3 className='text-blue-700 font-bold text-xs md:text-sm lg:text-base'>{luckewallet.feature4_title}</h3>
                <p className='text-xs text-blue-900/50'>{luckewallet.feature4_description}</p>
                </div>
                </div>

            </div>
            <div className='flex flex-col pt-10'>
                <div className='font-bold text-blue-950'>{luckewallet.download_now}</div>
            <div className='flex gap-5'>
                <a href='https://apps.apple.com/lk/app/asia-asset-luckewallet/id1637028447'><img className='w-36 hover:cursor-pointer hover:shadow-lg' src={Astore} alt='Click here to Download' loading="lazy" width="144" height="48" /></a>
                <a href='https://play.google.com/store/apps/details?id=com.AsiaAsset.luckewallet&pli=1'><img className='w-36 hover:cursor-pointer hover:shadow-lg' src={Pstore} alt='Click Here to Download' loading="lazy" width="144" height="48" /></a>
            </div>
            </div>
        </div>
      
      </div>
      <div className='flex order-1 md:order-2 basis-1/2 p-5 justify-center items-center' data-aos="fade-right">
            <img src={logo} className='absolute right-0 top-5 w-16 sm:w-24 md:w-32 lg:w-40' alt='Luckewallet Logo' loading="lazy" />
            <img src={MobilePic} className='lg:h-[100vh]' alt='Luckewallet User Interface' loading="lazy" />
        </div>
        <div className='sm:hidden flex gap-5 pt-10'>
                <a href='https://apps.apple.com/lk/app/asia-asset-luckewallet/id1637028447'><img className='w-24 hover:cursor-pointer hover:shadow-lg' src={Astore} alt='Click here to download' loading="lazy" width="96" height="32" /></a>
                <a href='https://play.google.com/store/apps/details?id=com.AsiaAsset.luckewallet&pli=1'><img className='w-24 hover:cursor-pointer hover:shadow-lg' src={Pstore} alt='Click here to download' loading="lazy" width="96" height="32" /></a>

            </div>
    </div>
  )
}

//Prop Validation
Luckewallet.propTypes = {
  MobilePic: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired
};

export default Luckewallet
