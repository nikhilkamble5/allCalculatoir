// import React, { useState } from 'react';

// const HealthFitnessCalculators = () => {
//   // State variables for BMI Calculator
//   const [bmiHeight, setBMIHeight] = useState('');
//   const [bmiWeight, setBMIWeight] = useState('');
//   const [bmiCategory, setBMICategory] = useState('');

//   // State variables for BMR Calculator
//   const [bmrGender, setBMRGender] = useState('male');
//   const [bmrAge, setBMRAge] = useState('');
//   const [bmrWeight, setBMRWeight] = useState('');
//   const [bmrHeight, setBMRHeight] = useState('');
//   const [bmrResult, setBMRResult] = useState('');

//   // State variables for Calorie Calculator
//   const [calGender, setCalGender] = useState('male');
//   const [calAge, setCalAge] = useState('');
//   const [calWeight, setCalWeight] = useState('');
//   const [calHeight, setCalHeight] = useState('');
//   const [calActivityLevel, setCalActivityLevel] = useState('sedentary');
//   const [caloriesResult, setCaloriesResult] = useState('');

//   // State variables for Body Fat Calculator
//   const [bodyFatGender, setBodyFatGender] = useState('male');
//   const [bodyFatAge, setBodyFatAge] = useState('');
//   const [bodyFatWaist, setBodyFatWaist] = useState('');
//   const [bodyFatNeck, setBodyFatNeck] = useState('');
//   const [bodyFatResult, setBodyFatResult] = useState('');

//   // State variables for Ideal Weight Calculator
//   const [idealWeightGender, setIdealWeightGender] = useState('male');
//   const [idealWeightHeight, setIdealWeightHeight] = useState('');
//   const [idealWeightAge, setIdealWeightAge] = useState('');
//   const [idealWeightFrameSize, setIdealWeightFrameSize] = useState('medium');
//   const [idealWeightResult, setIdealWeightResult] = useState('');

//   // BMI Calculator function
//   const calculateBMI = () => {
//     if (bmiHeight && bmiWeight) {
//       const bmi = (bmiWeight / (bmiHeight * bmiHeight)) * 10000;
//       let category = '';
//       if (bmi < 18.5) {
//         category = 'Underweight';
//       } else if (bmi >= 18.5 && bmi < 24.9) {
//         category = 'Normal weight';
//       } else if (bmi >= 24.9 && bmi < 29.9) {
//         category = 'Overweight';
//       } else {
//         category = 'Obese';
//       }
//       setBMICategory(category);
//     }
//   };

//   // BMR Calculator function
//   const calculateBMR = () => {
//     if (bmrGender && bmrAge && bmrWeight && bmrHeight) {
//       let bmrValue = 0;
//       if (bmrGender === 'male') {
//         bmrValue = 10 * bmrWeight + 6.25 * bmrHeight - 5 * bmrAge + 5;
//       } else {
//         bmrValue = 10 * bmrWeight + 6.25 * bmrHeight - 5 * bmrAge - 161;
//       }
//       setBMRResult(bmrValue.toFixed(2));
//     }
//   };

//   // Calorie Calculator function
//   const calculateCalories = () => {
//     if (calGender && calAge && calWeight && calHeight && calActivityLevel) {
//       let bmrValue = 0;
//       if (calGender === 'male') {
//         bmrValue = 10 * calWeight + 6.25 * calHeight - 5 * calAge + 5;
//       } else {
//         bmrValue = 10 * calWeight + 6.25 * calHeight - 5 * calAge - 161;
//       }

//       let calorieNeeds = 0;
//       switch (calActivityLevel) {
//         case 'sedentary':
//           calorieNeeds = bmrValue * 1.2;
//           break;
//         case 'lightlyActive':
//           calorieNeeds = bmrValue * 1.375;
//           break;
//         case 'moderatelyActive':
//           calorieNeeds = bmrValue * 1.55;
//           break;
//         case 'veryActive':
//           calorieNeeds = bmrValue * 1.725;
//           break;
//         case 'extraActive':
//           calorieNeeds = bmrValue * 1.9;
//           break;
//         default:
//           calorieNeeds = bmrValue * 1.2;
//       }
//       setCaloriesResult(calorieNeeds.toFixed(2));
//     }
//   };

