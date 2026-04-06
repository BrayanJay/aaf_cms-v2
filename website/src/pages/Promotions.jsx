import { useTranslation } from 'react-i18next';


const Promotions = () => {
    const { t } = useTranslation();
  const data = t("promotionsPage", { returnObjects: true });
  return (

    <div className='px-10 lg:px-20 py-10'>
        <h1 className='border-l-4 lg:border-l-8 border-blue-500 px-5 text-xl md:text-2xl lg:text-4xl font-semibold text-blue-900'>{data.title}</h1>
        {/*<div className='flex flex-col w-full h-full bg-transparent text-center '>
            <span className='text-sm md:text-xl lg:text-2xl font-medium text-blue-700'>{data.subtitle}</span>
            <span className='text-xs md:text-sm lg:text-base font-medium text-black/50'>{data.description}</span>
        </div>*/}

        {/*Card */}
        <div className="flex flex-col rounded overflow-hidden shadow-lg my-10">
        <img className="max-w-[600px]" src="/media/attachments/promotions/dream_scheme_promo.webp" alt="Dream Scheme Promotion" loading="lazy" />
        
        {/*Title & Description */}
        <div className="px-6 py-4">
          <div className="font-bold text-xs md:text-lg lg:text-xl">Dream Scheme</div>
          {/*<p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>*/}
        </div>
        
        {/*Tags */}
        {/*<div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>*/}

        </div>
      </div>
  )
}

export default Promotions
