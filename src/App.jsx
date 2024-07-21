import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Card from "./components/Card";
import FinancialCalculator from "./components/FinancialCalculator";
import HealthFitnessCalculators from "./components/HealthFitnessCalculators";
import GeometryCalculator from "./components/GeometryCalculator";
import MathAlgebraCalculators from "./components/MathAlgebraCalculators";
import ConversionCalculator from "./components/ConversionCalculator";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/calculators" element={<Card />} />
          <Route path="/calculators/financial" element={<FinancialCalculator />} />
          <Route path="/calculators/health-fitness" element={<HealthFitnessCalculators />} />
          <Route path="/calculators/geometry" element={<GeometryCalculator />} />
          <Route path="/calculators/conversion" element={<ConversionCalculator />} />
          <Route path="/calculators/math-algebra" element={<MathAlgebraCalculators />} />


           <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/about-us" element={<AboutUs />} />

          {/* <Route path="/" element={<Home/>}/> */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
