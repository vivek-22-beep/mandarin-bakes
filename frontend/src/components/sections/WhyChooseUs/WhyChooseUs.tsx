import { motion } from "framer-motion";
import SectionTitle from "../../ui/SectionTitle";
import { whyChoose } from "../../../data/whyChoose";

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-[#FFF9F5] py-24">

<div className="mx-auto max-w-7xl px-6">

    <SectionTitle
        badge="Why Choose Us"
        title="Crafted With Passion, Served With Love"
        description="Every cake is thoughtfully designed, freshly baked, and handcrafted to turn your celebrations into unforgettable memories."
    />

</div>
    </section>
  );
};

export default WhyChooseUs;