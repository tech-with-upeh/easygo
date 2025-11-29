'use client'

import { useEffect, useState } from 'react';
import { AsclepiusIcon, FunnelSimpleIcon, XIcon, SunDimIcon, MoonStarsIcon, HospitalIcon, MagnifyingGlassIcon } from '@phosphor-icons/react';
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
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-800' : 'bg-transparent'} py-4 px-6 md:px-12 flex items-center justify-between`}>
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="bg-emerald-500 p-1.5 rounded-lg text-white">
            <AsclepiusIcon size={24} weight="bold" />
        </div>
        <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Easy<span className="text-emerald-500">Go</span></h3>
      </div>

      <div className="hidden md:flex items-center bg-gray-100 dark:bg-slate-800 rounded-full px-4 py-2 w-96 transition-all focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:bg-white dark:focus-within:bg-slate-800 border border-transparent focus-within:border-emerald-500/50">
        <MagnifyingGlassIcon size={20} className="text-gray-400 mr-2" />
        <form onSubmit={handleSearch} className="flex-1 flex">
          <input 
            type="text" 
            placeholder="Search for medicines..." 
            className="w-full bg-transparent outline-none focus:ring-0 text-sm text-slate-900 dark:text-white placeholder-gray-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} 
          />
        </form>
      </div>

      {/* Overlay */}
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

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        <nav className="flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            {[
              { name: 'Home', href: '/' },
              { name: 'About', href: '/about' },
              { name: 'Services', href: '/services' },
              { name: 'Contact', href: '/contact' }
            ].map((item) => (
                <a key={item.name} href={item.href} className="hover:text-emerald-500 transition-colors relative group">
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full"></span>
                </a>
            ))}
        </nav>
        
        <button 
            onClick={() => setdarkmode(!darkmode)} 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
        >
          {darkmode ? <MoonStarsIcon size={24} weight="fill" /> : <SunDimIcon size={24} weight="fill" />}
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center gap-4">
        <button onClick={() => setdarkmode(!darkmode)} className="text-slate-600 dark:text-slate-300">
          {darkmode ? <MoonStarsIcon size={24} /> : <SunDimIcon size={24} />}
        </button>
        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 dark:text-slate-300">
          {isOpen ? <XIcon size={24} /> : <FunnelSimpleIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-800 shadow-xl p-6 flex flex-col gap-4 animate-slide-up">
            {[{name: 'Home', href: '/'}, {name: 'About', href: '/about'}, {name: 'Services', href: '/services'}, {name: 'Contact', href: '/contact'}].map((item) => (
                <a key={item.name} href={item.href} className="text-lg font-medium text-slate-800 dark:text-slate-200 py-2 border-b border-gray-50 dark:border-slate-800">
                    {item.name}
                </a>
            ))}
        </div>
      )}
    </div>
  );
}
