'use client';
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { 
  PillIcon, 
  TruckTrailerIcon, 
  ShieldCheckIcon, 
  SealPercentIcon,
  ClockIcon,
  MapPinIcon,
  PhoneIcon,
  HeartbeatIcon,
  FirstAidKitIcon,
  PrescriptionIcon,
  UserCircleIcon,
  CheckCircleIcon
} from "@phosphor-icons/react";

export default function Services() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');
    const booltheme = storedTheme === 'dark' ? true : false;
    
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

  const mainServices = [
    {
      icon: PillIcon,
      title: "Rare Medications",
      description: "Access to hard-to-find and specialized medications through our extensive pharmacy network.",
      features: ["Specialized drugs", "Import services", "Expert consultation", "Fast sourcing"]
    },
    {
      icon: TruckTrailerIcon,
      title: "Express Delivery",
      description: "Get your medications delivered to your doorstep within 15-30 minutes in major cities.",
      features: ["Same-day delivery", "Real-time tracking", "Temperature control", "Secure packaging"]
    },
    {
      icon: PrescriptionIcon,
      title: "Prescription Management",
      description: "Upload and manage your prescriptions digitally for easy refills and tracking.",
      features: ["Digital storage", "Auto-refill reminders", "Doctor verification", "History tracking"]
    },
    {
      icon: FirstAidKitIcon,
      title: "Emergency Care",
      description: "24/7 emergency medication delivery service for urgent healthcare needs.",
      features: ["24/7 availability", "Priority delivery", "Emergency hotline", "Critical care support"]
    },
    {
      icon: UserCircleIcon,
      title: "Consultation Services",
      description: "Connect with licensed pharmacists for medication advice and health consultations.",
      features: ["Expert pharmacists", "Video consultations", "Medication reviews", "Health guidance"]
    },
    {
      icon: HeartbeatIcon,
      title: "Chronic Care Support",
      description: "Specialized support for managing chronic conditions with regular medication needs.",
      features: ["Monthly subscriptions", "Adherence tracking", "Care coordination", "Cost savings"]
    }
  ];

  const benefits = [
    {
      icon: ShieldCheckIcon,
      title: "100% Genuine",
      description: "All medications sourced from verified and licensed pharmacies."
    },
    {
      icon: SealPercentIcon,
      title: "Best Prices",
      description: "Competitive pricing with regular discounts and offers."
    },
    {
      icon: ClockIcon,
      title: "Fast Service",
      description: "Quick processing and delivery within 15-30 minutes."
    },
    {
      icon: MapPinIcon,
      title: "Wide Coverage",
      description: "Serving 25+ cities with 500+ partner pharmacies."
    }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Search & Select",
      description: "Search for your medication or upload your prescription through our app or website."
    },
    {
      step: "02",
      title: "Choose Pharmacy",
      description: "Select from nearby verified pharmacies with the best prices and availability."
    },
    {
      step: "03",
      title: "Place Order",
      description: "Confirm your order and choose your preferred payment method."
    },
    {
      step: "04",
      title: "Track & Receive",
      description: "Track your delivery in real-time and receive your medications at your doorstep."
    }
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white selection:bg-emerald-500 selection:text-white">
      <Navbar darkmode={darkMode} setdarkmode={setDarkMode} />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-6 md:px-12 bg-gradient-to-br from-emerald-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute right-0 top-0 w-96 h-96 bg-emerald-300 rounded-full blur-3xl"></div>
          <div className="absolute left-0 bottom-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-bold rounded-full uppercase tracking-wider mb-6">
            Our Services
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Healthcare <span className="text-emerald-500">Solutions</span> for Everyone
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            From rare medications to emergency deliveries, we provide comprehensive pharmaceutical services tailored to your needs.
          </p>
        </div>
      </div>

      {/* Main Services Grid */}
      <div className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500 dark:group-hover:bg-emerald-500 transition-all duration-300">
                  <service.icon size={32} className="text-emerald-600 dark:text-emerald-400 group-hover:text-white transition-colors" weight="fill" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <CheckCircleIcon size={16} className="text-emerald-500" weight="fill" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 px-6 md:px-12 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Why Choose EasyGo?
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
              We're committed to providing the best pharmaceutical delivery experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-slate-800 p-8 rounded-2xl text-center border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon size={32} className="text-emerald-600 dark:text-emerald-400" weight="fill" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
              Getting your medications is simple and straightforward.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="relative">
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-emerald-500 to-transparent -translate-x-1/2 z-0"></div>
                )}
                
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/30">
                    <span className="text-3xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6 md:px-12 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute right-0 top-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute left-0 bottom-0 w-64 h-64 bg-black rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            <PhoneIcon size={64} className="text-white mx-auto mb-6" weight="fill" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Help Choosing a Service?
            </h2>
            <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
              Our team is available 24/7 to help you find the right solution for your healthcare needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 px-8 py-4 rounded-full font-bold hover:bg-emerald-50 transition-colors shadow-lg">
                Contact Support
              </button>
              <button className="bg-emerald-800 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-900 transition-colors border border-emerald-500">
                Browse Medications
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </main>
  );
}
