import {
  AsclepiusIcon,
  FacebookLogoIcon,
  XLogoIcon,
  WhatsappLogoIcon,
  InstagramLogoIcon,
  CaretLineUpIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon
} from "@phosphor-icons/react";

const Footer = ({ darkMode, setDarkMode }: any) => {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-500 p-1.5 rounded-lg text-white">
                <AsclepiusIcon size={24} weight="bold" />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                Easy<span className="text-emerald-500">Go</span>
              </h3>
            </div>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              Your trusted partner in pharmaceutical delivery. Fast, reliable, and secure healthcare solutions at your fingertips.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors">
                <FacebookLogoIcon size={24} weight="fill" />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors">
                <XLogoIcon size={24} weight="fill" />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors">
                <WhatsappLogoIcon size={24} weight="fill" />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors">
                <InstagramLogoIcon size={24} weight="fill" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-bold mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-4 text-slate-500 dark:text-slate-400">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-emerald-500 transition-colors">About Us</a></li>
              <li><a href="/services" className="hover:text-emerald-500 transition-colors">Services</a></li>
              <li><a href="/contact" className="hover:text-emerald-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-bold mb-6">Our Services</h3>
            <ul className="flex flex-col gap-4 text-slate-500 dark:text-slate-400">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Drug Delivery</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Prescriptions</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Consultations</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Emergency Care</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-bold mb-6">Contact Us</h3>
            <ul className="flex flex-col gap-4 text-slate-500 dark:text-slate-400">
              <li className="flex items-start gap-3">
                <MapPinIcon size={20} className="text-emerald-500 mt-1" />
                <span>123 Healthcare Ave, Medical District, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon size={20} className="text-emerald-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <EnvelopeIcon size={20} className="text-emerald-500" />
                <span>support@easygo.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 dark:text-slate-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} EasyGo Pharma. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
            <a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Terms of Service</a>
          </div>

          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
          >
            Back to Top
            <CaretLineUpIcon weight="bold" />
          </button>
        </div>

        {/* UTECHIT Credit */}
        <div className="border-t border-slate-100 dark:border-slate-800 pt-6 mt-6 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Designed and Developed by{' '}
            <span className="font-bold text-emerald-600 dark:text-emerald-400">UTECHIT</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
