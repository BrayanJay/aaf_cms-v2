import { useState } from 'react';

function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'LKR',
      minimumFractionDigits: 2,
    }).format(value);
  };

  const calculateEMI = (amount, rate, tenure) => {
    const monthlyRate = rate / 12 / 100;
    const emi =
      (amount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
      (Math.pow(1 + monthlyRate, tenure) - 1);
    return emi.toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emi = calculateEMI(
      parseFloat(loanAmount),
      parseFloat(interestRate),
      parseInt(loanTenure, 10)
    );
    setMonthlyPayment(emi);
  };

  return (
    <div>
      {/* header Section */}
      <div className='relative text-center pt-5 lg:pt-10 px-10 lg:px-20'>
                <h1 className='inline-block px-5 border-b-2 lg:border-b-4 border-blue-500 text-xl md:text-2xl lg:text-4xl font-semibold text-blue-700' data-aos="fade-up"> Loan <span className='font-bold text-blue-900'> Calculator </span></h1>
                <p className='pt-1 text-xs md:text-sm lg:text-lg font-medium italic text-blue-500' data-aos="fade-up"></p>
                <p className='pb-5 pt-5 text-xs lg:text-sm font-normal text-black/50 text-center' data-aos="fade-up" data-aos-delay	="300"></p>
            </div>
    
    <div className="flex flex-col md:flex-row max-w-4xl mx-auto mb-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200" data-aos="fade-up" data-aos-delay	="300">
      
      <div className='w-full'>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">Loan Amount:</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter loan amount"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Interest Rate (% per annum):</label>
          <input
            type="number"
            step="0.01"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter interest rate"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Loan Tenure (months):</label>
          <input
            type="number"
            value={loanTenure}
            onChange={(e) => setLoanTenure(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter loan tenure in months"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800 transition duration-300"
          aria-label='Click here to Calculate Equated Monthly Instalment'
        >
          Calculate EMI
        </button>
      </form>
      </div>
      {monthlyPayment && (
        <div className="bg-bluegradient shadow-lg w-full h-auto
         flex flex-col mt-6 text-center justify-center items-center p-5 md:m-10 border-spacing-2 border-2 rounded-3xl">
          <h3 className="text-xl font-bold text-white">
            Loan Details:
          </h3>
          <p className="text-base text-white/80">
            Loan Amount: <span className='font-semibold text-white'>{formatCurrency(loanAmount)}</span>
          </p>
          <p className="text-base text-white/80">
            at: <span className='font-semibold text-white'>{parseFloat(interestRate).toFixed(2)}%</span>
          </p>
          <p className="text-base font-base text-white mt-2">
            Equated Monthly Instalment: <span className='text-2xl text-amber-400 font-bold'> {formatCurrency(monthlyPayment)} </span>
          </p>

        </div>
      )}
    </div>
    </div>
  );
}

export default LoanCalculator;
