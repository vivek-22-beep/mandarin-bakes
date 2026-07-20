import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import FeaturedCollections  from "./components/sections/FeaturedCollections";
import About from "./components/sections/About";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Gallery from "./components/sections/Gallery";
import Testimonials from "./components/sections/Testimonials";
import ContactSocial from "./components/sections/ContactSocial";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Gallery />
       <FeaturedCollections  />
       <About />
       <WhyChooseUs />
       <Testimonials />
       <ContactSocial />
       <Footer />
    </>
  );
}

export default App;