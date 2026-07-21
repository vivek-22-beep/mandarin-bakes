import logo from "../../../assets/logo/logo.jpg";

const Logo = () => {
  return (
    <a
      href="#"
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
          Homemade With Love
        </p>
      </div>
    </a>
  );
};

export default Logo;