// import React, { useState } from 'react';

// import * as math from 'mathjs';

// const MathAlgebraCalculators = () => {
//   const [complex, setComplex] = useState({ real1: '', imaginary1: '', real2: '', imaginary2: '' });
//   const [complexResult, setComplexResult] = useState('');
//   const [booleanExpression, setBooleanExpression] = useState('');
//   const [booleanResult, setBooleanResult] = useState('');
//   const [rationalFunction, setRationalFunction] = useState('');
//   const [partialResult, setPartialResult] = useState('');
//   const [inequality, setInequality] = useState('');
//   const [inequalityResult, setInequalityResult] = useState('');
//   const [pipeDiameter, setPipeDiameter] = useState('');
//   const [velocity, setVelocity] = useState('');
//   const [flowRate, setFlowRate] = useState('');
//   const [force, setForce] = useState('');
//   const [time, setTime] = useState('');
//   const [impulse, setImpulse] = useState('');
//   const [number, setNumber] = useState('');
//   const [factorizationResult, setFactorizationResult] = useState('');
//   const [originalValue, setOriginalValue] = useState('');
//   const [percentageChange, setPercentageChange] = useState('');
//   const [percentageResult, setPercentageResult] = useState('');
//   const [base, setBase] = useState('');
//   const [exponent, setExponent] = useState('');
//   const [expoResult, setExpoResult] = useState('');
//   const [cube, setCube] = useState('');
//   const [cubeResult, setCubeResult] = useState('');
//   const [cubeRoot, setCubeRoot] = useState('');
//   const [rootResult, setRootResult] = useState('');

//   const handleComplexChange = (e) => setComplex({ ...complex, [e.target.id]: e.target.value });
//   const handleInequalityChange = (e) => setInequality(e.target.value);
//   const handleNumberChange = (e) => setNumber(e.target.value);

//   const addComplexNumbers = () => {
//     const real1 = parseFloat(complex.real1);
//     const imaginary1 = parseFloat(complex.imaginary1);
//     const real2 = parseFloat(complex.real2);
//     const imaginary2 = parseFloat(complex.imaginary2);

//     const realResult = real1 + real2;
//     const imaginaryResult = imaginary1 + imaginary2;

//     setComplexResult(`Result: ${realResult} + ${imaginaryResult}i`);
//   };

//   const subtractComplexNumbers = () => {
//     const real1 = parseFloat(complex.real1);
//     const imaginary1 = parseFloat(complex.imaginary1);
//     const real2 = parseFloat(complex.real2);
//     const imaginary2 = parseFloat(complex.imaginary2);

//     const realResult = real1 - real2;
//     const imaginaryResult = imaginary1 - imaginary2;

//     setComplexResult(`Result: ${realResult} + ${imaginaryResult}i`);
//   };

//   const multiplyComplexNumbers = () => {
//     const real1 = parseFloat(complex.real1);
//     const imaginary1 = parseFloat(complex.imaginary1);
//     const real2 = parseFloat(complex.real2);
//     const imaginary2 = parseFloat(complex.imaginary2);

//     const realResult = (real1 * real2) - (imaginary1 * imaginary2);
//     const imaginaryResult = (real1 * imaginary2) + (imaginary1 * real2);

//     setComplexResult(`Result: ${realResult} + ${imaginaryResult}i`);
//   };

//   const simplifyBoolean = () => {
//     let expression = booleanExpression;

//     expression = expression.replace(/\btrue\b/gi, 'true')
//                            .replace(/\bfalse\b/gi, 'false')
//                            .replace(/\band\b/gi, '&&')
//                            .replace(/\bor\b/gi, '||')
//                            .replace(/\bnot\b/gi, '!');

//     try {
//       let simplifiedValue = eval(expression);
//       setBooleanResult(`Simplified Value: ${simplifiedValue}`);
//     } catch (e) {
//       setBooleanResult('Error: Invalid expression');
//     }
//   };

//   const doDecompose = () => {
//     if (!rationalFunction) {
//       alert('Please enter a rational function.');
//       return;
//     }

//     try {
//       let parsedFunction = math.parse(rationalFunction);
//       let simplifiedFunction = math.simplify(parsedFunction);
//       let partialFractions = partialFractionDecomposition(simplifiedFunction);

//       let result = '';
//       partialFractions.forEach((fraction, index) => {
//         result += `Partial Fraction ${index + 1}: ${fraction.toString()}\n`;
//       });

//       setPartialResult(result);
//     } catch (error) {
//       alert('An error occurred while decomposing the function.');
//     }
//   };

