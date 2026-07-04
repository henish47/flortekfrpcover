import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import { Shield, Settings, Truck, Award, ArrowRight, Home, CheckCircle2, AlertTriangle, Check, X } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOInquiryForm from '../../components/common/SEOInquiryForm';

const FRPvsCastIronCovers = () => {
    const pageSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.flortekfrpcover.com/frp-vs-cast-iron-covers#breadcrumb",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://www.flortekfrpcover.com"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "FRP vs Cast Iron Covers",
                        "item": "https://www.flortekfrpcover.com/frp-vs-cast-iron-covers"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.flortekfrpcover.com/frp-vs-cast-iron-covers#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Why are composite covers a better alternative to cast iron?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Composite FRP covers offer several distinct advantages: they have zero metal scrap value (eliminating theft completely), they are 60-70% lighter (reducing worker injury during maintenance), they do not rust or corrode when exposed to water or chemicals, and they provide excellent electrical insulation."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is the load capacity of FRP covers equal to cast iron?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, Flortek FRP covers are designed and tested to meet BS EN 124 standards, providing performance classes identical to cast iron: A15 (1.5T), B125 (12.5T), C250 (25T), and D400 (40T) load capacities."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen pt-24 md:pt-32 pb-20 font-sans">
            <SEO
                title="FRP vs Cast Iron Manhole Covers | Best Alternative | Flortek"
                description="Comprehensive technical comparison between FRP composite and Cast Iron manhole covers. Discover why FRP is the best alternative to cast iron for B2B buyers."
                keywords="FRP vs Cast Iron Covers, Best Alternative to Cast Iron Covers, Composite Covers vs Cast Iron, composite vs metal manhole covers, non-metallic utility lids"
                schema={pageSchema}
                canonicalUrl="https://www.flortekfrpcover.com/frp-vs-cast-iron-covers"
            />

            {/* Breadcrumb Navigation */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
                <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#333333]/70">
                    <Link to="/" className="hover:text-black flex items-center gap-1 transition-colors">
                        <Home size={12} /> Home
                    </Link>
                    <span>/</span>
                    <span className="text-black">FRP vs Cast Iron Covers</span>
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
                        Engineering Technical Guide
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-black mb-6 uppercase tracking-tighter leading-tight">
                        FRP vs Cast Iron Manhole Covers
                    </h1>
                    <p className="text-lg md:text-xl text-[#333333] max-w-4xl leading-relaxed">
                        Selecting the correct material for utility and municipal chambers impacts long-term maintenance costs, safety, and project durability. In this guide, we present a direct technical comparison between **Fiber Reinforced Polymer (FRP) composite covers** and traditional **Cast Iron (CI) / Ductile Iron (DI)** lids.
                    </p>
                </motion.div>
            </div>

            {/* Main Content Grid */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Text Body */}
                <div className="lg:col-span-8 text-[#333333] text-sm md:text-base leading-relaxed space-y-8">
                    
                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
                            The Evolution of Utility Cover Materials
                        </h2>
                        <p>
                            For over a century, cast iron was the default choice for municipal access covers due to its raw structural strength. However, as infrastructure projects face stricter safety, anti-theft, and longevity guidelines, cast iron's shortcomings have become highly problematic. Flortek composite FRP covers use advanced polymer matrices to provide the same heavy load capacities as cast iron, while resolving its major disadvantages.
                        </p>
                    </section>

                    {/* Comparison Table Section */}
                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
                            Comparison Table: FRP vs Cast Iron
                        </h2>
                        <div className="overflow-x-auto border border-[#D9D9D9] rounded-3xl bg-[#F5F5F5]/20 p-4">
                            <table className="w-full text-left text-xs md:text-sm border-collapse">
                                <thead>
                                    <tr className="border-b border-[#D9D9D9] text-[#333333]/70 font-bold uppercase tracking-wider">
                                        <th className="py-3 px-2">Property</th>
                                        <th className="py-3 px-2 text-black font-black">Flortek FRP Composite</th>
                                        <th className="py-3 px-2">Traditional Cast Iron</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#D9D9D9]/50 font-medium text-[#333333]">
                                    <tr>
                                        <td className="py-4 px-2 font-bold text-black">Theft Risk</td>
                                        <td className="py-4 px-2 text-emerald-600 font-bold flex items-center gap-1">
                                            <Check size={14} /> Zero Scrap Value (No Theft)
                                        </td>
                                        <td className="py-4 px-2 text-red-600 font-bold">
                                            <X size={14} className="inline mr-1" /> High Resale Price (Highly Stolen)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-2 font-bold text-black">Weight Comparison</td>
                                        <td className="py-4 px-2 flex items-center gap-1">
                                            <Check size={14} className="text-emerald-600" /> Lightweight (60-70% lighter)
                                        </td>
                                        <td className="py-4 px-2">
                                            Extremely Heavy (requires cranes/multiple workers)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-2 font-bold text-black">Corrosion Resistance</td>
                                        <td className="py-4 px-2 text-emerald-600 font-bold flex items-center gap-1">
                                            <Check size={14} /> 100% Rustproof & Chemical Immune
                                        </td>
                                        <td className="py-4 px-2 text-red-600 font-bold">
                                            <X size={14} className="inline mr-1" /> Prone to Rusting & Acid Attack
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-2 font-bold text-black">Electrical Conductivity</td>
                                        <td className="py-4 px-2 flex items-center gap-1">
                                            <Check size={14} className="text-emerald-600" /> Non-Conductive (Insulator)
                                        </td>
                                        <td className="py-4 px-2 text-red-600 font-bold">
                                            <X size={14} className="inline mr-1" /> Highly Conductive (Hazards around wet cables)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-2 font-bold text-black">Radio Frequency (RF)</td>
                                        <td className="py-4 px-2 flex items-center gap-1">
                                            <Check size={14} className="text-emerald-600" /> RF Transparent (Smart city sensor friendly)
                                        </td>
                                        <td className="py-4 px-2">
                                            Blocks Wireless Signals (attenuates data)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-2 font-bold text-black">Custom Branding</td>
                                        <td className="py-4 px-2 flex items-center gap-1">
                                            <Check size={14} className="text-emerald-600" /> Easily Molded (Inexpensive setup)
                                        </td>
                                        <td className="py-4 px-2">
                                            Expensive Tooling (Hard to emboss)
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Weight and Safety Section */}
                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
                            Weight Reduction & Labor Safety Benefits
                        </h2>
                        <p>
                            Ductile iron and cast iron manhole covers are exceptionally heavy, often weighing upwards of 80 to 100 kilograms for a standard D400 vehicular lid. Opening these covers for emergency inspections or maintenance requires mechanical hoists, or multiple workers using heavy prybars, which frequently leads to finger pinches or spinal strain injuries.
                        </p>
                        <p>
                            Flortek FRP composite covers weigh **60% to 70% less** than cast iron while maintaining identical structural ratings. A standard 600mm clear-opening composite cover rated for D400 heavy-traffic loading can be safely lifted by one or two workers using standard hand keys, vastly improving operational safety.
                        </p>
                    </section>

                    {/* Cost Comparison section */}
                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
                            Total Cost of Ownership (TCO) Comparison
                        </h2>
                        <p>
                            While raw cast iron prices fluctuate widely based on metal market pricing, FRP composite covers offer stable pricing and long-term cost benefits:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 font-medium">
                            <li><strong>Zero Theft Costs:</strong> Because FRP has zero value as scrap metal, municipal departments do not face the continuous expense of replacing stolen covers.</li>
                            <li><strong>Zero Corrosion Maintenance:</strong> Traditional iron covers require periodic sandblasting and protective anti-rust coatings. FRP covers are colored with stable, UV-resistant pigments mixed throughout the material, requiring zero painting.</li>
                            <li><strong>Reduced Transportation Rates:</strong> The lightweight nature of FRP composite means shipping and logistics charges are significantly lower, especially for export or bulk projects.</li>
                        </ul>
                    </section>

                    <section className="space-y-4 pt-4 border-t border-[#D9D9D9]/50">
                        <h3 className="text-xl font-bold text-black uppercase tracking-tight">Standard Compliance Certifications</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { icon: Shield, title: "BS EN 124 Certified", desc: "Meets exact European load requirements for classes A15 through D400." },
                                { icon: Settings, title: "Self-Extinguishing", desc: "Formulated with flame retardants, ensuring safety in utility ducts." },
                                { icon: Truck, title: "Logistics Optimization", desc: "Lower density means double the quantity can be loaded in standard containers." },
                                { icon: Award, title: "ISO 9001 Facility", desc: "Rigorous quality controls guarantee identical compound ratios for all batches." }
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
                    <SEOInquiryForm subject="FRP vs Cast Iron Comparison" />

                    {/* Related Pages Links */}
                    <div className="border border-[#D9D9D9] rounded-3xl p-6 bg-[#F5F5F5]/30">
                        <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-4">Compare More</h3>
                        <ul className="space-y-3 text-xs font-bold uppercase tracking-wide">
                            <li>
                                <Link to="/municipal-frp-covers" className="text-[#333333] hover:text-black flex items-center gap-2 transition-colors">
                                    <ArrowRight size={12} /> Municipal FRP Covers
                                </Link>
                            </li>
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
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FRPvsCastIronCovers;
