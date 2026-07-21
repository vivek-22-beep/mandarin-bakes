import SectionTitle from "../../ui/SectionTitle";
import GallerySlider from "./GallerySlider";

const Gallery = () => {
  return (
    <section 
    id="gallery"
    className="relative overflow-hidden bg-[#FAF7F2] py-24">

      {/* Decorative Background */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#C97B36]/10 blur-3xl"></div>

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#EC268F]/10 blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          badge="Gallery"
          title="Our Sweet Creations"
          description="Every cake is handcrafted with love, creativity and the finest ingredients."
        />

        <div className="mt-16">

          <GallerySlider />

        </div>

        <div className="mt-14 flex justify-center">

          <button className="rounded-full border-2 border-[#C97B36] px-8 py-4 font-semibold text-[#C97B36] transition-all duration-300 hover:bg-[#C97B36] hover:text-white">

            Explore Full Gallery →

          </button>

        </div>

      </div>

    </section>
  );
};

export default Gallery;