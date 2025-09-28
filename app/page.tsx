'use client';
import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import { useEffect, useState } from "react";
import Services from "./components/service";
import Featured from "./components/featured";
import Trending from "./components/trending";
import Footer from "./components/footer";

export default function Home() {
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
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
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
  return (
        <main className="text-black dark:bg-gray-900 dark:text-white">
      <Navbar darkmode={darkMode} setdarkmode={setDarkMode} />
      <Hero darkmode={darkMode} setdarkmode={setDarkMode} />
      <Services darkmode={darkMode} setdarkmode={setDarkMode} />
      <Featured darkmode={darkMode} setdarkmode={setDarkMode} />
      <Trending darkMode={darkMode} setDarkMode={setDarkMode} />
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </main>
    
  );
}
