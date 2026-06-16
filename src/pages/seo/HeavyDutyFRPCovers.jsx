import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import { useModal } from '../../context/ModalContext';
import { Shield, Settings, Truck, Award, ArrowRight, Home } from 'lucide-react';
import { motion } from 'framer-motion';

const HeavyDutyFRPCovers = () => {
    const { openModal } = useModal();

    const pageSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://flortekfrpcover.vercel.app/heavy-duty-frp-covers#breadcrumb",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://flortekfrpcover.vercel.app"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Heavy Duty FRP Covers",
                        "item": "https://flortekfrpcover.vercel.app/heavy-duty-frp-covers"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://flortekfrpcover.vercel.app/heavy-duty-frp-covers#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What load capacities do heavy duty FRP covers support?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Our heavy duty covers are certified for Class C250 (25-tonne) and Class D400 (40-tonne) load capacities, making them suitable for truck lanes and main municipal carriage ways."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does dynamic vehicular load affect FRP?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Flortek heavy-duty covers are molded under high pressure using continuous fiberglass reinforcement. They distribute dynamic wheel loads evenly, showing zero cracking or fatigue under heavy truck wheels."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen pt-24 md:pt-32 pb-20 font-sans">
            <SEO
                title="Heavy Duty FRP Manhole Covers (25-Ton & 40-Ton) | Flortek"
                description="Heavy duty FRP composite manhole covers certified for Class C250 and D400 load capacities. Durable, lightweight, and engineered for vehicular road traffic."
                keywords="Heavy Duty FRP Covers, 20 Ton Manhole Cover, 40 Ton Composite Cover, Traffic Rated Manhole Lids, C250 D400 Covers India"
                schema={pageSchema}
                canonicalUrl="https://flortekfrpcover.vercel.app/heavy-duty-frp-covers"
            />

            {/* Breadcrumb Navigation (UI) */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
                <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#333333]/70">
                    <Link to="/" className="hover:text-black flex items-center gap-1 transition-colors">
                        <Home size={12} /> Home
                    </Link>
                    <span>/</span>
                    <span className="text-black">Heavy Duty FRP Covers</span>
                </nav>
            </div>

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5F5F5] border border-[#D9D9D9] text-black text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                        Product Category
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-black mb-6 uppercase tracking-tighter leading-tight">
                        Heavy Duty FRP Covers
                    </h1>
                    <p className="text-lg md:text-xl text-[#333333] max-w-4xl leading-relaxed">
                        Flortek Industries Private Limited manufactures industrial-grade, traffic-rated Heavy Duty FRP manhole covers. Certified for 25-tonne (C250) and 40-tonne (D400) wheel loads to handle the continuous impact of commercial trucks, delivery buses, and public transport infrastructure.
                    </p>
                </motion.div>
            </div>

            {/* Main Content Area (SEO Copywriting) */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Text Body */}
                <div className="lg:col-span-8 text-[#333333] text-sm md:text-base leading-relaxed space-y-8">
                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
                            Traffic-Rated Structural Composite Covers
                        </h2>
                        <p>
                            Industrial driveways, city main roads, highway intersections, and terminal cargo docks require manhole covers that support high wheel pressure. Cast iron covers have been historically popular, but their weight makes access difficult, and theft of covers is a continuous hazard that can leave open shafts on roads, causing fatal vehicle accidents.
                        </p>
                        <p>
                            Our **Heavy Duty FRP (Fiber Reinforced Plastic) covers** provide a secure, long-lasting replacement. Molded under high heat and pressure, they combine continuous-strand fiberglass layers with high-grade thermosetting polymers. They possess the structural strength to handle Class C250 and D400 wheel loads, but since they contain zero metal, they have no scrap value and will never be stolen.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
                            Tested Conformance to BS EN 124 standards
                        </h2>
                        <p>
                            To guarantee reliability, we put all our heavy-duty product lines through strict deflection testing protocols at our plant in Shapar, Rajkot.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>C250 Class (25-Tonne capacity):</strong> Engineered for car parking garages, slow-moving heavy commercial lanes, warehouse corridors, and municipal collection systems.</li>
                            <li><strong>D400 Class (40-Tonne capacity):</strong> Engineered to handle high-speed vehicular wheel impacts on city arterials, national highway junctions, container loading bays, and industrial processing parks.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
                            Key Specifications & Performance Ratings
                        </h2>
                        <p>
                            Our heavy-duty composite utility covers are built using advanced polymer chemistry to ensure perfect durability.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                            <div className="p-5 border border-[#D9D9D9] rounded-2xl bg-[#F5F5F5]/30">
                                <h3 className="font-bold text-black text-base mb-2 flex items-center gap-2">
                                    <Shield size={18} /> Safe Handling
                                </h3>
                                <p className="text-xs text-[#333333]/90">
                                    Despite their massive load rating, they are 60% lighter than cast iron covers, drastically reducing spinal strains and back injuries during access checks.
                                </p>
                            </div>
                            <div className="p-5 border border-[#D9D9D9] rounded-2xl bg-[#F5F5F5]/30">
                                <h3 className="font-bold text-black text-base mb-2 flex items-center gap-2">
                                    <Settings size={18} /> Zero Metal Corrosion
                                </h3>
                                <p className="text-xs text-[#333333]/90">
                                    Complete immunity to oil spills, road salts, severe rainwater logging, sewage acids, and dynamic friction weathering.
                                </p>
                            </div>
                            <div className="p-5 border border-[#D9D9D9] rounded-2xl bg-[#F5F5F5]/30">
                                <h3 className="font-bold text-black text-base mb-2 flex items-center gap-2">
                                    <Truck size={18} /> Anti-Vibration Fit
                                </h3>
                                <p className="text-xs text-[#333333]/90">
                                    Precision-molded frame matching prevents cover rattling and noise under heavy vehicular movement, improving road safety.
                                </p>
                            </div>
                            <div className="p-5 border border-[#D9D9D9] rounded-2xl bg-[#F5F5F5]/30">
                                <h3 className="font-bold text-black text-base mb-2 flex items-center gap-2">
                                    <Award size={18} /> Non-Slip Checkered Surface
                                </h3>
                                <p className="text-xs text-[#333333]/90">
                                    Textured surface grips prevent tires from slipping or sliding during heavy rains, ensuring maximum roadway traction.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4 pt-4">
                        <p>
                            We provide heavy-duty composite solutions to construction firms, infrastructure builders, and municipalities across India.
                        </p>
                        <div className="p-6 border border-black rounded-3xl bg-[#F5F5F5]/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div>
                                <h4 className="font-bold text-black text-base mb-1">Need specific size guidelines?</h4>
                                <p className="text-xs text-[#333333]/80">Check out our heavy duty clear opening and outer frame measurements.</p>
                            </div>
                            <Link to="/sizes" className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#333333] transition-colors">
                                View Sizes <ArrowRight size={14} />
                            </Link>
                        </div>
                    </section>
                </div>

                {/* Sidebar Widget */}
                <div className="lg:col-span-4 space-y-8">
                    {/* Inquiry Card */}
                    <div className="border border-[#D9D9D9] rounded-3xl p-6 bg-white shadow-sm">
                        <h3 className="text-lg font-bold text-black uppercase tracking-tight mb-4">Request Free Quote</h3>
                        <p className="text-xs text-[#333333] mb-6 leading-relaxed">
                            Need specific load testing reports, structural certifications, or pricing list? Get in touch with our team in Rajkot.
                        </p>
                        <button
                            onClick={openModal}
                            className="w-full py-4 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#333333] transition-all mb-4"
                        >
                            Get Custom Price
                        </button>
                        <a
                            href="https://wa.me/918000888620"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-4 border border-[#D9D9D9] text-black text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#F5F5F5] transition-all flex items-center justify-center gap-2"
                        >
                            WhatsApp Inquiry
                        </a>
                    </div>

                    {/* Internal Links Widget */}
                    <div className="border border-[#D9D9D9] rounded-3xl p-6 bg-[#F5F5F5]/30">
                        <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-4">Related Categories</h3>
                        <ul className="space-y-3 text-xs font-bold uppercase tracking-wide">
                            <li>
                                <Link to="/frp-manhole-covers" className="text-[#333333] hover:text-black flex items-center gap-2 transition-colors">
                                    <ArrowRight size={12} /> FRP Manhole Covers
                                </Link>
                            </li>
                            <li>
                                <Link to="/frp-drain-covers" className="text-[#333333] hover:text-black flex items-center gap-2 transition-colors">
                                    <ArrowRight size={12} /> FRP Drain Covers
                                </Link>
                            </li>
                            <li>
                                <Link to="/frp-cable-trench-covers" className="text-[#333333] hover:text-black flex items-center gap-2 transition-colors">
                                    <ArrowRight size={12} /> Cable Trench Covers
                                </Link>
                            </li>
                            <li>
                                <Link to="/installation" className="text-[#333333] hover:text-black flex items-center gap-2 transition-colors">
                                    <ArrowRight size={12} /> Installation Instructions
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeavyDutyFRPCovers;
