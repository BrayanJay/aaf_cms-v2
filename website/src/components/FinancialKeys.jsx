import FinancialsCard from './FinancialsCard'
import { useTranslation } from 'react-i18next';

const FinancialKeys = () => {
  const { t } = useTranslation();
  const data = t("keyFinancialsIR", { returnObjects: true });
  return (
    <div className='px-10 lg:px-40 flex flex-col justify-center'>
      <h1 className='text-center  text-blue-700 text-xl md:text-2xl lg:text-4xl font-bold py-2 lg:py-5'>
        {data.title1} <span className='font-light text-blue-500'> {data.title2}</span></h1>

        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-20 py-5">
          <FinancialsCard amount="6,900 Mn" title={data.card1_title} />
          <FinancialsCard amount="441 Mn" title={data.card2_title} />
          <FinancialsCard amount="37,106 Mn" title={data.card3_title} />
          <FinancialsCard amount="12.35%" title={data.card4_title} />
          <FinancialsCard amount="3.55" title={data.card5_title} />
        </div>

        {/* Note section */}
        <div className="text-center py-3">
          <div className="inline-flex items-center bg-rose-50 border border-rose-100 rounded-lg px-2 py-1">
            <svg className="w-4 h-4 mr-2 text-rose-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span className="text-xs italic text-rose-800 font-medium">
              Note: Key Financials as at 31st March 2025
            </span>
          </div>
        </div>


      <div className="block bg-bluegradient rounded-tl-3xl rounded-br-3xl mx-auto w-fit px-5 lg:px-10 my-5">
        <div className="lg:gap-20 flex flex-col sm:flex-row justify-center items-center">


          {/*Share Price Section*/}
          {/*<div className="text-center sm:text-left flex justify-center items-center">
            <div className="text-white text-xl sm:text-2xl font-black">{data.share_price_title}</div>
          </div>
          
          <div className="flex justify-center items-center">
            <div className="p-2 sm:p-4 flex flex-col justify-center items-center">
              <div className="text-white text-sm sm:text-xs font-normal">{data.share_price_req}</div>
              <div className="text-white text-base sm:text-sm font-bold">{data.share_price_name}</div>
              <div className="px-2 flex flex-col justify-center items-center">
                <div className="text-white text-sm sm:text-xs font-normal">{data.share_price_type} {data.share_price_amount}</div>
                <div className="text-white text-sm sm:text-xs font-normal">{data.share_price_percentage}%</div>
              </div>
            </div>
          </div>*/}

        </div>

      </div>

      <div className='flex flex-col gap-2 lg:gap-5 text-center text-xs lg:text-sm font-medium text-black/50 py-5'>
        <span>{data.description_line1}</span>
        <span>{data.description_line2}</span>
        <span>{data.description_line3}</span>
        <span>{data.description_line4}</span>
      </div>
    </div>
  )
}

export default FinancialKeys
