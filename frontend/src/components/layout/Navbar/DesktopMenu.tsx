import Button from "../../ui/Button";
import { navLinks } from "./navLinks";

const DesktopMenu = () => {
  return (
    <>
      <div className="hidden lg:flex items-center gap-8">

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

      </div>

      <Button className="hidden lg:block">
        Order Now
      </Button>
    </>
  );
};

export default DesktopMenu;