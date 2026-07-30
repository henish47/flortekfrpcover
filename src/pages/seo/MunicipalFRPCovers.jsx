import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import { Shield, Settings, Truck, Award, ArrowRight, Home, Building, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOInquiryForm from '../../components/common/SEOInquiryForm';

const MunicipalFRPCovers = () => {
    const pageSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "name": "Zero-Theft Municipal FRP Manhole Covers | Flortek Industries PVT. LTD.",
                "description": "FRP composite manhole covers designed for municipal public works projects, sewage networks, and smart city infrastructure. RF-friendly and BS EN 124 certified.",
                "url": "https://www.flortekfrpcover.com/municipal-frp-covers",
                "breadcrumb": {
                    "@id": "https://www.flortekfrpcover.com/municipal-frp-covers#breadcrumb"
                }
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen pt-24 md:pt-32 pb-20 font-sans">
            <SEO
                title="Municipal FRP Covers & Smart City Drainage Solutions | FLORTEK INDUSTRIES PVT. LTD."
                description="Premium municipal-grade FRP manhole covers and sewer gratings. BS EN 124 certified, zero-theft, and RF-friendly for modern smart city and highway projects."
                keywords="Municipal FRP Covers, Smart City FRP Covers, Infrastructure FRP Covers, municipal manhole covers, sewer drainage covers, RF-friendly covers"
                schema={pageSchema}
                canonicalUrl="https://www.flortekfrpcover.com/municipal-frp-covers"
            />

            {/* Breadcrumb Navigation */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
                <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#333333]/70">
                    <Link to="/" className="hover:text-black flex items-center gap-1 transition-colors">
                        <Home size={12} /> Home
                    </Link>
                    <span>/</span>
                    <span className="text-black">Municipal FRP Covers</span>
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
                        Public Works & Civil Infrastructure
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-black mb-6 uppercase tracking-tighter leading-tight">
                        Municipal FRP Covers & Smart City Gratings
                    </h1>
                    <p className="text-lg md:text-xl text-[#333333] max-w-4xl leading-relaxed">
                        FLORTEK INDUSTRIES PVT. LTD. manufactures BS EN 124 certified **Municipal FRP Covers** and utility chamber solutions. Designed to solve municipal headaches like theft, corrosion, and heavy maintenance, our composite solutions are built for smart cities, public highways, and stormwater infrastructure.
                    </p>
                </motion.div>
            </div>

            {/* Main Content Grid */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Text Body */}
                <div className="lg:col-span-8 blog-article-body space-y-12">
                    
                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
                            Solving Traditional Municipal Drainage Problems
                        </h2>
                        <p>
                            Modern municipal corporations manage complex road networks and residential zones. In these high-traffic regions, traditional cast-iron and concrete covers are proving to be extremely expensive and dangerous. Cast-iron covers are regularly stolen for their high scrap value, creating open manhole traps that cause fatal vehicular accidents and pedestrian falls. Concrete covers, on the other hand, absorb moisture and crumble under heavy wheel loads, requiring frequent, labor-intensive replacements.
                        </p>
                        <p>
                            Flortek's **Municipal FRP composite covers** eliminate these risks entirely. Because they contain zero metallic scrap value, they are immune to theft. Their composite fiberglass matrix delivers exceptional load support, making them the ultimate replacement for public works departments.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
                            Smart City Infrastructure Integration
                        </h2>
                        <p>
                            As cities evolve into smart networks, utility management (water flow, gas pressure, electrical conduits) increasingly relies on IoT sensors and wireless transmitters placed underground. Standard metallic covers block these radio frequencies, requiring antennas to be run outside where they get damaged.
                        </p>
                        <p>
                            Flortek FRP composite covers are **completely non-metallic and RF-friendly**, allowing wireless smart city sensors, AMR water meters, and telecommunication signals to communicate seamlessly.
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                            <div className="p-5 border border-[#D9D9D9] rounded-2xl bg-[#F5F5F5]/40 flex gap-3">
                                <Building className="shrink-0 text-black mt-1" size={18} />
                                <div>
                                    <h4 className="font-bold text-black text-sm uppercase">Smart Utility Ready</h4>
                                    <p className="text-xs text-[#333333]/90 mt-1">Non-magnetic composite material allows wireless data transfer from underground meters without signal attenuation.</p>
                                </div>
                            </div>
                            <div className="p-5 border border-[#D9D9D9] rounded-2xl bg-[#F5F5F5]/40 flex gap-3">
                                <CheckCircle2 className="shrink-0 text-black mt-1" size={18} />
                                <div>
                                    <h4 className="font-bold text-black text-sm uppercase">Gas and Odor Sealed</h4>
                                    <p className="text-xs text-[#333333]/90 mt-1">Equipped with specialized neoprene gasket seals to prevent toxic gases from escaping onto public walkways.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
                            Municipal Applications & Project Suitability
                        </h2>
                        <p>
                            Our municipal composite solutions are certified for a wide variety of public work operations:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 font-medium">
                            <li><strong>Sewerage & Wastewater Networks:</strong> Excellent resistance to corrosive hydrogen sulfide (H2S) gases generated in sewer lines.</li>
                            <li><strong>Smart City Stormwater Drainage:</strong> High-efficiency gully and road-shoulder gratings designed to maximize water intake during heavy monsoons.</li>
                            <li><strong>Underground Power & Telecom Cables:</strong> Non-conductive structure protects public citizens from stray voltage leaks.</li>
                            <li><strong>Premium Pedestrian Plazas:</strong> Recessed covers allow landscaping paving-stones or decorative tiles to hide utility entry points.</li>
                        </ul>
                    </section>

                    <section className="space-y-4 pt-4 border-t border-[#D9D9D9]/50">
                        <h3 className="text-xl font-bold text-black uppercase tracking-tight">Municipal Trust & Safety Checklist</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { icon: Shield, title: "Zero Theft Risk", desc: "No metal content means zero scrap value, ensuring covers remain in place forever." },
                                { icon: Settings, title: "UV Color Stability", desc: "Formulated with premium pigments to resist fading under harsh direct sunlight." },
                                { icon: Truck, title: "Quick Shipping", desc: "High production capacity supports bulk orders for government tenders." },
                                { icon: Award, title: "BS EN 124 Certified", desc: "Fully complies with global testing standards for load ratings up to 40 Tons." }
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
                    <SEOInquiryForm subject="Municipal FRP Covers" />

                    {/* Related Pages Links */}
                    <div className="border border-[#D9D9D9] rounded-3xl p-6 bg-[#F5F5F5]/30">
                        <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-4">Related Solutions</h3>
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

export default MunicipalFRPCovers;
