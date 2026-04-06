import DownloadsCard from '../../components/DownloadsCard';
import { useTranslation } from "react-i18next";

const CustomerInformation = () => {
  const { t } = useTranslation();
  const data = t("downloadsTexts", { returnObjects: true });

  const docs = [
    {
      idx: 1,
      title: "Finance Business Act, No. 42 OF 2011",
      url: "/media/attachments/customerInformation/finance_business_act_no_42_of_2011.pdf",
    },
    {
      idx: 2,
      title: "AAF - Finance Business Licence",
      url: "/media/attachments/customerInformation/finance_business_licence_aaf.pdf",
    },
    {
      idx: 3,
      title: "Directions, Rules, Determinations, Notices, and Guidelines",
      url: "/media/attachments/customerInformation/lfc_s_direction_book.pdf",
    },
    {
      idx: 4,
      title: "Finance Leasing Lisence",
      url: "/media/attachments/customerInformation/finance_leasing_lisence.pdf"
    },
    {
      idx: 5,
      title: "Customer Complaint Handling Procedure",
      url: "/media/attachments/customerInformation/CustomerComplaintHandlingProcedure.pdf",
    },
    {
      idx: 6,
      title: "Financial Consumer Protection",
      url: "/media/attachments/customerInformation/FinancialConsumerProtectionPolicy.pdf",
    },
    {
      idx: 7,
      title: "Financial Consumer Protection Regulations - English",
      url: "/media/attachments/customerInformation/FinancialConsumerProtectionRegulations-EN.pdf",
    },
    {
      idx: 8,
      title: "Financial Consumer Protection Regulations - Sinhala",
      url: "/media/attachments/customerInformation/FinancialConsumerProtectionRegulations-SI.pdf",
    },
    {
      idx: 9,
      title: "Financial Consumer Protection Regulations - Tamil",
      url: "/media/attachments/customerInformation/FinancialConsumerProtectionRegulations-TA.pdf",
    },

    // Add more documents here
  ];

  return (
    <div className='flex flex-col lg:flex-row px-10 lg:px-40 py-10'>
      <div className="">
        <div className="border-l-4 lg:border-l-8 border-blue-500 px-5 text-xl md:text-2xl lg:text-4xl font-semibold text-blue-900">
          <h1>{data.section3}</h1>
          <div className='text-xs lg:text-sm font-medium text-blue-900/80'>
              {data.intro3}
            </div>
        </div>
        <div id="customer-information" className="">
          <div className='py-5 lg:py-10 flex flex-col items-center'>
            
            <div className="flex justify-center items-center w-full">
          <DownloadsCard documents={docs} />
        </div>
          </div>
          </div>
      </div>
    </div>
  );
};

export default CustomerInformation
