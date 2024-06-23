import React, { useState } from 'react';
import axios from 'axios';

const EmailVerification = () => {
  const [email, setEmail] = useState('');
  const [verificationResult, setVerificationResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const verifyEmail = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await axios.get('https://api.apilayer.com/check', {
        params: {
          access_key: 'YOUR_API_KEY', // Replace with your actual API key
          email: email,
        },
      });

      if (response.data.format_valid && response.data.smtp_check) {
        setVerificationResult(`Email ${email} is valid.`);
      } else {
        setVerificationResult(`Email ${email} is not valid.`);
      }
    } catch (error) {
      console.error('Error verifying email:', error);
      setError('Error verifying email. Please try again later.');
    }

    setLoading(false);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Email Verification</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Email Address</label>
        <input
          type="email"
          className="border border-gray-300 p-2 rounded-md w-full"
          placeholder="Enter email address"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
        onClick={verifyEmail}
        disabled={loading || !email.trim()}
      >
        {loading ? 'Verifying...' : 'Verify Email'}
      </button>
      {verificationResult && (
        <p className="mt-4 border border-gray-300 p-2 rounded-md bg-gray-50">{verificationResult}</p>
      )}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default EmailVerification;
