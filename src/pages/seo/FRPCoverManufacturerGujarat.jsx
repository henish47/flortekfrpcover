import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import { Shield, Settings, Truck, Award, ArrowRight, Home, Factory } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOInquiryForm from '../../components/common/SEOInquiryForm';

const FRPCoverManufacturerGujarat = () => {
    const pageSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "name": "FRP Cover Manufacturer & Supplier in Gujarat | Flortek",
                "description": "Flortek is the leading manufacturer and supplier of premium composite FRP covers in Gujarat. Located in Rajkot with direct supply to Ahmedabad, Surat, and Vadodara.",
                "url": "https://www.flortekfrpcover.com/frp-cover-manufacturer-gujarat",
                "breadcrumb": {
                    "@id": "https://www.flortekfrpcover.com/frp-cover-manufacturer-gujarat#breadcrumb"
                }
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen pt-24 md:pt-32 pb-20 font-sans">
            <SEO
                title="FRP Cover Manufacturer & Supplier in Gujarat | FLORTEK INDUSTRIES PVT. LTD."
                description="FLORTEK INDUSTRIES PVT. LTD. is the leading manufacturer and supplier of premium composite FRP covers in Gujarat. Located in Rajkot with direct supply to Ahmedabad, Surat, and Vadodara."
                keywords="FRP Cover Manufacturer Gujarat, FRP Cover Supplier Gujarat, FRP Cover Company Gujarat, Rajkot manhole cover factory, composite covers Ahmedabad, GIFT city drainage"
                schema={pageSchema}
                canonicalUrl="https://www.flortekfrpcover.com/frp-cover-manufacturer-gujarat"
            />

            {/* Breadcrumb Navigation */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
                <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#333333]/70">
                    <Link to="/" className="hover:text-black flex items-center gap-1 transition-colors">
                        <Home size={12} /> Home
                    </Link>
                    <span>/</span>
                    <span className="text-black">FRP Cover Manufacturer Gujarat</span>
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
                        Regional Engineering Leader
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-black mb-6 uppercase tracking-tighter leading-tight">
                        FRP Cover Manufacturer in Gujarat
                    </h1>
                    <p className="text-lg md:text-xl text-[#333333] max-w-4xl leading-relaxed">
                        FLORTEK INDUSTRIES PVT. LTD. is Gujarat's premier engineering firm and **FRP Cover Company Gujarat**. Based in the industrial hub of Rajkot, we supply certified, heavy-duty composite manhole covers and drain gratings to infrastructure, industrial estates, and municipal corporations statewide.
                    </p>
                </motion.div>
            </div>

            {/* Main Content Grid */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Text Body */}
                <div className="lg:col-span-8 text-[#333333] text-sm md:text-base leading-relaxed space-y-8">
                    
                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
                            Gujarat Manufacturing Facility (Rajkot)
                        </h2>
                        <p>
                            Our state-of-the-art compression molding factory in Veraval Shapar, Rajkot, is outfitted with automated hydraulic pressing stations and high-temperature curing ovens. By utilizing continuous-strand fiberglass matrix systems bound with custom polymer resins, we produce covers that possess high deflection limits and dynamic shock absorption. Rajkot’s robust industrial ecosystem provides us with direct access to high-grade polymers, pigment coloring agents, and skilled engineering talent, allowing us to maintain a highly optimized cost structure.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
                            Industries Served in Gujarat
                        </h2>
                        <p>
                            Gujarat's rapid industrial expansion creates highly demanding operating conditions for drainage covers. We provide specialized product formulations for various industrial clusters:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 font-medium">
                            <li><strong>Dahej & Ankleshwar Chemical Clusters:</strong> Acid and chemical-resistant FRP covers that do not corrode when exposed to industrial effluents, salt-water spray, or chemical cleaning washdowns.</li>
                            <li><strong>GIFT City & Gandhinagar Infrastructure:</strong> Custom recessed paving-stone covers and high-volume utility duct gratings matching modern architectural aesthetics.</li>
                            <li><strong>Municipal Smart Cities:</strong> Certified D400 and C250 manhole covers supplied to Municipal Corporations in Ahmedabad, Surat, Rajkot, Vadodara, Jamnagar, and Bhavnagar.</li>
                            <li><strong>Residential Projects:</strong> Lightweight A15 and B125 covers designed for private real-estate layouts, parking structures, and walking paths.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
                            Comprehensive Gujarat & Regional Delivery Network
                        </h2>
                        <p>
                            With Rajkot being centrally connected via major state and national highways, we assure same-day or next-day shipping schedules to any location in Gujarat. Our logistics cell coordinates with regional dispatchers to ensure small and bulk orders are loaded securely on pallets and transported cost-effectively. Key cities supplied include:
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-bold text-black uppercase tracking-wider text-center">
                            <div className="bg-[#F5F5F5] p-3 rounded-lg border border-[#D9D9D9]/40">Ahmedabad</div>
                            <div className="bg-[#F5F5F5] p-3 rounded-lg border border-[#D9D9D9]/40">Surat & Vapi</div>
                            <div className="bg-[#F5F5F5] p-3 rounded-lg border border-[#D9D9D9]/40">Vadodara & Bharuch</div>
                            <div className="bg-[#F5F5F5] p-3 rounded-lg border border-[#D9D9D9]/40">GIFT City / Gandhinagar</div>
                        </div>
                    </section>

                    <section className="space-y-4 pt-4 border-t border-[#D9D9D9]/50">
                        <h3 className="text-xl font-bold text-black uppercase tracking-tight">Why Choose Flortek?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { icon: Shield, title: "Zero Theft Value", desc: "100% composite polymer build offers no metal recycling scrap value, stopping theft." },
                                { icon: Settings, title: "Weatherproof UV Grade", desc: "Infused with UV-stabilizer chemicals to survive extreme Gujarat summer heat." },
                                { icon: Truck, title: "Immediate Loading", desc: "We maintain large warehouses in Rajkot with standard sizes ready for quick pickup." },
                                { icon: Award, title: "ISO & EN 124 compliance", desc: "Certified factory testing reports provided with every commercial order." }
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
                    <SEOInquiryForm subject="FRP Cover Manufacturer Gujarat" />

                    {/* Related Pages Links */}
                    <div className="border border-[#D9D9D9] rounded-3xl p-6 bg-[#F5F5F5]/30">
                        <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-4">Explore More Guides</h3>
                        <ul className="space-y-3 text-xs font-bold uppercase tracking-wide">
                            <li>
                                <Link to="/frp-cover-manufacturer-india" className="text-[#333333] hover:text-black flex items-center gap-2 transition-colors">
                                    <ArrowRight size={12} /> Manufacturer in India
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

export default FRPCoverManufacturerGujarat;
