import { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const inputDigit = (digit) => {
    if (waitingForSecondOperand) {
      setDisplay(String(digit));
      setWaitingForSecondOperand(false);
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit);
    }
  };

  const inputDecimal = () => {
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handleOperator = (nextOperator) => {
    const inputValue = parseFloat(display);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = performCalculation();
      setDisplay(String(result));
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  const performCalculation = () => {
    const first = parseFloat(firstOperand);
    const second = parseFloat(display);

    switch (operator) {
      case '+':
        return first + second;
      case '-':
        return first - second;
      case '*':
        return first * second;
      case '/':
        return first / second;
      default:
        return second;
    }
  };

  const resetCalculator = () => {
    setDisplay('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  return (
    <div className="p-6 rounded-lg shadow-md text-center flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="mb-4">
        <input
          type="text"
          className="border border-gray-300 rounded px-3 py-2 w-full text-2xl text-right"
          value={display}
          readOnly
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        <button
          className="col-span-2 bg-gray-200 text-gray-700 px-4 py-3 rounded"
          onClick={resetCalculator}
        >
          AC
        </button>
        <button
          className="bg-gray-200 text-gray-700 px-4 py-3 rounded"
          onClick={() => inputDecimal()}
        >
          .
        </button>
        <button
          className="bg-yellow-500 text-white px-4 py-3 rounded"
          onClick={() => handleOperator('/')}
        >
          /
        </button>
        <button
          className="bg-gray-200 text-gray-700 px-4 py-3 rounded"
          onClick={() => inputDigit(7)}
        >
          7
        </button>
        <button
          className="bg-gray-200 text-gray-700 px-4 py-3 rounded"
          onClick={() => inputDigit(8)}
        >
          8
        </button>
        <button
          className="bg-gray-200 text-gray-700 px-4 py-3 rounded"
          onClick={() => inputDigit(9)}
        >
          9
        </button>
        <button
          className="bg-yellow-500 text-white px-4 py-3 rounded"
          onClick={() => handleOperator('*')}
        >
          *
        </button>
        <button
          className="bg-gray-200 text-gray-700 px-4 py-3 rounded"
          onClick={() => inputDigit(4)}
        >
          4
        </button>
        <button
          className="bg-gray-200 text-gray-700 px-4 py-3 rounded"
          onClick={() => inputDigit(5)}
        >
          5
        </button>
        <button
          className="bg-gray-200 text-gray-700 px-4 py-3 rounded"
          onClick={() => inputDigit(6)}
        >
          6
        </button>
        <button
          className="bg-yellow-500 text-white px-4 py-3 rounded"
          onClick={() => handleOperator('-')}
        >
          -
        </button>
        <button
          className="bg-gray-200 text-gray-700 px-4 py-3 rounded"
          onClick={() => inputDigit(1)}
        >
          1
        </button>
        <button
          className="bg-gray-200 text-gray-700 px-4 py-3 rounded"
          onClick={() => inputDigit(2)}
        >
          2
        </button>
        <button
          className="bg-gray-200 text-gray-700 px-4 py-3 rounded"
          onClick={() => inputDigit(3)}
        >
          3
        </button>
        <button
          className="bg-yellow-500 text-white px-4 py-3 rounded"
          onClick={() => handleOperator('+')}
        >
          +
        </button>
        <button
          className="col-span-2 bg-gray-200 text-gray-700 px-4 py-3 rounded"
          onClick={() => inputDigit(0)}
        >
          0
        </button>
        <button
          className="bg-yellow-500 text-white px-4 py-3 rounded"
          onClick={() => handleOperator('=')}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
