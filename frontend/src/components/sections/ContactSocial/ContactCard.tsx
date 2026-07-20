import {
  Phone,
  MapPin,
  Clock3,
  Mail,
  MessageCircle,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const ContactCard = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Order Instantly",
      href: "https://wa.me/919876543210",
    },
    {
      icon: Mail,
      title: "Email",
      value: "mandarinbakes@gmail.com",
      href: "mailto:mandarinbakes@gmail.com",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "Virar West, Maharashtra",
      href: "#",
    },
    {
      icon: Clock3,
      title: "Business Hours",
      value: "10 AM - 9 PM",
      href: "#",
    },
  ];

  return (
    <div className="rounded-[32px] bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,.08)]">
      <h3 className="text-3xl font-bold text-[#4A2C2A]">
        Get In Touch
      </h3>

      <p className="mt-4 leading-8 text-gray-600">
        Ready to order your dream cake?
        Contact us today and let's create something unforgettable.
      </p>

      <div className="mt-10 space-y-5">
        {contactInfo.map((item, index) => {
          const Icon = item.icon;

          return (
            <a
              key={index}
              href={item.href}
              className="group flex items-center gap-5 rounded-2xl border border-[#F3E5D8] bg-white p-5 transition-colors duration-300 hover:border-[#C97B36] hover:bg-[#FFF8F2]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFF5F8] transition-colors duration-300 group-hover:bg-[#C97B36]">
                <Icon
                  size={24}
                  className="text-[#EC268F] transition-colors duration-300 group-hover:text-white"
                />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  {item.title}
                </p>

                <p className="font-semibold text-[#4A2C2A]">
                  {item.value}
                </p>
              </div>
            </a>
          );
        })}
      </div>

      <div className="mt-8 flex gap-4">
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EC268F] text-white transition-colors duration-300 hover:bg-[#C97B36]"
        >
          <FaInstagram size={22} />
        </a>

        <button className="flex-1 rounded-full bg-[#C97B36] py-4 font-semibold text-white transition-colors duration-300 hover:bg-[#B86A2B]">
          Order Your Cake
        </button>
      </div>
    </div>
  );
};

export default ContactCard;