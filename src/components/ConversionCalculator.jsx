// import React, { useState } from 'react';

// const LengthConversion = ({ value, setValue, fromUnit, setFromUnit, toUnit, setToUnit, result, convertLength, units }) => (
//   <div className="space-y-4">
//     <h3 className="text-lg font-bold">Length Conversion</h3>
//     <div>
//       <label className="block">Value:</label>
//       <input type="number" value={value} onChange={(e) => setValue(Number(e.target.value))} className="border border-gray-300 rounded-md p-2" />
//     </div>
//     <div>
//       <label className="block">From:</label>
//       <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)} className="border border-gray-300 rounded-md p-2">
//         {Object.keys(units).map((unit) => (
//           <option key={unit} value={unit}>{unit}</option>
//         ))}
//       </select>
//     </div>
//     <div>
//       <label className="block">To:</label>
//       <select value={toUnit} onChange={(e) => setToUnit(e.target.value)} className="border border-gray-300 rounded-md p-2">
//         {Object.keys(units).map((unit) => (
//           <option key={unit} value={unit}>{unit}</option>
//         ))}
//       </select>
//     </div>
//     <button onClick={convertLength} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
//       Convert
//     </button>
//     {result && <div><h4 className="font-semibold">Result: {result}</h4></div>}
//   </div>
// );

// // Include similar updates for WeightConversion, TemperatureConversion, and other components as needed...

// const ConversionCalculator = () => {
//   const [conversionType, setConversionType] = useState("length");
//   const [value, setValue] = useState(0);
//   const [fromUnit, setFromUnit] = useState("meters");
//   const [toUnit, setToUnit] = useState("kilometers");
//   const [result, setResult] = useState(null);

//   const lengthUnits = {
//     meters: 1,
//     kilometers: 0.001,
//     centimeters: 100,
//     millimeters: 1000,
//     miles: 0.000621371,
//     yards: 1.09361,
//     feet: 3.28084,
//     inches: 39.3701,
//   };

//   const convertLength = () => {
//     const valueInMeters = value * lengthUnits[fromUnit];
//     const convertedValue = valueInMeters * lengthUnits[toUnit];
//     setResult(convertedValue.toFixed(2));
//   };

//   // Include similar functions for convertWeight, convertTemperature, etc.

//   const renderConversionComponent = () => {
//     switch (conversionType) {
//       case "length":
//         return (
//           <LengthConversion
//             value={value}
//             setValue={setValue}
//             fromUnit={fromUnit}
//             setFromUnit={setFromUnit}
//             toUnit={toUnit}
//             setToUnit={setToUnit}
//             result={result}
//             convertLength={convertLength}
//             units={lengthUnits}
//           />
//         );
//       // Include cases for weight and temperature conversions
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md space-y-6">
//       <h2 className="text-xl font-bold">Conversion Calculator</h2>
//       <div>
//         <label className="block">Conversion Type:</label>
//         <select value={conversionType} onChange={(e) => setConversionType(e.target.value)} className="border border-gray-300 rounded-md p-2">
//           <option value="length">Length</option>
//           {/* Include options for weight and temperature conversions */}
//         </select>
//       </div>
//       {renderConversionComponent()}
//     </div>
//   );
// };

// export default ConversionCalculator;

import React, { useState } from 'react';

const LengthConversion = ({ value, setValue, fromUnit, setFromUnit, toUnit, setToUnit, result, convertLength, units }) => (
  <div className="space-y-4 p-4 bg-white rounded-lg shadow-md">
    <h3 className="text-lg font-bold">Length Conversion</h3>
    <div>
      <label className="block text-gray-700">Value:</label>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="border border-gray-300 rounded-md p-2 w-full"
      />
    </div>
    <div>
      <label className="block text-gray-700">From:</label>
      <select
        value={fromUnit}
        onChange={(e) => setFromUnit(e.target.value)}
        className="border border-gray-300 rounded-md p-2 w-full"
      >
        {Object.keys(units).map((unit) => (
          <option key={unit} value={unit}>{unit}</option>
        ))}
      </select>
    </div>
    <div>
      <label className="block text-gray-700">To:</label>
      <select
        value={toUnit}
        onChange={(e) => setToUnit(e.target.value)}
        className="border border-gray-300 rounded-md p-2 w-full"
      >
        {Object.keys(units).map((unit) => (
          <option key={unit} value={unit}>{unit}</option>
        ))}
      </select>
    </div>
    <button
      onClick={convertLength}
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md w-full"
    >
      Convert
    </button>
    {result && (
      <div>
        <h4 className="font-semibold text-gray-700 mt-2">Result: {result}</h4>
      </div>
    )}
  </div>
);

// Similar updates should be applied to WeightConversion, TemperatureConversion, and other components as needed...

const ConversionCalculator = () => {
  const [conversionType, setConversionType] = useState("length");
  const [value, setValue] = useState(0);
  const [fromUnit, setFromUnit] = useState("meters");
  const [toUnit, setToUnit] = useState("kilometers");
  const [result, setResult] = useState(null);

  const lengthUnits = {
    meters: 1,
    kilometers: 0.001,
    centimeters: 100,
    millimeters: 1000,
    miles: 0.000621371,
    yards: 1.09361,
    feet: 3.28084,
    inches: 39.3701,
  };

  const convertLength = () => {
    const valueInMeters = value * lengthUnits[fromUnit];
    const convertedValue = valueInMeters * lengthUnits[toUnit];
    setResult(convertedValue.toFixed(2));
  };

  // Similar functions should be added for weight, temperature, etc.

  const renderConversionComponent = () => {
    switch (conversionType) {
      case "length":
        return (
          <LengthConversion
            value={value}
            setValue={setValue}
            fromUnit={fromUnit}
            setFromUnit={setFromUnit}
            toUnit={toUnit}
            setToUnit={setToUnit}
            result={result}
            convertLength={convertLength}
            units={lengthUnits}
          />
        );
      // Cases for weight and temperature conversions should be added here
      default:
        return null;
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md space-y-6">
      <h2 className="text-xl font-bold">Conversion Calculator</h2>
      <div>
        <label className="block text-gray-700">Conversion Type:</label>
        <select
          value={conversionType}
          onChange={(e) => setConversionType(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-full"
        >
          <option value="length">Length</option>
          {/* Options for weight and temperature conversions should be added here */}
        </select>
      </div>
      {renderConversionComponent()}
    </div>
  );
};

export default ConversionCalculator;

