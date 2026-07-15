import { motion } from "framer-motion";
import { collections } from "../../../data/collections";
import CollectionCard from "./CollectionCard";

const FeaturedCollections = () => {
  return (
    <section
      id="collections"
      className="relative overflow-hidden bg-[#FAF7F2] py-28"
    >
      {/* Background Decorations */}

      <div className="absolute left-[-120px] top-20 h-96 w-96 rounded-full bg-[#EC268F]/10 blur-3xl"></div>

      <div className="absolute right-[-100px] bottom-10 h-96 w-96 rounded-full bg-[#C97B36]/10 blur-3xl"></div>

      <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#C97B36]/15 to-transparent"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-24 max-w-3xl text-center"
        >
          <span className="inline-block rounded-full bg-[#FFF5F8] px-6 py-2 text-sm font-semibold uppercase tracking-[4px] text-[#EC268F] shadow-sm">
            ✨ Featured Collections
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-[#4A2C2A] md:text-6xl">
            Crafted for Every
            <span className="block text-[#C97B36]">
              Celebration
            </span>
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-600">
            Whether it's a birthday, wedding, anniversary or a custom
            celebration, every Mandarin Bakes creation is handcrafted with
            premium ingredients, creativity and lots of love.
          </p>
        </motion.div>

        {/* Collections */}

        {collections.map((collection) => (
          <CollectionCard
            key={collection.id}
            collection={collection}
          />
        ))}

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 text-center"
        >
          <button className="group rounded-full border-2 border-[#EC268F] px-10 py-4 text-lg font-semibold text-[#EC268F] transition-all duration-300 hover:bg-[#EC268F] hover:text-white hover:shadow-xl">
            Explore All Collections →
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturedCollections;