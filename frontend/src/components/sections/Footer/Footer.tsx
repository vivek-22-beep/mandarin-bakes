import logo from "../../../assets/logo/logo.jpg";

import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const quickLinks = [
  "Home",
  "About",
  "Gallery",
  "Testimonials",
  "Contact",
];

const categories = [
  "Birthday Cakes",
  "Anniversary Cakes",
  "Wedding Cakes",
  "Custom Cakes",
  "Cupcakes",
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#4A2C2A] text-white">

      {/* Decorative Glow */}
      <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-[#EC268F]/10 blur-3xl" />
      <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-[#C97B36]/10 blur-3xl" />

      <div className="relative">

        {/* CTA */}
        <section className="border-b border-white/10 py-20">
          <div className="mx-auto max-w-7xl px-6 text-center">

            <span className="rounded-full bg-[#C97B36]/20 px-5 py-2 text-sm font-semibold tracking-[3px] uppercase text-[#F5D29C]">
              Let's Celebrate Together
            </span>

            <h2 className="mt-6 text-5xl font-bold leading-tight">
              Ready For Your
              <span className="block text-[#C97B36]">
                Dream Cake?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              Birthdays, weddings, anniversaries or any special occasion—
              let's create a cake that's as memorable as your celebration.
            </p>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#C97B36] px-10 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#B86A2B]"
            >
              <FaWhatsapp />
              Order on WhatsApp
            </a>

          </div>
        </section>

        {/* Main Footer */}
        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>

            <img
              src={logo}
              alt="Mandarin Bakes"
              className="h-20 w-auto"
            />

            <p className="mt-6 leading-8 text-gray-300">
              Freshly baked happiness for every celebration.
              Premium cakes crafted with passion,
              creativity and the finest ingredients.
            </p>

            <div className="mt-8 flex gap-4">

              {[FaInstagram, FaFacebookF, FaWhatsapp].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#C97B36]"
                >
                  <Icon size={18} />
                </a>
              ))}

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="mb-6 text-xl font-semibold text-[#C97B36]">
              Quick Links
            </h3>

            <ul className="space-y-4">

              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-300 transition-colors duration-300 hover:text-[#C97B36]"
                  >
                    {link}
                  </a>
                </li>
              ))}

            </ul>

          </div>

          {/* Categories */}
          <div>

            <h3 className="mb-6 text-xl font-semibold text-[#C97B36]">
              Our Specialities
            </h3>

            <ul className="space-y-4">

              {categories.map((item) => (
                <li key={item}>
                  <span className="text-gray-300 transition-colors duration-300 hover:text-[#C97B36] cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="mb-6 text-xl font-semibold text-[#C97B36]">
              Contact Us
            </h3>

            <div className="space-y-6">

              <div className="flex gap-4">
                <FaPhoneAlt className="mt-1 text-[#C97B36]" />
                <div>
                  <p className="text-gray-300">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaEnvelope className="mt-1 text-[#C97B36]" />
                <div>
                  <p className="text-gray-300">
                    mandarinbakes@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaMapMarkerAlt className="mt-1 text-[#C97B36]" />
                <div>
                  <p className="text-gray-300">
                    Virar West,
                    <br />
                    Maharashtra
                  </p>
                </div>
              </div>

            </div>

          </div>

        </section>

        {/* Quote */}
        <section className="border-t border-white/10 py-8">
          <div className="mx-auto max-w-7xl px-6 text-center">

            <p className="text-lg italic text-[#F5D29C]">
              "Life is Short, Eat More Cake 🍰"
            </p>

            <p className="mt-6 text-sm text-gray-400">
              © {new Date().getFullYear()} Mandarin Bakes. Crafted with ❤️ by Vivek Deve.
            </p>

          </div>
        </section>

      </div>

    </footer>
  );
};

export default Footer;