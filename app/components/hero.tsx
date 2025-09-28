'use client'

import Image from "next/image";
import '../globals.css';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseconfig";
import { useState } from "react";
import Lottie from "lottie-react";
import { HospitalIcon, XIcon } from "@phosphor-icons/react";
import Nodata from '../../public/No-Data.json';
import Searching from '../../public/Searching.json';

const Hero = ({ darkmode, setdarkmode }: any) => {
  const [showOverlay, setShowOverlay] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    
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
    <div className="relative  dark:text-white w-full h-[calc(100vh)]">
      {/* Background Image */}
      {darkmode ? null : (
        <Image
          src="/bg-blur.jpg"
          alt="Background"
          fill
          className="object-cover object-right md:object-center brightness-90 sm:brightness-90"
          priority
        />
      )}

      <div className="w-[255px] h-[55px] absolute left-1/2 -translate-x-1/2 top-28 z-30 md:hidden bg-green-100 p-2 rounded-full shadow-lg dark:shadow-[0_10px_15px_-3px_rgba(255,255,255,0.05),0_4px_6px_-2px_rgba(255,255,255,0.03)] transition-all duration-300 ease-in-out">
        <form onSubmit={handleSearch}>
          <input 
            type="text" 
            placeholder="Search..." 
            className="h-full w-35 lg:w-45 pl-3 focus:outline-none focus:ring-0 border-none bg-transparent rounded-md text-black"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} 
          />
          <button type="submit" className="cursor-pointer bg-green-400 w-20 hover:w-23 hover:tracking-wider p-2 rounded-full transition-all duration-300 ease-in-out">Search</button>
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

      {/* Overlay content */}
      <div className="absolute inset-0 md:items-start md:pl-8 flex flex-col items-center justify-center">
        <h3 className="text-2xl items-center sm:text-4xl md:items-start font-semibold ">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-green-400 to-green-900 bg-clip-text text-transparent">
            EasyGo
          </span>{" "}
          Pharma
        </h3>
        <p>Pharmacy on wheels</p>
        <div className="mt-5 flex gap-3">
          <a
            href="#"
            className="bg-green-500 p-3 sm:p-4 rounded-full shadow-lg hover:bg-transparent hover:border hover:border-green-500 transition-all duration-300 ease-in-out hover:tracking-wide"
          >
            Get Started
          </a>
          <a
            href="#"
            className="border border-green-500 p-3 sm:p-4 rounded-full shadow-lg hover:bg-green-500 transition-all duration-300 ease-in-out hover:tracking-wide"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
