// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import img1 from '../assets/1.jpg';
// import img2 from '../assets/2.jpg';
// import img3 from '../assets/3.jpg';
// import img4 from '../assets/4.jpg';
// import img5 from '../assets/5.jpg';

// const Card = () => {
//   const cards = [
//     {
//       title: 'Financial Calculator',
//       image: img1,
//       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis quisquam, esse id rem iusto sunt eos quod beatae aspernatur.",
//       link: '/calculators/financial' // Route for Financial Calculator
//     },
//     {
//       title: 'Health & Fitness Calculator',
//       image: img2,
//       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis quisquam, esse id rem iusto sunt eos quod beatae aspernatur.",
//       link: '/calculators/health-fitness' // Route for Health & Fitness Calculator
//     },
//     {
//       title: 'Conversion Calculator',
//       image: img3,
//       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis quisquam, esse id rem iusto sunt eos quod beatae aspernatur.",
//       link: '/calculators/conversion' // Route for Conversion Calculator
//     },
//     {
//       title: 'Geometry Calculator',
//       image: img4,
//       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis quisquam, esse id rem iusto sunt eos quod beatae aspernatur.",
//       link: "/calculators/geometry", // Route for Geometry Calculator
//     },
//     {
//       title: 'Math-Algebra Calculators',
//       image: img5,
//       description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis quisquam, esse id rem iusto sunt eos quod beatae aspernatur.",
//       link: '/calculators/math-algebra' // Route for Math-Algebra Calculators
//     },
//   ];

//   return (
//     <div className="container mx-auto p-4">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {cards.map((card, i) => (
//           <div key={i} className="card border rounded-lg shadow-lg p-4">
//             <img src={card.image} alt={card.title} className="w-full h-48 object-cover rounded-lg" />
//             <h3 className="text-xl font-semibold mt-2">{card.title}</h3>
//             <p className="text-gray-600 mt-2">{card.description}</p>
//             <NavLink to={card.link} className="btn mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded">
//               Click Here
//             </NavLink>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Card;



//?

import React from 'react';
import { NavLink } from 'react-router-dom';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';

const Card = () => {
  const cards = [
    {
      title: 'Financial Calculator',
      image: img1,
      description: "Easily calculate loan payments, savings growth, investment returns, and other financial metrics. Perfect for budgeting and financial planning.",
      link: '/calculators/financial' // Route for Financial Calculator
    },
    {
      title: 'Health & Fitness Calculator',
      image: img2,
      description: "Track your health and fitness goals with calculators for BMI, calorie needs, exercise routines, and more. Ideal for maintaining a healthy lifestyle.",
      link: '/calculators/health-fitness' // Route for Health & Fitness Calculator
    },
    {
      title: 'Conversion Calculator',
      image: img3,
      description: "Convert between various units of measurement, including length, weight, volume, and temperature. Useful for science, cooking, and daily activities.",
      link: '/calculators/conversion' // Route for Conversion Calculator
    },
    {
      title: 'Geometry Calculator',
      image: img4,
      description: "Solve geometric problems with calculators for area, volume, perimeter, and angles. Great for students and professionals dealing with geometric shapes.",
      link: "/calculators/geometry", // Route for Geometry Calculator
    },
    {
      title: 'Math-Algebra Calculators',
      image: img5,
      description: "Handle various algebraic operations such as factoring, solving equations, and simplifying expressions. Includes tools for complex numbers, inequalities, and more.",
      link: '/calculators/math-algebra' // Route for Math-Algebra Calculators
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card, i) => (
          <div key={i} className="card border rounded-lg shadow-lg p-4">
            <img src={card.image} alt={card.title} className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-xl font-semibold mt-2">{card.title}</h3>
            <p className="text-gray-600 mt-2">{card.description}</p>
            <NavLink to={card.link} className="btn mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded">
              Click Here
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
