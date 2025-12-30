'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Poppins } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, Menu, X, ArrowRight, ShieldCheck, 
  Zap, Briefcase, Globe, Award 
} from 'lucide-react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

// --- DYNAMIC DATA CONFIGURATION ---
const NAV_DATA = [
  { name: 'Home', href: '/' },
  {
    name: 'Company',
    href: '/company',
    icon: <Globe className="w-5 h-5" />,
    featured: "Leading the industry in risk management since 2010.",
    subLinks: [
      { name: 'Who We Are', href: '/company/whoweare', desc: 'Our mission and legacy' },
      { name: 'Why Us', href: '/company/whyus', desc: 'The Vestigo advantage' },
      { name: 'Our Team', href: '/company/ourteam', desc: 'Meet our specialists' },
      { name: 'Our Partners', href: '/company/ourpartners', desc: 'Strategic global alliances' },
    ],
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: <Zap className="w-5 h-5" />,
    featured: "Bespoke protection tailored for modern enterprises.",
    subLinks: [
      { name: 'Risk Assessment', href: '/solutions/audits&riskassessment' },
      { name: 'Claims Management', href: '/solutions/claimsmanagement' },
      { name: 'Commercial Insurance', href: '/solutions/commercialinsurance' },
      { name: 'Employee Benefits', href: '/solutions/employeebenifits' },
      { name: 'Life Insurance', href: '/solutions/lifeinsurance' },
      { name: 'Surety & Credit', href: '/solutions/suretybond&creditinsurance' },
    ],
  },
  {
    name: 'Industries',
    href: '/industries',
    icon: <Briefcase className="w-5 h-5" />,
    featured: "Specialized safety shields for every sector.",
    subLinks: [
      { name: 'Auto Mobile', href: '/industries/automobile' },
      { name: 'BFSI', href: '/industries/BFSI' },
      { name: 'E-Commerce', href: '/industries/e-commerce' },
      { name: 'IT & Tech', href: '/industries/it' },
      { name: 'Manufacturing', href: '/industries/engineering' },
      { name: 'Shipping', href: '/industries/shipping&odccargo' },
    ],
  },
  { name: 'Insights', href: '/blogs' },
];

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll for glassmorphism effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          isScrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] py-3' 
          : 'bg-transparent py-6'
        } ${poppins.className}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* BRAND LOGO */}
          <Link href="/" className="relative z-[110] transition-transform hover:scale-105 active:scale-95">
            <Image src="/logo.svg" alt="Logo" width={130} height={50} priority />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-2">
            {NAV_DATA.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full font-bold text-sm transition-all
                    ${pathname === link.href ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'}
                    ${activeDropdown === link.name ? 'bg-blue-50/50' : ''}`}
                >
                  {link.name}
                  {link.subLinks && (
                    <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                  )}
                </Link>

                {/* ANIMATED MEGA MENU */}
                <AnimatePresence>
                  {link.subLinks && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300, damping: 24 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[650px]"
                    >
                      <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden flex">
                        {/* Sidebar */}
                        <div className="w-[35%] bg-slate-50 p-8 flex flex-col justify-between">
                          <div>
                            <div className="bg-blue-600 w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-200">
                              {link.icon || <ShieldCheck size={24} />}
                            </div>
                            <h4 className="font-black text-slate-900 text-xl mb-3 tracking-tight">{link.name}</h4>
                            <p className="text-slate-500 text-xs leading-relaxed">{link.featured}</p>
                          </div>
                          <Link href={link.href} className="text-blue-600 text-xs font-bold flex items-center gap-1 hover:gap-3 transition-all">
                            View Perspective <ArrowRight size={14} />
                          </Link>
                        </div>

                        {/* Staggered Content Grid */}
                        <div className="w-[65%] p-6 grid grid-cols-1 gap-1">
                          {link.subLinks.map((sub, idx) => (
                            <motion.div
                              key={sub.name}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                            >
                              <Link
                                href={sub.href}
                                className="flex items-center justify-between p-4 rounded-2xl hover:bg-blue-50 group/item transition-all"
                              >
                                <div>
                                  <div className="text-slate-900 font-bold text-sm group-hover/item:text-blue-600">{sub.name}</div>
                                  <div className="text-slate-400 text-[11px] mt-0.5">{sub.desc}</div>
                                </div>
                                <ArrowRight size={16} className="text-blue-200 group-hover/item:text-blue-600 -translate-x-2 group-hover/item:translate-x-0 opacity-0 group-hover/item:opacity-100 transition-all" />
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* CTA BUTTON */}
            <Link
              href="/contacts"
              className="ml-6 bg-slate-900 text-white px-8 py-3 rounded-full font-extrabold text-sm transition-all hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-200 active:scale-95"
            >
              Contact Us
            </Link>
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsMobileOpen(true)}
            className="lg:hidden p-3 bg-slate-100 rounded-2xl text-slate-900 transition-colors hover:bg-blue-50"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* MOBILE FULL-SCREEN MODAL */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[200] lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-[400px] bg-white z-[210] lg:hidden shadow-[-20px_0_60px_rgba(0,0,0,0.1)] flex flex-col"
            >
              <div className="p-8 flex items-center justify-between border-b border-slate-50">
                <Image src="/logo.svg" alt="Logo" width={110} height={40} />
                <button onClick={() => setIsMobileOpen(false)} className="p-2 bg-slate-100 rounded-full text-slate-500">
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-8 py-6 space-y-4">
                {NAV_DATA.map((link) => (
                  <div key={link.name}>
                    {link.subLinks ? (
                      <div>
                        <button 
                          onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                          className="w-full flex items-center justify-between py-4 text-slate-900 font-black text-2xl"
                        >
                          {link.name}
                          <ChevronDown size={24} className={`transition-transform ${activeDropdown === link.name ? 'rotate-180 text-blue-600' : 'text-slate-300'}`} />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === link.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden space-y-4 pl-4 border-l-2 border-blue-100 mt-2"
                            >
                              {link.subLinks.map((sub) => (
                                <Link
                                  key={sub.name}
                                  href={sub.href}
                                  onClick={() => setIsMobileOpen(false)}
                                  className="block text-slate-500 font-bold text-lg hover:text-blue-600 transition-colors"
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileOpen(false)}
                        className="block py-4 text-slate-900 font-black text-2xl transition-colors hover:text-blue-600"
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              <div className="p-8 bg-slate-50">
                <Link
                  href="/contacts"
                  onClick={() => setIsMobileOpen(false)}
                  className="w-full bg-blue-600 text-white h-16 rounded-[2rem] font-black text-xl flex items-center justify-center gap-3 shadow-xl shadow-blue-200 active:scale-95 transition-transform"
                >
                  Get Started <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}