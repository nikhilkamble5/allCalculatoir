// import React, { useState } from "react";

// const GeometryCalculator = () => {
//   const [calculatorType, setCalculatorType] = useState("areaCircle");

//   const renderCalculator = () => {
//     switch (calculatorType) {
//       case "areaCircle":
//         return <AreaCircleCalculator />;
//       case "areaSquare":
//         return <AreaSquareCalculator />;
//       case "areaTriangle":
//         return <AreaTriangleCalculator />;
//       case "perimeterSquare":
//         return <PerimeterSquareCalculator />;
//       case "perimeterTriangle":
//         return <PerimeterTriangleCalculator />;
//       case "volumeCube":
//         return <VolumeCubeCalculator />;
//       case "volumeSphere":
//         return <VolumeSphereCalculator />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       <h2>Geometry Calculator</h2>
//       <div>
//         <label>Select Calculator:</label>
//         <select
//           value={calculatorType}
//           onChange={(e) => setCalculatorType(e.target.value)}
//         >
//           <option value="areaCircle">Area of Circle Calculator</option>
//           <option value="areaSquare">Area of Square Calculator</option>
//           <option value="areaTriangle">Area of Triangle Calculator</option>
//           <option value="perimeterSquare">
//             Perimeter of Square Calculator
//           </option>
//           <option value="perimeterTriangle">
//             Perimeter of Triangle Calculator
//           </option>
//           <option value="volumeCube">Volume of Cube Calculator</option>
//           <option value="volumeSphere">Volume of Sphere Calculator</option>
//         </select>
//       </div>

//       {renderCalculator()}
//     </div>
//   );
// };

// const AreaCircleCalculator = () => {
//   const [radius, setRadius] = useState(0);
//   const [area, setArea] = useState(0);

//   const calculateArea = () => {
//     const result = Math.PI * radius * radius;
//     setArea(result);
//   };

//   return (
//     <div>
//       <h3>Area of Circle Calculator</h3>
//       <div>
//         <label>Radius:</label>
//         <input
//           type="number"
//           value={radius}
//           onChange={(e) => setRadius(Number(e.target.value))}
//         />
//       </div>
//       <button onClick={calculateArea}>Calculate</button>
//       <div>
//         <h4>Area: {area}</h4>
//       </div>
//     </div>
//   );
// };

// const AreaSquareCalculator = () => {
//   const [sideLength, setSideLength] = useState(0);
//   const [area, setArea] = useState(0);

//   const calculateArea = () => {
//     const result = sideLength * sideLength;
//     setArea(result);
//   };

//   return (
//     <div>
//       <h3>Area of Square Calculator</h3>
//       <div>
//         <label>Side Length:</label>
//         <input
//           type="number"
//           value={sideLength}
//           onChange={(e) => setSideLength(Number(e.target.value))}
//         />
//       </div>
//       <button onClick={calculateArea}>Calculate</button>
//       <div>
//         <h4>Area: {area}</h4>
//       </div>
//     </div>
//   );
// };

// const AreaTriangleCalculator = () => {
//   const [base, setBase] = useState(0);
//   const [height, setHeight] = useState(0);
//   const [area, setArea] = useState(0);

//   const calculateArea = () => {
//     const result = (base * height) / 2;
//     setArea(result);
//   };

//   return (
//     <div>
//       <h3>Area of Triangle Calculator</h3>
//       <div>
//         <label>Base:</label>
//         <input
//           type="number"
//           value={base}
//           onChange={(e) => setBase(Number(e.target.value))}
//         />
//       </div>
//       <div>
//         <label>Height:</label>
//         <input
//           type="number"
//           value={height}
//           onChange={(e) => setHeight(Number(e.target.value))}
//         />
//       </div>
//       <button onClick={calculateArea}>Calculate</button>
//       <div>
//         <h4>Area: {area}</h4>
//       </div>
//     </div>
//   );
// };

// const PerimeterSquareCalculator = () => {
//   const [sideLength, setSideLength] = useState(0);
//   const [perimeter, setPerimeter] = useState(0);

//   const calculatePerimeter = () => {
//     const result = 4 * sideLength;
//     setPerimeter(result);
//   };

//   return (
//     <div>
//       <h3>Perimeter of Square Calculator</h3>
//       <div>
//         <label>Side Length:</label>
//         <input
//           type="number"
//           value={sideLength}
//           onChange={(e) => setSideLength(Number(e.target.value))}
//         />
//       </div>
//       <button onClick={calculatePerimeter}>Calculate</button>
//       <div>
//         <h4>Perimeter: {perimeter}</h4>
//       </div>
//     </div>
//   );
// };

// const PerimeterTriangleCalculator = () => {
//   const [side1, setSide1] = useState(0);
//   const [side2, setSide2] = useState(0);
//   const [side3, setSide3] = useState(0);
//   const [perimeter, setPerimeter] = useState(0);

//   const calculatePerimeter = () => {
//     const result = side1 + side2 + side3;
//     setPerimeter(result);
//   };

