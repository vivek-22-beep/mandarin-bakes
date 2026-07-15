import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { galleryImages } from "../../../data/gallery";
import GalleryCard from "./GalleryCard";

const GallerySlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={3}
      loop
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      }}
    >
      {galleryImages.map((cake) => (
        <SwiperSlide key={cake.id}>
          <GalleryCard cake={cake} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default GallerySlider;