import { FaInstagram } from "react-icons/fa";

import insta1 from "../../../assets/instagram/insta1.jpg";
import insta2 from "../../../assets/instagram/insta2.jpg";
import insta3 from "../../../assets/instagram/insta3.jpg";
import insta4 from "../../../assets/instagram/insta4.jpg";
import insta5 from "../../../assets/instagram/insta5.jpg";
import insta6 from "../../../assets/instagram/insta6.jpg";

const images = [
  insta1,
  insta2,
  insta3,
  insta4,
  insta5,
  insta6,
];

const InstagramGrid = () => {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h3 className="text-3xl font-bold text-[#4A2C2A]">
  Sweet Moments
</h3>

<p className="mt-2 leading-7 text-gray-600">
  Every cake tells a story. Take a glimpse into our latest creations,
  celebrations, and handcrafted moments from Mandarin Bakes.
</p>
        </div>

        <FaInstagram
          size={32}
          className="text-[#EC268F]"
        />
      </div>

      <div className="grid h-[620px] grid-cols-3 grid-rows-4 gap-5">

  {/* Left Top */}
  <div className="group row-span-2 overflow-hidden rounded-[26px] shadow-lg">
    <img
      src={images[0]}
      alt=""
      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
    />
  </div>

  {/* Featured Image */}
  <div className="group col-span-2 row-span-3 overflow-hidden rounded-[30px] shadow-xl">
    <img
      src={images[1]}
      alt=""
      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
    />
  </div>

  {/* Left Bottom */}
  <div className="group row-span-2 overflow-hidden rounded-[26px] shadow-lg">
    <img
      src={images[2]}
      alt=""
      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
    />
  </div>

  {/* Bottom Images */}
  {images.slice(3, 6).map((image, index) => (
    <div
      key={index}
      className="group overflow-hidden rounded-[22px] shadow-md"
    >
      <img
        src={image}
        alt=""
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
    </div>
  ))}

</div>

      <a
        href="https://instagram.com/"
        target="_blank"
        rel="noreferrer"
        className="mt-8 flex items-center justify-center gap-3 rounded-full border-2 border-[#EC268F] py-4 font-semibold text-[#EC268F] transition-colors duration-300 hover:bg-[#EC268F] hover:text-white"
      >
        <FaInstagram size={20} />
        Explore More on Instagram
      </a>
    </div>
  );
};

export default InstagramGrid;