//   const partialFractionDecomposition = (expr) => {
//     let fractions = [];
//     let numerator = expr.numerator;
//     let denominator = expr.denominator;

//     let factoredDenominator = math.factor(denominator);
//     let terms = factoredDenominator.split('*');

//     terms.forEach((term) => {
//       let partialFraction = math.divide(numerator, term);
//       fractions.push(partialFraction);
//     });

//     return fractions;
//   };

//   const calculateInequality = () => {
//     const parts = inequality.split(" ");
//     if (parts.length !== 5) {
//       alert("Invalid inequality format. Please use 'ax + b > c' format.");
//       return;
//     }

//     const a = parseFloat(parts[0]);
//     const xSign = parts[1];
//     const b = parseFloat(parts[2]);
//     const operator = parts[3];
//     const c = parseFloat(parts[4]);

//     if (isNaN(a) || isNaN(b) || isNaN(c) || xSign !== '+' || operator !== '>') {
//       alert("Invalid inequality format. Please use 'ax + b > c' format.");
//       return;
//     }

//     let solutionSet = a > 0 ? `Solution set for ${inequality}: x > ${(c - b) / a}` : `Solution set for ${inequality}: x < ${(c - b) / a}`;
//     setInequalityResult(solutionSet);
//   };

//   const calculateFlowRate = () => {
//     const diameter = parseFloat(pipeDiameter);
//     const velocityValue = parseFloat(velocity);

//     const radius = diameter / 2;
//     const area = Math.PI * radius ** 2;
//     const flowRateValue = area * velocityValue;

//     setFlowRate(flowRateValue.toFixed(4));
//   };

//   const calculateImpulse = () => {
//     const impulseValue = force * time;
//     setImpulse(`Impulse (I) = ${impulseValue.toFixed(2)} Ns`);
//   };

