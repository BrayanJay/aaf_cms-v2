import { useEffect, useState } from 'react'

//Chamari's Picture
const Wcu1 = '/media/landingPage/wcu1.webp';
//Staff's Picture
const Wcu2 = '/media/landingPage/wcu2.webp';
import { useTranslation } from "react-i18next";

const   WhyChooseUs = () => {
  const { t } = useTranslation();
  const whyChooseUs = t("whyChooseUs", { returnObjects: true });

  const [aosAnimation, setAosAnimation] = useState("fade-up");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setAosAnimation("fade-right"); // Large screens (lg and above)
      } else {
        setAosAnimation("fade-up"); // Smaller screens
      }
    };

    // Initialize on component mount
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id='main-container' className='flex max-w-auto max-h-auto justify-center px-10 lg:px-20 flex-wrap'>
      <div className='grid grid-cols-1 lg:grid-cols-2 grid-rows-1 grid-flow-row lg:grid-flow-col w-full h-full relative'>

        {/*WCU Images Section */}
        <div className='order-2 lg:order-1 grid grid-cols-2 grid-rows-1 grid-flow-row gap-2'>
        <div className=' rounded-tr-lg rounded-bl-lg p-2 md:p-5' data-aos={aosAnimation} data-aos-delay={aosAnimation === "fade-up" ? 300 : 0} > {/*Add delay only for small screens*/}
            <img className="h-auto rounded-tr-3xl rounded-bl-3xl shadow-lg shadow-black/20" src={Wcu1} aria-label='Image of our brand ambassador Ms. Chamari Athapaththu' loading="lazy" />
        </div>
        <div className='rounded-tr-lg rounded-bl-lg p-2 md:p-5' data-aos={aosAnimation} data-aos-delay={aosAnimation === "fade-up" ? 300 : 0}>
            <img className="rounded-tr-3xl rounded-bl-3xl shadow-lg shadow-black/20" src={Wcu2} aria-label='' loading="lazy" />
        </div>
        </div>

        {/* Text Content Section */}
        <div className='order-1 lg:order-2'>
        <div className='px-2 lg:px-5 border-l-4 lg:border-l-8 border-blue-900' data-aos="fade-up">
            <h1 className='text-xl md:text-2xl lg:text-4xl font-semibold text-blue-700'>{whyChooseUs.title_left} <span className='font-extrabold text-blue-900'>{whyChooseUs.title_right}</span></h1>
            <p className='hidden lg:block text-xs lg:text-base pt-5 text-black/50'>{whyChooseUs.description}</p>
        </div>
        <div className='hidden lg:block pt-5 pr-5 pb-5 bordr-l-5 border-blue-900' data-aos="fade-up">
              <div className='flex flex-row gap-5 justify-center content-center'>
                  <div className='h-32 w-32 lg:h-40 lg:w-40 rounded-tl-md rounded-br-md bg-blue-800/70 text-white font-bold text-center content-center p-3 lg:p-1 text-xs lg:text-sm'>{whyChooseUs.card1}</div>
                  <div className='h-32 w-32 lg:h-40 lg:w-40 rounded-tl-md rounded-br-md bg-blue-800/70 text-white font-bold text-center content-center p-3 lg:p-1 text-xs lg:text-sm'>{whyChooseUs.card2}</div>
                  <div className='h-32 w-32 lg:h-40 lg:w-40 rounded-tl-md rounded-br-md bg-blue-800/70 text-white font-bold text-center content-center p-3 lg:p-1 text-xs lg:text-sm'>{whyChooseUs.card3}</div>
              </div>
        </div>
        </div>
      </div>
      <div className='lg:hidden' data-aos="fade-up" data-aos-delay={aosAnimation === "fade-up" ? 500 : 0}><p className='text-xs lg:text-base pt-5 text-black/50'>{whyChooseUs.description}</p></div>
    </div>
  )
}

export default WhyChooseUs
