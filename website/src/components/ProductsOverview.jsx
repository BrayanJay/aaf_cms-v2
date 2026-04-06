import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

const ProductsOverview = () => {
  // Translation data
  const { t } = useTranslation();
  const productsOverview = t("productsOverviewLandingPage", { returnObjects: true });
  const productsOverviewText = t("productsOverviewTextLandingPage", { returnObjects: true });

  return (
    <div>
      <div className="w-full h-full relative px-10 lg:px-20 gap-2 py-10">
        <div className="relative" data-aos="fade-up">
          <h1 className="border-r-8 border-blue-500 pl-5 pr-5 text-xl md:text-2xl lg:text-4xl font-black text-blue-700 text-right">
            {productsOverviewText.title}
          </h1>
          <h2 className="border-r-8 border-blue-500 pl-5 pr-5 pt-1 text-sm lg:text-xl font-medium text-blue-900 text-right">
            {productsOverviewText.subtitle}
          </h2>
          <p className="pb-5 pt-5 text-xs lg:text-sm font-medium lg:font-semibold text-black/50 text-justify">
            {productsOverviewText.description}
          </p>
        </div>

        {/* Swiper for Product Cards */}
        <Swiper
          modules={[Navigation]}
          navigation={true}
          slidesPerView={2}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="mySwiper"
          data-aos="zoom-in"
        >
          {productsOverview.map((product, index) => (
            <SwiperSlide key={index} className="flex justify-center ">
              <Link to={product.link} onClick={ScrollToTop}>
              <div className="relative transition-all duration-300 group w-fit">
                {/* Background Image */}
                <img className='rounded-tr-3xl rounded-bl-3xl h-48 sm:h-64 lg:h-96 w-48 lg:w-60' src={product.image} alt="Product Image" loading="lazy" />

                {/* Overlay for hover effect */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 rounded-tr-3xl rounded-bl-3xl"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20">
                  <h3 className="text-lg md:text-xl lg:text-3xl font-semibold lg:font-black uppercase text-center">
                    {product.title}
                  </h3>
                  <p className="hidden md:block text-xs md:text-sm lg:text-base px-5 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">{product.description}</p>
                </div>
              </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductsOverview;
