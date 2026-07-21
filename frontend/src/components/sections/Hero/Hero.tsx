import cakeImage from "../../../assets/cakes/bread-crumb.jpg";
import Button from "../../ui/Button";

const Hero = () => {
  return (
    <section 
    id="hero"
    className="bg-[#FAF7F2]">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col-reverse items-center justify-between gap-12 px-6 py-16 md:flex-row">

        {/* Left Content */}
        <div className="max-w-xl text-center md:text-left">

          <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-[#C97B36]">
            Homemade Bakery
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight text-[#4A2C2A] md:text-6xl">
            Every Celebration
            <br />
            Deserves a
            <span className="text-[#C97B36]"> Perfect Cake.</span>
          </h1>

          <p className="mb-8 text-lg leading-8 text-gray-600">
            Freshly baked cakes, cupcakes, pastries and desserts made
            with premium ingredients and lots of love.
            Customized for birthdays, anniversaries and every special occasion.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">

            <Button className="hidden md:block">
              Order on WhatsApp
              </Button>
            

            <Button className="hidden md:block">
              Explore Menu
            </Button>

          </div>

        </div>

        {/* Right Image */}

        <div className="flex justify-center">

          <img
            src={cakeImage}
            alt="Chocolate Cake"
            className="w-full max-w-md rounded-3xl shadow-2xl transition duration-500 hover:scale-105"
          />

        </div>

      </div>
    </section>
  );
};

export default Hero;