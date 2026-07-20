import { motion } from "framer-motion";
import ContactCard from "./ContactCard";
import InstagramGrid from "./InstagramGrid";

const ContactSocial = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#FAF7F2] py-28"
    >
      {/* Background Glow */}
      <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#EC268F]/10 blur-3xl" />

      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#C97B36]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full bg-[#FFF5F8] px-6 py-2 text-sm font-semibold uppercase tracking-[4px] text-[#EC268F]">
            Contact & Social
          </span>

          <h2 className="mt-6 text-5xl font-bold text-[#4A2C2A]">
            Let's Bake
            <span className="block text-[#C97B36]">
              Something Special
            </span>
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-600">
            Whether it's a birthday, anniversary, wedding or custom creation,
            we'd love to be a part of your sweetest celebrations.
          </p>
        </motion.div>

        {/* Content */}

        <div className="grid gap-12 lg:grid-cols-2">

          <ContactCard />

          <InstagramGrid />

        </div>

      </div>
    </section>
  );
};

export default ContactSocial;