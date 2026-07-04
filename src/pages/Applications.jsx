import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Factory, Home as HomeIcon, Truck, Zap, ArrowRight, HardHat, CheckCircle } from 'lucide-react';
import SEO from '../components/common/SEO';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import { useModal } from '../context/ModalContext';

const loadClasses = [
    {
        id: "A15",
        load: "2.5 Tonne & 5 TONNE",
        title: "Pedestrian Areas",
        desc: "Ideal for footpaths, gardens, and residential courtyards with zero vehicular traffic."
    },
    {
        id: "B125",
        load: "12.5 TONNE",
        title: "Medium Duty Roads",
        desc: "Footways, car parks or parking decks with occasional vehicle access."
    },
    {
        id: "C250",
        load: "25 TONNE",
        title: "Heavy Traffic",
        desc: "Kerb side channels of roads, petrol pumps, and parking areas for heavy vehicles."
    },
    {
        id: "D400",
        load: "40 TONNE",
        title: "Industrial Grade",
        desc: "Main carriage ways, highways, and industrial estates with heavy moving loads."
    }
];

const Applications = () => {
    const { openModal } = useModal();
    return (
        <div className="bg-white overflow-hidden">
            <SEO
                title="FRP Manhole Cover Application Areas | Industrial & Municipal Drainage"
                description="Discover application areas for Flortek composite FRP covers. High-performance drainage solutions for highways (D400), petrol pumps (C250), car parks (B125), and pathways."
                keywords="industrial FRP covers, road manhole covers, sewage chamber covers, commercial drain gratings, petrol pump manhole covers, smart city drainage, EN 124 load classes"
                schema={{
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "WebPage",
                            "name": "FRP Manhole Cover Application Areas | Industrial & Municipal Drainage",
                            "description": "Discover application areas for Flortek composite FRP covers. High-performance drainage solutions for highways (D400), petrol pumps (C250), car parks (B125), and pathways.",
                            "url": "https://www.flortekfrpcover.com/applications",
                            "breadcrumb": {
                                "@id": "https://www.flortekfrpcover.com/applications#breadcrumb"
                            }
                        },
                        {
                            "@type": "BreadcrumbList",
                            "@id": "https://www.flortekfrpcover.com/applications#breadcrumb",
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
                                    "name": "Applications",
                                    "item": "https://www.flortekfrpcover.com/applications"
                                }
                            ]
                        },
                        {
                            "@type": "ItemList",
                            "name": "FRP Manhole Cover Load Class Applications",
                            "description": "Flortek composite cover installation zones grouped by standard load ratings as per BS EN 124 guidelines.",
                            "url": "https://www.flortekfrpcover.com/applications",
                            "numberOfItems": 4,
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Class A15 (2.5/5 Ton) - Pedestrian Zones",
                                    "description": "Used in residential pathways, garden lawns, cycle tracks, and walk spaces with zero vehicle movement."
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Class B125 (12.5 Ton) - Medium Duty Roads",
                                    "description": "Used in residential driveways, parking decks, commercial walk lanes, and light vehicle parking spots."
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "Class C250 (25 Ton) - Heavy Traffic Areas",
                                    "description": "Used in highway kerb channels, commercial loading bays, service stations, and petrol pumps."
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 4,
                                    "name": "Class D400 (40 Ton) - Industrial Grade Mains",
                                    "description": "Used in national carriage ways, highways, heavy cargo airports, and industrial manufacturing estates."
                                }
                            ]
                        }
                    ]
                }}
                canonicalUrl="https://www.flortekfrpcover.com/applications"
            />

            {/* Premium Hero Section - Monochrome Typography-focused */}
            <div className="relative min-h-[60vh] flex items-center justify-center py-24 px-4 overflow-hidden bg-white border-b border-[#D9D9D9]/50">
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-[#F5F5F5] border border-[#D9D9D9] text-black text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                            Engineering the Future
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black text-black mb-8 tracking-tighter leading-none">
                            Built For <br /><span className="text-[#333333] italic">Every Purpose.</span>
                        </h1>
                        <p className="text-[#333333] max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed mb-10">
                            From the chemical rigor of industrial plants to the aesthetic demands of luxury townships, Flortek solutions are engineered to outperform.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-6">
                            <Link to="/products">
                                <Button variant="primary" className="px-10 py-5 rounded-2xl">
                                    View Product Range
                                </Button>
                            </Link>
                            <Button onClick={openModal} variant="outline" className="px-10 py-5 rounded-2xl">
                                Contact Experts
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Load Classifications - Visual Comparison */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-20">
                        <h4 className="text-black font-black uppercase tracking-[0.4em] text-[10px] mb-6">Load Classifications</h4>
                        <h2 className="text-4xl md:text-5xl font-black text-black mb-6 tracking-tighter">Strength for Every Drive</h2>
                        <p className="text-[#333333] max-w-xl mx-auto font-medium text-lg">We strictly adhere to IS 1726 & BS EN 124 standards to ensure structural integrity across four primary load grades.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {loadClasses.map((item, id) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: id * 0.1 }}
                                key={id}
                                className="relative bg-[#F5F5F5] border border-[#D9D9D9]/50 rounded-[2.5rem] p-8 group hover:border-black hover:bg-white transition-all duration-300"
                            >
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-white border border-[#D9D9D9]/50 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-black font-black text-lg">{item.id}</span>
                                </div>
                                <h4 className="text-[#333333] font-black text-[10px] uppercase tracking-widest mb-3">{item.load}</h4>
                                <h3 className="text-xl font-black text-black mb-4 group-hover:text-[#333333] transition-colors">{item.title}</h3>
                                <p className="text-[#333333]/80 text-sm font-medium leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Installation - High Technical Experience */}
            <section className="py-40 bg-white border-t border-[#D9D9D9]/50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <span className="inline-flex items-center gap-3 bg-[#F5F5F5] text-black px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest mb-10 border border-[#D9D9D9]">
                                <HardHat size={14} className="text-black" /> Technical Guide
                            </span>
                            <h2 className="text-5xl md:text-6xl font-black text-black mb-10 tracking-tighter leading-none">Precision <br />Installation Matters</h2>
                            <p className="text-[#333333] text-lg font-medium mb-12 leading-relaxed">
                                Proper frame seating is critical for the long-term performance and safety of FRP manhole covers. Follow our engineered protocol for maximum durability.
                            </p>

                            <div className="space-y-10">
                                {[
                                    { id: "01", text: "Match the top frame level precisely with the final road or pavement level." },
                                    { id: "02", text: "Prepare a high-grade concrete bed (M-30 Grade) considering the frame height." },
                                    { id: "03", text: "Allow the frame to set undisturbed for at least 48 hours before opening to traffic." },
                                    { id: "04", text: "Ensure full radial support. The frame itself is not load-bearing without concrete backing." }
                                ].map((step, sIdx) => (
                                    <div key={sIdx} className="flex gap-8 group">
                                        <div className="w-12 h-12 rounded-2xl bg-[#F5F5F5] border border-[#D9D9D9]/50 text-black font-black flex items-center justify-center shrink-0 group-hover:bg-black group-hover:text-white transition-all duration-300">
                                            {step.id}
                                        </div>
                                        <p className="text-lg text-[#333333] font-bold leading-relaxed pt-2">
                                            {step.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                className="relative z-10 bg-[#F5F5F5] p-6 rounded-[4rem] border border-[#D9D9D9]/50 shadow-sm overflow-hidden"
                            >
                                <img
                                    src="/images/technical/installation.png"
                                    alt="Installation Diagram"
                                    className="w-full h-auto rounded-[3rem] shadow-sm mix-blend-multiply"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA Banner - Monochrome Premium Banner
            <section className="py-24 px-4 bg-white border-t border-[#D9D9D9]/50">
                <div className="max-w-7xl mx-auto">
                    <div className="relative bg-black rounded-[4rem] p-12 md:p-24 overflow-hidden shadow-xl">
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
                            <div className="max-w-2xl">
                                <h3 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">Ready to Implement Flortek Excellence?</h3>
                                <p className="text-[#D9D9D9] text-lg font-bold mb-0 opacity-80">Contact our technical department for custom application designs and loading grade consultations.</p>
                            </div>
                            <div className="flex gap-6 shrink-0">
                                <Button onClick={openModal} variant="secondary" className="px-12 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:scale-105 transition-transform text-black bg-white hover:bg-[#F5F5F5]">
                                    Get Technical Support
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    );
};

export default Applications;
