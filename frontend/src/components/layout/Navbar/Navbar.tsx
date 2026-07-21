import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import Button from "../../ui/Button";
import Container from "../../ui/Container";

import logo from "../../../assets/logo/logo.jpg";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Cakes", href: "#collections" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 shadow-lg backdrop-blur-lg"
            : "bg-[var(--color-brand-cream)]"
        }`}
      >
        <Container className="flex h-20 items-center justify-between">
          {/* Logo */}

          <a
            href="#hero"
            className="flex items-center gap-3"
          >
            <img
              src={logo}
              alt="Mandarin Bakes"
              className="h-12 w-12 rounded-full object-cover"
            />

            <div>
              <h1 className="font-['Playfair_Display'] text-2xl font-bold text-[#6F4E37]">
                Mandarin Bakes
              </h1>

              <p className="text-xs uppercase tracking-[3px] text-[#C97B36]">
                Homemade with Love
              </p>
            </div>
          </a>

          {/* Desktop */}

          <div className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative font-medium text-[#4A2C2A] transition-colors duration-300 hover:text-[#C97B36]"
              >
                {link.name}

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#C97B36] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            <Button>Order Now</Button>
          </div>

          {/* Mobile */}

          <button
            onClick={() => setIsOpen(true)}
            className="rounded-full p-2 text-[#4A2C2A] transition hover:bg-[#F7EEDF] lg:hidden"
          >
            <FiMenu size={30} />
          </button>
        </Container>
      </nav>

      {/* Overlay */}

      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-[60] bg-black/40 transition-all duration-300 ${
          isOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      />

      {/* Drawer */}

      <div
        className={`fixed right-0 top-0 z-[70] flex h-screen w-[320px] flex-col bg-[#FAF7F2] shadow-2xl transition-transform duration-300 ${
          isOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b border-[#F3E5D8] p-6">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt=""
              className="h-12 w-12 rounded-full"
            />

            <div>
              <h2 className="font-bold text-[#4A2C2A]">
                Mandarin Bakes
              </h2>

              <p className="text-xs uppercase tracking-widest text-[#C97B36]">
                Homemade
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="rounded-full p-2 transition hover:bg-white"
          >
            <FiX size={28} />
          </button>
        </div>

        {/* Links */}

        <div className="flex flex-1 flex-col px-8 py-10">
          <div className="space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-xl font-semibold text-[#4A2C2A] transition hover:text-[#C97B36]"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-auto">
            <Button className="w-full">
              Order on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;