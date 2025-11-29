import {
  PillIcon,
  ShieldCheckIcon,
  TruckTrailerIcon,
  SealPercentIcon,
} from "@phosphor-icons/react";

const services = [
    {
        icon: PillIcon,
        title: "Rare Medications",
        description: "Find rare and hard-to-find drugs with our extensive network."
    },
    {
        icon: TruckTrailerIcon,
        title: "Express Delivery",
        description: "Get your medications delivered to your doorstep in minutes."
    },
    {
        icon: ShieldCheckIcon,
        title: "Secure & Safe",
        description: "100% genuine medications from verified pharmacies."
    },
    {
        icon: SealPercentIcon,
        title: "Best Prices",
        description: "Competitive prices and regular discounts on essential medicines."
    }
];

const Services = ({ darkmode, setdarkmode }: any) => {
  return (
    <div className="bg-slate-50 dark:bg-slate-900/50 w-full py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Why Choose EasyGo?</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">We provide a seamless and reliable healthcare experience tailored to your needs.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-slate-100 dark:border-slate-700">
                    <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <service.icon size={32} className="text-emerald-600 dark:text-emerald-400" weight="fill" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                        {service.description}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