//   // Body Fat Calculator function
//   const calculateBodyFat = () => {
//     if (bodyFatGender && bodyFatAge && bodyFatWaist && bodyFatNeck) {
//       let bodyFatPercent = 0;
//       if (bodyFatGender === 'male') {
//         const waistInches = parseFloat(bodyFatWaist) * 2.54;
//         const neckInches = parseFloat(bodyFatNeck) * 2.54;
//         const factor1 = (waistInches * 0.393) - (neckInches * 0.393);
//         const factor2 = (parseFloat(bodyFatAge) * 0.2);
//         bodyFatPercent = factor1 - factor2 - 16.2;
//       } else {
//         const waistInches = parseFloat(bodyFatWaist) * 2.54;
//         const neckInches = parseFloat(bodyFatNeck) * 2.54;
//         const factor1 = (waistInches * 0.393) - (neckInches * 0.393);
//         const factor2 = (parseFloat(bodyFatAge) * 0.2);
//         bodyFatPercent = factor1 - factor2 - 5.4;
//       }
//       setBodyFatResult(bodyFatPercent.toFixed(2));
//     }
//   };

//   // Ideal Weight Calculator function
//   const calculateIdealWeight = () => {
//     if (idealWeightGender && idealWeightHeight && idealWeightAge && idealWeightFrameSize) {
//       let idealWeightLow = 0;
//       let idealWeightHigh = 0;
//       const heightInches = parseFloat(idealWeightHeight) * 0.3937;

//       if (idealWeightGender === 'male') {
//         switch (idealWeightFrameSize) {
//           case 'small':
//             idealWeightLow = (heightInches - 60) * 2.3 + 52;
//             idealWeightHigh = (heightInches - 60) * 2.3 + 58;
//             break;
//           case 'medium':
//             idealWeightLow = (heightInches - 60) * 2.3 + 56;
//             idealWeightHigh = (heightInches - 60) * 2.3 + 62;
//             break;
//           case 'large':
//             idealWeightLow = (heightInches - 60) * 2.3 + 60;
//             idealWeightHigh = (heightInches - 60) * 2.3 + 66;
//             break;
//           default:
//             idealWeightLow = (heightInches - 60) * 2.3 + 56;
//             idealWeightHigh = (heightInches - 60) * 2.3 + 62;
//         }
//       } else {
//         switch (idealWeightFrameSize) {
//           case 'small':
//             idealWeightLow = (heightInches - 60) * 2.3 + 49;
//             idealWeightHigh = (heightInches - 60) * 2.3 + 55;
//             break;
//           case 'medium':
//             idealWeightLow = (heightInches - 60) * 2.3 + 53.5;
//             idealWeightHigh = (heightInches - 60) * 2.3 + 59.5;
//             break;
//           case 'large':
//             idealWeightLow = (heightInches - 60) * 2.3 + 58;
//             idealWeightHigh = (heightInches - 60) * 2.3 + 64;
//             break;
//           default:
//             idealWeightLow = (heightInches - 60) * 2.3 + 53.5;
//             idealWeightHigh = (heightInches - 60) * 2.3 + 59.5;
//         }
//       }
//       setIdealWeightResult(`${idealWeightLow.toFixed(2)} - ${idealWeightHigh.toFixed(2)} kg`);
//     }
//   };

//   return (
//     <div className="calculator health-fitness-calculators">
//       {/* BMI Calculator */}
//       <div className="calculator-section">
//         <h2>BMI Calculator</h2>
//         <input
//           type="number"
//           placeholder="Height (cm)"
//           value={bmiHeight}
//           onChange={(e) => setBMIHeight(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Weight (kg)"
//           value={bmiWeight}
//           onChange={(e) => setBMIWeight(e.target.value)}
//         />
//         <button onClick={calculateBMI}>Calculate BMI</button>
//         {bmiCategory && <p>BMI Category: {bmiCategory}</p>}
//       </div>

