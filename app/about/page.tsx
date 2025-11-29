'use client';
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";
import { UsersIcon, HeartIcon, ShieldCheckIcon, RocketLaunchIcon } from "@phosphor-icons/react";

export default function About() {
  const [darkMode, setDarkMode] = useState(false);

   useEffect(() => {
    // Check user's system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Get stored theme preference from localStorage (if exists)
    const storedTheme = localStorage.getItem('theme');
    const booltheme = storedTheme === 'dark' ? true : false;
    // If no theme stored, use system preference
    if (storedTheme) {
      setDarkMode(booltheme);
    } else {
      setDarkMode(prefersDark ? true : false);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const stats = [
    { label: "Active Users", value: "10k+" },
    { label: "Pharmacies", value: "500+" },
    { label: "Deliveries", value: "1M+" },
    { label: "Cities", value: "25+" },
  ];

  const values = [
    {
      icon: HeartIcon,
      title: "Patient First",
      description: "Your health and well-being are at the core of every decision we make."
    },
    {
      icon: ShieldCheckIcon,
      title: "Trust & Safety",
      description: "We partner only with verified pharmacies to ensure genuine medications."
    },
    {
      icon: RocketLaunchIcon,
      title: "Innovation",
      description: "Leveraging technology to make healthcare access faster and easier."
    },
    {
      icon: UsersIcon,
      title: "Community",
      description: "Building a stronger, healthier community one delivery at a time."
    }
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white selection:bg-emerald-500 selection:text-white">
      <Navbar darkmode={darkMode} setdarkmode={setDarkMode} />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-6 md:px-12 bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20">
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-emerald-200 to-transparent blur-3xl"></div>
            <div className="absolute left-0 bottom-0 w-1/2 h-full bg-gradient-to-r from-blue-200 to-transparent blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                Revolutionizing <span className="text-emerald-500">Healthcare Access</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
                EasyGo is on a mission to make essential medications accessible, affordable, and available to everyone, everywhere.
            </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 border-y border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col gap-1">
                        <span className="text-3xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-400">{stat.value}</span>
                        <span className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">{stat.label}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl group">
                <Image 
                    src="/bg-blur.jpg" 
                    alt="Our Story" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            
            <div className="flex flex-col gap-6">
                <div className="inline-block px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold rounded-full uppercase tracking-wider w-max">
                    Our Story
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                    Bridging the Gap
                </h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                    Started in 2024, EasyGo was born from a simple observation: getting essential medications shouldn't be a hassle. We saw patients struggling to find specific drugs, waiting in long lines, and dealing with uncertainty.
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                    We built a platform that connects patients directly with a network of trusted pharmacies, ensuring that help is always just a few clicks away. Today, we're proud to serve thousands of families, bringing peace of mind and better health to our community.
                </p>
            </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 px-6 md:px-12 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Our Core Values</h2>
                <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                    The principles that guide us in our journey to better healthcare.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                    <div key={index} className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 group">
                        <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <value.icon size={24} className="text-emerald-600 dark:text-emerald-400" weight="fill" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{value.title}</h3>
                        <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                            {value.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto bg-emerald-600 dark:bg-emerald-600 rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute right-0 top-0 w-64 h-64 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute left-0 bottom-0 w-64 h-64 bg-black rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
            </div>
            
            <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to experience better healthcare?</h2>
                <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
                    Join thousands of satisfied users who trust EasyGo for their pharmaceutical needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-white text-emerald-600 px-8 py-4 rounded-full font-bold hover:bg-emerald-50 transition-colors shadow-lg">
                        Get Started Now
                    </button>
                    <button className="bg-emerald-700 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-800 transition-colors border border-emerald-500">
                        Contact Support
                    </button>
                </div>
            </div>
        </div>
      </div>

      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </main>
  );
}
