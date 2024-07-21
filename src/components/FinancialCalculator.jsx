// // src/components/FinancialCalculator.jsx
// import React from 'react';

// const FinancialCalculator = () => {
//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold">Financial Calculator</h2>
//       <p>Welcome to the Financial Calculator page.</p>
//       {/* Add your calculator logic here */}
//     </div>
//   );
// };

// export default FinancialCalculator;


import React, { useState } from "react";

const FinancialCalculator = () => {
  const [calculatorType, setCalculatorType] = useState("simpleInterest");

  const renderCalculator = () => {
    switch (calculatorType) {
      case "simpleInterest":
        return <SimpleInterestCalculator />;
      case "compoundInterest":
        return <CompoundInterestCalculator />;
      case "currency":
        return <CurrencyCalculator />;
      case "salary":
        return <SalaryCalculator />;
      case "retirement":
        return <RetirementCalculator />;
      case "salesTax":
        return <SalesTaxCalculator />;
      case "investment":
        return <InvestmentCalculator />;
      default:
        return null;
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Financial Calculator</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Calculator:
        </label>
        <select
          className="block w-full p-2 border border-gray-300 rounded-md"
          value={calculatorType}
          onChange={(e) => setCalculatorType(e.target.value)}
        >
          <option value="simpleInterest">Simple Interest Calculator</option>
          <option value="compoundInterest">Compound Interest Calculator</option>
          <option value="currency">Currency Calculator</option>
          <option value="salary">Salary Calculator</option>
          <option value="retirement">Retirement Calculator</option>
          <option value="salesTax">Sales and Tax Calculator</option>
          <option value="investment">Investment Calculator</option>
        </select>
      </div>
      {renderCalculator()}
    </div>
  );
};

const SimpleInterestCalculator = () => {
  const [principal, setPrincipal] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [timePeriod, setTimePeriod] = useState(0);
  const [simpleInterest, setSimpleInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateSimpleInterest = () => {
    const interest = (principal * interestRate * timePeriod) / 100;
    const total = principal + interest;
    setSimpleInterest(interest);
    setTotalAmount(total);
  };

  return (
    <div className="p-4 border rounded-md shadow-md mb-4">
      <h3 className="text-xl font-semibold mb-4">Simple Interest Calculator</h3>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Principal Amount:
        </label>
        <input
          className="block w-full p-2 border border-gray-300 rounded-md"
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(Number(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Interest Rate:
        </label>
        <input
          className="block w-full p-2 border border-gray-300 rounded-md"
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Time Period (in years):
        </label>
        <input
          className="block w-full p-2 border border-gray-300 rounded-md"
          type="number"
          value={timePeriod}
          onChange={(e) => setTimePeriod(Number(e.target.value))}
        />
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={calculateSimpleInterest}
      >
        Calculate
      </button>
      <div className="mt-4">
        <h4 className="text-lg font-medium">Simple Interest: {simpleInterest}</h4>
        <h4 className="text-lg font-medium">Total Amount: {totalAmount}</h4>
      </div>
    </div>
  );
};

const CompoundInterestCalculator = () => {
  const [principal, setPrincipal] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [compoundingFrequency, setCompoundingFrequency] = useState(0);
  const [timePeriod, setTimePeriod] = useState(0);
  const [compoundInterest, setCompoundInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateCompoundInterest = () => {
    const amount =
      principal *
      Math.pow(
        1 + interestRate / (100 * compoundingFrequency),
        compoundingFrequency * timePeriod
      );
    const interest = amount - principal;
    setCompoundInterest(interest);
    setTotalAmount(amount);
  };

  return (
    <div className="p-4 border rounded-md shadow-md mb-4">
      <h3 className="text-xl font-semibold mb-4">Compound Interest Calculator</h3>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Principal Amount:
        </label>
        <input
          className="block w-full p-2 border border-gray-300 rounded-md"
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(Number(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Interest Rate:
        </label>
        <input
          className="block w-full p-2 border border-gray-300 rounded-md"
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Compounding Frequency:
        </label>
        <input
          className="block w-full p-2 border border-gray-300 rounded-md"
          type="number"
          value={compoundingFrequency}
          onChange={(e) => setCompoundingFrequency(Number(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Time Period (in years):
        </label>
        <input
          className="block w-full p-2 border border-gray-300 rounded-md"
          type="number"
          value={timePeriod}
          onChange={(e) => setTimePeriod(Number(e.target.value))}
        />
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={calculateCompoundInterest}
      >
        Calculate
      </button>
      <div className="mt-4">
        <h4 className="text-lg font-medium">Compound Interest: {compoundInterest}</h4>
        <h4 className="text-lg font-medium">Total Amount: {totalAmount}</h4>
      </div>
    </div>
  );
};

const CurrencyCalculator = () => {
  const [amount, setAmount] = useState(0);
  const [sourceCurrency, setSourceCurrency] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const convertCurrency = () => {
    // Implement currency conversion logic here (API call or predefined rates)
    // For simplicity, let's assume a straightforward conversion
    const conversionRate = 0.85; // Example conversion rate
    const converted = amount * conversionRate;
    setConvertedAmount(converted);
  };

  return (
    <div className="p-4 border rounded-md shadow-md mb-4">
      <h3 className="text-xl font-semibold mb-4">Currency Calculator</h3>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Amount:
        </label>
        <input
          className="block w-full p-2 border border-gray-300 rounded-md"
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Source Currency:
        </label>
        <input
          className="block w-full p-2 border border-gray-300 rounded-md"
          type="text"
          value={sourceCurrency}
          onChange={(e) => setSourceCurrency(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Target Currency:
        </label>
        <input
          className="block w-full p-2 border border-gray-300 rounded-md"
          type="text"
          value={targetCurrency}
          onChange={(e) => setTargetCurrency(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={convertCurrency}
      >
        Convert
      </button>
      <div className="mt-4">
        <h4 className="text-lg font-medium">Converted Amount: {convertedAmount}</h4>
      </div>
    </div>
  );
};

const SalaryCalculator = () => {
  const [annualSalary, setAnnualSalary] = useState(0);
  const [taxRate, setTaxRate] = useState(0);
  const [netSalary, setNetSalary] = useState(0);

  const calculateSalary = () => {
    const tax = (annualSalary * taxRate) / 100;
    const net = annualSalary - tax;
    setNetSalary(net);
  };

  return (
    <div className="p-4 border rounded-md shadow-md mb-4">
      <h3 className="text-xl font-semibold mb-4">Salary Calculator</h3>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Annual Salary:
        </label>
        <input
          className="block w-full p-2 border border-gray-300 rounded-md"
          type="number"
          value={annualSalary}
          onChange={(e) => setAnnualSalary(Number(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Tax Rate (%):
        </label>
        <input
          className="block w-full p-2 border border-gray-300 rounded-md"
          type="number"
          value={taxRate}
          onChange={(e) => setTaxRate(Number(e.target.value))}
        />
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={calculateSalary}
      >
        Calculate
      </button>
      <div className="mt-4">
        <h4 className="text-lg font-medium">Net Salary: {netSalary}</h4>
      </div>
    </div>
  );
};

const RetirementCalculator = () => {
  const [currentAge, setCurrentAge] = useState(0);
  const [retirementAge, setRetirementAge] = useState(0);
  const [savings, setSavings] = useState(0);
  const [monthlySavings, setMonthlySavings] = useState(0);
  const [totalSavings, setTotalSavings] = useState(0);

  const calculateRetirementSavings = () => {
    const yearsToSave = retirementAge - currentAge;
    const total = savings + (monthlySavings * 12 * yearsToSave);
    setTotalSavings(total);
  };

  return (
    <div className="p-4 border rounded-md shadow-md mb-4">
      <h3 className="text-xl font-semibold mb-4">Retirement Calculator</h3>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Current Age:
        </label>
        <input
          className="block w-full p-2 border border-gray-300 rounded-md"
          type="number"
          value={currentAge}
          onChange={(e) => setCurrentAge(Number(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Retirement Age:
        </label>
        <input
          className="block w-full p-2 border border-gray-300 rounded-md"
          type="number"
          value={retirementAge}
          onChange={(e) => setRetirementAge(Number(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Current Savings:
        </label>
        <input
          className="block w-full p-2 border border-gray-300 rounded-md"
          type="number"
          value={savings}
          onChange={(e) => setSavings(Number(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Monthly Savings:
        </label>
        <input
          className="block w-full p-2 border border-gray-300 rounded-md"
          type="number"
          value={monthlySavings}
          onChange={(e) => setMonthlySavings(Number(e.target.value))}
        />
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={calculateRetirementSavings}
      >
        Calculate
      </button>
      <div className="mt-4">
        <h4 className="text-lg font-medium">Total Savings at Retirement: {totalSavings}</h4>
      </div>
    </div>
  );
};

const SalesTaxCalculator = () => {
  const [amount, setAmount] = useState(0);
  const [taxRate, setTaxRate] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateSalesTax = () => {
    const tax = (amount * taxRate) / 100;
    const total = amount + tax;
    setTotalAmount(total);
  };

  return (
    <div className="p-4 border rounded-md shadow-md mb-4">
      <h3 className="text-xl font-semibold mb-4">Sales Tax Calculator</h3>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Amount:
        </label>
        <input
          className="block w-full p-2 border border-gray-300 rounded-md"
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Tax Rate (%):
        </label>
        <input
          className="block w-full p-2 border border-gray-300 rounded-md"
          type="number"
          value={taxRate}
          onChange={(e) => setTaxRate(Number(e.target.value))}
        />
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={calculateSalesTax}
      >
        Calculate
      </button>
      <div className="mt-4">
        <h4 className="text-lg font-medium">Total Amount (with tax): {totalAmount}</h4>
      </div>
    </div>
  );
};

const InvestmentCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualReturnRate, setAnnualReturnRate] = useState(0);
  const [years, setYears] = useState(0);
  const [futureValue, setFutureValue] = useState(0);

  const calculateInvestment = () => {
    const value = initialInvestment * Math.pow(1 + annualReturnRate / 100, years);
    setFutureValue(value);
  };

  return (
    <div className="p-4 border rounded-md shadow-md mb-4">
      <h3 className="text-xl font-semibold mb-4">Investment Calculator</h3>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Initial Investment:
        </label>
        <input
          className="block w-full p-2 border border-gray-300 rounded-md"
          type="number"
          value={initialInvestment}
          onChange={(e) => setInitialInvestment(Number(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Annual Return Rate (%):
        </label>
        <input
          className="block w-full p-2 border border-gray-300 rounded-md"
          type="number"
          value={annualReturnRate}
          onChange={(e) => setAnnualReturnRate(Number(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Years:
        </label>
        <input
          className="block w-full p-2 border border-gray-300 rounded-md"
          type="number"
          value={years}
          onChange={(e) => setYears(Number(e.target.value))}
        />
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={calculateInvestment}
      >
        Calculate
      </button>
      <div className="mt-4">
        <h4 className="text-lg font-medium">Future Value: {futureValue}</h4>
      </div>
    </div>
  );
};

export default FinancialCalculator;
