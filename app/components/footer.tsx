import {
  AsclepiusIcon,
  FacebookLogoIcon,
  XLogoIcon,
  WhatsappLogoIcon,
  InstagramLogoIcon,
  CaretLineUpIcon,
} from "@phosphor-icons/react";

const Footer = ({ darkMode, setDarkMode }: any) => {
  return (
    <footer className="bg-green-50 dark:bg-gray-800 shadow-[-5px_-5px_15px_rgba(0,0,0,0.1)] dark:shadow-[-5px_-5px_15px_rgba(255,255,255,0.05)]  p-5">
      <div className="flex flex-col-reverse justify-center items-center sm:flex-row gap-10 sm:w-[60%] mx-auto">
        <div className="flex-1">
          <div className="flex justify-center sm:justify-start items-center">
            <AsclepiusIcon size={32} color="green" />
            <h3 className="font-bold">
              Easy<span className="text-green-900 dark:text-green-500">Go</span>
            </h3>
          </div>

          <p className="my-3 text-md">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>

          <div className="flex gap-2 justify-center sm:justify-start">
            <FacebookLogoIcon size={24} />
            <XLogoIcon size={24} />
            <WhatsappLogoIcon size={24} />
            <InstagramLogoIcon size={24} />
          </div>
        </div>
        {/* links */}
        <div className="flex justify-center items-end flex-1 flex-col">
          <h3 className="border-b border-b-black dark:border-b-white mb-2">Quick Links</h3>

          <div className="flex gap-1 flex-col">
            <a href="#">Home</a>
            <a href="#">Search</a>
            <a href="#">Request</a>
            <a href="#">Order</a>
          </div>
        </div>
      </div>
      <div className="mt-5 flex gap-2 justify-center flex-col items-center">
        <button className="w-max flex justify-center items-center gap-2 bg-transparent border border-black p-1.5 rounded-md">
          <CaretLineUpIcon />
          Back to Top
        </button>

        <h3 className="text-sm">
          <span className="font-bold">© All rights reserved</span> • Deserved
          and dveloped by <span className="font-bold">UTECHIT</span>
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
