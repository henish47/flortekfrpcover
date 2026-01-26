import React from 'react';
import SEO from '../components/common/SEO';
import { Building2, Users, Award, Truck, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="bg-white min-h-screen font-sans pt-24 md:pt-32 pb-20">
            <SEO
                title="About Flortek Industries | Premium FRP Manufacturer"
                description="Flortek Industries is a leading manufacturer of FRP Manhole Covers, BMC covers, and infrastructure solutions based in Rajkot, Gujarat. Est. 2017."
                keywords="Flortek profile, FRP manufacturer Rajkot, manhole covers company India"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "AboutPage",
                    "name": "About Flortek Industries",
                    "description": "Learn about Flortek Industries, a premier manufacturer of FRP and BMC manhole covers since 2017.",
                    "url": "https://flortekfrpcover.vercel.app/about"
                }}
                canonicalUrl="https://flortekfrpcover.vercel.app/about"
            />

            {/* --- HEADER SECTION --- */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">About Flortek</h1>
                <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
                    Flortek Industries is a premier manufacturer and supplier of high-quality FRP (Fiber Reinforced Plastic), BMC (Bulk Molding Compound), and Steel Manhole Covers. Established in 2017 in Rajkot, Gujarat, we are dedicated to building the backbone of modern infrastructure with products designed for strength, safety, and longevity.
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
                        <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-center gap-4">
                            <div className="bg-white p-3 rounded-xl text-primary shadow-sm">
                                <item.icon size={24} />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">{item.label}</p>
                                <p className="text-lg font-bold text-slate-900">{item.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* LEFT COLUMN: COMPANY PROFILE TABLE */}
                    <div className="lg:col-span-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-8 pb-2 border-b border-slate-100">Company Profile</h2>

                        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
                            <table className="w-full text-left border-collapse">
                                <tbody className="divide-y divide-slate-100">
                                    {[
                                        { label: "Business Name", value: "Flortek Industries" },
                                        { label: "Nature of Business", value: "Manufacturer & Exporter" },
                                        { label: "CEO / Director", value: "Nikunj Patel , Naresh Patel" },
                                        { label: "Year of Establishment", value: "2017" },
                                        { label: "Legal Status", value: "Partnership Firm" },
                                        { label: "Annual Turnover", value: "Rs. 5 - 25 Crore" },
                                        { label: "Main Products", value: "FRP, BMC, Steel Manhole Covers & Gratings" },
                                        { label: "GST No", value: "24AAHFF1407D1Z3" },
                                    ].map((row, index) => (
                                        <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                                            <th className="py-5 px-6 md:px-8 font-semibold text-slate-500 w-1/3 md:w-1/4 bg-slate-50/30 align-top text-sm md:text-base border-r border-slate-50">
                                                {row.label}
                                            </th>
                                            <td className="py-5 px-6 md:px-8 font-bold text-slate-900 text-sm md:text-base">
                                                {row.value}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* <div className="mt-12">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Management</h2>
                            <p className="text-slate-600 mb-6">
                                Our growth is driven by a committed leadership team focused on innovation and customer satisfaction.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {["Nikunjbhai Savaliya", "Naresh Savaliya", "Ketankumar Paghadar", "Harshaben Lakkad", "Anjana Antala"].map((name, i) => (
                                    <span key={i} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-semibold border border-slate-200">
                                        {name}
                                    </span>
                                ))}
                            </div>
                        </div> */}
                    </div>

                    {/* RIGHT COLUMN: WHY CHOOSE US */}
                    <div className="lg:col-span-4 space-y-10">

                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Why Choose Flortek?</h3>
                            <div className="space-y-4">
                                {[
                                    { title: "Premium Quality", desc: "Manufactured using high-grade raw materials." },
                                    { title: "Wide Range", desc: "Huge selection of sizes and load capacities." },
                                    { title: "Timely Delivery", desc: "Efficient logistics network pan-India." },
                                    { title: "Ethical Business", desc: "Transparent dealings and fair pricing." },
                                    { title: "Custom Solutions", desc: "Tailored products for specific needs." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1 text-primary">
                                            <CheckCircle size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                                            <p className="text-sm text-slate-500 leading-snug">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-8 bg-slate-900 rounded-3xl text-white">
                            <h3 className="text-xl font-bold mb-4 text-white">Need a Quote?</h3>
                            <p className="text-slate-400 text-sm mb-6">Contact our sales team for bulk orders and technical specifications.</p>
                            <Link to="/contact" className="block w-full text-center py-3 bg-primary hover:bg-emerald-600 text-white font-bold rounded-xl transition-colors">
                                Contact Us
                            </Link>
                        </div>
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
