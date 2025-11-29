'use client';
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { 
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  PaperPlaneIcon,
  ChatCircleDotsIcon,
  WhatsappLogoIcon,
  InstagramLogoIcon,
  FacebookLogoIcon,
  XLogoIcon
} from "@phosphor-icons/react";

export default function Contact() {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 765-4321"],
      description: "Mon-Sun, 24/7 Support"
    },
    {
      icon: EnvelopeIcon,
      title: "Email",
      details: ["support@easygo.com", "info@easygo.com"],
      description: "We'll respond within 24 hours"
    },
    {
      icon: MapPinIcon,
      title: "Office",
      details: ["123 Healthcare Avenue", "Medical District, NY 10001"],
      description: "Visit us Mon-Fri, 9AM-6PM"
    },
    {
      icon: ClockIcon,
      title: "Working Hours",
      details: ["24/7 Delivery Service", "Office: 9AM - 6PM"],
      description: "Emergency support available"
    }
  ];

  const socialLinks = [
    { icon: FacebookLogoIcon, name: "Facebook", href: "#" },
    { icon: InstagramLogoIcon, name: "Instagram", href: "#" },
    { icon: XLogoIcon, name: "Twitter", href: "#" },
    { icon: WhatsappLogoIcon, name: "WhatsApp", href: "#" }
  ];

  const faqs = [
    {
      question: "How fast is your delivery?",
      answer: "We deliver within 15-30 minutes in major cities for standard orders."
    },
    {
      question: "Do you deliver 24/7?",
      answer: "Yes! Our emergency delivery service is available round the clock."
    },
    {
      question: "How do I track my order?",
      answer: "You'll receive a tracking link via SMS and email once your order is confirmed."
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
            Get In Touch
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            We're Here to <span className="text-emerald-500">Help</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Have questions? Need support? Our team is available 24/7 to assist you with all your pharmaceutical needs.
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="py-20 px-6 md:px-12 -mt-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mb-6">
                  <info.icon size={28} className="text-emerald-600 dark:text-emerald-400" weight="fill" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {info.title}
                </h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-slate-600 dark:text-slate-400 mb-1">
                    {detail}
                  </p>
                ))}
                <p className="text-sm text-slate-500 dark:text-slate-500 mt-3">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form & Map Section */}
      <div className="py-20 px-6 md:px-12 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center">
                  <ChatCircleDotsIcon size={24} className="text-emerald-600 dark:text-emerald-400" weight="fill" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Send us a Message</h2>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">We'll get back to you soon</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Customer Support</option>
                      <option value="order">Order Issue</option>
                      <option value="partnership">Partnership</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
                >
                  Send Message
                  <PaperPlaneIcon size={20} weight="fill" />
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-slate-200 dark:bg-slate-800 rounded-3xl overflow-hidden h-[400px] relative border border-slate-100 dark:border-slate-700">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPinIcon size={64} className="text-slate-400 dark:text-slate-600 mx-auto mb-4" weight="fill" />
                    <p className="text-slate-500 dark:text-slate-400 font-medium">Map Integration</p>
                    <p className="text-sm text-slate-400 dark:text-slate-500 mt-2">123 Healthcare Ave, NY 10001</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Connect With Us</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 border border-slate-100 dark:border-slate-700 hover:border-emerald-500 transition-all group"
                    >
                      <social.icon size={24} className="text-slate-600 dark:text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400" weight="fill" />
                      <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick FAQs */}
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Quick Answers</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="pb-4 border-b border-slate-100 dark:border-slate-800 last:border-0 last:pb-0">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{faq.question}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact Banner */}
      <div className="py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute right-0 top-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <PhoneIcon size={48} className="text-white mx-auto mb-4" weight="fill" />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Emergency? Call Us Now!</h2>
              <p className="text-red-100 mb-6 max-w-2xl mx-auto">
                For urgent medication needs, our emergency hotline is available 24/7
              </p>
              <a 
                href="tel:+15551234567"
                className="inline-block bg-white text-red-600 px-8 py-4 rounded-full font-bold hover:bg-red-50 transition-colors shadow-lg"
              >
                +1 (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </main>
  );
}