//   return (
//     <div>
//       <h3>Perimeter of Triangle Calculator</h3>
//       <div>
//         <label>Side 1:</label>
//         <input
//           type="number"
//           value={side1}
//           onChange={(e) => setSide1(Number(e.target.value))}
//         />
//       </div>
//       <div>
//         <label>Side 2:</label>
//         <input
//           type="number"
//           value={side2}
//           onChange={(e) => setSide2(Number(e.target.value))}
//         />
//       </div>
//       <div>
//         <label>Side 3:</label>
//         <input
//           type="number"
//           value={side3}
//           onChange={(e) => setSide3(Number(e.target.value))}
//         />
//       </div>
//       <button onClick={calculatePerimeter}>Calculate</button>
//       <div>
//         <h4>Perimeter: {perimeter}</h4>
//       </div>
//     </div>
//   );
// };

// const VolumeCubeCalculator = () => {
//   const [sideLength, setSideLength] = useState(0);
//   const [volume, setVolume] = useState(0);

//   const calculateVolume = () => {
//     const result = Math.pow(sideLength, 3);
//     setVolume(result);
//   };

//   return (
//     <div>
//       <h3>Volume of Cube Calculator</h3>
//       <div>
//         <label>Side Length:</label>
//         <input
//           type="number"
//           value={sideLength}
//           onChange={(e) => setSideLength(Number(e.target.value))}
//         />
//       </div>
//       <button onClick={calculateVolume}>Calculate</button>
//       <div>
//         <h4>Volume: {volume}</h4>
//       </div>
//     </div>
//   );
// };

// const VolumeSphereCalculator = () => {
//   const [radius, setRadius] = useState(0);
//   const [volume, setVolume] = useState(0);

//   const calculateVolume = () => {
//     const result = (4 / 3) * Math.PI * Math.pow(radius, 3);
//     setVolume(result);
//   };

//   return (
//     <div>
//       <h3>Volume of Sphere Calculator</h3>
//       <div>
//         <label>Radius:</label>
//         <input
//           type="number"
//           value={radius}
//           onChange={(e) => setRadius(Number(e.target.value))}
//         />
//       </div>
//       <button onClick={calculateVolume}>Calculate</button>
//       <div>
//         <h4>Volume: {volume}</h4>
//       </div>
//     </div>
//   );
// };

// export default GeometryCalculator;



//?

import React, { useState } from "react";