//   const factorize = () => {
//     let num = parseInt(number);
//     let originalNumber = num;
//     let factors = [];

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       while (num % i === 0) {
//         factors.push(i);
//         num /= i;
//       }
//     }

//     if (num > 1) factors.push(num);
//     setFactorizationResult(`Prime factors of ${originalNumber} are: ${factors.join(', ')}`);
//   };

//   const calculatePercentage = () => {
//     const original = parseFloat(originalValue);
//     const percentage = parseFloat(percentageChange);

//     const newValue = original + (original * (percentage / 100));
//     setPercentageResult(`New Value: ${newValue}`);
//   };

//   const calculateExponential = () => {
//     const baseValue = parseFloat(base);
//     const exponentValue = parseFloat(exponent);

//     if (!isNaN(baseValue) && !isNaN(exponentValue)) {
//       const result = Math.pow(baseValue, exponentValue);
//       setExpoResult(result);
//     } else {
//       setExpoResult('Invalid input');
//     }
//   };

//   const calculateCube = () => {
//     if (cube === '') {
//       alert('Please enter an integer.');
//       return;
//     }

//     const result = Math.pow(cube, 3);
//     setCubeResult(`The cube of ${cube} is ${result}.`);
//   };

//   const calculateCubeRoot = () => {
//     if (cubeRoot === '') {
//       alert('Please enter an integer.');
//       return;
//     }

//     const result = Math.cbrt(cubeRoot);
//     setRootResult(`Cube root of ${cubeRoot} is ${result.toFixed(3)}.`);
//   };

//   return (
//     <div className="container mt-5">
//       <h1>Math Algebra Calculators</h1>

//       <div className="card mt-3">
//         <div className="card-body">
//           <h2>Complex Numbers</h2>
//           <input type="text" id="real1" className="form-control" placeholder="Real Part of 1st Complex Number" value={complex.real1} onChange={handleComplexChange} />
//           <input type="text" id="imaginary1" className="form-control" placeholder="Imaginary Part of 1st Complex Number" value={complex.imaginary1} onChange={handleComplexChange} />
//           <input type="text" id="real2" className="form-control" placeholder="Real Part of 2nd Complex Number" value={complex.real2} onChange={handleComplexChange} />
//           <input type="text" id="imaginary2" className="form-control" placeholder="Imaginary Part of 2nd Complex Number" value={complex.imaginary2} onChange={handleComplexChange} />
//           <button className="btn btn-primary" onClick={addComplexNumbers}>Add</button>
//           <button className="btn btn-secondary" onClick={subtractComplexNumbers}>Subtract</button>
//           <button className="btn btn-success" onClick={multiplyComplexNumbers}>Multiply</button>
//           <div className="mt-2">{complexResult}</div>
//         </div>
//       </div>

//       <div className="card mt-3">
//         <div className="card-body">
//           <h2>Simplify Boolean Expressions</h2>
//           <input type="text" className="form-control" placeholder="Enter Boolean Expression" value={booleanExpression} onChange={(e) => setBooleanExpression(e.target.value)} />
//           <button className="btn btn-primary mt-2" onClick={simplifyBoolean}>Simplify</button>
//           <div className="mt-2">{booleanResult}</div>
//         </div>
//       </div>

//       <div className="card mt-3">
//         <div className="card-body">
//           <h2>Rational Functions - Partial Fraction Decomposition</h2>
//           <input type="text" className="form-control" placeholder="Enter Rational Function" value={rationalFunction} onChange={(e) => setRationalFunction(e.target.value)} />
//           <button className="btn btn-primary mt-2" onClick={doDecompose}>Decompose</button>
//           <div className="mt-2">{partialResult}</div>
//         </div>
//       </div>

//       <div className="card mt-3">
//         <div className="card-body">
//           <h2>Solve Inequalities</h2>
//           <input type="text" className="form-control" placeholder="Enter Inequality (e.g., 2x + 3 > 5)" value={inequality} onChange={handleInequalityChange} />
//           <button className="btn btn-primary mt-2" onClick={calculateInequality}>Solve</button>
//           <div className="mt-2">{inequalityResult}</div>
//         </div>
//       </div>

//       <div className="card mt-3">
//         <div className="card-body">
//           <h2>Flow Rate Calculation</h2>
//           <input type="text" className="form-control" placeholder="Pipe Diameter (m)" value={pipeDiameter} onChange={(e) => setPipeDiameter(e.target.value)} />
//           <input type="text" className="form-control" placeholder="Flow Velocity (m/s)" value={velocity} onChange={(e) => setVelocity(e.target.value)} />
//           <button className="btn btn-primary mt-2" onClick={calculateFlowRate}>Calculate</button>
//           <div className="mt-2">Flow Rate: {flowRate} m³/s</div>
//         </div>
//       </div>

//       <div className="card mt-3">
//         <div className="card-body">
//           <h2>Impulse Calculation</h2>
//           <input type="text" className="form-control" placeholder="Force (N)" value={force} onChange={(e) => setForce(e.target.value)} />
//           <input type="text" className="form-control" placeholder="Time (s)" value={time} onChange={(e) => setTime(e.target.value)} />
//           <button className="btn btn-primary mt-2" onClick={calculateImpulse}>Calculate</button>
//           <div className="mt-2">{impulse}</div>
//         </div>
//       </div>

//       <div className="card mt-3">
//         <div className="card-body">
//           <h2>Prime Factorization</h2>
//           <input type="text" className="form-control" placeholder="Enter a Number" value={number} onChange={handleNumberChange} />
//           <button className="btn btn-primary mt-2" onClick={factorize}>Factorize</button>
//           <div className="mt-2">{factorizationResult}</div>
//         </div>
//       </div>

//       <div className="card mt-3">
//         <div className="card-body">
//           <h2>Percentage Change</h2>
//           <input type="text" className="form-control" placeholder="Original Value" value={originalValue} onChange={(e) => setOriginalValue(e.target.value)} />
//           <input type="text" className="form-control" placeholder="Percentage Change" value={percentageChange} onChange={(e) => setPercentageChange(e.target.value)} />
//           <button className="btn btn-primary mt-2" onClick={calculatePercentage}>Calculate</button>
//           <div className="mt-2">{percentageResult}</div>
//         </div>
//       </div>

//       <div className="card mt-3">
//         <div className="card-body">
//           <h2>Exponential Calculation</h2>
//           <input type="text" className="form-control" placeholder="Base" value={base} onChange={(e) => setBase(e.target.value)} />
//           <input type="text" className="form-control" placeholder="Exponent" value={exponent} onChange={(e) => setExponent(e.target.value)} />
//           <button className="btn btn-primary mt-2" onClick={calculateExponential}>Calculate</button>
//           <div className="mt-2">Result: {expoResult}</div>
//         </div>
//       </div>

//       <div className="card mt-3">
//         <div className="card-body">
//           <h2>Cube Calculation</h2>
//           <input type="text" className="form-control" placeholder="Enter a Number" value={cube} onChange={(e) => setCube(e.target.value)} />
//           <button className="btn btn-primary mt-2" onClick={calculateCube}>Calculate</button>
//           <div className="mt-2">Result: {cubeResult}</div>
//         </div>
//       </div>

//       <div className="card mt-3">
//         <div className="card-body">
//           <h2>Cube Root Calculation</h2>
//           <input type="text" className="form-control" placeholder="Enter a Number" value={cubeRoot} onChange={(e) => setCubeRoot(e.target.value)} />
//           <button className="btn btn-primary mt-2" onClick={calculateCubeRoot}>Calculate</button>
//           <div className="mt-2">Result: {rootResult}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MathAlgebraCalculators;

//?

// import React, { useState } from 'react';
// import * as math from 'mathjs';

// const MathAlgebraCalculators = () => {
//   const [complex, setComplex] = useState({ real1: '', imaginary1: '', real2: '', imaginary2: '' });
//   const [complexResult, setComplexResult] = useState('');
//   const [booleanExpression, setBooleanExpression] = useState('');
//   const [booleanResult, setBooleanResult] = useState('');
//   const [rationalFunction, setRationalFunction] = useState('');
//   const [partialResult, setPartialResult] = useState('');
//   const [inequality, setInequality] = useState('');
//   const [inequalityResult, setInequalityResult] = useState('');
//   const [pipeDiameter, setPipeDiameter] = useState('');
//   const [velocity, setVelocity] = useState('');
//   const [flowRate, setFlowRate] = useState('');
//   const [force, setForce] = useState('');
//   const [time, setTime] = useState('');
//   const [impulse, setImpulse] = useState('');
//   const [number, setNumber] = useState('');
//   const [factorizationResult, setFactorizationResult] = useState('');
//   const [originalValue, setOriginalValue] = useState('');
//   const [percentageChange, setPercentageChange] = useState('');
//   const [percentageResult, setPercentageResult] = useState('');
//   const [base, setBase] = useState('');
//   const [exponent, setExponent] = useState('');
//   const [expoResult, setExpoResult] = useState('');
//   const [cube, setCube] = useState('');
//   const [cubeResult, setCubeResult] = useState('');
//   const [cubeRoot, setCubeRoot] = useState('');
//   const [rootResult, setRootResult] = useState('');

//   const handleComplexChange = (e) => setComplex({ ...complex, [e.target.id]: e.target.value });
//   const handleInequalityChange = (e) => setInequality(e.target.value);
//   const handleNumberChange = (e) => setNumber(e.target.value);

//   const addComplexNumbers = () => {
//     const real1 = parseFloat(complex.real1);
//     const imaginary1 = parseFloat(complex.imaginary1);
//     const real2 = parseFloat(complex.real2);
//     const imaginary2 = parseFloat(complex.imaginary2);

//     const realResult = real1 + real2;
//     const imaginaryResult = imaginary1 + imaginary2;

//     setComplexResult(`Result: ${realResult} + ${imaginaryResult}i`);
//   };

//   const subtractComplexNumbers = () => {
//     const real1 = parseFloat(complex.real1);
//     const imaginary1 = parseFloat(complex.imaginary1);
//     const real2 = parseFloat(complex.real2);
//     const imaginary2 = parseFloat(complex.imaginary2);

//     const realResult = real1 - real2;
//     const imaginaryResult = imaginary1 - imaginary2;

//     setComplexResult(`Result: ${realResult} + ${imaginaryResult}i`);
//   };

//   const multiplyComplexNumbers = () => {
//     const real1 = parseFloat(complex.real1);
//     const imaginary1 = parseFloat(complex.imaginary1);
//     const real2 = parseFloat(complex.real2);
//     const imaginary2 = parseFloat(complex.imaginary2);

//     const realResult = (real1 * real2) - (imaginary1 * imaginary2);
//     const imaginaryResult = (real1 * imaginary2) + (imaginary1 * real2);

//     setComplexResult(`Result: ${realResult} + ${imaginaryResult}i`);
//   };

//   const simplifyBoolean = () => {
//     let expression = booleanExpression;

//     expression = expression.replace(/\btrue\b/gi, 'true')
//                            .replace(/\bfalse\b/gi, 'false')
//                            .replace(/\band\b/gi, '&&')
//                            .replace(/\bor\b/gi, '||')
//                            .replace(/\bnot\b/gi, '!');

//     try {
//       let simplifiedValue = eval(expression);
//       setBooleanResult(`Simplified Value: ${simplifiedValue}`);
//     } catch (e) {
//       setBooleanResult('Error: Invalid expression');
//     }
//   };

//   const doDecompose = () => {
//     if (!rationalFunction) {
//       alert('Please enter a rational function.');
//       return;
//     }

//     try {
//       let parsedFunction = math.parse(rationalFunction);
//       let simplifiedFunction = math.simplify(parsedFunction);
//       let partialFractions = partialFractionDecomposition(simplifiedFunction);

//       let result = '';
//       partialFractions.forEach((fraction, index) => {
//         result += `Partial Fraction ${index + 1}: ${fraction.toString()}\n`;
//       });

//       setPartialResult(result);
//     } catch (error) {
//       alert('An error occurred while decomposing the function.');
//     }
//   };

//   const partialFractionDecomposition = (expr) => {
//     // Implement a custom factorization logic or use an alternative approach
//     // For demonstration, using a placeholder
//     let fractions = [];
//     let numerator = expr.numerator;
//     let denominator = expr.denominator;

//     // Custom logic or library methods for factorization
//     let factoredDenominator = math.factor(denominator.toString()); // Adjust based on available methods
//     let terms = factoredDenominator.split('*');

//     terms.forEach((term) => {
//       let partialFraction = math.divide(numerator, term);
//       fractions.push(partialFraction);
//     });

//     return fractions;
//   };

//   const calculateInequality = () => {
//     const parts = inequality.split(" ");
//     if (parts.length !== 5) {
//       alert("Invalid inequality format. Please use 'ax + b > c' format.");
//       return;
//     }

//     const a = parseFloat(parts[0]);
//     const xSign = parts[1];
//     const b = parseFloat(parts[2]);
//     const operator = parts[3];
//     const c = parseFloat(parts[4]);

//     if (isNaN(a) || isNaN(b) || isNaN(c) || xSign !== '+' || operator !== '>') {
//       alert("Invalid inequality format. Please use 'ax + b > c' format.");
//       return;
//     }

//     let solutionSet = a > 0 ? `Solution set for ${inequality}: x > ${(c - b) / a}` : `Solution set for ${inequality}: x < ${(c - b) / a}`;
//     setInequalityResult(solutionSet);
//   };

//   const calculateFlowRate = () => {
//     const diameter = parseFloat(pipeDiameter);
//     const velocityValue = parseFloat(velocity);

//     const radius = diameter / 2;
//     const area = Math.PI * radius ** 2;
//     const flowRateValue = area * velocityValue;

//     setFlowRate(flowRateValue.toFixed(4));
//   };

//   const calculateImpulse = () => {
//     const impulseValue = force * time;
//     setImpulse(`Impulse (I) = ${impulseValue.toFixed(2)} Ns`);
//   };

//   const factorize = () => {
//     let num = parseInt(number);
//     let originalNumber = num;
//     let factors = [];

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       while (num % i === 0) {
//         factors.push(i);
//         num /= i;
//       }
//     }

//     if (num > 1) factors.push(num);
//     setFactorizationResult(`Prime factors of ${originalNumber} are: ${factors.join(', ')}`);
//   };

//   const calculatePercentage = () => {
//     const original = parseFloat(originalValue);
//     const percentage = parseFloat(percentageChange);

//     const newValue = original + (original * (percentage / 100));
//     setPercentageResult(`New Value: ${newValue}`);
//   };

//   const calculateExponential = () => {
//     const baseValue = parseFloat(base);
//     const exponentValue = parseFloat(exponent);

//     if (!isNaN(baseValue) && !isNaN(exponentValue)) {
//       const result = Math.pow(baseValue, exponentValue);
//       setExpoResult(result);
//     } else {
//       setExpoResult('Invalid input');
//     }
//   };

//   const calculateCube = () => {
//     if (cube === '') {
//       alert('Please enter an integer.');
//       return;
//     }

//     const result = Math.pow(cube, 3);
//     setCubeResult(`The cube of ${cube} is ${result}.`);
//   };

//   const calculateCubeRoot = () => {
//     if (cubeRoot === '') {
//       alert('Please enter an integer.');
//       return;
//     }

//     const result = Math.cbrt(cubeRoot);
//     setRootResult(`Cube root of ${cubeRoot} is ${result.toFixed(3)}.`);
//   };

//   return (
//     <div className="container mt-5">
//       <h1>Math Algebra Calculators</h1>

//       {/* Complex Numbers */}
//       <div className="card mt-3">
//         <div className="card-body">
//           <h2>Complex Numbers</h2>
//           <input type="text" id="real1" value={complex.real1} onChange={handleComplexChange} placeholder="Real Part 1" />
//           <input type="text" id="imaginary1" value={complex.imaginary1} onChange={handleComplexChange} placeholder="Imaginary Part 1" />
//           <input type="text" id="real2" value={complex.real2} onChange={handleComplexChange} placeholder="Real Part 2" />
//           <input type="text" id="imaginary2" value={complex.imaginary2} onChange={handleComplexChange} placeholder="Imaginary Part 2" />
//           <button onClick={addComplexNumbers}>Add</button>
//           <button onClick={subtractComplexNumbers}>Subtract</button>
//           <button onClick={multiplyComplexNumbers}>Multiply</button>
//           <p>{complexResult}</p>
//         </div>
//       </div>

//       {/* Boolean Algebra */}
//       <div className="card mt-3">
//         <div className="card-body">
//           <h2>Boolean Algebra</h2>
//           <input type="text" value={booleanExpression} onChange={(e) => setBooleanExpression(e.target.value)} placeholder="Enter boolean expression" />
//           <button onClick={simplifyBoolean}>Simplify</button>
//           <p>{booleanResult}</p>
//         </div>
//       </div>

//       {/* Rational Functions */}
//       <div className="card mt-3">
//         <div className="card-body">
//           <h2>Rational Functions</h2>
//           <input type="text" value={rationalFunction} onChange={(e) => setRationalFunction(e.target.value)} placeholder="Enter rational function" />
//           <button onClick={doDecompose}>Decompose</button>
//           <p>{partialResult}</p>
//         </div>
//       </div>

//       {/* Inequalities */}
//       <div className="card mt-3">
//         <div className="card-body">
//           <h2>Inequalities</h2>
//           <input type="text" value={inequality} onChange={handleInequalityChange} placeholder="Enter inequality (ax + b > c)" />
//           <button onClick={calculateInequality}>Calculate</button>
//           <p>{inequalityResult}</p>
//         </div>
//       </div>

//       {/* Flow Rate */}
//       <div className="card mt-3">
//         <div className="card-body">
//           <h2>Flow Rate</h2>
//           <input type="text" value={pipeDiameter} onChange={(e) => setPipeDiameter(e.target.value)} placeholder="Pipe Diameter (m)" />
//           <input type="text" value={velocity} onChange={(e) => setVelocity(e.target.value)} placeholder="Velocity (m/s)" />
//           <button onClick={calculateFlowRate}>Calculate Flow Rate</button>
//           <p>Flow Rate: {flowRate} m³/s</p>
//         </div>
//       </div>

//       {/* Impulse */}
//       <div className="card mt-3">
//         <div className="card-body">
//           <h2>Impulse</h2>
//           <input type="text" value={force} onChange={(e) => setForce(e.target.value)} placeholder="Force (N)" />
//           <input type="text" value={time} onChange={(e) => setTime(e.target.value)} placeholder="Time (s)" />
//           <button onClick={calculateImpulse}>Calculate Impulse</button>
//           <p>{impulse}</p>
//         </div>
//       </div>

//       {/* Factorization */}
//       <div className="card mt-3">
//         <div className="card-body">
//           <h2>Factorization</h2>
//           <input type="text" value={number} onChange={handleNumberChange} placeholder="Enter number" />
//           <button onClick={factorize}>Factorize</button>
//           <p>{factorizationResult}</p>
//         </div>
//       </div>

//       {/* Percentage Change */}
//       <div className="card mt-3">
//         <div className="card-body">
//           <h2>Percentage Change</h2>
//           <input type="text" value={originalValue} onChange={(e) => setOriginalValue(e.target.value)} placeholder="Original Value" />
//           <input type="text" value={percentageChange} onChange={(e) => setPercentageChange(e.target.value)} placeholder="Percentage Change (%)" />
//           <button onClick={calculatePercentage}>Calculate Percentage Change</button>
//           <p>{percentageResult}</p>
//         </div>
//       </div>

//       {/* Exponential */}
//       <div className="card mt-3">
//         <div className="card-body">
//           <h2>Exponential</h2>
//           <input type="text" value={base} onChange={(e) => setBase(e.target.value)} placeholder="Base" />
//           <input type="text" value={exponent} onChange={(e) => setExponent(e.target.value)} placeholder="Exponent" />
//           <button onClick={calculateExponential}>Calculate Exponential</button>
//           <p>{expoResult}</p>
//         </div>
//       </div>

//       {/* Cube */}
//       <div className="card mt-3">
//         <div className="card-body">
//           <h2>Cube</h2>
//           <input type="text" value={cube} onChange={(e) => setCube(e.target.value)} placeholder="Enter integer" />
//           <button onClick={calculateCube}>Calculate Cube</button>
//           <p>{cubeResult}</p>
//         </div>
//       </div>

//       {/* Cube Root */}
//       <div className="card mt-3">
//         <div className="card-body">
//           <h2>Cube Root</h2>
//           <input type="text" value={cubeRoot} onChange={(e) => setCubeRoot(e.target.value)} placeholder="Enter integer" />
//           <button onClick={calculateCubeRoot}>Calculate Cube Root</button>
//           <p>{rootResult}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MathAlgebraCalculators;

import React, { useState } from "react";

const MathAlgebraCalculators = () => {
  const [real1, setReal1] = useState("");
  const [imag1, setImag1] = useState("");
  const [real2, setReal2] = useState("");
  const [imag2, setImag2] = useState("");
  const [result, setResult] = useState("");
  const [expression, setExpression] = useState("");
  const [flowRateDiameter, setFlowRateDiameter] = useState("");
  const [flowRateVelocity, setFlowRateVelocity] = useState("");
  const [flowRateResult, setFlowRateResult] = useState("");
  const [impulseForce, setImpulseForce] = useState("");
  const [impulseTime, setImpulseTime] = useState("");
  const [impulseResult, setImpulseResult] = useState("");
  const [factorizationNumber, setFactorizationNumber] = useState("");
  const [factorizationResult, setFactorizationResult] = useState("");
  const [percentageOriginal, setPercentageOriginal] = useState("");
  const [percentageChange, setPercentageChange] = useState("");
  const [percentageResult, setPercentageResult] = useState("");
  const [expBase, setExpBase] = useState("");
  const [expExponent, setExpExponent] = useState("");
  const [expResult, setExpResult] = useState("");
  const [cubeNumber, setCubeNumber] = useState("");
  const [cubeResult, setCubeResult] = useState("");
  const [cubeRootNumber, setCubeRootNumber] = useState("");
  const [cubeRootResult, setCubeRootResult] = useState("");

  // Complex Number Calculator
  const addComplex = () => {
    const real = parseFloat(real1) + parseFloat(real2);
    const imag = parseFloat(imag1) + parseFloat(imag2);
    setResult(`${real} + ${imag}i`);
  };

  // Flow Rate Calculator
  const calculateFlowRate = () => {
    const radius = parseFloat(flowRateDiameter) / 2;
    const area = Math.PI * Math.pow(radius, 2);
    const flowRate = area * parseFloat(flowRateVelocity);
    setFlowRateResult(flowRate.toFixed(2));
  };

  // Impulse Calculator
  const calculateImpulse = () => {
    const impulse = parseFloat(impulseForce) * parseFloat(impulseTime);
    setImpulseResult(impulse.toFixed(2));
  };

  // Factorization Calculator
  const factorize = () => {
    const factors = [];
    let n = parseInt(factorizationNumber);
    for (let i = 2; i <= n; i++) {
      while (n % i === 0) {
        factors.push(i);
        n /= i;
      }
    }
    setFactorizationResult(factors.join(", "));
  };

  // Percentage Calculator
  const calculatePercentage = () => {
    const newValue =
      parseFloat(percentageOriginal) * (1 + parseFloat(percentageChange) / 100);
    setPercentageResult(newValue.toFixed(2));
  };

  // Exponential Formulas Calculator
  const calculateExponent = () => {
    const result = Math.pow(parseFloat(expBase), parseFloat(expExponent));
    setExpResult(result.toFixed(2));
  };

  // Cube Calculator
  const calculateCube = () => {
    const result = Math.pow(parseFloat(cubeNumber), 3);
    setCubeResult(result.toFixed(2));
  };

  // Cube Root Calculator
  const calculateCubeRoot = () => {
    const result = Math.cbrt(parseFloat(cubeRootNumber));
    setCubeRootResult(result.toFixed(2));
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Math & Algebra Calculators</h1>

      {/* Complex Number Calculator */}
      <section className="mb-6 p-4 border border-gray-200 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">
          Complex Number Calculator
        </h2>
        <div className="flex gap-4 mb-4">
          <input
            type="number"
            value={real1}
            onChange={(e) => setReal1(e.target.value)}
            placeholder="Real Part 1"
            className="border border-gray-300 p-2 rounded"
          />
          <input
            type="number"
            value={imag1}
            onChange={(e) => setImag1(e.target.value)}
            placeholder="Imaginary Part 1"
            className="border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="flex gap-4 mb-4">
          <input
            type="number"
            value={real2}
            onChange={(e) => setReal2(e.target.value)}
            placeholder="Real Part 2"
            className="border border-gray-300 p-2 rounded"
          />
          <input
            type="number"
            value={imag2}
            onChange={(e) => setImag2(e.target.value)}
            placeholder="Imaginary Part 2"
            className="border border-gray-300 p-2 rounded"
          />
        </div>
        <button
          onClick={addComplex}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add
        </button>
        <p className="mt-4">Result: {result}</p>
      </section>

      {/* Flow Rate Calculator */}
      <section className="mb-6 p-4 border border-gray-200 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Flow Rate Calculator</h2>
        <div className="flex gap-4 mb-4">
          <input
            type="number"
            value={flowRateDiameter}
            onChange={(e) => setFlowRateDiameter(e.target.value)}
            placeholder="Pipe Diameter"
            className="border border-gray-300 p-2 rounded"
          />
          <input
            type="number"
            value={flowRateVelocity}
            onChange={(e) => setFlowRateVelocity(e.target.value)}
            placeholder="Velocity"
            className="border border-gray-300 p-2 rounded"
          />
        </div>
        <button
          onClick={calculateFlowRate}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Calculate
        </button>
        <p className="mt-4">Flow Rate: {flowRateResult} cubic units per time</p>
      </section>

      {/* Impulse Calculator */}
      <section className="mb-6 p-4 border border-gray-200 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Impulse Calculator</h2>
        <div className="flex gap-4 mb-4">
          <input
            type="number"
            value={impulseForce}
            onChange={(e) => setImpulseForce(e.target.value)}
            placeholder="Force"
            className="border border-gray-300 p-2 rounded"
          />
          <input
            type="number"
            value={impulseTime}
            onChange={(e) => setImpulseTime(e.target.value)}
            placeholder="Time"
            className="border border-gray-300 p-2 rounded"
          />
        </div>
        <button
          onClick={calculateImpulse}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Calculate
        </button>
        <p className="mt-4">Impulse: {impulseResult} unit-time</p>
      </section>

      {/* Factorization Calculator */}
      <section className="mb-6 p-4 border border-gray-200 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">
          Factorization Calculator
        </h2>
        <input
          type="number"
          value={factorizationNumber}
          onChange={(e) => setFactorizationNumber(e.target.value)}
          placeholder="Enter Integer"
          className="border border-gray-300 p-2 rounded"
        />
        <button
          onClick={factorize}
          className="bg-blue-500 text-white p-2 rounded mt-4"
        >
          Factorize
        </button>
        <p className="mt-4">Factors: {factorizationResult}</p>
      </section>

      {/* Percentage Calculator */}
      <section className="mb-6 p-4 border border-gray-200 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Percentage Calculator</h2>
        <div className="flex gap-4 mb-4">
          <input
            type="number"
            value={percentageOriginal}
            onChange={(e) => setPercentageOriginal(e.target.value)}
            placeholder="Original Value"
            className="border border-gray-300 p-2 rounded"
          />
          <input
            type="number"
            value={percentageChange}
            onChange={(e) => setPercentageChange(e.target.value)}
            placeholder="Percentage Change"
            className="border border-gray-300 p-2 rounded"
          />
        </div>
        <button
          onClick={calculatePercentage}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Calculate
        </button>
        <p className="mt-4">New Value: {percentageResult}</p>
      </section>

      {/* Exponential Formulas Calculator */}
      <section className="mb-6 p-4 border border-gray-200 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">
          Exponential Formulas Calculator
        </h2>
        <div className="flex gap-4 mb-4">
          <input
            type="number"
            value={expBase}
            onChange={(e) => setExpBase(e.target.value)}
            placeholder="Base"
            className="border border-gray-300 p-2 rounded"
          />
          <input
            type="number"
            value={expExponent}
            onChange={(e) => setExpExponent(e.target.value)}
            placeholder="Exponent"
            className="border border-gray-300 p-2 rounded"
          />
        </div>
        <button
          onClick={calculateExponent}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Calculate
        </button>
        <p className="mt-4">Result: {expResult}</p>
      </section>

      {/* Cube Calculator */}
      <section className="mb-6 p-4 border border-gray-200 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Cube Calculator</h2>
        <input
          type="number"
          value={cubeNumber}
          onChange={(e) => setCubeNumber(e.target.value)}
          placeholder="Enter Integer"
          className="border border-gray-300 p-2 rounded"
        />
        <button
          onClick={calculateCube}
          className="bg-blue-500 text-white p-2 rounded mt-4"
        >
          Calculate
        </button>
        <p className="mt-4">Cube: {cubeResult}</p>
      </section>

      {/* Cube Root Calculator */}
      <section className="mb-6 p-4 border border-gray-200 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Cube Root Calculator</h2>
        <input
          type="number"
          value={cubeRootNumber}
          onChange={(e) => setCubeRootNumber(e.target.value)}
          placeholder="Enter Integer"
          className="border border-gray-300 p-2 rounded"
        />
        <button
          onClick={calculateCubeRoot}
          className="bg-blue-500 text-white p-2 rounded mt-4"
        >
          Calculate
        </button>
        <p className="mt-4">Cube Root: {cubeRootResult}</p>
      </section>
    </div>
  );
};

export default MathAlgebraCalculators;
