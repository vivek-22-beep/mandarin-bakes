import { motion } from "framer-motion";

interface SectionTitleProps {
  badge: string;
  title: string;
  description: string;
}

const SectionTitle = ({
  badge,
  title,
  description,
}: SectionTitleProps) => {
  return (
    <motion.div
      className="mx-auto mb-16 max-w-3xl text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <span className="rounded-full bg-[#FFF3E4] px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#C97B36]">
        {badge}
      </span>

      <h2 className="mt-6 font-['Playfair_Display'] text-4xl font-bold text-[#4A2C2A] md:text-5xl">
        {title}
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
        {description}
      </p>
    </motion.div>
  );
};

export default SectionTitle;