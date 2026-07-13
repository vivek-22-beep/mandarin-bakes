import aboutImage from "../../../assets/about/about.jpg";
import { CheckCircle } from "lucide-react";

const features = [
  "Fresh Premium Ingredients",
  "Handcrafted with Love",
  "Customized for Every Occasion",
  "Local Delivery Available",
];

const About = () => {
  return (
    <section className="bg-[#FAF7F2] py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Image */}

        <div className="relative">
          <img
            src={aboutImage}
            alt="Mandarin Bakes"
            className="w-full rounded-[32px] shadow-2xl"
          />

          <div className="absolute -bottom-6 -right-6 rounded-3xl bg-white p-6 shadow-xl">
            <h3 className="text-3xl font-bold text-[#C97B36]">
              100+
            </h3>

            <p className="mt-1 text-gray-600">
              Happy Celebrations
            </p>
          </div>
        </div>

        {/* Content */}

        <div>

          <p className="mb-3 uppercase tracking-[0.3em] text-[#C97B36] font-semibold">
            About Us
          </p>

          <h2 className="font-['Playfair_Display'] text-5xl font-bold leading-tight text-[#4A2C2A]">
            Every Celebration Deserves Something Extraordinary
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            At Mandarin Bakes, every cake is lovingly handcrafted using
            premium ingredients and creative artistry. Whether it's a birthday,
            anniversary, baby shower, or wedding, we believe every celebration
            deserves a cake that's as memorable as the moment itself.
          </p>

          <div className="mt-10 grid gap-5">

            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-4"
              >
                <CheckCircle
                  size={24}
                  className="text-[#C97B36]"
                />

                <span className="text-lg font-medium text-[#4A2C2A]">
                  {feature}
                </span>
              </div>
            ))}

          </div>

          <button
            className="mt-10 rounded-full bg-[#C97B36] px-8 py-4 font-semibold text-white transition duration-300 hover:bg-[#B86A2B]"
          >
            Explore Our Cakes
          </button>

        </div>

      </div>
    </section>
  );
};

export default About;