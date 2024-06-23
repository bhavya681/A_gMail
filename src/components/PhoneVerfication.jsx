import React, { useState } from 'react';
import axios from 'axios';

const PhoneVerification = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('US'); // Default country code is US
  const [verificationResult, setVerificationResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleCountryCodeChange = (event) => {
    setCountryCode(event.target.value);
  };

  const verifyNumber = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await axios.get(
        'https://api.apilayer.com/validate',
        {
          params: {
            access_key: 'tpOALlYQh95YrC7pxPaK9muBESzwwJ2b', // Replace with your API key
            number: phoneNumber,
            country_code: countryCode,
          },
        }
      );

      if (response.data.valid) {
        setVerificationResult(`Number ${phoneNumber} is valid.`);
      } else {
        setVerificationResult(`Number ${phoneNumber} is not valid.`);
      }
    } catch (error) {
      console.error('Error verifying number:', error);
      setError('Error verifying number. Please try again later.');
    }

    setLoading(false);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Number Verification</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
        <input
          type="text"
          className="border border-gray-300 p-2 rounded-md w-full"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Country Code</label>
        <select
          className="border border-gray-300 p-2 rounded-md w-full"
          value={countryCode}
          onChange={handleCountryCodeChange}
        >
          <option value="US">United States (+1)</option>
          <option value="GB">United Kingdom (+44)</option>
          {/* Add more options for other countries as needed */}
        </select>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
        onClick={verifyNumber}
        disabled={loading || !phoneNumber.trim()}
      >
        {loading ? 'Verifying...' : 'Verify Number'}
      </button>
      {verificationResult && (
        <p className="mt-4 border border-gray-300 p-2 rounded-md bg-gray-50">{verificationResult}</p>
      )}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default PhoneVerification;
