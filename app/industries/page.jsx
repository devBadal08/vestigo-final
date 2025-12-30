import React from 'react';
import { 
  Factory, 
  Settings, 
  Zap, 
  ShieldCheck, 
  Globe2, 
  BarChart3, 
  ArrowRight, 
  ChevronRight,
  Users,
  Building2
} from 'lucide-react';

const IndustriesHome = () => {
  const sectors = [
    { title: "Automotive", desc: "Digital assembly lines aur DMS systems.", icon: <Settings className="w-8 h-8" /> },
    { title: "Manufacturing", desc: "Industry 4.0 aur IoT integration.", icon: <Factory className="w-8 h-8" /> },
    { title: "Energy & Power", desc: "Smart grid aur resource management.", icon: <Zap className="w-8 h-8" /> },
    { title: "Infrastructure", desc: "Large-scale project tracking tools.", icon: <Building2 className="w-8 h-8" /> }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* 1. Global Hero Section */}
      <section className="relative bg-[#0a192f] py-28 px-6 overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold mb-6 border border-blue-500/20 uppercase tracking-widest">
              <Globe2 size={14} /> Global Enterprise Solutions
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Scaling <span className="text-blue-500">Industries</span> <br /> 
              with Intelligence.
            </h1>
            <p className="text-lg text-slate-400 max-w-xl mb-10">
              Vestigo Enterprise Suite provides specialized technology stacks for the world's most demanding industrial sectors. Efficiency, digitized.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2">
                Explore Solutions <ArrowRight size={18} />
              </button>
              <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-lg font-bold transition-all">
                Our Impact
              </button>
            </div>
          </div>

          <div className="flex-1 w-full lg:block hidden">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-30 animate-pulse"></div>
              <div className="relative bg-slate-800 rounded-2xl p-6 border border-white/10">
                 <div className="flex items-center justify-between mb-8">
                    <div className="text-blue-400 font-mono text-sm">SYSTEM_STATUS: ACTIVE</div>
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-ping"></div>
                 </div>
                 <div className="space-y-4">
                    {[75, 40, 90].map((val, i) => (
                      <div key={i} className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{width: `${val}%`}}></div>
                      </div>
                    ))}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Industry Sectors Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Sectors We Empower</h2>
              <p className="text-slate-500">Comprehensive digital transformation across diverse industrial landscapes.</p>
            </div>
            <button className="text-blue-600 font-bold flex items-center gap-1 hover:gap-3 transition-all">
              View All Industries <ChevronRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((s, i) => (
              <div key={i} className="group p-8 rounded-2xl border border-slate-100 bg-white hover:bg-blue-600 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-600/20">
                <div className="w-16 h-16 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-white">{s.title}</h3>
                <p className="text-slate-500 text-sm group-hover:text-blue-100 mb-6">{s.desc}</p>
                <div className="h-1 w-0 group-hover:w-full bg-white/30 transition-all duration-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Global Reach / Stats Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
               <h2 className="text-4xl font-bold mb-6">Built for the <br /><span className="text-blue-600">Global Economy</span></h2>
               <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                 Humaara platform global standards (ISO, GDPR, NIST) ko follow karta hai, taaki aapka business duniya mein kahin bhi bina kisi rukaawat ke scale kar sake.
               </p>
               <div className="grid grid-cols-2 gap-8">
                  <div className="flex gap-4 items-start">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><Users size={20}/></div>
                    <div><h4 className="font-bold text-2xl">500+</h4><p className="text-xs text-slate-500 uppercase font-bold">Clients</p></div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><Globe2 size={20}/></div>
                    <div><h4 className="font-bold text-2xl">40+</h4><p className="text-xs text-slate-500 uppercase font-bold">Countries</p></div>
                  </div>
               </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
               <h4 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                 <ShieldCheck className="text-green-500" /> Security & Compliance
               </h4>
               <ul className="space-y-4">
                 {["End-to-end data encryption", "24/7 Security Operations Center", "Multi-region cloud hosting", "Zero-trust architecture"].map((item, idx) => (
                   <li key={idx} className="flex items-center gap-3 text-slate-600 text-sm border-b border-slate-50 pb-3 last:border-0">
                     <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> {item}
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Final CTA Section */}
      <section className="py-24 px-6 bg-white relative overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-50 rounded-full blur-[120px] opacity-60 -z-10"></div>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8">Ready to modernize your Industry?</h2>
          <p className="text-slate-500 text-lg mb-12">
            Apne operations ko digitize karein aur productivity ko nayi oonchaiyon par le jayein. Aaj hi demo schedule karein.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-full font-bold transition-all shadow-xl shadow-blue-600/20">
              Start Free Trial
            </button>
            <button className="bg-slate-900 hover:bg-slate-800 text-white px-12 py-4 rounded-full font-bold transition-all">
              Talk to Specialist
            </button>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default IndustriesHome;