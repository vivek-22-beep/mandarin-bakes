import { motion } from "framer-motion";
import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";

interface FeatureCardProps {
  icon: ComponentType<LucideProps>;
  title: string;
  description: string;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl border border-[#F3E5D8] bg-white p-8 shadow-lg transition-all duration-500 hover:border-[#C97B36] hover:shadow-2xl"
    >
      {/* Background Glow */}
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#C97B36]/10 blur-3xl transition-all duration-500 group-hover:scale-150" />

      {/* Icon */}
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFF3E4]">
        <motion.div
          whileHover={{
            rotate: 8,
            scale: 1.15,
          }}
        >
          <Icon
            size={34}
            className="text-[#C97B36]"
          />
        </motion.div>
      </div>

      {/* Title */}
      <h3 className="mb-4 font-['Playfair_Display'] text-2xl font-bold text-[#4A2C2A]">
        {title}
      </h3>

      {/* Description */}
      <p className="leading-7 text-gray-600">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;