import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import { Shield, Settings, Truck, Award, ArrowRight, Home, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOInquiryForm from '../../components/common/SEOInquiryForm';

const PriceGuide = () => {
    const pageSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.flortekfrpcover.com/blog/frp-cover-price-guide-india#breadcrumb",
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
                        "name": "Blog",
                        "item": "https://www.flortekfrpcover.com/blog"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "FRP Cover Price Guide in India",
                        "item": "https://www.flortekfrpcover.com/blog/frp-cover-price-guide-india"
                    }
                ]
            },
            {
                "@type": "BlogPosting",
                "@id": "https://www.flortekfrpcover.com/blog/frp-cover-price-guide-india#article",
                "headline": "FRP Cover Price Guide in India",
                "description": "Understand FRP cover pricing in India. Examine cost factors such as dimensions, BS EN 124 load classes, raw material polymer grades, and B2B volume pricing.",
                "datePublished": "2026-06-08",
                "dateModified": "2026-06-08",
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
                title="FRP Cover Price Guide in India | Flortek"
                description="Comprehensive wholesale price guide for FRP/GRP manhole covers in India. Learn about cost factors, size-based pricing, and bulk commercial rates."
                keywords="FRP Cover Price India, GRP Manhole Cover Cost, wholesale composite cover rates, buy bulk manhole covers"
                schema={pageSchema}
                canonicalUrl="https://www.flortekfrpcover.com/blog/frp-cover-price-guide-india"
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
                    <span className="text-black">Price Guide India</span>
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
                        Wholesale Purchasing Guide
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-black mb-6 uppercase tracking-tighter leading-tight">
                        FRP Cover Price Guide in India
                    </h1>
                    <p className="text-lg md:text-xl text-[#333333] max-w-4xl leading-relaxed">
                        Budgeting for large-scale municipal, industrial, or residential projects requires an understanding of utility cover costs. This guide details the pricing dynamics of Fiber Reinforced Polymer (FRP) manhole covers in India, outlining size classifications, load rating impacts, and wholesale volume benefits.
                    </p>
                </motion.div>
            </div>

            {/* Main Content Grid */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Text Body */}
                <div className="lg:col-span-8 text-[#333333] text-sm md:text-base leading-relaxed space-y-8">
                    
                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
                            Key Factors Influencing FRP Cover Pricing
                        </h2>
                        <p>
                            FRP manhole covers are engineered composite products, meaning they are not priced simply by raw weight like cast-iron or steel scrap. Instead, composite pricing reflects raw materials, resin grades, production methods, and load testing processes.
                        </p>
                        <p>
                            The primary factors that determine wholesale pricing include:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 font-medium">
                            <li><strong>Clear Opening Dimensions:</strong> Larger openings require more raw materials (fiberglass and resin), which increases overall cost.</li>
                            <li><strong>BS EN 124 Load Rating Class:</strong> Heavy-traffic D400 covers require thicker profiles and higher fiberglass density than light-duty A15 walkover lids, raising production costs.</li>
                            <li><strong>Resin Specifications:</strong> Standard polyester resins are cost-effective, while vinyl ester resins used for acid resistance in chemical units add a premium to the price.</li>
                            <li><strong>Custom Markings:</strong> Custom logo molds or corporate branding require a one-time tooling charge, which can be amortized across larger orders.</li>
                        </ul>
                        <p>
                            Detailed dimensional profiles can be reviewed on our <Link to="/products" className="text-black font-bold underline hover:text-[#333333]">Products page</Link> to match load classes to project parameters.
                        </p>
                    </section>

                    {/* Cost Estimation Matrix */}
                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
                            Wholesale Cost Estimation Matrix (Standard Profiles)
                        </h2>
                        <p>
                            To assist B2B procurement managers and municipal planners, the table below outlines estimated pricing segments for standard sizes and load classes in the Indian market.
                        </p>
                        <div className="overflow-x-auto border border-[#D9D9D9] rounded-3xl bg-[#F5F5F5]/20 p-4">
                            <table className="w-full text-left text-xs md:text-sm border-collapse">
                                <thead>
                                    <tr className="border-b border-[#D9D9D9] text-[#333333]/70 font-bold uppercase tracking-wider">
                                        <th className="py-3 px-2">Clear Opening (Size)</th>
                                        <th className="py-3 px-2 text-black font-black">Load Rating Class</th>
                                        <th className="py-3 px-2">Estimated Market Range</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#D9D9D9]/50 font-medium text-[#333333]">
                                    <tr>
                                        <td className="py-4 px-2 font-bold text-black">Square 300x300mm</td>
                                        <td className="py-4 px-2">Class A15 (1.5-Ton Walkover)</td>
                                        <td className="py-4 px-2 text-emerald-700 font-bold">₹400 - ₹800 / Set</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-2 font-bold text-black">Square 450x450mm</td>
                                        <td className="py-4 px-2">Class B125 (12.5-Ton Car Parking)</td>
                                        <td className="py-4 px-2 text-emerald-700 font-bold">₹1,100 - ₹1,800 / Set</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-2 font-bold text-black">Circular 600mm (Dia)</td>
                                        <td className="py-4 px-2">Class C250 (25-Ton Road Shoulder)</td>
                                        <td className="py-4 px-2 text-emerald-700 font-bold">₹3,000 - ₹4,800 / Set</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-2 font-bold text-black">Circular 600mm (Dia)</td>
                                        <td className="py-4 px-2">Class D400 (40-Ton Heavy Highway)</td>
                                        <td className="py-4 px-2 text-emerald-700 font-bold">₹4,500 - ₹7,000 / Set</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-2 font-bold text-black">Square 900x900mm</td>
                                        <td className="py-4 px-2">Class D400 (40-Ton Heavy Highway)</td>
                                        <td className="py-4 px-2 text-emerald-700 font-bold">₹12,000 - ₹18,000 / Set</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-[#333333]/80 italic">
                            *Note: Estimated prices are indicative wholesale factory ranges and exclude local taxes, custom embossing setup, and freight charges. For exact quotes, submit your requirements via the B2B form.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
                            Total Cost of Ownership (TCO) vs Cast Iron
                        </h2>
                        <p>
                            While raw ductile iron or cast iron may sometimes have similar initial costs, cast iron is prone to recurring costs:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 font-medium">
                            <li><strong>Theft Replacement:</strong> Metal covers are frequently stolen for their scrap value. Replacing them adds ongoing material and liability costs.</li>
                            <li><strong>Rust Maintenance:</strong> Metal requires regular painting and sandblasting to prevent structural decay. FRP covers have colors integrated into the material, requiring no maintenance painting.</li>
                            <li><strong>Handling and Freight:</strong> Heavy iron covers require extra equipment to move and install. Lightweight FRP covers reduce shipping and handling costs.</li>
                        </ul>
                    </section>

                    <section className="space-y-4 pt-4 border-t border-[#D9D9D9]/50">
                        <h3 className="text-xl font-bold text-black uppercase tracking-tight">Price Guidelines</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { icon: Shield, title: "Stable Pricing", desc: "Composite materials are less vulnerable to scrap metal price fluctuations." },
                                { icon: Settings, title: "Low Maintenance Cost", desc: "No painting, coating, or rust treatments needed over the service life." },
                                { icon: Truck, title: "Reduced Freight Rates", desc: "Lower density allows more units per container, decreasing transit costs." },
                                { icon: Award, title: "Zero Theft Cost", desc: "No scrap value means covers remain in place, avoiding replacement expenses." }
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
                                <h4 className="font-bold text-black text-sm uppercase">Is there a minimum order quantity (MOQ) for factory-direct prices?</h4>
                                <p className="text-xs text-[#333333] mt-1">
                                    Yes, direct factory orders typically require a minimum quantity depending on the size of the covers. Small quantities can be sourced through our distributor network. Contact us for specific order details.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-black text-sm uppercase">How do customization options affect the price?</h4>
                                <p className="text-xs text-[#333333] mt-1">
                                    Custom colors are generally included in the cost of bulk orders. Custom logo embossing requires a one-time charge to create the mold, which becomes very cost-effective when spread over large production runs.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Sidebar Column */}
                <div className="lg:col-span-4 space-y-8">
                    {/* B2B Inquiry Form */}
                    <SEOInquiryForm subject="FRP Cover Price Guide" />

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
                                <Link to="/blog/how-to-choose-right-frp-manhole-cover" className="text-[#333333] hover:text-black flex items-center gap-2 transition-colors">
                                    <ArrowRight size={12} /> Sizing & Selection Guide
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

export default PriceGuide;
