import { useTranslation } from 'react-i18next';

//bankers logoes
const bank1 = '/media/bankers/boc.svg';
const bank2 = '/media/bankers/combank.svg';
const bank3 = '/media/bankers/dfcc.svg';
const bank4 = '/media/bankers/Indian-Bank.svg';
const bank5 = '/media/bankers/ndb.svg';
const bank6 = '/media/bankers/panasia.svg';
const bank7 = '/media/bankers/peoples.svg';
const bank8 = '/media/bankers/sampath.svg';
const bank9 = '/media/bankers/seylan.svg';
const bank10 = '/media/bankers/ntb.svg';

//notice images
// const noticeEn = '/media/uploads/notice_en.webp';
// const noticeSi = '/media/uploads/notice_si.webp';
// const noticeTa = '/media/uploads/notice_ta.webp';
// import i18next from 'i18next';

//logoes array
const logos = [bank8, bank10, bank2, bank3, bank4, bank5, bank6, bank7, bank9, bank1, ]

const CorporateInformation = () => {
    const { t } = useTranslation();
    const corporateProfile = t("corporateProfileIR", { returnObjects: true });

  return (
    <div id='main-container' className='w-full px-10 lg:px-40'>
        {/* Header Section */}
        <div className="flex flex-col relative justify-center items-start pt-10">
            
            {/* Downloads Button */}
            {/* <div className="mt-6">
                <a 
                    href="/media/attachments/annualReports/AGM Registration Form.pdf" target='_blank' rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {corporateProfile.agmButtonText}
                </a>
            </div>
        </div> */}
          
          <h1 className="border-l-4 lg:border-l-8 border-blue-900 text-blue-700 text-xl md:text-2xl lg:text-4xl font-bold pl-2 lg:pl-4">
            {corporateProfile.title1} <span className='font-light text-blue-500'> {corporateProfile.title2}</span>
            </h1>
        </div>

        {/* Body Section */}
        <div className='flex lg:flex-row flex-col lg:gap-40'>
        <div className='flex flex-col lg:basis-1/2 py-5 gap-5 '>
            <div id='company-name'>
                <h3 className='text-sm md:text-xl lg:text-2xl font-medium text-blue-700'>
                {corporateProfile.label1}
                </h3>
                <div className='text-xs lg:text-sm md:text-base font-medium text-blue-900/80'>
                {corporateProfile.field1}
                </div>
            </div>

            <div id='company-rating'>
                <h3 className='text-sm md:text-xl lg:text-2xl font-medium text-blue-700'>
                {corporateProfile.label2}
                </h3>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                {corporateProfile.field2}
                </div>
            </div>

            <div id='legal-form' className='flex flex-col gap-1'>
                <h3 className='text-sm md:text-xl lg:text-2xl font-medium text-blue-700'>
                {corporateProfile.label3}
                </h3>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                {corporateProfile.field3_1}
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                {corporateProfile.field3_2}
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                {corporateProfile.field3_3}
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                {corporateProfile.field3_4}
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                {corporateProfile.field3_5}
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                {corporateProfile.field3_6}
                </div>
            </div>

            <div id='company-reg-no'>
                <h3 className='text-sm md:text-xl lg:text-2xl font-medium text-blue-700'>
                {corporateProfile.label4}
                </h3>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                {corporateProfile.field4}
                </div>
            </div>

            <div id='company-lawyers'>
                <h3 className='text-sm md:text-xl lg:text-2xl font-medium text-blue-700'>
                {corporateProfile.label5}
                </h3>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                <span>
                {corporateProfile.field5}
                </span>
                </div>
            </div>

        </div>

        <div id='bod' className='flex flex-col lg:basis-1/2 py-5 gap-5 '>
            <div className='flex flex-col gap-1'>
                <h3 className='text-sm md:text-xl lg:text-2xl font-medium text-blue-700'>
                {corporateProfile.label6}
                </h3>
                <div className='text-xs lg:text-sm font-bold text-blue-900/80'>
                {corporateProfile.field6_1}
                </div>
                <div className='text-xs lg:text-sm font-bold text-blue-900/80'>
                {corporateProfile.field6_2}
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                {corporateProfile.field6_3}
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                {corporateProfile.field6_4}
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                {corporateProfile.field6_7}
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                {corporateProfile.field6_8}
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                {corporateProfile.field6_9}
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                {corporateProfile.field6_10}
                </div>
            </div>

            <div id='company-secretary'>
                <h3 className='text-sm md:text-xl lg:text-2xl font-medium text-blue-700'>
                {corporateProfile.label7}
                </h3>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                {corporateProfile.field7}
                </div>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80 hover:underline'>
                <a href='mailto:companysecretary@asiaassetfinance.lk'><span>
                {corporateProfile.field7_1}
                </span></a>
                </div>
            </div>

            <div id='company-auditors' className='flex flex-col gap-1'>
                <h3 className='text-sm md:text-xl lg:text-2xl font-medium text-blue-700'>
                {corporateProfile.label8}
                </h3>
                <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
                <span>
                {corporateProfile.field8}
                </span>
                </div> 
            </div>
        </div>
        </div>

          {/* Notice Section */}
        {/* <div id='notice' className='flex flex-col justify-center items-center py-10 px-4 md:px-10 lg:px-20 xl:px-40'>
            <div className="max-w-4xl w-full">
                <img 
                    src={i18next.language === 'si' ? noticeSi : i18next.language === 'ta' ? noticeTa : noticeEn}
                    alt="Notice" 
                    className="w-full h-auto object-contain mx-auto rounded-lg shadow-lg"
                    onError={(e) => {
                        console.error('Failed to load notice image');
                        e.target.style.display = 'none';
                    }}
                />
            </div>
        </div> */}

        {/* Banking Partners Section */}
        <div id='banking-partners' className='px-20 py-5 text-center'>
                <div className='text-xl md:text-2xl lg:text-3xl font-bold text-blue-700'>
                {corporateProfile.label9}
                </div>
                <div className="container mx-auto p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10">
                    {logos.map((Logo, index) => (
                    <div key={index} className="flex items-center justify-center">
                        <img src={Logo} alt={`Logo ${index + 1}`} className="max-w-36" loading="lazy" />
                    </div>
                    ))}
                    </div>
                </div>
                
        </div>

    </div>
  )
}

export default CorporateInformation
