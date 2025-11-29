'use client'

import Image from "next/image";
import '../globals.css';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseconfig";
import { useState } from "react";
import Lottie from "lottie-react";
import { HospitalIcon, XIcon, MagnifyingGlassIcon, ArrowRightIcon } from "@phosphor-icons/react";
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
    <div className="relative w-full h-screen flex items-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-blur.jpg"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent dark:from-slate-900/95 dark:via-slate-900/80 dark:to-slate-900/40" />
      </div>

      {/* Mobile Search Bar (Floating) */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 z-30 w-[90%] md:hidden">
        <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-2 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center">
            <MagnifyingGlassIcon size={20} className="text-gray-400 ml-2" />
            <form onSubmit={handleSearch} className="flex-1 flex ml-2">
            <input 
                type="text" 
                placeholder="Search medicines..." 
                className="w-full bg-transparent focus:border-none outline-none focus:ring-0 text-sm text-slate-900 dark:text-white placeholder-gray-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} 
            />
            <button type="submit" className="bg-emerald-500 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-emerald-600 transition-colors">Search</button>
            </form>
        </div>
      </div>

      {/* Overlay Results */}
      {showOverlay && (
        <div
            className={`fixed inset-0 z-50 flex justify-center items-start pt-32 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            showOverlay ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={handleCloseOverlay}
        >
            <XIcon size={32} className="absolute top-6 right-6 text-white cursor-pointer hover:text-gray-300 transition-colors" onClick={handleCloseOverlay} />
            
            <div
            className={`bg-white dark:bg-slate-900 p-6 rounded-2xl w-[90%] md:w-[600px] shadow-2xl transform transition-all duration-300 ${
                showOverlay ? 'scale-100 translate-y-0' : 'scale-95 -translate-y-4'
            }`}
            onClick={(e) => e.stopPropagation()}
            >
            {error && (
                <div className="flex flex-col items-center justify-center py-8">
                <Lottie animationData={Nodata} loop={true} className="h-32 w-32 mb-4" />
                <h3 className="text-lg font-medium text-slate-700 dark:text-slate-300">{error}</h3>
                </div>
            )}

            {isLoading && (
                <div className="flex flex-col items-center justify-center py-8">
                <Lottie animationData={Searching} loop={true} className="h-32 w-32 mb-4" />
                <h3 className="text-lg font-medium text-slate-700 dark:text-slate-300">Searching for "{searchQuery}"...</h3>
                </div>
            )}

            {searchResults.length > 0 && (
                <div className="max-h-[60vh] overflow-y-auto pr-2">
                <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Search Results</h2>
                <ul className="space-y-4">
                    {searchResults.map((result, index) => (
                    <li key={index} className="bg-gray-50 dark:bg-slate-800 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="font-bold text-slate-900 dark:text-white">{result.name || "Unknown Drug"}</h3>
                            <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-medium">Available</span>
                        </div>
                        
                        {Array.isArray(result.pharms) && result.pharms.length > 0 ? (
                        <ul className="space-y-2">
                            {result.pharms.map((pharm: { name: string, address: string }, pharmIndex: number) => (
                            <li key={pharmIndex} className="flex items-center gap-3 p-2 hover:bg-white dark:hover:bg-slate-700 rounded-lg transition-colors cursor-pointer group">
                                <div className="bg-white dark:bg-slate-700 p-2 rounded-full shadow-sm group-hover:shadow-md transition-shadow">
                                <HospitalIcon size={20} className="text-emerald-500" />
                                </div>
                                <div>
                                <div className="font-semibold text-slate-800 dark:text-slate-200 text-sm">{pharm.name}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">{pharm.address}</div>
                                </div>
                            </li>
                            ))}
                        </ul>
                        ) : (
                        <p className="text-sm text-gray-500 italic">No pharmacies listed nearby.</p>
                        )}
                    </li>
                    ))}
                </ul>
                </div>
            )}
            </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 pt-20">
        <div className="max-w-2xl animate-slide-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Pharmacy on wheels
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white leading-tight mb-6 tracking-tight">
                Healthcare <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
                    Delivered
                </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-lg">
                Get your medications delivered to your doorstep in minutes. Fast, reliable, and secure pharmaceutical services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
                <a
                    href="#"
                    className="group flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-emerald-500/30 hover:bg-emerald-700 hover:shadow-emerald-500/40 transition-all duration-300 transform hover:-translate-y-1"
                >
                    Get Started
                    <ArrowRightIcon size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                    href="#"
                    className="flex items-center justify-center px-8 py-4 rounded-full font-semibold text-slate-700 dark:text-white border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300"
                >
                    Learn More
                </a>
            </div>
            
            <div className="mt-12 flex items-center gap-8 text-slate-500 dark:text-slate-400">
                <div className="flex flex-col">
                    <span className="text-2xl font-bold text-slate-900 dark:text-white">24/7</span>
                    <span className="text-sm">Support</span>
                </div>
                <div className="w-px h-10 bg-slate-200 dark:bg-slate-700"></div>
                <div className="flex flex-col">
                    <span className="text-2xl font-bold text-slate-900 dark:text-white">100+</span>
                    <span className="text-sm">Pharmacies</span>
                </div>
                <div className="w-px h-10 bg-slate-200 dark:bg-slate-700"></div>
                <div className="flex flex-col">
                    <span className="text-2xl font-bold text-slate-900 dark:text-white">15m</span>
                    <span className="text-sm">Delivery</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
