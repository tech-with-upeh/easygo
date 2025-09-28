'use client'

import { useEffect, useState } from 'react';
import { AsclepiusIcon, FunnelSimpleIcon, XIcon, SunDimIcon, MoonStarsIcon, HospitalIcon } from '@phosphor-icons/react';
import Lottie from 'lottie-react';
import Nodata from '../../public/No-Data.json';
import Searching from '../../public/Searching.json';
import { db } from "../firebaseconfig";
import { collection, getDocs, where, query} from 'firebase/firestore';

export default function Navbar({darkmode, setdarkmode}: any){
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const callmodel = async () => {
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      const drugsCollection = collection(db, "drugs");
      const q = query(drugsCollection, where("name", "==", searchQuery.toLowerCase()));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setSearchResults([]);
        setError("No drugs found");
      } else {
        const drugs = querySnapshot.docs.map(doc => doc.data());
        setSearchResults(drugs);
      }
    } catch (err) {
      console.error("Error fetching data from Firestore:", err);
      setError("Error fetching search results");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true)
    setShowOverlay(true);
    e.preventDefault();
    if (searchQuery.trim() === '') {
      setIsLoading(false)
      setError('Query Cant be Empty');
      setShowOverlay(true);
    } else if (searchQuery.trim()) {
      await callmodel();
      setShowOverlay(true);
    } else {
      setIsLoading(false)
      setError('An Unexpected error Occurred');
      setShowOverlay(true);
    }
  };

  const handleCloseOverlay = () => {
    setSearchResults([])
    setShowOverlay(false);
  };

  return (
    <div className={`fixed top-0 left-0 w-full z-50 flex items-center shadow-lg dark:text-white justify-between p-5 dark:bg-gray-900 border-b-1 border-gray-500 ${scrolled ? 'bg-white' : 'bg-transparent'} ${isOpen ? 'bg-white' : 'bg-transparent'}`}>
      <div className="flex items-center gap-2">
        <AsclepiusIcon size={32} color="green" />
        <h3 className="text-xl md:text-xl lg:text-2xl font-bold">Easy<span className="text-green-500">Go</span></h3>
      </div>

      <div className="hidden md:flex bg-green-100 p-2 rounded-full shadow-lg dark:shadow-[0_10px_15px_-3px_rgba(255,255,255,0.05),0_4px_6px_-2px_rgba(255,255,255,0.03)] transition-all duration-300 ease-in-out">
        <form onSubmit={handleSearch} method="post">
          <input 
            type="text" 
            placeholder="Search..." 
            className="h-full w-35 lg:w-45 pl-3 focus:outline-none focus:ring-0 border-none bg-transparent rounded-md text-black"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} 
          />
          <button type="submit" className="cursor-pointer bg-green-400 w-20 hover:w-23 hover:tracking-wider p-2 rounded-full mr-1 transition-all duration-300 ease-in-out">Search</button>
        </form>
      </div>

      {/* Overlay */}
      {showOverlay && (
        <div
          style={{backgroundColor: 'rgba(0,0,0,0.8)'}}
          className={`fixed inset-0 z-50 flex justify-center backdrop-blur-xs items-center transition-all duration-500 ease-out ${
            showOverlay ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={handleCloseOverlay}
        >
          {/* Close button */}
          <XIcon size={32} className="absolute top-4 right-4 text-white cursor-pointer" onClick={handleCloseOverlay} />
          
          {/* Overlay content */}
          <div
            className={`bg-white p-4 rounded-lg w-[80%] sm:w-[50%] relative z-10 transform transition-all duration-500 ease-out ${
              showOverlay ? 'scale-100' : 'scale-95'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {error && (
              <div className="w-full h-full text-black flex flex-col justify-center items-center">
                <Lottie animationData={Nodata} loop={true} className="h-40 w-40 mx-auto" />
                <h3 className="text-center text-lg font-semibold">{error}</h3>
              </div>
            )}

            {isLoading && (
              <div className="w-full h-full text-black flex flex-col justify-center items-center">
                <Lottie animationData={Searching} loop={true} className="h-40 w-40 mx-auto" />
                <h3 className="text-center text-lg font-semibold">Looking for {searchQuery}</h3>
              </div>
            )}

            {searchResults.length > 0 && (
  <ul>
    {searchResults.map((result, index) => (
      <li key={index} className="py-2 cursor-pointer text-black ">
        <h1>Results • Nearest Pharmacies </h1>
        
        {Array.isArray(result.pharms) && result.pharms.length > 0 ? (
          <ul className="pl-5 mt-2">
            {result.pharms.map((pharm: { name: string, address: string }, pharmIndex: number) => (
              <li key={pharmIndex} className="flex items-center gap-2 py-2 cursor-pointer hover:bg-gray-100">
                {/* Hospital Icon */}
                <HospitalIcon size={20} className="text-gray-500" />
                <div className="flex flex-col">
                  <div className="font-semibold text-gray-700">{pharm.name}</div>
                  <div className="text-xs text-gray-400">{pharm.address}</div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-400">No pharmaceuticals available</p>
        )}
      </li>
    ))}
  </ul>
)}

            
          </div>
        </div>
      )}

      {/* Other navbar content */}
      <div className="hidden md:flex md:justify-center md:items-center gap-3 transition-all duration-300">
        <button onClick={() => setdarkmode(!darkmode)} className="rounded-full">
          {darkmode ? <MoonStarsIcon size={28} /> : <SunDimIcon size={28} />}
        </button>
        <a href="#" className="hover:font-bold hover:tracking-wider">Home</a>
        <a href="#" className="hover:font-bold hover:tracking-wider">About</a>
        <a href="#" className="hover:font-bold hover:tracking-wider">Services</a>
        <a href="#" onClick={() => { console.log("Contact link clicked"); }} className="hover:font-bold hover:tracking-wider">Contact</a>
      </div>

      <div className="md:hidden flex gap-3 justify-center items-center">
        <button onClick={() => setdarkmode(!darkmode)} className="rounded-full">
          {darkmode ? <MoonStarsIcon size={28} /> : <SunDimIcon size={28} />}
        </button>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <XIcon size={28} /> : <FunnelSimpleIcon size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 top-14 mt-4 w-full bg-white dark:bg-gray-900 rounded-b-xl p-6 gap-6 shadow-lg dark:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.4),0_4px_6px_-2px_rgba(0,0,0,0.3)] duration-300 ease-in-out transform transition-all opacity-100 translate-y-0">
          <div className="flex flex-col items-end p-4 gap-4 text-right">
            <a href="#" className="hover:font-bold hover:tracking-wider">Home</a>
            <a href="#" className="hover:font-bold hover:tracking-wider">About</a>
            <a href="#" className="hover:font-bold hover:tracking-wider">Services</a>
            <a href="#" className="hover:font-bold hover:tracking-wider">Contact</a>
          </div>
        </div>
      )}
    </div>
  );
}
