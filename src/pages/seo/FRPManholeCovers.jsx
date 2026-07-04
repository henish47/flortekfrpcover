import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import { useModal } from '../../context/ModalContext';
import { Shield, Settings, Truck, Award, ArrowRight, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOInquiryForm from '../../components/common/SEOInquiryForm';

const FRPManholeCovers = () => {
    const { openModal } = useModal();

    const pageSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.flortekfrpcover.com/frp-manhole-covers#breadcrumb",
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
                        "name": "FRP Manhole Covers",
                        "item": "https://www.flortekfrpcover.com/frp-manhole-covers"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.flortekfrpcover.com/frp-manhole-covers#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What are the standard sizes for FRP manhole covers?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Standard sizes range from 300x300mm to 1000x1000mm in square/rectangular shapes, and 450mm to 900mm diameter in circular shapes. Custom sizes can also be manufactured."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are Flortek FRP manhole covers certified?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, our covers conform to international BS EN 124 testing standards and Indian IS 1726 specifications for load capacity and permanent set."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen pt-24 md:pt-32 pb-20 font-sans">
            <SEO
                title="Premium FRP Manhole Covers Manufacturer in Rajkot, India"
                description="Looking for heavy-duty FRP manhole covers? Flortek is a leading manufacturer in Rajkot, Gujarat, providing corrosion-free, high-load composite covers."
                keywords="FRP Manhole Covers, Composite Manhole Covers, Circular FRP Covers, Square FRP Covers, Manhole Cover Manufacturer Rajkot, EN 124 Certified Covers India"
                schema={pageSchema}
                canonicalUrl="https://www.flortekfrpcover.com/frp-manhole-covers"
            />

            {/* Breadcrumb Navigation (UI) */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
                <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#333333]/70">
                    <Link to="/" className="hover:text-black flex items-center gap-1 transition-colors">
                        <Home size={12} /> Home
                    </Link>
                    <span>/</span>
                    <span className="text-black">FRP Manhole Covers</span>
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
                        FRP Manhole Covers
                    </h1>
                    <p className="text-lg md:text-xl text-[#333333] max-w-4xl leading-relaxed">
                        Flortek Industries Private Limited is India's leading engineering firm manufacturing high-strength, zero-theft, and long-lasting Fiber Reinforced Plastic (FRP) manhole covers. Designed for municipal roads, private townships, and high-impact industrial chambers.
                    </p>
                </motion.div>
            </div>

            {/* Main Content Area (SEO Copywriting) */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Text Body */}
                <div className="lg:col-span-8 text-[#333333] text-sm md:text-base leading-relaxed space-y-8">
                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
                            Why Choose Composite FRP Manhole Covers?
                        </h2>
                        <p>
                            Historically, cast iron and concrete covers have been the default choice for municipal sewage systems and road chambers. However, they present significant drawbacks: cast iron is highly susceptible to theft due to its scrap value, and concrete covers are brittle, heavy, and prone to cracking under repetitive traffic loads.
                        </p>
                        <p>
                            Our **FRP (Fiber Reinforced Plastic)** manhole covers offer the ultimate structural replacement. Made from glass fibers bonded with thermosetting resins, they possess an outstanding strength-to-weight ratio. They are lightweight (about 1/3rd of the weight of cast iron), making installation and maintenance checks safe and efficient for municipal workers.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
                            Conforming to Global Quality Standards
                        </h2>
                        <p>
                            At our state-of-the-art manufacturing facility in Shapar, Rajkot, we ensure all FRP covers conform strictly to **BS EN 124** and **IS 1726** testing protocols. Each cover undergoes rigorous load-testing checks to verify its classification:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>A15 Class (1.5 Tonnes):</strong> Perfect for pedestrian zones, residential pathways, cycle tracks, and home gardens.</li>
                            <li><strong>B125 Class (12.5 Tonnes):</strong> Suitable for residential driveways, private parking lots, and shopping complexes.</li>
                            <li><strong>C250 Class (25 Tonnes):</strong> Engineered for service stations, commercial yards, and slow-moving industrial areas.</li>
                            <li><strong>D400 Class (40 Tonnes):</strong> Designed for heavy vehicular traffic, highways, and public carriage ways.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
                            Key Benefits of Flortek FRP Covers
                        </h2>
                        <p>
                            Our composite covers are manufactured using top-tier raw materials to ensure they survive the most hostile environments.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                            <div className="p-5 border border-[#D9D9D9] rounded-2xl bg-[#F5F5F5]/30">
                                <h3 className="font-bold text-black text-base mb-2 flex items-center gap-2">
                                    <Shield size={18} /> Zero Scrap Value
                                </h3>
                                <p className="text-xs text-[#333333]/90">
                                    Because they are made of composite polymer materials, they cannot be recycled for metal scrap, completely eliminating theft.
                                </p>
                            </div>
                            <div className="p-5 border border-[#D9D9D9] rounded-2xl bg-[#F5F5F5]/30">
                                <h3 className="font-bold text-black text-base mb-2 flex items-center gap-2">
                                    <Settings size={18} /> Corrosion Free
                                </h3>
                                <p className="text-xs text-[#333333]/90">
                                    100% immune to sewer gases, hydrogen sulfide, saltwater, acidic soil, and chemical runoff.
                                </p>
                            </div>
                            <div className="p-5 border border-[#D9D9D9] rounded-2xl bg-[#F5F5F5]/30">
                                <h3 className="font-bold text-black text-base mb-2 flex items-center gap-2">
                                    <Truck size={18} /> High Load Resilience
                                </h3>
                                <p className="text-xs text-[#333333]/90">
                                    Tested for permanent deformation to ensure structural integrity under heavy wheel impacts.
                                </p>
                            </div>
                            <div className="p-5 border border-[#D9D9D9] rounded-2xl bg-[#F5F5F5]/30">
                                <h3 className="font-bold text-black text-base mb-2 flex items-center gap-2">
                                    <Award size={18} /> Slip Resistance
                                </h3>
                                <p className="text-xs text-[#333333]/90">
                                    Designed with specialized surface pattern textures that guarantee safe anti-skid traction for vehicles and pedestrians.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4 pt-4">
                        <p>
                            We offer direct shipping from our Rajkot plant to all major hubs in India, including Mumbai, Pune, Delhi, Bangalore, Chennai, and Kolkata.
                        </p>
                        <div className="p-6 border border-black rounded-3xl bg-[#F5F5F5]/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div>
                                <h4 className="font-bold text-black text-base mb-1">Need specific size guidelines?</h4>
                                <p className="text-xs text-[#333333]/80">Explore our detailed dimensional list and load ratings.</p>
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
                    <SEOInquiryForm subject="FRP Manhole Covers" />

                    {/* Internal Links Widget */}
                    <div className="border border-[#D9D9D9] rounded-3xl p-6 bg-[#F5F5F5]/30">
                        <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-4">Related Categories</h3>
                        <ul className="space-y-3 text-xs font-bold uppercase tracking-wide">
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

export default FRPManholeCovers;