const GeometryCalculator = () => {
  const [calculatorType, setCalculatorType] = useState("areaCircle");

  const renderCalculator = () => {
    switch (calculatorType) {
      case "areaCircle":
        return <AreaCircleCalculator />;
      case "areaSquare":
        return <AreaSquareCalculator />;
      case "areaTriangle":
        return <AreaTriangleCalculator />;
      case "perimeterSquare":
        return <PerimeterSquareCalculator />;
      case "perimeterTriangle":
        return <PerimeterTriangleCalculator />;
      case "volumeCube":
        return <VolumeCubeCalculator />;
      case "volumeSphere":
        return <VolumeSphereCalculator />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold mb-4">Geometry Calculator</h2>
      <div className="space-y-2">
        <label className="block text-lg">Select Calculator:</label>
        <select
          value={calculatorType}
          onChange={(e) => setCalculatorType(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full"
        >
          <option value="areaCircle">Area of Circle Calculator</option>
          <option value="areaSquare">Area of Square Calculator</option>
          <option value="areaTriangle">Area of Triangle Calculator</option>
          <option value="perimeterSquare">Perimeter of Square Calculator</option>
          <option value="perimeterTriangle">Perimeter of Triangle Calculator</option>
          <option value="volumeCube">Volume of Cube Calculator</option>
          <option value="volumeSphere">Volume of Sphere Calculator</option>
        </select>
      </div>

      {renderCalculator()}
    </div>
  );
};

const AreaCircleCalculator = () => {
  const [radius, setRadius] = useState(0);
  const [area, setArea] = useState(0);

  const calculateArea = () => {
    const result = Math.PI * radius * radius;
    setArea(result);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md space-y-4">
      <h3 className="text-xl font-semibold">Area of Circle Calculator</h3>
      <div>
        <label className="block text-lg">Radius:</label>
        <input
          type="number"
          value={radius}
          onChange={(e) => setRadius(Number(e.target.value))}
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
      </div>
      <button
        onClick={calculateArea}
        className="bg-blue-500 text-white rounded-lg p-2 w-full"
      >
        Calculate
      </button>
      <div>
        <h4 className="mt-2 text-lg">Area: {area}</h4>
      </div>
    </div>
  );
};

const AreaSquareCalculator = () => {
  const [sideLength, setSideLength] = useState(0);
  const [area, setArea] = useState(0);

  const calculateArea = () => {
    const result = sideLength * sideLength;
    setArea(result);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md space-y-4">
      <h3 className="text-xl font-semibold">Area of Square Calculator</h3>
      <div>
        <label className="block text-lg">Side Length:</label>
        <input
          type="number"
          value={sideLength}
          onChange={(e) => setSideLength(Number(e.target.value))}
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
      </div>
      <button
        onClick={calculateArea}
        className="bg-blue-500 text-white rounded-lg p-2 w-full"
      >
        Calculate
      </button>
      <div>
        <h4 className="mt-2 text-lg">Area: {area}</h4>
      </div>
    </div>
  );
};

const AreaTriangleCalculator = () => {
  const [base, setBase] = useState(0);
  const [height, setHeight] = useState(0);
  const [area, setArea] = useState(0);

  const calculateArea = () => {
    const result = (base * height) / 2;
    setArea(result);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md space-y-4">
      <h3 className="text-xl font-semibold">Area of Triangle Calculator</h3>
      <div>
        <label className="block text-lg">Base:</label>
        <input
          type="number"
          value={base}
          onChange={(e) => setBase(Number(e.target.value))}
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
      </div>
      <div>
        <label className="block text-lg">Height:</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
      </div>
      <button
        onClick={calculateArea}
        className="bg-blue-500 text-white rounded-lg p-2 w-full"
      >
        Calculate
      </button>
      <div>
        <h4 className="mt-2 text-lg">Area: {area}</h4>
      </div>
    </div>
  );
};

const PerimeterSquareCalculator = () => {
  const [sideLength, setSideLength] = useState(0);
  const [perimeter, setPerimeter] = useState(0);

  const calculatePerimeter = () => {
    const result = 4 * sideLength;
    setPerimeter(result);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md space-y-4">
      <h3 className="text-xl font-semibold">Perimeter of Square Calculator</h3>
      <div>
        <label className="block text-lg">Side Length:</label>
        <input
          type="number"
          value={sideLength}
          onChange={(e) => setSideLength(Number(e.target.value))}
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
      </div>
      <button
        onClick={calculatePerimeter}
        className="bg-blue-500 text-white rounded-lg p-2 w-full"
      >
        Calculate
      </button>
      <div>
        <h4 className="mt-2 text-lg">Perimeter: {perimeter}</h4>
      </div>
    </div>
  );
};

const PerimeterTriangleCalculator = () => {
  const [side1, setSide1] = useState(0);
  const [side2, setSide2] = useState(0);
  const [side3, setSide3] = useState(0);
  const [perimeter, setPerimeter] = useState(0);

  const calculatePerimeter = () => {
    const result = side1 + side2 + side3;
    setPerimeter(result);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md space-y-4">
      <h3 className="text-xl font-semibold">Perimeter of Triangle Calculator</h3>
      <div>
        <label className="block text-lg">Side 1:</label>
        <input
          type="number"
          value={side1}
          onChange={(e) => setSide1(Number(e.target.value))}
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
      </div>
      <div>
        <label className="block text-lg">Side 2:</label>
        <input
          type="number"
          value={side2}
          onChange={(e) => setSide2(Number(e.target.value))}
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
      </div>
      <div>
        <label className="block text-lg">Side 3:</label>
        <input
          type="number"
          value={side3}
          onChange={(e) => setSide3(Number(e.target.value))}
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
      </div>
      <button
        onClick={calculatePerimeter}
        className="bg-blue-500 text-white rounded-lg p-2 w-full"
      >
        Calculate
      </button>
      <div>
        <h4 className="mt-2 text-lg">Perimeter: {perimeter}</h4>
      </div>
    </div>
  );
};

const VolumeCubeCalculator = () => {
  const [sideLength, setSideLength] = useState(0);
  const [volume, setVolume] = useState(0);

  const calculateVolume = () => {
    const result = Math.pow(sideLength, 3);
    setVolume(result);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md space-y-4">
      <h3 className="text-xl font-semibold">Volume of Cube Calculator</h3>
      <div>
        <label className="block text-lg">Side Length:</label>
        <input
          type="number"
          value={sideLength}
          onChange={(e) => setSideLength(Number(e.target.value))}
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
      </div>
      <button
        onClick={calculateVolume}
        className="bg-blue-500 text-white rounded-lg p-2 w-full"
      >
        Calculate
      </button>
      <div>
        <h4 className="mt-2 text-lg">Volume: {volume}</h4>
      </div>
    </div>
  );
};

const VolumeSphereCalculator = () => {
  const [radius, setRadius] = useState(0);
  const [volume, setVolume] = useState(0);

  const calculateVolume = () => {
    const result = (4 / 3) * Math.PI * Math.pow(radius, 3);
    setVolume(result);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md space-y-4">
      <h3 className="text-xl font-semibold">Volume of Sphere Calculator</h3>
      <div>
        <label className="block text-lg">Radius:</label>
        <input
          type="number"
          value={radius}
          onChange={(e) => setRadius(Number(e.target.value))}
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
      </div>
      <button
        onClick={calculateVolume}
        className="bg-blue-500 text-white rounded-lg p-2 w-full"
      >
        Calculate
      </button>
      <div>
        <h4 className="mt-2 text-lg">Volume: {volume}</h4>
      </div>
    </div>
  );
};

export default GeometryCalculator;
