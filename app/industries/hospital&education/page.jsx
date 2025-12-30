'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { 
  Stethoscope, Activity, UserRound, PhoneCall, Zap, GraduationCap, 
  BookOpen, Microscope, Globe, Clock, Award, ArrowRight, Menu, X,
  CheckCircle2, Users, Library, Lightbulb
} from 'lucide-react';

export default function InstitutionalSuite() {
  const [activeTab, setActiveTab] = useState('hospital');

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* 1. SWITCHER NAVIGATION */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 font-black text-2xl tracking-tighter text-blue-900">
            <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={140}
              height={80}
              priority
            />
          </Link>
            
          </div>
          
          <div className="hidden md:flex bg-slate-100 p-1 rounded-full border border-slate-200">
            <button 
              onClick={() => setActiveTab('hospital')}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeTab === 'hospital' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-blue-600'}`}
            >
              Hospital View
            </button>
            <button 
              onClick={() => setActiveTab('education')}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeTab === 'education' ? 'bg-[#1e3a8a] text-white shadow-lg' : 'text-slate-500 hover:text-blue-900'}`}
            >
              Education View
            </button>
          </div>
        </div>
      </nav>

      {/* ----------------- HOSPITAL VIEW ----------------- */}
      {activeTab === 'hospital' && (
        <main className="pt-20 animate-in fade-in duration-700">
          <section className="relative py-24 px-6 overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50 -z-10 rounded-l-[100px] hidden lg:block"></div>
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 text-blue-700 text-xs font-bold mb-6">
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-ping"></div>
                  JCI ACCREDITED MEDICAL CENTER
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-[1.1]">
                  Your Health, Our <br /><span className="text-blue-600">Prioritized</span> Mission.
                </h1>
                <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
                  Experience world-class healthcare with a personal touch. Providing precision diagnostics and compassionate recovery.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2 shadow-lg shadow-blue-200">
                    Book Appointment <Clock size={18} />
                  </button>
                </div>
              </div>
              <div className="relative h-[400px] bg-blue-600 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white flex items-center justify-center">
                 <Activity size={80} className="text-white opacity-20" />
              </div>
            </div>
          </section>

          <section className="py-20 bg-slate-50 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
              {[
                { title: "Cardiology", icon: <Activity className="text-red-500" /> },
                { title: "Neurology", icon: <Zap className="text-yellow-500" /> },
                { title: "Pediatrics", icon: <UserRound className="text-blue-500" /> }
              ].map((service, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-all">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-slate-500 text-sm">Expert medical care specialized for your specific health needs.</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      )}

      {/* ----------------- EDUCATION VIEW ----------------- */}
      {activeTab === 'education' && (
        <main className="pt-20 animate-in slide-in-from-bottom-5 duration-700">
          {/* Academic Hero */}
          <section className="bg-[#1e3a8a] py-28 px-6 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(white 1px, transparent 1px)`, backgroundSize: '30px 30px' }}></div>
            <div className="max-w-7xl mx-auto text-center relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-blue-200 text-xs font-bold mb-8 border border-white/20 uppercase tracking-widest">
                <Globe size={14} /> Global Excellence in Education
              </div>
              <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-none">
                Building <span className="text-blue-400 italic">Leaders</span>. <br />
                Defining <span className="text-white/50">Futures</span>.
              </h1>
              <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-12 font-light">
                Join an elite academic environment focused on global innovation, research-led teaching, and professional success.
              </p>
              <div className="flex justify-center gap-4">
                <button className="bg-white text-[#1e3a8a] px-10 py-4 rounded-lg font-black hover:bg-blue-50 transition-all shadow-xl shadow-blue-900/50">
                  APPLY FOR 2026
                </button>
                <button className="bg-transparent border border-white/30 hover:bg-white/10 text-white px-10 py-4 rounded-lg font-bold transition-all">
                  VIEW CURRICULUM
                </button>
              </div>
            </div>
          </section>

          {/* Program Categories */}
          <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
               <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-blue-300 transition-colors group">
                    <div className="text-blue-900 mb-4 group-hover:scale-110 transition-transform"><Microscope size={32}/></div>
                    <h4 className="font-bold text-lg mb-2 text-[#1e3a8a]">Applied Sciences</h4>
                    <p className="text-slate-500 text-xs">Research-focused labs and practical tech training.</p>
                  </div>
                  <div className="bg-[#1e3a8a] p-8 rounded-3xl text-white shadow-xl">
                    <div className="text-blue-300 mb-4"><BookOpen size={32}/></div>
                    <h4 className="font-bold text-lg mb-2">Humanities</h4>
                    <p className="text-blue-100/60 text-xs">Critical thinking and global cultural studies.</p>
                  </div>
                  <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 group hover:bg-blue-50 transition-colors">
                    <div className="text-blue-900 mb-4 group-hover:rotate-12 transition-transform"><Users size={32}/></div>
                    <h4 className="font-bold text-lg mb-2 text-[#1e3a8a]">Business & Leadership</h4>
                    <p className="text-slate-500 text-xs">Developing the next generation of CEOs.</p>
                  </div>
                  <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 group hover:bg-blue-50 transition-colors">
                    <div className="text-blue-900 mb-4 group-hover:animate-pulse transition-transform"><Lightbulb size={32}/></div>
                    <h4 className="font-bold text-lg mb-2 text-[#1e3a8a]">Art & Design</h4>
                    <p className="text-slate-500 text-xs">Creative workshops and digital media labs.</p>
                  </div>
               </div>
               
               <div>
                  <h2 className="text-4xl font-black text-[#1e3a8a] mb-6">World-Class Academic <br />Infrastructure</h2>
                  <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                    Our campus provides a stimulating environment where students are encouraged to challenge conventional wisdom and explore new frontiers.
                  </p>
                  <ul className="space-y-4 mb-10">
                    {['15:1 Student-Faculty Ratio', 'State-of-the-art Digital Libraries', '94% Graduate Placement Rate'].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 font-bold text-[#1e3a8a]">
                        <CheckCircle2 size={20} className="text-blue-500" /> {item}
                      </li>
                    ))}
                  </ul>
                  <button className="flex items-center gap-2 font-black text-[#1e3a8a] hover:gap-4 transition-all">
                    Explore our faculties <ArrowRight />
                  </button>
               </div>
            </div>
          </section>

          {/* Academic Footer CTA */}
          <section className="py-20 bg-slate-50 px-6 border-t border-slate-100">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-black text-[#1e3a8a] mb-6 tracking-tight italic uppercase">Start Your Academic Journey Today</h3>
              <p className="text-slate-500 mb-10">Our admissions office is ready to help you navigate the application process and financial aid options.</p>
              <div className="inline-flex gap-8">
                 <div className="text-center">
                    <p className="text-2xl font-black text-blue-600">Jan 15</p>
                    <p className="text-[10px] uppercase font-bold text-slate-400">Application Deadline</p>
                 </div>
                 <div className="w-px h-10 bg-slate-200"></div>
                 <div className="text-center">
                    <p className="text-2xl font-black text-blue-600">Feb 01</p>
                    <p className="text-[10px] uppercase font-bold text-slate-400">Scholarship Review</p>
                 </div>
              </div>
            </div>
          </section>
        </main>
      )}

      
    </div>
  );
}