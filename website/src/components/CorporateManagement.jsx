import { useTranslation } from "react-i18next";

import ProfileCard from './ProfileCard'; //Re-usable Component

const CorporateManagement = () => {
    const { t } = useTranslation();
    const profileDetails = t("comProfilesAbout", { returnObjects: true });
    const comTexts = t("comTextsAbout", { returnObjects: true });


  return (
    <div id="main-container" className='w-full h-full relative px-10 lg:px-20 gap-2 pt-10'>

            {/* Header Section */}
            <div className='relative ' data-aos="fade-up">
                <h1 className='border-r-4 lg:border-r-8 border-blue-500 px-5 text-xl md:text-2xl lg:text-4xl font-semibold text-blue-900 text-right'> {comTexts.title1} <span className='font-black text-blue-700'> {comTexts.title2} </span></h1>
                <h2 className='border-r-4 lg:border-r-8 border-blue-500 px-5 md:pt-1 text-xs md:text-sm lg:text-xl font-medium italic text-blue-500 text-right'>{comTexts.subtitle}</h2>
                <p className='py-5 text-xs lg:text-sm font-normal text-black/50 text-justify'>{comTexts.description}</p>
            </div>

            {/* Corporate Management */}

            <div className="w-full h-auto flex justify-center mt-10">
            {/* Grid Layout for Profile Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center md:justify-items-stretch" data-aos="fade-up">
                {profileDetails.map((profile, idx) => (
                    <ProfileCard
                    key={idx}
                    id={idx + 7} //Id starts from 10 according to the array
                    imgSrc={profile.imgSrc}
                    name={profile.name}
                    title={profile.title}
                    borderColor={idx % 2 === 0 ? '#fbbf24' : '#3b82f6 '}
                    textColor={idx % 2 === 0 ? '#f59e0b ' : '#1d4ed8 '}
                    />
                ))}
            </div>
            </div>

    </div>
  )
}

export default CorporateManagement