//       {/* BMR Calculator */}
//       <div className="calculator-section">
//         <h2>BMR Calculator</h2>
//         <select value={bmrGender} onChange={(e) => setBMRGender(e.target.value)}>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//         </select>
//         <input
//           type="number"
//           placeholder="Age"
//           value={bmrAge}
//           onChange={(e) => setBMRAge(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Weight (kg)"
//           value={bmrWeight}
//           onChange={(e) => setBMRWeight(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Height (cm)"
//           value={bmrHeight}
//           onChange={(e) => setBMRHeight(e.target.value)}
//         />
//         <button onClick={calculateBMR}>Calculate BMR</button>
//         {bmrResult && <p>BMR: {bmrResult} kcal/day</p>}
//       </div>

//       {/* Calorie Calculator */}
//       <div className="calculator-section">
//         <h2>Calorie Calculator</h2>
//         <select value={calGender} onChange={(e) => setCalGender(e.target.value)}>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//         </select>
//         <input
//           type="number"
//           placeholder="Age"
//           value={calAge}
//           onChange={(e) => setCalAge(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Weight (kg)"
//           value={calWeight}
//           onChange={(e) => setCalWeight(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Height (cm)"
//           value={calHeight}
//           onChange={(e) => setCalHeight(e.target.value)}
//         />
//         <select value={calActivityLevel} onChange={(e) => setCalActivityLevel(e.target.value)}>
//           <option value="sedentary">Sedentary</option>
//           <option value="lightlyActive">Lightly Active</option>
//           <option value="moderatelyActive">Moderately Active</option>
//           <option value="veryActive">Very Active</option>
//           <option value="extraActive">Extra Active</option>
//         </select>
//         <button onClick={calculateCalories}>Calculate Calories</button>
//         {caloriesResult && <p>Daily Calories: {caloriesResult} kcal</p>}
//       </div>

//       {/* Body Fat Calculator */}
//       <div className="calculator-section">
//         <h2>Body Fat Calculator</h2>
//         <select value={bodyFatGender} onChange={(e) => setBodyFatGender(e.target.value)}>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//         </select>
//         <input
//           type="number"
//           placeholder="Age"
//           value={bodyFatAge}
//           onChange={(e) => setBodyFatAge(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Waist (cm)"
//           value={bodyFatWaist}
//           onChange={(e) => setBodyFatWaist(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Neck (cm)"
//           value={bodyFatNeck}
//           onChange={(e) => setBodyFatNeck(e.target.value)}
//         />
//         <button onClick={calculateBodyFat}>Calculate Body Fat</button>
//         {bodyFatResult && <p>Body Fat Percentage: {bodyFatResult}%</p>}
//       </div>

//       {/* Ideal Weight Calculator */}
//       <div className="calculator-section">
//         <h2>Ideal Weight Calculator</h2>
//         <select value={idealWeightGender} onChange={(e) => setIdealWeightGender(e.target.value)}>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//         </select>
//         <input
//           type="number"
//           placeholder="Height (cm)"
//           value={idealWeightHeight}
//           onChange={(e) => setIdealWeightHeight(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Age"
//           value={idealWeightAge}
//           onChange={(e) => setIdealWeightAge(e.target.value)}
//         />
//         <select value={idealWeightFrameSize} onChange={(e) => setIdealWeightFrameSize(e.target.value)}>
//           <option value="small">Small Frame</option>
//           <option value="medium">Medium Frame</option>
//           <option value="large">Large Frame</option>
//         </select>
//         <button onClick={calculateIdealWeight}>Calculate Ideal Weight</button>
//         {idealWeightResult && <p>Ideal Weight: {idealWeightResult}</p>}
//       </div>
//     </div>
//   );
// };

