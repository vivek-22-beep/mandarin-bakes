import { motion } from "framer-motion";
import SectionTitle from "../../ui/SectionTitle";
import { whyChoose } from "../../../data/whyChoose";
import FeatureCard from "../../ui/FeatureCard";

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-[#FFF9F5] py-24">

<div className="mx-auto max-w-7xl px-6">
  <SectionTitle
    badge="Why Choose Us"
    title="Crafted With Passion, Served With Love"
    description="Every cake is thoughtfully designed, freshly baked, and handcrafted to make every celebration unforgettable."
  />

  <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
    {whyChoose.map((item, index) => (
      <motion.div
        key={item.title}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: index * 0.15,
        }}
      >
         <FeatureCard
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      </motion.div>
    ))}
  </div>
</div>
    </section>
  );
};

export default WhyChooseUs;