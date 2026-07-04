import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Cakes", href: "#" },
  { name: "Gallery", href: "#" },
  { name: "Contact", href: "#" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return <nav className="sticky top-0 z-50 bg-[#FAF7F2] shadow-sm">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
    
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
            className="font-medium text-[#4A2C2A] transition-colors duration-300 hover:text-[#C97B36]"
          >
            {link.name}
          </a>
        ))}
</div>

   {/* Order Button */}
      <button className="hidden rounded-full bg-[#C97B36] px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#B86A2B] md:block">
        Order Now
      </button>

      {/* Mobile Menu Icon */}
      <button
        className="text-3xl text-[#6F4E37] md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

  </div>
</nav>;
};

export default Navbar;