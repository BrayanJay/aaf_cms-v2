import DownloadsCard from '../../components/DownloadsCard';
import { useTranslation } from "react-i18next";

const LuckewalletTutues = () => {
  const { t } = useTranslation();
  const data = t("downloadsTexts", { returnObjects: true });

  const docs = [
    {
      idx: 1,
      title: "New Customer Registration",
      url: "/media/attachments/luckewalletTutes/new_customer_registration.pdf",
    },
    {
      idx: 2,
      title: "Existing Customer Registration",
      url: "/media/attachments/luckewalletTutes/existing_customer_registration.pdf",
    },
    {
      idx: 3,
      title: "External Fund Transfers",
      url: "/media/attachments/luckewalletTutes/fund_transfer_external.pdf",
    },
    {
      idx: 4,
      title: "Internal Fund Transfers",
      url: "/media/attachments/luckewalletTutes/fund_transfer_internal.pdf",
    },
    {
      idx: 5,
      title: "Payee Registration",
      url: "/media/attachments/luckewalletTutes/payee_registration.pdf"
    },
    {
      idx: 6,
      title: "Credit Card Payment",
      url: "/media/attachments/luckewalletTutes/credit_card_payment.pdf"
    },
    {
      idx: 7,
      title: "Biller Registration",
      url: "/media/attachments/luckewalletTutes/biller_registration.pdf"
    },
    {
      idx: 8,
      title: "Bill Payment",
      url: "/media/attachments/luckewalletTutes/bill_payment.pdf"
    },
    {
      idx: 9,
      title: "FD Loans",
      url: "/media/attachments/luckewalletTutes/fd_loans.pdf"
    },
    {
      idx: 10,
      title: "FD Loan Payment",
      url: "/media/attachments/luckewalletTutes/fd_loans_payment.pdf"
    },
    {
      idx: 11,
      title: "Gold Loan Top-up",
      url: "/media/attachments/luckewalletTutes/gold_loan_topup.pdf"
    },
    {
      idx: 12,
      title: "Password Reset",
      url: "/media/attachments/luckewalletTutes/password_reset.pdf"
    },
    {
      idx: 13,
      title: "Statement Download",
      url: "/media/attachments/luckewalletTutes/statement_download.pdf"
    },
    {
      idx: 14,
      title: "FD Creation",
      url: "/media/attachments/luckewalletTutes/fd_creation.pdf"
    },

    // Add more documents here
  ];

  return (
    <div className='flex flex-col lg:flex-row px-10 lg:px-40 py-10'>
      <div className="">
        <div className="border-l-4 lg:border-l-8 border-blue-500 px-5 text-xl md:text-2xl lg:text-4xl font-semibold text-blue-900">
          {/*data.section3*/} <h1>Luckewallet Guidelines Tutorials</h1>
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

export default LuckewalletTutues
