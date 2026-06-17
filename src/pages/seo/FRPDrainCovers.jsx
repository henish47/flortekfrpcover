import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import { useModal } from '../../context/ModalContext';
import { Shield, Settings, Truck, Award, ArrowRight, Home } from 'lucide-react';
import { motion } from 'framer-motion';

const FRPDrainCovers = () => {
    const { openModal } = useModal();

    const pageSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://flortekfrpcover.vercel.app/frp-drain-covers#breadcrumb",
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
                        "name": "FRP Drain Covers",
                        "item": "https://flortekfrpcover.vercel.app/frp-drain-covers"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://flortekfrpcover.vercel.app/frp-drain-covers#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Can FRP drain covers withstand chemicals?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. FRP drain covers are engineered using premium chemical-resistant resins that resist harsh industrial chemicals, acids, sewage runoff, and rust."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are slotted or grating patterns available for drain covers?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, we offer both solid-top and slotted grating designs to allow quick rainwater drainage while stopping large debris from entering sewer lines."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen pt-24 md:pt-32 pb-20 font-sans">
            <SEO
                title="FRP Drain Covers & Stormwater Channel Gratings | Flortek"
                description="High-strength FRP drain covers and composite stormwater gratings for residential driveways, commercial paths, and industrial processing units."
                keywords="FRP Drain Covers, Composite Drain Covers, Drainage Gratings, Storm Water Channel Covers, Gutter Cover Manufacturer India"
                schema={pageSchema}
                canonicalUrl="https://flortekfrpcover.vercel.app/frp-drain-covers"
            />

            {/* Breadcrumb Navigation (UI) */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
                <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#333333]/70">
                    <Link to="/" className="hover:text-black flex items-center gap-1 transition-colors">
                        <Home size={12} /> Home
                    </Link>
                    <span>/</span>
                    <span className="text-black">FRP Drain Covers</span>
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
                        FRP Drain Covers & Gratings
                    </h1>
                    <p className="text-lg md:text-xl text-[#333333] max-w-4xl leading-relaxed">
                        Flortek Industries Private Limited manufactures premium FRP drain covers and stormwater channel gratings. Engineered to manage municipal runoff and industrial chemical effluents with zero corrosion and long-term durability.
                    </p>
                </motion.div>
            </div>

            {/* Main Content Area (SEO Copywriting) */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Text Body */}
                <div className="lg:col-span-8 text-[#333333] text-sm md:text-base leading-relaxed space-y-8">
                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
                            Advanced Stormwater & Gutter Drainage Solutions
                        </h2>
                        <p>
                            Traditional concrete or cast-iron drain covers degrade quickly when exposed to continuous moisture, acids, and atmospheric changes. Concrete gratings fracture easily under heavy vehicular loads, whereas iron covers rust and require regular replacements. 
                        </p>
                        <p>
                            Our **FRP (Fiber Reinforced Plastic) drain covers** provide the perfect modern replacement. Formulated from premium thermosetting polymer composites, they resist weathering, chemical attack, and heavy impact traffic. Whether you require solid-top channel lids or slotted stormwater gratings, Flortek solutions are designed for seamless flow and load stability.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
                            Custom Designs for Varied Applications
                        </h2>
                        <p>
                            Our composite drain covers are extensively deployed across diverse commercial and infrastructure projects in India.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Residential Townships:</strong> Designed to blend with modern paving stones and block driveways, providing smooth anti-slip pathways for residents and light cars.</li>
                            <li><strong>Chemical & Processing Plants:</strong> Made with special chemical-grade resins that do not corrode when exposed to harsh chemicals, industrial solvents, or heavy machinery washdowns.</li>
                            <li><strong>Commercial Hubs:</strong> Standardized configurations for shopping mall pathways, business parks, and light vehicular loading zones.</li>
                            <li><strong>Smart City Infrastructure:</strong> Slotted channel gratings engineered to optimize rainfall flow, preventing road waterlogging and managing municipal drainage networks.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
                            Key Specifications & Performance Ratings
                        </h2>
                        <p>
                            Each Flortek FRP drain grating is tested in our Rajkot laboratory to comply with the BS EN 124 standard.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                            <div className="p-5 border border-[#D9D9D9] rounded-2xl bg-[#F5F5F5]/30">
                                <h3 className="font-bold text-black text-base mb-2 flex items-center gap-2">
                                    <Shield size={18} /> High Flow-Rate Design
                                </h3>
                                <p className="text-xs text-[#333333]/90">
                                    Our slotted gratings optimize drainage intake, maximizing water volume dispersal while filtering out leaves and debris.
                                </p>
                            </div>
                            <div className="p-5 border border-[#D9D9D9] rounded-2xl bg-[#F5F5F5]/30">
                                <h3 className="font-bold text-black text-base mb-2 flex items-center gap-2">
                                    <Settings size={18} /> Chemically Inert
                                </h3>
                                <p className="text-xs text-[#333333]/90">
                                    Perfect for chemical plants, water treatment units, and sewage systems. Resistant to acids, alkalis, and oil spills.
                                </p>
                            </div>
                            <div className="p-5 border border-[#D9D9D9] rounded-2xl bg-[#F5F5F5]/30">
                                <h3 className="font-bold text-black text-base mb-2 flex items-center gap-2">
                                    <Truck size={18} /> Impact Durability
                                </h3>
                                <p className="text-xs text-[#333333]/90">
                                    Built using a continuous glass strand matrix that absorbs dynamic shocks and vehicular vibration without fracturing.
                                </p>
                            </div>
                            <div className="p-5 border border-[#D9D9D9] rounded-2xl bg-[#F5F5F5]/30">
                                <h3 className="font-bold text-black text-base mb-2 flex items-center gap-2">
                                    <Award size={18} /> Lightweight Utility
                                </h3>
                                <p className="text-xs text-[#333333]/90">
                                    Offers substantial weight savings compared to heavy concrete slabs, enabling fast inspection access and lower transport costs.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4 pt-4">
                        <p>
                            We provide comprehensive delivery across India, serving Gujarat, Maharashtra, Karnataka, Delhi-NCR, Tamil Nadu, and Rajasthan from our facility in Veraval Shapar, Rajkot.
                        </p>
                        <div className="p-6 border border-black rounded-3xl bg-[#F5F5F5]/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div>
                                <h4 className="font-bold text-black text-base mb-1">Looking for standard sizes?</h4>
                                <p className="text-xs text-[#333333]/80">Check out our visual specifications list.</p>
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
                            Looking for custom sizes, slotted gratings, or pricing list? Request a custom quote today.
                        </p>
                        <button
                            onClick={openModal}
                            className="w-full py-4 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#333333] transition-all mb-4"
                        >
                            Get Custom Price
                        </button>
                        <a
                            href="https://wa.me/918000888620?text=Hello%20Flortek%2C%20I%20visited%20your%20website%20and%20am%20interested%20in%20your%20FRP%20Drain%20Covers.%20Please%20provide%20more%20details."
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
                                <Link to="/frp-cable-trench-covers" className="text-[#333333] hover:text-black flex items-center gap-2 transition-colors">
                                    <ArrowRight size={12} /> Cable Trench Covers
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

export default FRPDrainCovers;
