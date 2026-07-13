import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import FeaturedCakes from "./components/sections/FeaturedCakes";
import About from "./components/sections/About";
import WhyChooseUs from "./components/sections/WhyChooseUs";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
       <FeaturedCakes />
       <About />
       <WhyChooseUs />
    </>
  );
}

export default App;