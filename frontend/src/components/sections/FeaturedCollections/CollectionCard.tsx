import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { CollectionItem } from "../../../data/collections";

interface CollectionCardProps {
  collection: CollectionItem;
}

const CollectionCard = ({ collection }: CollectionCardProps) => {
  const isLeft = collection.align === "left";

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`relative mb-32 flex flex-col items-center gap-16 lg:gap-20 ${
        isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C97B36]/10 blur-[120px]" />

      {/* IMAGE */}
      <motion.div
whileHover={{
  scale: 1.03,
  rotate: isLeft ? -1 : 1,
  y: -12,
}}
transition={{
  duration: 0.45,
  ease: "easeOut",
}}
  className="group relative w-full lg:w-1/2"
>
  {/* Soft Background Glow */}
  <div className="absolute -inset-8 -z-10 rounded-full bg-[#C97B36]/15 blur-3xl opacity-40 blur-3xl animate-pulse group-hover:opacity-100"></div>

  {/* Badge */}
  <motion.div
  animate={{
    y: [0, -6, 0],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute right-6 top-6 z-20 rounded-full bg-[#EC268F] px-5 py-2 text-sm font-semibold text-white shadow-xl"
>
    ✨ {collection.badge}
  </motion.div>

  {/* Image */}
  <div className="overflow-hidden rounded-[32px] shadow-[0_25px_60px_rgba(0,0,0,0.15)]">
    <img
      src={collection.image}
      alt={collection.title}
      className="aspect-video w-full object-cover transition duration-1000 ease-out group-hover:scale-110"
    />

    {/* Gradient Overlay */}
    <div className="absolute inset-0 rounded-[32px] bg-gradient-to-t opacity-40 blur-3xl animate-pulse from-black/20 via-transparent to-transparent  group-hover:opacity-100"></div>
  </div>
</motion.div>

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25 }}
        className="w-full lg:w-1/2"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[6px] text-[#EC268F]">
          {collection.subtitle}
        </p>

        <h2 className="mb-6 text-5xl font-bold leading-tight text-[#4A2C2A]">
          {collection.title}
        </h2>

        <p className="mb-10 text-lg leading-9 text-gray-600">
          {collection.description}
        </p>

        {/* Stats */}
        <div className="mb-10 flex gap-6">
          <div className="rounded-2xl bg-[#FFF5F8] px-6 py-4">
            <p className="text-3xl font-bold text-[#EC268F]">100+</p>
            <p className="text-sm text-gray-500">Designs</p>
          </div>

          <div className="rounded-2xl bg-[#FFF8EB] px-6 py-4">
            <p className="text-3xl font-bold text-[#C97B36]">★★★★★</p>
            <p className="text-sm text-gray-500">Customer Love</p>
          </div>
        </div>

        {/* Button */}
        <button className="group flex items-center gap-3 rounded-full border-2 border-[#C97B36] px-8 py-4 font-semibold text-[#C97B36] transition-all duration-300 hover:bg-[#C97B36] hover:text-white">
          Discover Collection

          <ArrowRight className="transition duration-300 group-hover:translate-x-2" />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default CollectionCard;