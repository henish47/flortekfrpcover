import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import { Shield, Settings, Truck, Award, ArrowRight, Home, Building2, Factory } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOInquiryForm from '../../components/common/SEOInquiryForm';

const FRPCoverManufacturerIndia = () => {
    const pageSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "name": "FRP Cover Manufacturer & B2B Supplier in India | Flortek",
                "description": "Flortek is a premier ISO 9001:2015 certified manufacturer of high-quality composite FRP covers in India. Nationwide delivery, custom sizing, and BS EN 124 compliance.",
                "url": "https://www.flortekfrpcover.com/frp-cover-manufacturer-india",
                "breadcrumb": {
                    "@id": "https://www.flortekfrpcover.com/frp-cover-manufacturer-india#breadcrumb"
                }
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen pt-24 md:pt-32 pb-20 font-sans">
            <SEO
                title="FRP Cover Manufacturer & Supplier in India | FLORTEK INDUSTRIES PVT. LTD."
                description="FLORTEK INDUSTRIES PVT. LTD. is the leading ISO 9001:2015 certified FRP cover manufacturer and supplier in India. Factory-direct wholesale prices and pan-India delivery."
                keywords="India's No. 1 FRP Manhole Cover Manufacturer, FRP Cover Manufacturer India, FRP Cover Supplier India, FRP Cover Company India, composite manhole cover factory, buy manhole covers bulk India"
                schema={pageSchema}
                canonicalUrl="https://www.flortekfrpcover.com/frp-cover-manufacturer-india"
            />

            {/* Breadcrumb Navigation */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
                <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#333333]/70">
                    <Link to="/" className="hover:text-black flex items-center gap-1 transition-colors">
                        <Home size={12} /> Home
                    </Link>
                    <span>/</span>
                    <span className="text-black">FRP Cover Manufacturer India</span>
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
                        National Industrial Leader
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-black mb-6 uppercase tracking-tighter leading-tight">
                        FRP Cover Manufacturer in India
                    </h1>
                    <p className="text-lg md:text-xl text-[#333333] max-w-4xl leading-relaxed">
                        FLORTEK INDUSTRIES PVT. LTD. is India's leading ISO 9001:2015 certified engineering firm manufacturing high-strength, non-corrosive Fiber Reinforced Polymer (FRP) covers. From our advanced factory, we supply infrastructure projects nationwide with certified composite drainage solutions.
                    </p>
                </motion.div>
            </div>

            {/* Main Content Grid */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Text Body */}
                <div className="lg:col-span-8 text-[#333333] text-sm md:text-base leading-relaxed space-y-8">
                    
                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
                            Flortek: India's Premier FRP Cover Company
                        </h2>
                        <p>
                            With the rapid modernization of Indian smart cities, highway networks, and commercial zones, traditional cast-iron and concrete covers are proving inadequate. Cast iron presents massive theft challenges, whereas concrete lids crumble under repeated vehicular traffic. Our **FRP (Fiber Reinforced Polymer) composite covers** solve these concerns permanently. Formulated using high-grade fiberglass strands and thermosetting resins, they offer an unparalleled strength-to-weight ratio.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
                            Our State-of-the-Art Manufacturing Facility
                        </h2>
                        <p>
                            Based in Rajkot, Gujarat, our facility utilizes modern compression molding technology and automated hydraulic systems. We follow a zero-defect policy, verifying raw material grades, checking resin polymerization, and conducting load testing checks for every batch. Each cover is marked with its corresponding load class (Class A15, B125, C250, D400) according to **BS EN 124** and **IS 1726** parameters.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            <div className="p-5 border border-[#D9D9D9] rounded-2xl bg-[#F5F5F5]/40 flex gap-4">
                                <Factory className="shrink-0 text-black mt-1" size={20} />
                                <div>
                                    <h4 className="font-bold text-black text-sm uppercase">Advanced Compression Molding</h4>
                                    <p className="text-xs text-[#333333]/90 mt-1">High-pressure hydraulic curing guarantees dense composite cross-linking for heavy vehicular impact support.</p>
                                </div>
                            </div>
                            <div className="p-5 border border-[#D9D9D9] rounded-2xl bg-[#F5F5F5]/40 flex gap-4">
                                <Building2 className="shrink-0 text-black mt-1" size={20} />
                                <div>
                                    <h4 className="font-bold text-black text-sm uppercase">In-House Load testing</h4>
                                    <p className="text-xs text-[#333333]/90 mt-1">Every production batch undergoes dynamic proof-load compression testing before warehouse loading.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
                            Product Range & Solutions
                        </h2>
                        <p>
                            We offer a complete portfolio of composite utility covers:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 font-medium">
                            <li><strong>FRP Manhole Covers:</strong> Circular, square, and rectangular solid-top configurations for electrical, water, and sewage chambers.</li>
                            <li><strong>Drain & Gully Gratings:</strong> Slotted configurations optimized for stormwater collection in residential driveways and road shoulders.</li>
                            <li><strong>Cable Trench Lids:</strong> Non-conductive covers specifically designed for high-voltage power substations and telecom cabling ducts.</li>
                            <li><strong>Recessed Tile Covers:</strong> Hidden-profile tray covers that allow decorative pavement infill for premium retail corridors.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
                            Pan-India Delivery Network
                        </h2>
                        <p>
                            Our logistics cell manages direct dispatches from our factory to project locations across all Indian states. We maintain partnership agreements with national transport lines to offer competitive freight terms and prompt transit. Key regions regularly supplied include:
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-bold text-black uppercase tracking-wider text-center">
                            <div className="bg-[#F5F5F5] p-3 rounded-lg border border-[#D9D9D9]/40">Mumbai & Pune</div>
                            <div className="bg-[#F5F5F5] p-3 rounded-lg border border-[#D9D9D9]/40">Bangalore & Chennai</div>
                            <div className="bg-[#F5F5F5] p-3 rounded-lg border border-[#D9D9D9]/40">Delhi-NCR</div>
                            <div className="bg-[#F5F5F5] p-3 rounded-lg border border-[#D9D9D9]/40">Hyderabad & Vizag</div>
                        </div>
                    </section>

                    {/* Quality checks trust section */}
                    <section className="space-y-4 pt-4 border-t border-[#D9D9D9]/50">
                        <h3 className="text-xl font-bold text-black uppercase tracking-tight">Why Choose Flortek?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { icon: Shield, title: "Zero Scrap Value", desc: "No steel or iron means zero theft value, stopping road hazards permanently." },
                                { icon: Settings, title: "Weather Resistance", desc: "UV-stabilized resin layers prevent discoloration and material degradation in tropical heat." },
                                { icon: Truck, title: "Prompt Dispatch", desc: "Substantial raw material inventories enable fast manufacturing cycles for large volume smart-city tenders." },
                                { icon: Award, title: "Certified compliance", desc: "Rigorous laboratory validation certificates provided with every dispatch batch." }
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
                    <SEOInquiryForm subject="FRP Cover Manufacturer India" />

                    {/* Related Pages Links */}
                    <div className="border border-[#D9D9D9] rounded-3xl p-6 bg-[#F5F5F5]/30">
                        <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-4">Explore More Guides</h3>
                        <ul className="space-y-3 text-xs font-bold uppercase tracking-wide">
                            <li>
                                <Link to="/frp-cover-manufacturer-gujarat" className="text-[#333333] hover:text-black flex items-center gap-2 transition-colors">
                                    <ArrowRight size={12} /> Exporter in Gujarat
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

export default FRPCoverManufacturerIndia;
