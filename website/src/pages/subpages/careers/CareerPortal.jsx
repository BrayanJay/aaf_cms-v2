import { useTranslation } from 'react-i18next'
const banner = '/media/careersPage/bannerCareers.webp';
import Title from '../../../components/careers/Title'
//import Vacancies from '../../../components/careers/Vacancies'

import Carousel from '../../../components/Carousel'
import { Helmet } from 'react-helmet'

const CareerPortal = () => {
  const { t } = useTranslation();
  const data = t("careersBanner", { returnObjects: true });

  const image = {
    src: banner,
    title: data.title,
  };
  return (
    <>  
    {/* G Tagging sources */}
    <Helmet>
        <title>Careers at Asia Asset Finance – Join Our Team</title>
        <meta name="description" content="Explore finance career opportunities. Develop your skills in a dynamic, growth-oriented environment." />
        <meta name="keywords" content="Finance Careers Sri Lanka"></meta>
        <link rel="canonical" href="https://www.asiaassetfinance.com/careers" />
      </Helmet>

    <div>
        <Carousel image={image}/>
        </div>
        <Title/>
        {/*<Vacancies/>*/}
        <div className='px-5 sm:px-10 lg:px-40 py-10'>
          <iframe
          src='https://asiaassetfinance.net/careers/'
          width="100%"
          height="1000" 
          title="Available Vacancies"
          aria-label='Available Vacancies'
        style={{ border: 'none' }}></iframe>
        </div>
    </>
  );
}

export default CareerPortal
