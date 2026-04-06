import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

const gold_ellipse = '/media/aboutPage/goldellipse.webp';
const blue_ellipse = '/media/aboutPage/blueellipse.webp';

const mrPrasanth = '/media/aboutPage/bod/vap.webp';
const mrRajiv = '/media/aboutPage/bod/rja.webp';
import ProfileCard from './ProfileCard'; //Re-usable component

const BOD = () => {
  const { t } = useTranslation();
  const profileDetails = t("bodProfilesAbout", { returnObjects: true });
  const bodTexts = t("bodTextsAbout", { returnObjects: true });

  const scrolltoTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className="w-full h-auto flex flex-col overflow-hidden">
      {/* header Section */}
      <div className='relative text-center pt-5 lg:pt-10 px-10 lg:px-20'>
                <h1 className='inline-block px-5 border-b-2 lg:border-b-4 border-blue-500 text-xl md:text-2xl lg:text-4xl font-semibold text-blue-900' data-aos="fade-up"> {bodTexts.title1} <span className='font-black text-blue-700'> {bodTexts.title2} </span></h1>
                <h2 className='pt-1 text-xs md:text-sm lg:text-lg font-medium italic text-blue-500' data-aos="fade-up">{bodTexts.subtitle}</h2>
                <p className='pb-5 pt-5 text-xs lg:text-sm font-normal text-black/50 text-center' data-aos="fade-up" data-aos-delay	="300">{bodTexts.intro}</p>
            </div>
            
      {/* Chairman Section */}
      <div className="flex flex-row md:gap-40" data-aos="fade-right">
        <img src={gold_ellipse} className="h-72 md:h-96" alt="background design" role="presentation" loading="lazy" />
        <div className="absolute pl-10 sm:pl-20">
          <img
            src={mrPrasanth}
            className="rounded-full h-32 md:h-52 mt-20 shadow-xl border-4 md:border-8 border-blue-500"
            alt="Chairman of Asia Asset Finance PLC, Mr. V A Prasanth"
            loading="lazy"
          />
        </div>

        <div className="flex md:basis-1/3">
          <div className="text-right pl-10 sm:pl-20 md:pl-0 pr-5 flex flex-col pt-20">
            <div className="text-4xl md:text-6xl font-black text-blue-700 pr-5 border-r-4 border-blue-500">
            <span className='hidden lg:block'>“ </span>
              <span className="text-xl md:text-2xl lg:text-4xl font-black text-blue-700 pt-2">
                {bodTexts.chairman_name}
              </span>
            </div>
            <div className="text-xs md:text-sm lg:text-xl font-black text-blue-500 pr-5 border-r-4 border-blue-500">
              {bodTexts.chairman_position}
            </div>

            <div className="pt-5 text-xs md:text-sm font-medium text-black/40 pr-5 text-justify">
              <span className='hidden lg:block text-left'>{bodTexts.chairman_description}</span>
              <Link to={`/profile/1}`} onClick={scrolltoTop}>
                <span className="hidden lg:block font-medium italic text-blue-500 hover:cursor-pointer hover:text-blue-900 transition transform ease-in-out duration-300" aria-label="Read more">
                  {bodTexts.see_more_btn}
                </span>
              </Link>
              <Link to={`/profile/1`} onClick={scrolltoTop}>
                <span className="lg:hidden font-medium italic text-black/40 hover:cursor-pointer hover:text-black/60 transition transform ease-in-out duration-300" aria-label="Read more">
                  {bodTexts.view_profile_btn}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CEO Section */}
      <div className="flex flex-row md:gap-40 justify-end" data-aos="fade-left">
        <div className="flex md:basis-1/3">
          <div className="text-left pl-5 pr-10 sm:pr-20 md:pr-0 flex flex-col pt-20">
            <div className="text-4xl md:text-6xl font-black text-amber-500 pl-5 border-l-4 border-amber-400">
              <span className="text-xl md:text-2xl lg:text-4xl font-black text-amber-500 pt-2">{bodTexts.ceo_name}</span>
              <span className='hidden lg:block'> ”</span>
            </div>
            <div className="text-xs md:text-sm lg:text-xl font-black text-amber-400 pl-5 border-l-4 border-amber-400">
              {bodTexts.ceo_position}
            </div>

            <div className="pt-5 text-xs md:text-sm font-medium text-black/40 pr-5 text-justify">
              <span className='hidden lg:block'>{bodTexts.ceo_description}</span>
              <Link to={`/profile/${profileDetails.id=7}`} onClick={scrolltoTop}>
                <span className="hidden lg:block font-medium italic text-amber-400 hover:cursor-pointer hover:text-amber-500 transition transform ease-in-out duration-300" aria-label="Read more">
                  {bodTexts.see_more_btn}
                </span>
              </Link>
              <Link to={`/profile/7`} onClick={scrolltoTop}>
                <span className="lg:hidden font-medium italic text-black/40 hover:cursor-pointer hover:text-black/60 transition transform ease-in-out duration-300" aria-label="Read more">
                  {bodTexts.view_profile_btn}
                </span>
              </Link>
            </div>
          </div>
        </div>
        <img src={blue_ellipse} className="h-72 md:h-96" alt="background design" role="presentation" loading="lazy" />
        <div className="absolute pr-10 sm:pr-20">
          <img
            src={mrRajiv}
            className="rounded-full h-32 md:h-52 mt-20 shadow-xl border-4 md:border-8 border-amber-400"
            aria-label="CEO of Asia Asset Finance PLC, Mr. R J A Gunawardena"
            loading="lazy"
          />
        </div>
      </div>

      {/* Profile Cards Grid */}
      <div className="w-full h-auto flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 justify-items-center md:justify-items-stretch" data-aos="fade-up">
          {profileDetails.map((profile, idx) => (
            <ProfileCard
              key={idx}
              id={idx + 2}  // Starts from ID from 2
              imgSrc={profile.imgSrc}
              name={profile.name}
              title={profile.title}
              borderColor={idx % 2 === 0 ? '#fbbf24' : '#3b82f6'}
              textColor={idx % 2 === 0 ? '#f59e0b' : '#1d4ed8'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};


export default BOD;
