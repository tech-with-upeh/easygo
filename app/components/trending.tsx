import Image from "next/image";
import { StethoscopeIcon, MapPinIcon, ArrowRightIcon } from "@phosphor-icons/react";

const products = [
  {
    image: "/cataflam.png",
    name: "Cataflam",
    price: "₦6,500.99",
  },
  {
    image: "/emzor.png",
    name: "Emzor",
    price: "₦1,399.99",
  },
  {
    image: "/emprofen.png",
    name: "Emprofen",
    price: "₦2,999.99",
  },
  {
    image: "/lonart.png",
    name: "Lonart",
    price: "₦3,999.99",
  },
  {
    image: "/lofnac.png",
    name: "Lofnac",
    price: "₦1,399.99",
  },
  {
    image: "/ibuprofen.png",
    name: "Ibuprofen",
    price: "₦1,999.99",
  },
  {
    image: "/dispirin.png",
    name: "Dispirin",
    price: "₦12.00",
  },
  {
    image: "/arthrotec.png",
    name: "Arthrotec",
    price: "₦31.00",
  },
  {
    image: "/gaviscon.png",
    name: "Gaviscon",
    price: "₦11,000.00",
  },
  {
    image: "/celebrex.png",
    name: "Celebrex",
    price: "₦14,000.00",
  },
];

const Trending = ({ darkMode, setDarkMode }: any) => {
  return (
    <div className="bg-white dark:bg-slate-900 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
              Trending Products
            </h2>
            <p className="text-slate-500 dark:text-slate-400">Popular medications near you</p>
          </div>
          
          <a href="#" className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold hover:gap-3 transition-all">
            See All Products <ArrowRightIcon weight="bold" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-800 rounded-2xl p-4 border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative bg-slate-50 dark:bg-slate-700/50 rounded-xl p-6 mb-4 flex items-center justify-center h-48 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/10 transition-colors">
                <Image
                  src={item.image}
                  width={150}
                  height={150}
                  className="object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                  alt={item.name}
                />
                <div className="absolute top-3 right-3 bg-white dark:bg-slate-800 p-1.5 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <MapPinIcon size={16} className="text-emerald-500" weight="fill" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {item.name}
                    </h3>
                    <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                        {item.price}
                    </span>
                </div>
                
                <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                    <MapPinIcon size={14} />
                    <span>Available nearby</span>
                </div>
                
                <button className="w-full mt-3 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium text-sm flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Add to Cart <StethoscopeIcon size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
