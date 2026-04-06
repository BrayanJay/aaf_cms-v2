import { useTranslation } from "react-i18next";

const Title = () => {
  const { t } = useTranslation();
  const data = t("titleCareers", { returnObjects: true });

  return (
    <div className='flex flex-col justify-center'>
      <div className='flex justify-center pt-20'>
        <h1 className='text-2xl md:text-3xl lg:text-5xl text-blue-950 text-center'>{data.title1} <span className='font-black text-amber-400 uppercase'>{data.title2}!</span> </h1>
      </div>
      <div className='flex justify-center md:px-40 md:pt-10 px-10 pt-5 font-medium'>
      <span className='text-black/40 text-center text-xs md:text-sm lg:text-lg '>{data.description1}</span>
      </div>
      <div className='hidden sm:flex justify-center md:px-40 px-10 pt-5  font-medium'>
        <span className='text-black/40 text-center text-xs md:text-sm lg:text-lg'>{data.description2}</span>
      </div>
    </div>
  )
}

export default Title
