import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import { useModal } from '../../context/ModalContext';
import { Shield, Settings, Truck, Award, ArrowRight, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOInquiryForm from '../../components/common/SEOInquiryForm';

const FRPCableTrenchCovers = () => {
    const { openModal } = useModal();

    const pageSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "name": "Non-Conductive FRP Cable Trench Covers | Flortek",
                "description": "Engineered FRP cable trench covers and utility duct lids. Perfect electrical insulation, high load-bearing capacity, and corrosion-free performance.",
                "url": "https://www.flortekfrpcover.com/frp-cable-trench-covers",
                "breadcrumb": {
                    "@id": "https://www.flortekfrpcover.com/frp-cable-trench-covers#breadcrumb"
                }
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen pt-24 md:pt-32 pb-20 font-sans">
            <SEO
                title="Non-Conductive FRP Cable Trench Covers | FLORTEK INDUSTRIES PVT. LTD."
                description="Engineered FRP cable trench covers and utility duct lids. Perfect electrical insulation, high load-bearing capacity, and corrosion-free performance."
                keywords="FRP Cable Trench Covers, Substation Trench Covers, Electrical Trench Covers, Composite Duct Lids, Non Conductive Covers India"
                schema={pageSchema}
                canonicalUrl="https://www.flortekfrpcover.com/frp-cable-trench-covers"
            />

            {/* Breadcrumb Navigation (UI) */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
                <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#333333]/70">
                    <Link to="/" className="hover:text-black flex items-center gap-1 transition-colors">
                        <Home size={12} /> Home
                    </Link>
                    <span>/</span>
                    <span className="text-black">FRP Cable Trench Covers</span>
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
                        FRP Cable Trench Covers
                    </h1>
                    <p className="text-lg md:text-xl text-[#333333] max-w-4xl leading-relaxed">
                        FLORTEK INDUSTRIES PVT. LTD. manufactures premium, non-conductive, high-strength FRP cable trench covers and utility duct lids. Built specifically to protect electrical wiring networks and heavy power cabling runs in high-voltage environments.
                    </p>
                </motion.div>
            </div>

            {/* Main Content Area (SEO Copywriting) */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Text Body */}
                <div className="lg:col-span-8 blog-article-body space-y-12">
                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
                            Critical Electrical Insulation & Safety
                        </h2>
                        <p>
                            In high-voltage electrical installations, substations, and manufacturing processing units, structural materials must maintain the highest standards of safety. Traditional steel or cast-iron trench covers are electrical conductors, creating high shock hazards in case of short circuits. Concrete trench covers, though non-conductive, absorb moisture over time, are extremely heavy, and fracture easily during cable maintenance access.
                        </p>
                        <p>
                            Our **FRP (Fiber Reinforced Plastic) cable trench covers** solve these safety and utility concerns. FRP is inherently non-conductive, providing outstanding dielectric strength and electrical insulation. Furthermore, they are lightweight, making it incredibly easy for technical teams to remove them, check cables, and slide them back into place safely.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
                            Engineered for Substation & Industrial Environments
                        </h2>
                        <p>
                            Flortek cable trench covers are specifically engineered to survive in harsh operating environments:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Electrical Substations:</strong> Certified non-conductive insulation protects maintenance personnel against step and touch potential voltages.</li>
                            <li><strong>Industrial Power Corridors:</strong> Highly resistant to chemical degradation, preventing structure failure in chemical factories or petrochemical processing plants.</li>
                            <li><strong>Utility Cable Ducts:</strong> Excellent thermal insulation that shields sensitive telecom or optical fiber networks from direct solar heat.</li>
                            <li><strong>Water Drainage Integration:</strong> Built with high seal tolerances to prevent external rainwater ingress from flooding electrical routing shafts.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
                            Key Specifications & Performance Ratings
                        </h2>
                        <p>
                            Our composite utility covers are manufactured using advanced molding compounds to ensure perfect durability.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                            <div className="p-5 border border-[#D9D9D9] rounded-2xl bg-[#F5F5F5]/30">
                                <h3 className="font-bold text-black text-base mb-2 flex items-center gap-2">
                                    <Shield size={18} /> Electrical Insulation
                                </h3>
                                <p className="text-xs text-[#333333]/90">
                                    Dielectric non-conductive material configuration ensures zero hazard of shock or static transmission.
                                </p>
                            </div>
                            <div className="p-5 border border-[#D9D9D9] rounded-2xl bg-[#F5F5F5]/30">
                                <h3 className="font-bold text-black text-base mb-2 flex items-center gap-2">
                                    <Settings size={18} /> Thermal Resistance
                                </h3>
                                <p className="text-xs text-[#333333]/90">
                                    Excellent thermal performance protects cables from extreme weather variations and external heat sources.
                                </p>
                            </div>
                            <div className="p-5 border border-[#D9D9D9] rounded-2xl bg-[#F5F5F5]/30">
                                <h3 className="font-bold text-black text-base mb-2 flex items-center gap-2">
                                    <Truck size={18} /> Light Handling
                                </h3>
                                <p className="text-xs text-[#333333]/90">
                                    Allows technical teams to open covers easily for routine inspection checks without requiring special lifting machinery.
                                </p>
                            </div>
                            <div className="p-5 border border-[#D9D9D9] rounded-2xl bg-[#F5F5F5]/30">
                                <h3 className="font-bold text-black text-base mb-2 flex items-center gap-2">
                                    <Award size={18} /> Flame Retardant
                                </h3>
                                <p className="text-xs text-[#333333]/90">
                                    Engineered with flame retardant resin options to limit damage and smoke transmission during cable fires.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4 pt-4">
                        <p>
                            Manufactured in Rajkot, Gujarat, we supply certified substation covers across electrical boards and power grids throughout India.
                        </p>
                        <div className="p-6 border border-black rounded-3xl bg-[#F5F5F5]/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div>
                                <h4 className="font-bold text-black text-base mb-1">Looking for standard sizes?</h4>
                                <p className="text-xs text-[#333333]/80">Check out our standard width chart for utility covers.</p>
                            </div>
                            <Link to="/sizes" className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#333333] transition-colors">
                                View Sizes <ArrowRight size={14} />
                            </Link>
                        </div>
                    </section>
                </div>

                {/* Sidebar Widget */}
                <div className="lg:col-span-4 space-y-8">
                    {/* Reusable B2B Inquiry form */}
                    <SEOInquiryForm subject="FRP Cable Trench Covers" />

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
                                <Link to="/heavy-duty-frp-covers" className="text-[#333333] hover:text-black flex items-center gap-2 transition-colors">
                                    <ArrowRight size={12} /> Heavy Duty FRP Covers
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

export default FRPCableTrenchCovers;
