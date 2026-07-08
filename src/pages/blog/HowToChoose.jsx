import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import { Shield, Settings, Truck, Award, ArrowRight, Home, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOInquiryForm from '../../components/common/SEOInquiryForm';

const HowToChoose = () => {
    const pageSchema = {
        "@context": "https://schema.org",
        "@graph": [
            
            {
                "@type": "BlogPosting",
                "@id": "https://www.flortekfrpcover.com/blog/how-to-choose-right-frp-manhole-cover#article",
                "headline": "How to Choose the Right FRP Manhole Cover",
                "description": "An essential engineering checklist and guide to selecting the correct FRP/GRP manhole cover size, load class, frame configuration, and sealing.",
                "datePublished": "2026-06-12",
                "dateModified": "2026-06-12",
                "author": {
                    "@type": "Organization",
                    "name": "FLORTEK INDUSTRIES PVT. LTD."
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "FLORTEK INDUSTRIES PVT. LTD.",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://www.flortekfrpcover.com/logo.png"
                    }
                }
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen pt-24 md:pt-32 pb-20 font-sans text-black">
            <SEO
                title="How to Choose the Right FRP Manhole Cover | Flortek"
                description="Engineering selection handbook for choosing the correct FRP manhole cover. Find out about clear opening dimensions, BS EN 124 load classes, and locking seals."
                keywords="Choose FRP Manhole Cover, manhole cover size guide, FRP load classes EN 124, buy composite covers wholesale"
                schema={pageSchema}
                canonicalUrl="https://www.flortekfrpcover.com/blog/how-to-choose-right-frp-manhole-cover"
            />

            {/* Breadcrumb Navigation */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
                <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#333333]/70">
                    <Link to="/" className="hover:text-black flex items-center gap-1 transition-colors">
                        <Home size={12} /> Home
                    </Link>
                    <span>/</span>
                    <Link to="/blog" className="hover:text-black transition-colors">Blog</Link>
                    <span>/</span>
                    <span className="text-black">How to Choose</span>
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
                        Engineering Sizing Guide
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-black mb-6 uppercase tracking-tighter leading-tight">
                        How to Choose the Right FRP Manhole Cover
                    </h1>
                    <p className="text-lg md:text-xl text-[#333333] max-w-4xl leading-relaxed">
                        Selecting the correct Fiber Reinforced Polymer (FRP) manhole cover for your B2B project prevents structural failures and reduces replacement costs. This guide outlines the key engineering criteria—dimensions, load classes, framing, sealing, and configurations—required to make an informed choice.
                    </p>
                </motion.div>
            </div>

            {/* Main Content Grid */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Text Body */}
                <div className="lg:col-span-8 text-[#333333] text-sm md:text-base leading-relaxed space-y-8">
                    
                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
                            Step 1: Determine the Required Sizing (Clear Opening vs Frame Size)
                        </h2>
                        <p>
                            A common engineering mistake is ordering a cover based on the outer frame dimensions. If the clear opening is too small, personnel or maintenance equipment cannot access the chamber safely. 
                        </p>
                        <p>
                            **Key Rule**: Always specify your cover by the **Clear Opening (internal dimensions)**. For instance, if you have a square brick manhole chamber with an opening of 600mm x 600mm, you require a cover with a 600mm x 600mm clear opening. The outer frame size will automatically be larger (e.g., 700mm x 700mm) to allow secure seating on the concrete foundation.
                        </p>
                        <p>
                            Check our complete dimensional matrix on the <Link to="/sizes" className="text-black font-bold underline hover:text-[#333333]">Sizing Chart page</Link> to cross-reference dimensions with load capacities.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
                            Step 2: Assess the Traffic Load Class (BS EN 124 Standard)
                        </h2>
                        <p>
                            Access covers are categorized by their load-bearing capacity according to the BS EN 124 standard. Installing a cover with an insufficient load rating leads to deformation, cracks, and structural failure.
                        </p>
                        <ul className="list-disc pl-6 space-y-3 font-medium">
                            <li><strong>Class A15 (15 kN / 1.5 Tons):</strong> Designed for pedestrian areas, gardens, walkover paths, and zones inaccessible to motor vehicles.</li>
                            <li><strong>Class B125 (125 kN / 12.5 Tons):</strong> Suitable for residential driveways, car parking spaces, and shopping plazas where only passenger vehicles pass.</li>
                            <li><strong>Class C250 (250 kN / 25 Tons):</strong> Recommended for highway road shoulders, petrol pump yards, and areas with slow-moving commercial traffic.</li>
                            <li><strong>Class D400 (400 kN / 40 Tons):</strong> Engineered for main traffic carriageways, industrial loading bays, ports, and freight terminals carrying heavy wheel loads.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
                            Step 3: Select the Appropriate Top Configuration & Sealing
                        </h2>
                        <p>
                            FRP covers are available in various configurations to meet project requirements:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 font-medium">
                            <li><strong>Solid Top Covers:</strong> Standard flat covers molded with anti-skid checkered patterns. These are used for sewerage, water, and electrical chambers.</li>
                            <li><strong>Drainage Gratings (Gully Gratings):</strong> Slotted top designs optimized for storm water intake. These are installed in road shoulders and parking structures.</li>
                            <li><strong>Recessed Tile/Paving Covers:</strong> Tray-style covers that can be filled with stone or concrete pavers to blend with surrounding pavement aesthetics.</li>
                            <li><strong>Gas-Tight & Airtight Seals:</strong> Equipped with neoprene gaskets and security locks to prevent sewer odors or toxic gases from escaping in commercial zones.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
                            Step 4: Review Color-Coding & Branding
                        </h2>
                        <p>
                            Unlike traditional metal covers, composite materials can be colored during the molding process by adding pigment to the resin matrix. Common colors include Granite Grey, Coal Black, Grass Green (for parks), and Sand Yellow. Colors can also designate underground utilities: for example, using blue covers for potable water systems, orange for electrical ducts, and yellow for gas pipelines.
                        </p>
                    </section>

                    <section className="space-y-4 pt-4 border-t border-[#D9D9D9]/50">
                        <h3 className="text-xl font-bold text-black uppercase tracking-tight">Flortek Selection Checklist</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { icon: Shield, title: "Size Matching", desc: "Confirm the clear opening matches your structural chamber." },
                                { icon: Settings, title: "Load Compliance", desc: "Verify the EN 124 load rating matches the traffic profile." },
                                { icon: Truck, title: "Aesthetic Choice", desc: "Select solid top, recessed, or gully grating designs." },
                                { icon: Award, title: "Color/Utility Code", desc: "Choose appropriate color systems or custom logo embossings." }
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

                    <section className="space-y-4 border-t border-[#D9D9D9]/50 pt-8">
                        <h3 className="text-2xl font-black text-black uppercase tracking-tight">Frequently Asked Questions</h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-bold text-black text-sm uppercase">Are square or circular manhole covers better?</h4>
                                <p className="text-xs text-[#333333] mt-1">
                                    Circular covers are preferred for deep sewer shafts because they cannot fall through the opening and are easier to roll. Square or rectangular covers are typically chosen for shallow utility junction boxes, telecom chambers, and paving patterns.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-black text-sm uppercase">Do composite covers require special installation frames?</h4>
                                <p className="text-xs text-[#333333] mt-1">
                                    Yes, FRP covers should always be installed with their matching composite frames. This ensures a precise fit, reduces rattle, and distributes loading forces evenly onto the concrete foundation.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Sidebar Column */}
                <div className="lg:col-span-4 space-y-8">
                    {/* B2B Inquiry Form */}
                    <SEOInquiryForm subject="How to Choose Article" />

                    {/* Related Articles Widget */}
                    <div className="border border-[#D9D9D9] rounded-3xl p-6 bg-[#F5F5F5]/30">
                        <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-4">Read Next</h3>
                        <ul className="space-y-3 text-xs font-bold uppercase tracking-wide">
                            <li>
                                <Link to="/blog/top-10-frp-manhole-cover-manufacturers-india" className="text-[#333333] hover:text-black flex items-center gap-2 transition-colors">
                                    <ArrowRight size={12} /> Top Manufacturers India
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog/frp-cover-price-guide-india" className="text-[#333333] hover:text-black flex items-center gap-2 transition-colors">
                                    <ArrowRight size={12} /> Price Guide in India
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog/heavy-duty-frp-covers-features-applications" className="text-[#333333] hover:text-black flex items-center gap-2 transition-colors">
                                    <ArrowRight size={12} /> Heavy Duty Features
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToChoose;
