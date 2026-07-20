import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { testimonials } from "../../../data/testimonials";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#FAF7F2] py-28"
    >
      {/* Background Glow */}
      <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-[#EC268F]/10 blur-3xl" />

      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#C97B36]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full bg-[#FFF5F8] px-6 py-2 text-sm font-semibold tracking-[4px] uppercase text-[#EC268F]">
            ❤️ Testimonials
          </span>

          <h2 className="mt-6 text-5xl font-bold text-[#4A2C2A]">
            Sweet Words
            <span className="block text-[#C97B36]">
              From Happy Customers
            </span>
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-600">
            Every celebration tells a story.
            Here are some beautiful memories shared by our wonderful customers.
          </p>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop
          centeredSlides
          grabCursor
          speed={900}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={35}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1.2,
            },
            1024: {
              slidesPerView: 1.7,
            },
            1280: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Testimonials;