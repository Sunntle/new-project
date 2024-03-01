import { Facebook, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-5">
      <div className="flex container justify-between items-center">
        <div className="flex gap-x-10">
          <div className="flex gap-x-2">
            <Phone className="bg-icon" />
            <p>Call us: +84 908 02 02 58</p>
          </div>
          <div className="flex gap-x-2">
            <Mail className="bg-icon" />
            <p>Email: chucinog@gmail.com</p>
          </div>
        </div>
        <div className="flex gap-x-2">
          <h5 className="relative me-12 after:content-[''] after:w-[2.5rem] after:h-[1px] after:bg-black after:block after:absolute after:top-1/2 after:-right-12">
            Follow us
          </h5>
          <div>
            <Facebook className="bg-icon" />
          </div>
          <div>
            <Instagram className="bg-icon" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
