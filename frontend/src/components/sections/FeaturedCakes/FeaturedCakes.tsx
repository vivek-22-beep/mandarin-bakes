import CakeCard from "../../ui/Card";
import { cakes } from "../../../data/cakes";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../../styles/swiper.css";

const FeaturedCakes = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-brand-gold)]">
            Our Signature Collection
          </p>

          <h2 className="text-4xl font-bold text-[var(--color-brand-brown)] md:text-5xl">
            Featured Cakes
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Handcrafted cakes made with premium ingredients for birthdays,
            anniversaries, weddings and every special celebration.
          </p>
        </div>

        {/* Cake Grid */}
        <Swiper
    modules={[Navigation, Pagination]}
    navigation
    pagination={{ clickable: true }}
    spaceBetween={30}
    slidesPerView={1}
    breakpoints={{
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1280: {
            slidesPerView: 4,
        },
    }}
>
    {cakes.map((cake) => (
        <SwiperSlide key={cake.id}>
            <CakeCard cake={cake} />
        </SwiperSlide>
    ))}
</Swiper>

      </div>
    </section>
  );
};

export default FeaturedCakes;