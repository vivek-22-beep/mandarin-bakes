import { motion } from "framer-motion";
import { ArrowRight, CakeSlice, Sparkles } from "lucide-react";
import type { GalleryItem } from "../../../data/gallery";

interface GalleryCardProps {
  cake: GalleryItem;
}

const GalleryCard = ({ cake }: GalleryCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -12 }}
      transition={{ duration: 0.35 }}
      className="group overflow-hidden rounded-[30px] bg-white shadow-lg transition-all duration-500 hover:shadow-2xl"
    >
      {/* IMAGE */}
      <div className="relative h-72 overflow-hidden">

        <img
          src={cake.image}
          alt={cake.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

        {/* Badge */}
        <div className="absolute left-5 top-5">
          <span className="rounded-full bg-[#EC268F] px-4 py-2 text-xs font-semibold tracking-wide text-white shadow-lg">
            ✨ {cake.badge}
          </span>
        </div>

        {/* Floating Icon */}
        <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition duration-500 group-hover:rotate-12">
          <CakeSlice className="text-[#C97B36]" size={22} />
        </div>

      </div>

      {/* CONTENT */}

      <div className="space-y-4 p-6">

        <h3 className="text-2xl font-bold text-[#4A2C2A]">
          {cake.title}
        </h3>

        <p className="text-sm leading-7 text-gray-500">
          {cake.description}
        </p>

        {/* Chips */}

        <div className="flex flex-wrap gap-2">

          <span className="rounded-full bg-[#FFF5F8] px-4 py-2 text-xs font-medium text-[#EC268F]">
            {cake.category}
          </span>

          <span className="rounded-full bg-[#FFF8EB] px-4 py-2 text-xs font-medium text-[#C97B36]">
            {cake.type}
          </span>

        </div>

        {/* Button */}

        <button className="flex items-center gap-2 font-semibold text-[#C97B36] transition-all duration-300 group-hover:gap-4">

          View Details

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />

        </button>

      </div>

      {/* Bottom Decoration */}

      <div className="flex justify-end px-6 pb-5">

        <Sparkles
          size={18}
          className="text-[#EC268F]/40"
        />

      </div>
    </motion.div>
  );
};

export default GalleryCard;