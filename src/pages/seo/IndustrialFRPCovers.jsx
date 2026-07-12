import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import { Shield, Settings, Truck, Award, ArrowRight, Home, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOInquiryForm from '../../components/common/SEOInquiryForm';

const IndustrialFRPCovers = () => {
    const pageSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "name": "Corrosion-Proof Industrial FRP Covers | Flortek",
                "description": "High-performance composite FRP manhole covers and sewer gratings for industrial manufacturing plants, chemical zones, warehouses, and storage depots.",
                "url": "https://www.flortekfrpcover.com/industrial-frp-covers",
                "breadcrumb": {
                    "@id": "https://www.flortekfrpcover.com/industrial-frp-covers#breadcrumb"
                }
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen pt-24 md:pt-32 pb-20 font-sans">
            <SEO
                title="Industrial FRP Covers & Factory Manhole Lids | FLORTEK INDUSTRIES PVT. LTD."
                description="Heavy duty industrial FRP manhole covers and chemical-resistant gratings. Certified to Class C250 and D400. Perfect for chemical factories and logistics parks."
                keywords="Industrial FRP Covers, FRP Covers for Factories, Heavy Duty Industrial Covers, chemical resistant manhole covers, factory drain gratings"
                schema={pageSchema}
                canonicalUrl="https://www.flortekfrpcover.com/industrial-frp-covers"
            />

            {/* Breadcrumb Navigation */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
                <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#333333]/70">
                    <Link to="/" className="hover:text-black flex items-center gap-1 transition-colors">
                        <Home size={12} /> Home
                    </Link>
                    <span>/</span>
                    <span className="text-black">Industrial FRP Covers</span>
                </nav>
            </div>

            {/* Title Section */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5F5F5] border border-[#D9D9D9] text-black text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                        Heavy Infrastructure Solutions
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-black mb-6 uppercase tracking-tighter leading-tight">
                        Industrial FRP Covers & Gratings
                    </h1>
                    <p className="text-lg md:text-xl text-[#333333] max-w-4xl leading-relaxed">
                        FLORTEK INDUSTRIES PVT. LTD. manufactures engineering-grade **Industrial FRP Covers** and factory drainage gratings. Certified for heavy wheel loads (Class C250 & D400) and engineered with high-resistance resin matrixes to survive the chemical, electrical, and physical stresses of factory floors.
                    </p>
                </motion.div>
            </div>

            {/* Main Content Grid */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Text Body */}
                <div className="lg:col-span-8 text-[#333333] text-sm md:text-base leading-relaxed space-y-8">
                    
                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
                            Applications of FRP Covers in Factory Environments
                        </h2>
                        <p>
                            Industrial processing plants present severe operating environments. Drainage covers are exposed to continuous chemical runoff, oil spills, extreme boiler temperatures, high-voltage fields, and heavy forklifts or transport truck traffic. Concrete grids fracture under high impact, and iron covers rust, creating major hollow road hazards for workers.
                        </p>
                        <p>
                            Our composite covers are engineered to perform reliably across all factory areas:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 font-medium">
                            <li><strong>Chemical Processing Units:</strong> Made with special chemical-grade vinyl ester resins to guarantee zero material degradation when exposed to acids, bleach, or solvents.</li>
                            <li><strong>Logistics Bays & Warehouse Terminals:</strong> Certified to Class D400 load capacity (40 tons proof load) to support heavy truck tires, trailers, and stackers.</li>
                            <li><strong>Electrical Control Substations:</strong> Non-conductive structural composites provide high electrical insulation, ensuring safety for maintenance crews.</li>
                            <li><strong>Water Drainage Channels:</strong> High flow-rate slotted composite gratings stop heavy factory debris from clogging stormwater grids.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
                            Key Product Advantages
                        </h2>
                        <p>
                            Compared to traditional metal or concrete, Flortek industrial covers deliver high utility value:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                            <div className="p-5 border border-[#D9D9D9] rounded-2xl bg-[#F5F5F5]/40 flex gap-3">
                                <CheckCircle2 className="shrink-0 text-black mt-1" size={18} />
                                <div>
                                    <h4 className="font-bold text-black text-sm uppercase">100% Rust & Corrosion Free</h4>
                                    <p className="text-xs text-[#333333]/90 mt-1">Immune to water moisture, chemical fumes, hydrogen sulfide gas, and oil spills.</p>
                                </div>
                            </div>
                            <div className="p-5 border border-[#D9D9D9] rounded-2xl bg-[#F5F5F5]/40 flex gap-3">
                                <CheckCircle2 className="shrink-0 text-black mt-1" size={18} />
                                <div>
                                    <h4 className="font-bold text-black text-sm uppercase">Lightweight Safe Handling</h4>
                                    <p className="text-xs text-[#333333]/90 mt-1">Allows two operators to safely lift covers during routine cable or sewer checks without requiring cranes.</p>
                                </div>
                            </div>
                            <div className="p-5 border border-[#D9D9D9] rounded-2xl bg-[#F5F5F5]/40 flex gap-3">
                                <CheckCircle2 className="shrink-0 text-black mt-1" size={18} />
                                <div>
                                    <h4 className="font-bold text-black text-sm uppercase">Checked Surface Grip</h4>
                                    <p className="text-xs text-[#333333]/90 mt-1">Precision-molded checkered patterns ensure slip-resistant traction for industrial vehicles and workers.</p>
                                </div>
                            </div>
                            <div className="p-5 border border-[#D9D9D9] rounded-2xl bg-[#F5F5F5]/40 flex gap-3">
                                <CheckCircle2 className="shrink-0 text-black mt-1" size={18} />
                                <div>
                                    <h4 className="font-bold text-black text-sm uppercase">High Curing Strength</h4>
                                    <p className="text-xs text-[#333333]/90 mt-1">Hydraulic heat-pressing stops structural voids, ensuring the composite does not warp or bend.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
                            Industrial Case Studies
                        </h2>
                        <div className="space-y-6">
                            <div className="p-6 border border-[#D9D9D9] rounded-3xl bg-white space-y-2">
                                <span className="text-xs font-bold text-black uppercase tracking-wider bg-[#F5F5F5] px-3 py-1 rounded">Dahej Chemical Park</span>
                                <h4 className="font-black text-black text-base uppercase mt-2">Corrosive Acid Drainage Grid</h4>
                                <p className="text-sm text-[#333333] leading-relaxed">
                                    Replaced 120 sets of rusted steel gratings with customized acid-resistant vinyl ester FRP drain grates. Zero structural degradation reported after 3 years of exposure.
                                </p>
                            </div>
                            <div className="p-6 border border-[#D9D9D9] rounded-3xl bg-white space-y-2">
                                <span className="text-xs font-bold text-black uppercase tracking-wider bg-[#F5F5F5] px-3 py-1 rounded">Mundra Logistics Yard</span>
                                <h4 className="font-black text-black text-base uppercase mt-2">D400 Heavy Trailer Carriage Bays</h4>
                                <p className="text-sm text-[#333333] leading-relaxed">
                                    Supplied 80 sets of 600x600mm D400 heavy-duty square covers for utility chambers. The covers handle dynamic trailer loadings up to 40 tons without cracking or shifting.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4 pt-4 border-t border-[#D9D9D9]/50">
                        <h3 className="text-xl font-bold text-black uppercase tracking-tight">Technical Compliance</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { icon: Shield, title: "BS EN 124 Standard", desc: "Proof load tested up to 400 kN for extreme vehicular traffic spots." },
                                { icon: Settings, title: "Dielectric Strength", desc: "Tested for non-conductive electrical insulation in substation ducts." },
                                { icon: Truck, title: "Low Transport Cost", desc: "Lightweight build reduces shipping weight, lowering transport emissions." },
                                { icon: Award, title: "Zero Theft Value", desc: "Synthetic compound has zero metal scrap price, stopping plant theft." }
                            ].map((item, i) => (
                                <div key={i} className="p-4 border border-[#D9D9D9] rounded-2xl bg-white flex gap-3">
                                    <item.icon className="shrink-0 text-black mt-1" size={18} />
                                    <div>
                                        <h4 className="font-bold text-black text-xs uppercase">{item.title}</h4>
                                        <p className="text-xs text-[#333333] mt-0.5">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Sidebar Column */}
                <div className="lg:col-span-4 space-y-8">
                    {/* B2B Inquiry Form */}
                    <SEOInquiryForm subject="Industrial FRP Covers" />

                    {/* Related Pages Links */}
                    <div className="border border-[#D9D9D9] rounded-3xl p-6 bg-[#F5F5F5]/30">
                        <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-4">Related Categories</h3>
                        <ul className="space-y-3 text-xs font-bold uppercase tracking-wide">
                            <li>
                                <Link to="/heavy-duty-frp-covers" className="text-[#333333] hover:text-black flex items-center gap-2 transition-colors">
                                    <ArrowRight size={12} /> Heavy Duty FRP Covers
                                </Link>
                            </li>
                            <li>
                                <Link to="/frp-manhole-covers" className="text-[#333333] hover:text-black flex items-center gap-2 transition-colors">
                                    <ArrowRight size={12} /> FRP Manhole Covers
                                </Link>
                            </li>
                            <li>
                                <Link to="/frp-drain-covers" className="text-[#333333] hover:text-black flex items-center gap-2 transition-colors">
                                    <ArrowRight size={12} /> FRP Drain Gratings
                                </Link>
                            </li>
                            <li>
                                <Link to="/frp-cable-trench-covers" className="text-[#333333] hover:text-black flex items-center gap-2 transition-colors">
                                    <ArrowRight size={12} /> Cable Trench Lids
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndustrialFRPCovers;
