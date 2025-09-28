import Image from "next/image";
import { StethoscopeIcon, MapPinIcon } from "@phosphor-icons/react";

const products = [
  {
    image: "/cataflam.png",
    name: "Cataflam",
    price: "$29.99",
  },
  {
    image: "/emzor.png",
    name: "Emzor",
    price: "$39.99",
  },
  {
    image: "/emprofen.png",
    name: "Emprofen",
    price: "$29.99",
  },
  {
    image: "/lonart.png",
    name: "Lonart",
    price: "$39.",
  },
  {
    image: "/lofnac.png",
    name: "Lofnac",
    price: "$13.99",
  },
  {
    image: "/ibuprofen.png",
    name: "Ibuprofen",
    price: "$19.99",
  },
  {
    image: "/dispirin.png",
    name: "Dispirin",
    price: "$12",
  },
  {
    image: "/arthrotec.png",
    name: "Arthrotec",
    price: "$31",
  },
  {
    image: "/gaviscon.png",
    name: "Gaviscon",
    price: "$11",
  },
  {
    image: "/celebrex.png",
    name: "Celebrex",
    price: "$14",
  },
  // Add more items...
];

const Trending = ({ darkMode, setDarkMode }: any) => {
  return (
    <div className="bg-white dark:bg-gray-900 pb-15">
      <div className="flex justify-between items-center px-10 md:px-20 pt-10">
        <h2 className="text-2xl font-bold text-center pt-10 pb-5">
        Trending Products
      </h2>

        <p className="text-md text-center text-gray-500 pt-12 pl-2">See All</p>
      </div>
      <div className="grid grid-cols-1 bg-white dark:bg-gray-900 dark:text-black gap-10 w-[70%] sm:w-[70%] md:w-[50%] sm:grid-cols-2 mx-auto">
      {products.map((item, index) => (
        <div
          key={index}
          className="shadow-[-5px_-5px_15px_rgba(0,0,0,0.1)] dark:shadow-[-5px_-5px_15px_rgba(255,255,255,0.03)] dark:bg-gray-800 rounded-2xl p-5 flex flex-col justify-center items-center"
        >
          <Image
            src={item.image}
            width={200}
            height={200}
            className="rounded-xl"
            alt="Drugs"
          />
          <h3 className="text-lg font-bold mt-2 text-green-900 dark:text-green-500">
            {item.name}
          </h3>
          <div className="flex mt-3 gap-2 justify-center items-center">
            <p className="font-bold text-green-900 dark:text-green-500">
              {item.price}
            </p>
            <div className="flex justify-center items-center gap-1 rounded-full p-1.5 bg-green-200 dark:bg-gray-900 dark:text-white">
              <MapPinIcon size={18} />
              <p className="text-xs">Nearby</p>
            </div>
          </div>
          <button className="text-sm p-2 mt-3 gap-1 hover:tracking-wider transition-all ease-in rounded-xl flex justify-center items-center text-white dark:text-black bg-green-600">
            Shop Now <StethoscopeIcon />
          </button>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Trending;
