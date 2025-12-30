import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Search, 
  ShoppingCart, 
  Filter, 
  Package, 
  Truck, 
  ShieldCheck, 
  ArrowRight, 
  FileText,
  Boxes,
  Globe,
  ChevronRight
} from 'lucide-react';

const IndustrialMarketplace = () => {
  const products = [
    { id: 1, name: "Variable Frequency Drive (VFD)", price: "₹45,000", spec: "5.5kW / 440V", tag: "Electrical" },
    { id: 2, name: "ISO Safety Harness Kit", price: "₹2,800", spec: "Double Lanyard", tag: "Safety" },
    { id: 3, name: "Pneumatic Cylinder - 50mm", price: "₹5,200", spec: "Stainless Steel", tag: "Automation" },
    { id: 4, name: "Industrial Air Compressor", price: "₹1,25,000", spec: "10 HP / 300L", tag: "Machinery" }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* 1. Header & Industrial Search */}
      <header className="border-b border-slate-100 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={140}
              height={80}
              priority
            />
          </Link>
          
          <div className="flex-1 max-w-2xl relative">
            <input 
              type="text" 
              placeholder="Search by Part Number, SKU, or Technical Specification..." 
              className="w-full bg-slate-50 border border-slate-200 rounded-full py-2.5 px-12 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-sm"
            />
            <Search className="absolute left-4 top-3 text-slate-400" size={18} />
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden lg:flex flex-col text-right">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Support</span>
              <span className="text-sm font-bold">1800-IND-SHOP</span>
            </div>
            <button className="relative p-2 text-slate-700 hover:text-blue-600">
              <ShoppingCart size={24} />
              <span className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">5</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. Hero Section - B2B Focus */}
      <section className="bg-slate-900 py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-md bg-blue-600/20 text-blue-400 text-xs font-bold mb-4 border border-blue-500/30 uppercase tracking-widest">
              Direct-from-Factory Pricing
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Precision Parts. <br />
              <span className="text-blue-500">Global Supply Chain.</span>
            </h1>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Industrial procurement ko streamline karein. Get bulk quotes, manage tax invoices, aur priority logistics ko track karein ek hi dashboard se.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 transition-all">
                Request a Bulk Quote <ArrowRight size={18} />
              </button>
              <button className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10">
                Partner with Us
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             {[
               { icon: <ShieldCheck />, label: "ISO Certified", desc: "Quality Assured" },
               { icon: <FileText />, label: "GST Ready", desc: "Digital Invoicing" },
               { icon: <Truck />, label: "Express Shipping", desc: "Priority Logistics" },
               { icon: <Boxes />, label: "Bulk Inventory", desc: "Always in Stock" }
             ].map((item, i) => (
               <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all">
                  <div className="text-blue-500 mb-3">{item.icon}</div>
                  <h4 className="text-white font-bold text-sm">{item.label}</h4>
                  <p className="text-slate-500 text-xs">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 3. Product Catalog Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Popular Industrial Supplies</h2>
              <div className="h-1 w-20 bg-blue-600 mt-3 rounded-full"></div>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 text-sm font-bold text-blue-600 bg-blue-50 rounded-lg">All Products</button>
              <button className="px-4 py-2 text-sm font-bold text-slate-500 hover:bg-slate-100 rounded-lg transition-all">Best Sellers</button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((p) => (
              <div key={p.id} className="group border border-slate-100 rounded-2xl p-5 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-600/5 transition-all bg-white flex flex-col">
                <div className="h-52 bg-slate-50 rounded-xl mb-4 flex items-center justify-center relative">
                   <Package size={48} className="text-slate-200 group-hover:scale-110 group-hover:text-blue-100 transition-all duration-500" />
                   <div className="absolute top-3 left-3 px-2 py-1 bg-white text-[10px] font-bold text-blue-600 border border-blue-50 rounded">
                      {p.tag}
                   </div>
                </div>
                <h3 className="font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">{p.name}</h3>
                <p className="text-xs text-slate-500 font-medium mb-4">{p.spec}</p>
                
                <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                   <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Unit Price</span>
                      <span className="text-xl font-black text-slate-900">{p.price}</span>
                   </div>
                   <button className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                      <ShoppingCart size={20} />
                   </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. RFQ / Enterprise Procurement Section */}
      <section className="py-20 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-4xl font-extrabold mb-6 leading-tight text-slate-900">Streamline Your <br /> <span className="text-blue-600">Enterprise Orders</span></h2>
            <p className="text-slate-600 mb-8">Humaari Request for Quote (RFQ) facility allow karti hai ki aap large volume orders ke liye custom negotiable pricing payein.</p>
            
            <div className="space-y-4">
              {[
                { title: "Direct RFQ Submission", icon: <FileText size={18}/> },
                { title: "Consolidated Monthly Billing", icon: <Globe size={18}/> },
                { title: "Credit Facilities Available", icon: <ShieldCheck size={18}/> }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-slate-700 font-bold text-sm bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                  <span className="text-blue-600">{item.icon}</span>
                  {item.title}
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 w-full bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-200">
             <h4 className="font-bold text-lg mb-6">Quick RFQ Form</h4>
             <form className="space-y-4">
               <input type="text" placeholder="Industrial Component Name" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:border-blue-500 outline-none" />
               <div className="grid grid-cols-2 gap-4">
                  <input type="number" placeholder="Quantity Required" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm outline-none" />
                  <input type="text" placeholder="Target Price/Unit" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm outline-none" />
               </div>
               <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2">
                 Submit Quotation Request <ChevronRight size={18} />
               </button>
             </form>
          </div>
        </div>
      </section>

      {/* 5. Industrial Partners Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all">
           <div className="text-2xl font-black text-slate-400">SIEMENS</div>
           <div className="text-2xl font-black text-slate-400">BOSCH</div>
           <div className="text-2xl font-black text-slate-400">SCHNEIDER</div>
           <div className="text-2xl font-black text-slate-400">MAHINDRA</div>
           <div className="text-2xl font-black text-slate-400">TATA STEEL</div>
        </div>
      </section>

     
    </div>
  );
};

export default IndustrialMarketplace;