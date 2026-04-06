import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const logo = '/media/logos/logo.webp';

export default function Login() {
  const [employeeNumber, setEmployeeNumber] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleContinue = () => {
    const trimmed = employeeNumber.trim();
    if (!/^\d{6}$/.test(trimmed)) {
      setError("Employee Number must be exactly 6 digits.");
      return;
    }

    setError('');
    navigate('/test/leadWave/leadForm', { state: { employeeNumber: trimmed } });
  };

  const handleInputChange = (e) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, '');
    setEmployeeNumber(numericValue);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleContinue();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center relative bg-leadwaveBg px-10 py-10 lg:px-40">
        <div className='absolute inset-0 bg-white/40 bg-cover'></div>
      <div className="bg-white p-8 rounded-3xl shadow-lg max-w-md w-full text-center z-10">
        <img src={logo} alt="Logo" className="mx-auto mb-6 w-max-60 h-20" />
        <h2 className="text-2xl font-bold text-blue-600">Lead Submission Portal</h2>
        <p className="text-gray-500 mt-1 mb-6">Please enter your Employee Number to continue.</p>

        <div className="text-left">
          <label className="block font-semibold mb-2 text-center">Employee Number (HRIS)</label>
          <input
            type="text"
            value={employeeNumber}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            maxLength="6"
            inputMode="numeric"
            placeholder="Enter your number"
            className={`w-full p-3 rounded-lg border focus:outline-none shadow ${error ? 'border-red-500' : 'border-blue-500'} `}
            autoFocus
          />
          {error && <p className="text-red-600 mt-2 text-sm">{error}</p>}
        </div>

        <button
          onClick={handleContinue}
          className="mt-6 w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
