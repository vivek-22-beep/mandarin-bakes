import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import type { Testimonial } from "../../../data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const initials = testimonial.name
    .split(" ")
    .map((word) => word[0])
    .join("");

  return (
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
      transition={{ duration: 0.4 }}
      className="group relative overflow-hidden rounded-[32px] bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
    >
      {/* Background Glow */}
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#C97B36]/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100"></div>

      {/* Giant Quote */}
      <Quote
        size={110}
        className="absolute right-6 top-4 text-[#C97B36]/10 transition duration-500 group-hover:rotate-12"
      />

      {/* Rating */}
      <div className="mb-6 flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Star
            key={index}
            size={20}
            fill="#C97B36"
            color="#C97B36"
          />
        ))}
      </div>

      {/* Review */}
      <p className="relative z-10 mb-10 text-lg leading-8 text-gray-600">
        "{testimonial.review}"
      </p>

      {/* Customer */}
      <div className="flex items-center gap-5">
        <motion.div
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#EC268F] to-[#C97B36] text-xl font-bold text-white shadow-lg"
        >
          {initials}
        </motion.div>

        <div>
          <h4 className="text-xl font-semibold text-[#4A2C2A]">
            {testimonial.name}
          </h4>

          <p className="text-sm text-[#C97B36]">
            {testimonial.event}
          </p>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="mt-8 h-[2px] w-0 bg-gradient-to-r from-[#EC268F] to-[#C97B36] transition-all duration-500 group-hover:w-full"></div>
    </motion.div>
  );
};

export default TestimonialCard;