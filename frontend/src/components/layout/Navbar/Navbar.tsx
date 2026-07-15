import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import Button from "../../ui/Button";
import Container from "../../ui/Container";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Cakes", href: "#" },
  { name: "Gallery", href: "#" },
  { name: "Contact", href: "#" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return <nav className="sticky top-0 z-50 bg-[var(--color-brand-cream)] shadow-sm">
  <Container className="flex items-center justify-between py-4">
    
    {/* Logo */}
    <div className="flex items-center gap-3 cursor-pointer">
  <img
    src="/src/assets/logo/logo.jpg"
    alt="Mandarin Bakes Logo"
    className="h-12 w-12 rounded-full object-cover"
  />

  <div>
    <h1 className="font-['Playfair_Display'] text-2xl font-bold text-[#6F4E37]">
      Mandarin Bakes
    </h1>

    <p className="text-xs tracking-widest text-[#D4A373] uppercase">
      Homemade with Love
    </p>
  </div>
</div>

    {/* Navigation */}
    <div className="hidden md:flex items-center gap-8">
  {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="font-medium text-[var(--color-brand-brown)] transition-colors duration-300 hover:text-[var(--color-brand-gold)]"
          >
            {link.name}
          </a>
        ))}
</div>

   {/* Order Button */}
      <Button className="hidden md:block">
  Order Now
</Button>

      {/* Mobile Menu Icon */}
      <button
        className="text-3xl text-[#6F4E37] md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

  </Container>
</nav>;
};

export default Navbar;