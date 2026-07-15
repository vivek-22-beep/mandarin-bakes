import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import FeaturedCollections  from "./components/sections/FeaturedCollections";
import About from "./components/sections/About";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Gallery from "./components/sections/Gallery";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Gallery />
       <FeaturedCollections  />
       <About />
       <WhyChooseUs />
       
    </>
  );
}

export default App;