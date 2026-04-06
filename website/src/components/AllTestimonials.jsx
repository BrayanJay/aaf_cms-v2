import Testimonials from "../components/Testimonials"; //Re-usable testimonial component
import { useTranslation } from "react-i18next";

const AllTestimonials = () => {
  const { t } = useTranslation();
  const testimonials = t("testimonials", { returnObjects: true });
  const testimonialsText = t("testimonialsText", { returnObjects: true });

  return (
    <>
      <div id="main-container" className="w-full h-full relative px-10 lg:px-40 pb-20 bg-white backdrop-blur-sm">
      
      {/*Header Section*/}
      <div className='lg:gap-2 py-10'>
        <div className='relative ' data-aos="fade-up">
                <h1 className='border-l-4 lg:border-l-8 border-blue-500 pl-5 pr-5 text-xl md:text-2xl lg:text-4xl font-black italic text-amber-400'> {testimonialsText.title} </h1>
                <h2 className='border-l-4 lg:border-l-8 border-blue-500 pl-5 pr-5 lg:pt-1 text-sm lg:text-lg font-md text-white/70'>{testimonialsText.subtitle}</h2>
        </div>
      </div>
      {/*Body Section*/}  
      <Testimonials testimonials={testimonials}/>
      </div>
    </>
  );
};

export default AllTestimonials;
