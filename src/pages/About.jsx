import React from 'react';
import SEO from '../components/common/SEO';
import { Building2, Users, Award, Truck, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="bg-white min-h-screen font-sans pt-24 md:pt-32 pb-20">
            <SEO
                title="About Flortek | Leading FRP & GRP Manhole Cover Manufacturer India"
                description="Flortek Industries Private Limited is a premier ISO 9001:2015 certified manufacturer of high-strength, export-grade FRP, SMC, and GRP manhole covers, based in Rajkot, Gujarat."
                keywords="FRP manhole cover manufacturer India, GRP manhole covers manufacturers, composite chamber covers supplier, SMC manhole cover factory, sewage chamber cover manufacturer Gujarat, Flortek company profile, Naresh Patel Rajkot"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "AboutPage",
                    "name": "About Flortek Industries Private Limited",
                    "description": "Learn about Flortek Industries Private Limited, a premier manufacturer and supplier of FRP and GRP manhole covers since 2017.",
                    "url": "https://flortekfrpcover.vercel.app/about",
                    "publisher": {
                        "@type": "Organization",
                        "name": "Flortek Industries Private Limited",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https://flortekfrpcover.vercel.app/images/logo.png"
                        }
                    }
                }}
                canonicalUrl="https://flortekfrpcover.vercel.app/about"
            />

            {/* --- HEADER SECTION --- */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">About Flortek</h1>
                <p className="text-lg text-[#333333] max-w-3xl leading-relaxed">
                    Flortek Industries Private Limited is a premier manufacturer and supplier of high-quality FRP (Fiber Reinforced Plastic), BMC (Bulk Molding Compound), and Steel Manhole Covers. Established in 2017 in Rajkot, Gujarat, we are dedicated to building the backbone of modern infrastructure with products designed for strength, safety, and longevity.
                </p>
            </div>

            {/* --- MAIN CONTENT GRID --- */}
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                {/* 1. KEY HIGHLIGHTS (Simple Cards) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {[
                        { label: "Established", value: "2017", icon: Calendar },
                        { label: "Location", value: "Rajkot, Gujarat", icon: MapPin },
                        { label: "Nature", value: "Manufacturer", icon: FactoryIcon },
                        { label: "Quality", value: "ISO 9001:2015", icon: Award },
                    ].map((item, i) => (
                        <div key={i} className="bg-[#F5F5F5] p-6 rounded-2xl border border-[#D9D9D9]/50 flex items-center gap-4">
                            <div className="bg-white p-3 rounded-xl text-black border border-[#D9D9D9]/30 shadow-sm">
                                <item.icon size={24} />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-[#333333]/80 uppercase tracking-wide">{item.label}</p>
                                <p className="text-lg font-bold text-black">{item.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* LEFT COLUMN: COMPANY PROFILE TABLE */}
                    <div className="lg:col-span-8">
                        <h2 className="text-2xl font-bold text-black mb-8 pb-2 border-b border-[#D9D9D9]/50">Company Profile</h2>

                        <div className="bg-white rounded-3xl border border-[#D9D9D9] overflow-hidden shadow-sm">
                            <table className="w-full text-left border-collapse">
                                <tbody className="divide-y divide-[#D9D9D9]/50">
                                    {[
                                        { label: "Business Name", value: "Flortek Industries Private Limited" },
                                        { label: "Nature of Business", value: "Manufacturer & Exporter" },
                                        { label: "CEO / Director", value: "Naresh Patel " },
                                        { label: "Year of Establishment", value: "2017" },
                                        { label: "Legal Status", value: "Partnership Firm" },
                                        { label: "Annual Turnover", value: "Rs. 5 - 25 Crore" },
                                        { label: "Main Products", value: "FRP, BMC, Steel Manhole Covers & Gratings" },
                                        { label: "GST No", value: "24AAHFF1407D1Z3" },
                                    ].map((row, index) => (
                                        <tr key={index} className="hover:bg-[#F5F5F5]/50 transition-colors">
                                            <th className="py-5 px-6 md:px-8 font-semibold text-[#333333]/80 w-1/3 md:w-1/4 bg-[#F5F5F5]/30 align-top text-sm md:text-base border-r border-[#D9D9D9]/30">
                                                {row.label}
                                            </th>
                                            <td className="py-5 px-6 md:px-8 font-bold text-black text-sm md:text-base">
                                                {row.value}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: WHY CHOOSE US */}
                    <div className="lg:col-span-4 space-y-10">

                        <div>
                            <h3 className="text-xl font-bold text-black mb-6">Why Choose Flortek?</h3>
                            <div className="space-y-4">
                                {[
                                    { title: "Premium Quality", desc: "Manufactured using high-grade raw materials." },
                                    { title: "Wide Range", desc: "Huge selection of sizes and load capacities." },
                                    { title: "Timely Delivery", desc: "Efficient logistics network pan-India." },
                                    { title: "Ethical Business", desc: "Transparent dealings and fair pricing." },
                                    { title: "Custom Solutions", desc: "Tailored products for specific needs." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1 text-black">
                                            <CheckCircle size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-black text-sm">{item.title}</h4>
                                            <p className="text-sm text-[#333333] leading-snug">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-8 bg-black rounded-3xl text-white">
                            <h3 className="text-xl font-bold mb-4 text-white">Need a Quote?</h3>
                            <p className="text-[#D9D9D9] text-sm mb-6">Contact our sales team for bulk orders and technical specifications.</p>
                            <Link to="/contact" className="block w-full text-center py-3 bg-white hover:bg-[#F5F5F5] text-black font-bold rounded-xl transition-colors">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>

                {/* --- OUR TEAM SECTION --- */}
                <div className="mt-24 border-t border-[#D9D9D9]/50 pt-16">
                    <div className="text-center md:text-left mb-12">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#333333]/60 mb-2 block">
                            Leadership
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black text-black uppercase tracking-tight mb-4">
                            Our Team
                        </h2>
                        <p className="text-xs md:text-sm text-[#333333] max-w-2xl leading-relaxed font-medium">
                            Meet the visionaries driving Flortek's mission to engineer premium, high-strength composite infrastructure solutions for global markets.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Nikunj Savaliya", role: "Co-Founder & Director", description: "" },
                            { name: "Naresh Savaliya", role: "Co-Founder & Managing Director", description: "" },
                            { name: "Ketan Paghdar", role: "Technical Director", description: "" },
                        ].map((member, idx) => (
                            <div key={idx} className="bg-[#F5F5F5] rounded-3xl border border-[#D9D9D9] p-8 flex flex-col items-center text-center hover:border-black hover:shadow-lg transition-all duration-500 group">
                                <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center font-black text-lg mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300">
                                    {member.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <h3 className="text-base font-black text-black uppercase tracking-tight mb-1">{member.name}</h3>
                                <p className="text-[10px] font-black text-[#333333]/60 uppercase tracking-widest mb-4">{member.role}</p>
                                <p className="text-xs text-[#333333] leading-relaxed font-medium">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const FactoryIcon = ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
        <path d="M17 18h1" />
        <path d="M12 18h1" />
        <path d="M7 18h1" />
    </svg>
);

export default About;