// export default HealthFitnessCalculators;


//?

import React, { useState } from 'react';

const HealthFitnessCalculators = () => {
  // State variables for BMI Calculator
  const [bmiHeight, setBMIHeight] = useState('');
  const [bmiWeight, setBMIWeight] = useState('');
  const [bmiCategory, setBMICategory] = useState('');

  // State variables for BMR Calculator
  const [bmrGender, setBMRGender] = useState('male');
  const [bmrAge, setBMRAge] = useState('');
  const [bmrWeight, setBMRWeight] = useState('');
  const [bmrHeight, setBMRHeight] = useState('');
  const [bmrResult, setBMRResult] = useState('');

  // State variables for Calorie Calculator
  const [calGender, setCalGender] = useState('male');
  const [calAge, setCalAge] = useState('');
  const [calWeight, setCalWeight] = useState('');
  const [calHeight, setCalHeight] = useState('');
  const [calActivityLevel, setCalActivityLevel] = useState('sedentary');
  const [caloriesResult, setCaloriesResult] = useState('');

  // State variables for Body Fat Calculator
  const [bodyFatGender, setBodyFatGender] = useState('male');
  const [bodyFatAge, setBodyFatAge] = useState('');
  const [bodyFatWaist, setBodyFatWaist] = useState('');
  const [bodyFatNeck, setBodyFatNeck] = useState('');
  const [bodyFatResult, setBodyFatResult] = useState('');

  // State variables for Ideal Weight Calculator
  const [idealWeightGender, setIdealWeightGender] = useState('male');
  const [idealWeightHeight, setIdealWeightHeight] = useState('');
  const [idealWeightAge, setIdealWeightAge] = useState('');
  const [idealWeightFrameSize, setIdealWeightFrameSize] = useState('medium');
  const [idealWeightResult, setIdealWeightResult] = useState('');

  // BMI Calculator function
  const calculateBMI = () => {
    if (bmiHeight && bmiWeight) {
      const bmi = (bmiWeight / (bmiHeight * bmiHeight)) * 10000;
      let category = '';
      if (bmi < 18.5) {
        category = 'Underweight';
      } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
      } else if (bmi >= 24.9 && bmi < 29.9) {
        category = 'Overweight';
      } else {
        category = 'Obese';
      }
      setBMICategory(category);
    }
  };

  // BMR Calculator function
  const calculateBMR = () => {
    if (bmrGender && bmrAge && bmrWeight && bmrHeight) {
      let bmrValue = 0;
      if (bmrGender === 'male') {
        bmrValue = 10 * bmrWeight + 6.25 * bmrHeight - 5 * bmrAge + 5;
      } else {
        bmrValue = 10 * bmrWeight + 6.25 * bmrHeight - 5 * bmrAge - 161;
      }
      setBMRResult(bmrValue.toFixed(2));
    }
  };

  // Calorie Calculator function
  const calculateCalories = () => {
    if (calGender && calAge && calWeight && calHeight && calActivityLevel) {
      let bmrValue = 0;
      if (calGender === 'male') {
        bmrValue = 10 * calWeight + 6.25 * calHeight - 5 * calAge + 5;
      } else {
        bmrValue = 10 * calWeight + 6.25 * calHeight - 5 * calAge - 161;
      }

      let calorieNeeds = 0;
      switch (calActivityLevel) {
        case 'sedentary':
          calorieNeeds = bmrValue * 1.2;
          break;
        case 'lightlyActive':
          calorieNeeds = bmrValue * 1.375;
          break;
        case 'moderatelyActive':
          calorieNeeds = bmrValue * 1.55;
          break;
        case 'veryActive':
          calorieNeeds = bmrValue * 1.725;
          break;
        case 'extraActive':
          calorieNeeds = bmrValue * 1.9;
          break;
        default:
          calorieNeeds = bmrValue * 1.2;
      }
      setCaloriesResult(calorieNeeds.toFixed(2));
    }
  };

  // Body Fat Calculator function
  const calculateBodyFat = () => {
    if (bodyFatGender && bodyFatAge && bodyFatWaist && bodyFatNeck) {
      let bodyFatPercent = 0;
      if (bodyFatGender === 'male') {
        const waistInches = parseFloat(bodyFatWaist) * 2.54;
        const neckInches = parseFloat(bodyFatNeck) * 2.54;
        const factor1 = (waistInches * 0.393) - (neckInches * 0.393);
        const factor2 = (parseFloat(bodyFatAge) * 0.2);
        bodyFatPercent = factor1 - factor2 - 16.2;
      } else {
        const waistInches = parseFloat(bodyFatWaist) * 2.54;
        const neckInches = parseFloat(bodyFatNeck) * 2.54;
        const factor1 = (waistInches * 0.393) - (neckInches * 0.393);
        const factor2 = (parseFloat(bodyFatAge) * 0.2);
        bodyFatPercent = factor1 - factor2 - 5.4;
      }
      setBodyFatResult(bodyFatPercent.toFixed(2));
    }
  };

  // Ideal Weight Calculator function
  const calculateIdealWeight = () => {
    if (idealWeightGender && idealWeightHeight && idealWeightAge && idealWeightFrameSize) {
      let idealWeightLow = 0;
      let idealWeightHigh = 0;
      const heightInches = parseFloat(idealWeightHeight) * 0.3937;

      if (idealWeightGender === 'male') {
        switch (idealWeightFrameSize) {
          case 'small':
            idealWeightLow = (heightInches - 60) * 2.3 + 52;
            idealWeightHigh = (heightInches - 60) * 2.3 + 58;
            break;
          case 'medium':
            idealWeightLow = (heightInches - 60) * 2.3 + 56;
            idealWeightHigh = (heightInches - 60) * 2.3 + 62;
            break;
          case 'large':
            idealWeightLow = (heightInches - 60) * 2.3 + 60;
            idealWeightHigh = (heightInches - 60) * 2.3 + 66;
            break;
          default:
            idealWeightLow = (heightInches - 60) * 2.3 + 56;
            idealWeightHigh = (heightInches - 60) * 2.3 + 62;
        }
      } else {
        switch (idealWeightFrameSize) {
          case 'small':
            idealWeightLow = (heightInches - 60) * 2.3 + 49;
            idealWeightHigh = (heightInches - 60) * 2.3 + 55;
            break;
          case 'medium':
            idealWeightLow = (heightInches - 60) * 2.3 + 53.5;
            idealWeightHigh = (heightInches - 60) * 2.3 + 59.5;
            break;
          case 'large':
            idealWeightLow = (heightInches - 60) * 2.3 + 58;
            idealWeightHigh = (heightInches - 60) * 2.3 + 64;
            break;
          default:
            idealWeightLow = (heightInches - 60) * 2.3 + 53.5;
            idealWeightHigh = (heightInches - 60) * 2.3 + 59.5;
        }
      }
      setIdealWeightResult(`${idealWeightLow.toFixed(2)} - ${idealWeightHigh.toFixed(2)} kg`);
    }
  };

  return (
    <div className="p-6 space-y-8 max-w-3xl mx-auto">
      {/* BMI Calculator */}
      <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-semibold">BMI Calculator</h2>
        <input
          type="number"
          placeholder="Height (cm)"
          value={bmiHeight}
          onChange={(e) => setBMIHeight(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
        <input
          type="number"
          placeholder="Weight (kg)"
          value={bmiWeight}
          onChange={(e) => setBMIWeight(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
        <button
          onClick={calculateBMI}
          className="bg-blue-500 text-white rounded-lg p-2 w-full"
        >
          Calculate BMI
        </button>
        {bmiCategory && <p className="mt-2 text-lg">Category: {bmiCategory}</p>}
      </div>

      {/* BMR Calculator */}
      <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-semibold">BMR Calculator</h2>
        <select
          value={bmrGender}
          onChange={(e) => setBMRGender(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input
          type="number"
          placeholder="Age (years)"
          value={bmrAge}
          onChange={(e) => setBMRAge(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
        <input
          type="number"
          placeholder="Weight (kg)"
          value={bmrWeight}
          onChange={(e) => setBMRWeight(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
        <input
          type="number"
          placeholder="Height (cm)"
          value={bmrHeight}
          onChange={(e) => setBMRHeight(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
        <button
          onClick={calculateBMR}
          className="bg-blue-500 text-white rounded-lg p-2 w-full"
        >
          Calculate BMR
        </button>
        {bmrResult && <p className="mt-2 text-lg">BMR: {bmrResult} kcal/day</p>}
      </div>

      {/* Calorie Calculator */}
      <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-semibold">Calorie Calculator</h2>
        <select
          value={calGender}
          onChange={(e) => setCalGender(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input
          type="number"
          placeholder="Age (years)"
          value={calAge}
          onChange={(e) => setCalAge(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
        <input
          type="number"
          placeholder="Weight (kg)"
          value={calWeight}
          onChange={(e) => setCalWeight(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
        <input
          type="number"
          placeholder="Height (cm)"
          value={calHeight}
          onChange={(e) => setCalHeight(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
        <select
          value={calActivityLevel}
          onChange={(e) => setCalActivityLevel(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full"
        >
          <option value="sedentary">Sedentary</option>
          <option value="lightlyActive">Lightly Active</option>
          <option value="moderatelyActive">Moderately Active</option>
          <option value="veryActive">Very Active</option>
          <option value="extraActive">Extra Active</option>
        </select>
        <button
          onClick={calculateCalories}
          className="bg-blue-500 text-white rounded-lg p-2 w-full"
        >
          Calculate Calories
        </button>
        {caloriesResult && <p className="mt-2 text-lg">Calories needed: {caloriesResult} kcal/day</p>}
      </div>

      {/* Body Fat Calculator */}
      <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-semibold">Body Fat Calculator</h2>
        <select
          value={bodyFatGender}
          onChange={(e) => setBodyFatGender(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input
          type="number"
          placeholder="Age (years)"
          value={bodyFatAge}
          onChange={(e) => setBodyFatAge(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
        <input
          type="number"
          placeholder="Waist circumference (cm)"
          value={bodyFatWaist}
          onChange={(e) => setBodyFatWaist(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
        <input
          type="number"
          placeholder="Neck circumference (cm)"
          value={bodyFatNeck}
          onChange={(e) => setBodyFatNeck(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
        <button
          onClick={calculateBodyFat}
          className="bg-blue-500 text-white rounded-lg p-2 w-full"
        >
          Calculate Body Fat
        </button>
        {bodyFatResult && <p className="mt-2 text-lg">Body Fat Percentage: {bodyFatResult}%</p>}
      </div>

      {/* Ideal Weight Calculator */}
      <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-semibold">Ideal Weight Calculator</h2>
        <select
          value={idealWeightGender}
          onChange={(e) => setIdealWeightGender(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input
          type="number"
          placeholder="Height (cm)"
          value={idealWeightHeight}
          onChange={(e) => setIdealWeightHeight(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
        <input
          type="number"
          placeholder="Age (years)"
          value={idealWeightAge}
          onChange={(e) => setIdealWeightAge(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
        <select
          value={idealWeightFrameSize}
          onChange={(e) => setIdealWeightFrameSize(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full"
        >
          <option value="small">Small Frame</option>
          <option value="medium">Medium Frame</option>
          <option value="large">Large Frame</option>
        </select>
        <button
          onClick={calculateIdealWeight}
          className="bg-blue-500 text-white rounded-lg p-2 w-full"
        >
          Calculate Ideal Weight
        </button>
        {idealWeightResult && <p className="mt-2 text-lg">Ideal Weight Range: {idealWeightResult}</p>}
      </div>
    </div>
  );
};

export default HealthFitnessCalculators;
