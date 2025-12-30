import React from 'react';
import { 
  Beaker, 
  TestTube, 
  ClipboardCheck, 
  FlaskConical, 
  ShieldAlert, 
  Database, 
  ArrowRight, 
  BarChart3, 
  Layers,
  Activity
} from 'lucide-react';

const PharmaChemicalSuite = () => {
  const modules = [
    {
      title: "Batch Management",
      desc: "End-to-end batch tracking aur automated genealogy for complete transparency.",
      icon: <Layers className="w-10 h-10 text-blue-600" />,
      tag: "Production"
    },
    {
      title: "LIMS Integration",
      desc: "Laboratory Information Management System jo quality control samples ko real-time track karta hai.",
      icon: <TestTube className="w-10 h-10 text-blue-600" />,
      tag: "Quality Lab"
    },
    {
      title: "Compliance (GxP)",
      desc: "FDA 21 CFR Part 11 compliant digital signatures aur audit trails aapke validation ke liye.",
      icon: <ClipboardCheck className="w-10 h-10 text-blue-600" />,
      tag: "Regulatory"
    },
    {
      title: "R&D Analytics",
      desc: "Formulation management aur stability testing data ko analyze karne ke liye advanced tools.",
      icon: <Beaker className="w-10 h-10 text-blue-600" />,
      tag: "Research"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* 1. Sterile Hero Section - Blue/Dark Theme */}
      <section className="relative bg-slate-900 py-24 px-6 overflow-hidden">
        {/* Abstract Background Element - Blue Gradient */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col items-start">
            <span className="bg-blue-600 text-white text-[12px] font-bold px-3 py-1 rounded mb-6 tracking-widest uppercase">
              GxP Compliant Infrastructure
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight">
              Precision in <span className="text-blue-500">Chemistry.</span> <br /> 
              Digital by Design.
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed">
              Vestigo Pharma Suite chemical aur pharmaceutical plants ko empower karta hai advanced batch processing, quality assurance, aur regulatory compliance ke saath.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-bold transition-all shadow-xl shadow-blue-900/40 flex items-center gap-2">
                Talk to a Consultant <ArrowRight size={18} />
              </button>
              <button className="bg-transparent border border-slate-700 hover:border-slate-500 text-white px-8 py-4 rounded-md font-bold transition-all">
                Download Validation Kit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Specialized Modules Grid - White Background with Blue Accents */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Life Sciences Modules</h2>
            <div className="h-1.5 w-20 bg-blue-600 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((m, i) => (
              <div key={i} className="group p-8 rounded-xl border border-slate-200 bg-white hover:border-blue-600/30 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                   {m.icon}
                </div>
                <div className="mb-8 p-3 rounded-lg bg-blue-50 inline-block">
                  {m.icon}
                </div>
                <p className="text-[11px] font-bold text-blue-600 uppercase mb-2 tracking-widest">{m.tag}</p>
                <h3 className="text-xl font-bold mb-3">{m.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Safety & Performance Metrics - Soft Blue Tint */}
      <section className="py-20 bg-blue-50/50 border-y border-blue-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Audit Readiness", value: "100%" },
              { label: "Data Integrity", value: "ALCOA+" },
              { label: "Yield Increase", value: "18%" },
              { label: "Recall Risk Red.", value: "65%" }
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-3xl font-black text-blue-900">{stat.value}</div>
                <div className="text-sm text-blue-600 font-bold mt-1 uppercase tracking-tighter">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Integrated Ecosystem Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-4xl font-extrabold mb-8 text-slate-900 leading-tight">Sterile Digital <br /><span className="text-blue-600">Infrastructure</span></h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="mt-1 bg-blue-100 p-2 rounded-full h-fit">
                  <ShieldAlert className="text-blue-600 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-800">EHS Monitoring</h4>
                  <p className="text-slate-600 text-sm">Environment, Health aur Safety parameters ko track karein critical warnings ke saath.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 bg-blue-100 p-2 rounded-full h-fit">
                  <FlaskConical className="text-blue-600 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-800">Formula Protection</h4>
                  <p className="text-slate-600 text-sm">Aapki IP aur secret formulations ke liye highly encrypted digital vaults.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 bg-blue-100 p-2 rounded-full h-fit">
                  <Database className="text-blue-600 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-800">Electronic Batch Record (EBR)</h4>
                  <p className="text-slate-600 text-sm">Paperless manufacturing jo human errors ko zero tak le jaati hai.</p>
                </div>
              </div>
            </div>
          </div>

          [Image of pharmaceutical manufacturing workflow showing EBR, LIMS integration and batch release process]
          
          <div className="flex-1 w-full p-12 bg-slate-900 rounded-3xl relative">
            <div className="grid grid-cols-2 gap-4">
               <div className="h-40 rounded-2xl bg-slate-800 border border-slate-700 p-6 flex flex-col justify-end">
                  <span className="text-3xl font-bold text-white">CFR 11</span>
                  <span className="text-xs text-blue-400 font-bold">Compliant</span>
               </div>
               <div className="h-40 rounded-2xl bg-blue-600 border border-blue-500 p-6 flex flex-col justify-end">
                  <span className="text-3xl font-bold text-white">Batch</span>
                  <span className="text-xs text-blue-100 font-bold">Release Live</span>
               </div>
               <div className="h-40 rounded-2xl bg-slate-800 border border-slate-700 p-6 flex flex-col justify-end col-span-2">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-3xl font-bold text-white">98.2%</span>
                      <p className="text-xs text-slate-400">Quality Consistency</p>
                    </div>
                    <div className="flex gap-1 mb-2">
                      {[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-6 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: `${i*0.2}s`}} />)}
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Pharma Footer CTA - Blue Gradient Border */}
      <section className="py-20 px-6 bg-slate-950 text-white text-center border-t border-blue-600/30">
        <h2 className="text-4xl font-bold mb-6 italic">Secure Your Digital Molecule</h2>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto">
          Apne chemical aur pharma manufacturing ko global safety standards ke saath transform karein.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-md font-bold transition-all uppercase tracking-widest text-sm shadow-lg shadow-blue-600/20">
          Request Lab Consultation
        </button>
      </section>
    </div>
  );
};

export default PharmaChemicalSuite;