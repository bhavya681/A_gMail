import { useState, useEffect } from 'react';
import axios from 'axios';

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState();
  const [convertedAmount, setConvertedAmount] = useState();

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
        const currencyData = response.data;
        setCurrencies(Object.keys(currencyData.rates));
        setExchangeRate(currencyData.rates[toCurrency]);
      } catch (error) {
        console.error('Error fetching currency data:', error);
      }
    };
    fetchCurrencies();
  }, [toCurrency]);

  useEffect(() => {
    if (exchangeRate) {
      setConvertedAmount((amount * exchangeRate).toFixed(2));
    }
  }, [amount, exchangeRate]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  const swapCurrencies = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-4 bg-white rounded-lg shadow-md w-full sm:max-w-md">
        <h2 className="text-lg font-semibold mb-4 text-center">Currency Converter</h2>
        <div className="mb-4">
          <label htmlFor="fromCurrency" className="block mb-2">From Currency:</label>
          <select
            id="fromCurrency"
            className="border border-gray-300 rounded px-3 py-2 w-full mb-2"
            value={fromCurrency}
            onChange={handleFromCurrencyChange}
          >
            {currencies.map(currency => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>

          <label htmlFor="toCurrency" className="block mb-2">To Currency:</label>
          <select
            id="toCurrency"
            className="border border-gray-300 rounded px-3 py-2 w-full mb-2"
            value={toCurrency}
            onChange={handleToCurrencyChange}
          >
            {currencies.map(currency => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>

          <label htmlFor="amount" className="block mb-2">Amount:</label>
          <input
            type="number"
            id="amount"
            className="border border-gray-300 rounded px-3 py-2 w-full mb-2"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>

        <div className="flex items-center justify-between mb-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setConvertedAmount((amount * exchangeRate).toFixed(2))}
          >
            Convert
          </button>
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
            onClick={swapCurrencies}
          >
            Swap
          </button>
        </div>

        <div>
          <p className="text-lg font-semibold mb-2">Result:</p>
          <p className="text-xl">{convertedAmount} {toCurrency}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
