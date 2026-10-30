import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import {
    Globe, Anchor, Box, Award, Shield, FileText, CheckCircle,
    Send, Loader, ArrowRight, Home, Check, ShieldCheck,
    Truck, Package
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useModal } from '../../context/ModalContext';

const FRPCoverExporter = () => {
    const { openModal } = useModal();
    const [status, setStatus] = useState('idle'); // idle | submitting | success | error
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        country: 'United Arab Emirates',
        port: '',
        loadClass: 'D400 (Heavy Duty 40T)',
        quantity: '50-100 pcs',
        requirements: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const name = formData.name.trim();
        const email = formData.email.trim();
        const phone = formData.phone.trim();
        const company = formData.company.trim();
        const country = formData.country;
        const port = formData.port.trim();
        const loadClass = formData.loadClass;
        const quantity = formData.quantity;
        const requirements = formData.requirements.trim();

        if (status === 'submitting') return;

        if (!name) { alert("Please enter your name."); return; }
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { alert("Please enter a valid email address."); return; }
        if (!phone || !/^\+?[0-9\s\-()]{7,20}$/.test(phone)) { alert("Please enter a valid phone number."); return; }
        if (!requirements) { alert("Please enter custom markings & specifications."); return; }

        setStatus('submitting');

        const formDataObj = new FormData();
        formDataObj.append("access_key", "448d2ed5-cd76-47be-b441-3b9e6279a06c");
        formDataObj.append("subject", "New Quote Request | FLORTEK INDUSTRIES PVT. LTD.");
        formDataObj.append("from_name", "FLORTEK Industries PVT LTD");
        formDataObj.append("Lead Source", "B2B Exporter Page Form");
        formDataObj.append("name", name);
        formDataObj.append("email", email);
        formDataObj.append("phone", phone);
        formDataObj.append("company", company);
        formDataObj.append("country", country);
        formDataObj.append("port", port || "Not Specified");
        formDataObj.append("loadClass", loadClass);
        formDataObj.append("quantity", quantity);
        formDataObj.append("requirements", requirements);
        formDataObj.append("message", requirements);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataObj
            });
            const data = await response.json();
            if (response.ok && data.success) {
                setStatus('success');
                setFormData({
                    name: '', email: '', phone: '', company: '',
                    country: 'United Arab Emirates', port: '',
                    loadClass: 'D400 (Heavy Duty 40T)', quantity: '50-100 pcs', requirements: ''
                });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
            console.error("B2B Form submission error:", error);
        }
    };

    const pageSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "name": "FRP Cover Exporter & Global B2B Supplier from India | Flortek",
                "description": "Flortek is a premium industrial FRP cover exporter and manufacturer. Supplying heavy-duty composite manhole covers to UAE, USA, Oman, Saudi Arabia, and Europe. BS EN 124 certified.",
                "url": "https://www.flortekfrpcover.com/frp-cover-exporter",
                "breadcrumb": { "@id": "https://www.flortekfrpcover.com/frp-cover-exporter#breadcrumb" }
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen font-sans">
            <SEO
                title="FRP Cover Exporter & Global B2B Supplier from India | FLORTEK INDUSTRIES PVT. LTD."
                description="FLORTEK INDUSTRIES PVT. LTD. is a premium industrial FRP cover exporter and manufacturer. Supplying heavy-duty composite manhole covers to UAE, USA, Oman, Saudi Arabia, and Europe. BS EN 124 certified."
                keywords="FRP Cover Exporter, FRP Manhole Cover Manufacturer India, FRP Cover Supplier UAE, FRP Cover Supplier USA, Industrial FRP Covers Exporter, Composite Manhole Cover Export Quality"
                schema={pageSchema}
                canonicalUrl="https://www.flortekfrpcover.com/frp-cover-exporter"
            />

            {/* ── HERO SECTION ── */}
            <div className="relative bg-white border-b border-[#D9D9D9]/50 py-24 md:py-32 px-4 overflow-hidden">
                {/* Subtle ambient glow */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1B8036] rounded-full blur-[140px] -mr-40 -mt-40"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FFC700] rounded-full blur-[130px] -ml-32 -mb-32"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#333333]/60 mb-10">
                        <Link to="/" className="hover:text-black flex items-center gap-1 transition-colors">
                            <Home size={12} /> Home
                        </Link>
                        <span>/</span>
                        <span className="text-black">FRP Cover Exporter</span>
                    </nav>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="max-w-4xl"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFC700] text-[#0B1B3D] text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-sm">
                            <Globe size={12} /> Global B2B Export Hub
                        </span>
                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-black uppercase tracking-tighter leading-none mb-6">
                            FRP Cover <span className="text-[#1B8036]">Exporter</span> &amp;<br />
                            <span className="text-3xl sm:text-5xl md:text-6xl">Global Supplier</span>
                        </h1>
                        <div className="w-16 h-1 bg-[#1B8036] rounded-full mb-6"></div>
                        <p className="text-[#333333] text-base md:text-xl font-medium leading-relaxed max-w-3xl">
                            FLORTEK INDUSTRIES PVT. LTD. is a premier engineering firm and certified industrial FRP covers exporter. Operating from our state-of-the-art facility in Rajkot, India, we ship <strong className="text-black">BS EN 124 certified</strong> composite covers worldwide to municipal corporations, contractors, and civil distributors.
                        </p>

                        {/* Trust badges */}
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-8 pt-8 border-t border-[#F0F0F0] text-[11px] sm:text-xs text-[#333333] font-semibold">
                            <span className="flex items-center gap-1.5"><CheckCircle size={15} className="text-[#1B8036] shrink-0" /> BS EN 124 Certified</span>
                            <span className="flex items-center gap-1.5"><ShieldCheck size={15} className="text-[#1B8036] shrink-0" /> SGS / TUV Inspection Ready</span>
                            <span className="flex items-center gap-1.5"><Truck size={15} className="text-[#1B8036] shrink-0" /> FOB Mundra Port</span>
                            <span className="flex items-center gap-1.5"><Globe size={15} className="text-[#1B8036] shrink-0" /> 15+ Countries Served</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ── EXPORT DESTINATIONS STRIP ── */}
            <div className="bg-[#F5F5F5] py-10 border-b border-[#D9D9D9]/50">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
                        {[
                            { country: "UAE", flag: "🇦🇪", port: "Jebel Ali" },
                            { country: "USA", flag: "🇺🇸", port: "Houston" },
                            { country: "Saudi Arabia", flag: "🇸🇦", port: "Dammam" },
                            { country: "Oman", flag: "🇴🇲", port: "Muscat" },
                            { country: "Qatar", flag: "🇶🇦", port: "Doha" },
                            { country: "Kuwait", flag: "🇰🇼", port: "Kuwait City" },
                            { country: "Germany", flag: "🇩🇪", port: "Hamburg" },
                            { country: "UK", flag: "🇬🇧", port: "Felixstowe" },
                        ].map((dest, idx) => (
                            <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white rounded-2xl border border-[#D9D9D9] text-xs font-bold text-black shadow-sm">
                                <span className="text-base">{dest.flag}</span>
                                <span>{dest.country}</span>
                                <span className="text-[#1B8036] font-medium hidden sm:inline">· {dest.port}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── MAIN TWO-COLUMN: COPY + FORM ── */}
            <div className="bg-white py-24 border-b border-[#D9D9D9]/50">
                <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

                    {/* Left: Content */}
                    <div className="lg:col-span-7 space-y-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-[#1B8036] font-black uppercase tracking-widest text-xs mb-3 block">Export-Grade Manufacturing</span>
                            <h2 className="text-3xl md:text-4xl font-black text-black uppercase tracking-tight mb-4">
                                Composite Manufacturing for Global Infrastructure
                            </h2>
                            <div className="w-12 h-1 bg-[#1B8036] rounded-full mb-6"></div>
                            <p className="text-[#333333] font-medium leading-relaxed mb-4">
                                Industrial infrastructure demands materials that survive extreme environmental stresses. Our export-quality Fiber Reinforced Polymer (FRP) manhole covers provide a high-performing replacement for cast iron and concrete. Engineered with premium glass fibers and custom thermosetting resins, they deliver up to D400 load class performance with zero theft value.
                            </p>
                            <p className="text-[#333333] font-medium leading-relaxed">
                                For international buyers, Flortek provides customizable solutions including corporate logo embossing, specific dimensional tailoring, color matching (Granite Grey, Coal Black, Grass Green, Sand Yellow), and custom load testing certification.
                            </p>
                        </motion.div>

                        {/* B2B Trust Checklist */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-[#F5F5F5] rounded-3xl p-6 md:p-8 border border-[#D9D9D9]"
                        >
                            <h3 className="text-lg font-black text-black uppercase tracking-tight mb-6 pb-4 border-b border-[#D9D9D9]">
                                Trust Checklist for Overseas B2B Buyers
                            </h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {[
                                    { title: "Custom Logo Embossing", desc: "Embed your utility, municipal, or client brand name directly on the cover top." },
                                    { title: "Pre-Dispatch Video Audit", desc: "Live webcam or recorded video load tests and dimension checks of your batch." },
                                    { title: "Lab Reports With Shipment", desc: "Official test records for load-bearing capacity and deformation testing." },
                                    { title: "Full Packing Compliance", desc: "Heat-treated ISPM-15 wooden pallets with high-tensile strapping & shrink wrap." },
                                    { title: "Flexible Freight Options", desc: "FOB Mundra Port, CIF Jebel Ali, CFR Houston, or customized DDP." },
                                    { title: "Rapid Sample Dispatch", desc: "Air courier express delivery of structural material samples for engineering approvals." },
                                ].map((item, idx) => (
                                    <li key={idx} className="flex gap-3">
                                        <div className="shrink-0 w-6 h-6 rounded-full bg-[#1B8036]/10 border border-[#1B8036]/20 text-[#1B8036] flex items-center justify-center mt-0.5">
                                            <Check size={13} />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-black text-sm uppercase tracking-tight">{item.title}</h4>
                                            <p className="text-xs text-[#333333] mt-0.5 font-medium leading-relaxed">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Right: Quote Form */}
                    <div className="lg:col-span-5" id="international-quote-form">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-[#F5F5F5] border border-[#D9D9D9] rounded-3xl p-6 md:p-8 sticky top-28"
                        >
                            <div className="mb-6">
                                <span className="inline-block px-3 py-1 rounded-full bg-[#1B8036] text-white text-[9px] font-black uppercase tracking-wider mb-3">
                                    Bulk Inquiry
                                </span>
                                <h3 className="text-2xl font-black uppercase tracking-tight text-black">
                                    Request International Quote
                                </h3>
                                <p className="text-xs text-[#333333] mt-1 font-medium">
                                    Direct factory pricing & shipping times for container-load projects.
                                </p>
                            </div>

                            {status === 'success' ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-[#1B8036] text-white rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle size={32} />
                                    </div>
                                    <h3 className="text-xl font-black text-black mb-2 uppercase tracking-tight">Quote Request Sent!</h3>
                                    <p className="text-sm text-[#333333] max-w-xs mx-auto font-medium">
                                        Thank you for contacting FLORTEK INDUSTRIES. We'll get back to you shortly.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <label className="block text-[10px] font-black uppercase tracking-wider text-[#333333] mb-1">Your Name</label>
                                            <input required name="name" type="text" value={formData.name} onChange={handleChange}
                                                className="w-full px-4 py-2.5 rounded-xl border border-[#D9D9D9] focus:border-[#1B8036] outline-none bg-white text-sm font-medium transition-colors"
                                                placeholder="John Doe" />
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-black uppercase tracking-wider text-[#333333] mb-1">Company Email</label>
                                            <input required name="email" type="email" value={formData.email} onChange={handleChange}
                                                className="w-full px-4 py-2.5 rounded-xl border border-[#D9D9D9] focus:border-[#1B8036] outline-none bg-white text-sm font-medium transition-colors"
                                                placeholder="john@company.com" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <label className="block text-[10px] font-black uppercase tracking-wider text-[#333333] mb-1">Phone / WhatsApp</label>
                                            <input required name="phone" type="tel" value={formData.phone} onChange={handleChange}
                                                className="w-full px-4 py-2.5 rounded-xl border border-[#D9D9D9] focus:border-[#1B8036] outline-none bg-white text-sm font-medium transition-colors"
                                                placeholder="+971..." />
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-black uppercase tracking-wider text-[#333333] mb-1">Company Name</label>
                                            <input required name="company" type="text" value={formData.company} onChange={handleChange}
                                                className="w-full px-4 py-2.5 rounded-xl border border-[#D9D9D9] focus:border-[#1B8036] outline-none bg-white text-sm font-medium transition-colors"
                                                placeholder="Company LLC" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <label className="block text-[10px] font-black uppercase tracking-wider text-[#333333] mb-1">Target Country</label>
                                            <select name="country" value={formData.country} onChange={handleChange}
                                                className="w-full px-4 py-2.5 rounded-xl border border-[#D9D9D9] focus:border-[#1B8036] outline-none bg-white text-sm font-medium transition-colors">
                                                <option value="United Arab Emirates">United Arab Emirates (UAE)</option>
                                                <option value="United States">United States (USA)</option>
                                                <option value="Saudi Arabia">Saudi Arabia (KSA)</option>
                                                <option value="Oman">Oman</option>
                                                <option value="Qatar">Qatar</option>
                                                <option value="Kuwait">Kuwait</option>
                                                <option value="Germany">Germany</option>
                                                <option value="United Kingdom">United Kingdom (UK)</option>
                                                <option value="Canada">Canada</option>
                                                <option value="Australia">Australia</option>
                                                <option value="Other">Other Country</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-black uppercase tracking-wider text-[#333333] mb-1">Port of Discharge</label>
                                            <input name="port" type="text" value={formData.port} onChange={handleChange}
                                                className="w-full px-4 py-2.5 rounded-xl border border-[#D9D9D9] focus:border-[#1B8036] outline-none bg-white text-sm font-medium transition-colors"
                                                placeholder="Ex: Jebel Ali" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <label className="block text-[10px] font-black uppercase tracking-wider text-[#333333] mb-1">Load Rating Class</label>
                                            <select name="loadClass" value={formData.loadClass} onChange={handleChange}
                                                className="w-full px-4 py-2.5 rounded-xl border border-[#D9D9D9] focus:border-[#1B8036] outline-none bg-white text-xs font-medium transition-colors">
                                                <option value="D400 (Heavy Duty 40T)">D400 (Heavy Duty 40T)</option>
                                                <option value="C250 (Medium Traffic 25T)">C250 (Medium Traffic 25T)</option>
                                                <option value="B125 (Car Parking 12.5T)">B125 (Car Parking 12.5T)</option>
                                                <option value="A15 (Pedestrian 1.5T)">A15 (Pedestrian 1.5T)</option>
                                                <option value="Multiple Classes">Multiple Classes / Custom</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-black uppercase tracking-wider text-[#333333] mb-1">Approx. Quantity</label>
                                            <select name="quantity" value={formData.quantity} onChange={handleChange}
                                                className="w-full px-4 py-2.5 rounded-xl border border-[#D9D9D9] focus:border-[#1B8036] outline-none bg-white text-xs font-medium transition-colors">
                                                <option value="50-100 pcs">50 – 100 pcs</option>
                                                <option value="100-500 pcs">100 – 500 pcs</option>
                                                <option value="500+ pcs">500+ pcs</option>
                                                <option value="1x20ft Container (FCL)">1×20ft Container (FCL)</option>
                                                <option value="Multiple Containers">Multiple Containers</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-[10px] font-black uppercase tracking-wider text-[#333333] mb-1">Custom Markings & Specifications</label>
                                        <textarea name="requirements" rows="3" value={formData.requirements} onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded-xl border border-[#D9D9D9] focus:border-[#1B8036] outline-none bg-white text-xs font-medium resize-none transition-colors"
                                            placeholder="Dimensions, color, custom logo branding, or packaging instructions...">
                                        </textarea>
                                    </div>

                                    {status === 'error' && (
                                        <p className="text-xs text-red-500 text-center font-bold">Something went wrong. Please check fields or try again.</p>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="w-full py-4 bg-[#1B8036] hover:bg-[#145C27] text-white rounded-xl font-black uppercase tracking-wider text-xs transition-colors flex items-center justify-center gap-2 shadow-md active:scale-95"
                                    >
                                        {status === 'submitting' ? (
                                            <><Loader size={14} className="animate-spin" /> Submitting...</>
                                        ) : (
                                            <>Submit B2B Quote Request <Send size={14} /></>
                                        )}
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* ── EXPORT QUALITY BADGES ── */}
            <div className="bg-[#F5F5F5] py-24 border-b border-[#D9D9D9]/50">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="text-[#1B8036] font-black uppercase tracking-widest text-xs mb-3 block">Certified Compliance</span>
                        <h2 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tight mb-4">Export Quality Standards</h2>
                        <div className="w-16 h-1 bg-[#1B8036] mx-auto rounded-full mb-6"></div>
                        <p className="text-[#333333] max-w-xl mx-auto font-medium text-base leading-relaxed">
                            Every shipment is backed by internationally recognized quality certifications and inspection-readiness.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Award, title: "BS EN 124 Certified", desc: "Tested and certified to comply with the European Standard BS EN 124 covering A15 to D400 load divisions." },
                            { icon: ShieldCheck, title: "SGS Quality Checked", desc: "Fully ready for third-party inspection agencies (SGS, TUV, Bureau Veritas) to inspect structural properties pre-shipping." },
                            { icon: Globe, title: "ISO 9001:2015", desc: "Manufactured at our ISO 9001 certified unit ensuring continuous raw-material tracking and testing." },
                            { icon: Shield, title: "UV-Resistant Grade", desc: "Infused with high-grade UV stabilizers to survive intense tropical heat, desert climates, or sub-zero environments." },
                        ].map((badge, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-8 rounded-3xl border border-[#D9D9D9] hover:border-[#1B8036] hover:shadow-lg flex flex-col items-center text-center transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 bg-[#1B8036]/10 border border-[#1B8036]/20 text-[#1B8036] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#1B8036] group-hover:text-white transition-all duration-300 shadow-sm">
                                    <badge.icon size={24} />
                                </div>
                                <h3 className="font-black text-black uppercase tracking-tight text-base mb-3">{badge.title}</h3>
                                <p className="text-xs text-[#333333] leading-relaxed font-medium">{badge.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── LOGISTICS & SHIPPING ── */}
            <div className="bg-white py-24 border-b border-[#D9D9D9]/50">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                        {/* Left text */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="lg:col-span-5 space-y-6"
                        >
                            <span className="text-[#1B8036] font-black uppercase tracking-widest text-xs block">Logistics Excellence</span>
                            <h2 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tight leading-none">
                                Worldwide Shipping &amp; Container Loadings
                            </h2>
                            <div className="w-12 h-1 bg-[#1B8036] rounded-full"></div>
                            <p className="text-[#333333] leading-relaxed font-medium">
                                Located close to Mundra Port — India's largest private commercial container port — we arrange seamless maritime logistics via standard 20ft and 40ft FCL containers to primary trade networks.
                            </p>

                            <div className="space-y-5 pt-2">
                                {[
                                    { icon: Anchor, title: "Port-to-Port Direct Services", desc: "Prompt sailing to UAE (Jebel Ali), USA (Houston/New York), Saudi Arabia (Dammam), Oman (Muscat)." },
                                    { icon: Box, title: "Seaworthy Pallet Packing", desc: "Heat-treated wooden pallets, wrapped in heavy-gauge stretch wrap, reinforced with steel strapping for absolute transit safety." },
                                    { icon: Package, title: "ISPM-15 Compliant Export", desc: "All export packing meets international phytosanitary standards ensuring zero customs rejection on wooden packaging." },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 items-start group">
                                        <div className="shrink-0 p-2.5 bg-[#1B8036]/10 border border-[#1B8036]/20 rounded-xl text-[#1B8036] group-hover:bg-[#1B8036] group-hover:text-white transition-all">
                                            <item.icon size={18} />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-black uppercase tracking-tight text-sm">{item.title}</h4>
                                            <p className="text-xs text-[#333333] mt-0.5 font-medium leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right: FCL table */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="lg:col-span-7 bg-[#F5F5F5] border border-[#D9D9D9] rounded-3xl p-6 md:p-8"
                        >
                            <h3 className="text-lg font-black text-black uppercase tracking-tight mb-6 pb-4 border-b border-[#D9D9D9]">
                                Standard FCL Loading Guidelines
                            </h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm">
                                    <thead>
                                        <tr className="border-b border-[#D9D9D9] text-[#333333]/60 font-black uppercase tracking-wider text-[10px]">
                                            <th className="pb-3 pr-4">Cover Type / Size</th>
                                            <th className="pb-3 px-3">Load Class</th>
                                            <th className="pb-3 px-3">Qty / 20ft FCL</th>
                                            <th className="pb-3 pl-3">Transit (UAE)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#D9D9D9]/50 font-medium text-[#333333]">
                                        {[
                                            { type: "Circular 600mm Dia", load: "D400 (40T)", qty: "350 – 400 Sets", transit: "6 – 8 Days" },
                                            { type: "Square 600×600mm", load: "C250 (25T)", qty: "400 – 450 Sets", transit: "6 – 8 Days" },
                                            { type: "Square 450×450mm", load: "B125 (12.5T)", qty: "700 – 800 Sets", transit: "6 – 8 Days" },
                                            { type: "Recessed 600×600mm", load: "B125 (12.5T)", qty: "300 – 350 Sets", transit: "6 – 8 Days" },
                                        ].map((row, i) => (
                                            <tr key={i} className="hover:bg-white transition-colors">
                                                <td className="py-4 pr-4 font-black text-black text-xs">{row.type}</td>
                                                <td className="py-4 px-3">
                                                    <span className="px-2 py-0.5 bg-[#1B8036] text-white text-[9px] font-black uppercase tracking-wider rounded">{row.load}</span>
                                                </td>
                                                <td className="py-4 px-3 text-xs">{row.qty}</td>
                                                <td className="py-4 pl-3 text-xs text-[#1B8036] font-bold">{row.transit}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-[10px] text-[#333333]/60 mt-5 leading-normal italic border-t border-[#D9D9D9]/50 pt-4">
                                *Quantities are approximate depending on custom packaging choices and gross weight limits of shipping lines. Transit times are from Mundra Port, India.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* ── CATALOG DOWNLOAD CTA ── */}
            <div className="bg-[#1B8036] py-24 px-4 relative overflow-hidden border-t border-[#145C27]">
                <div className="absolute inset-0 pointer-events-none opacity-10">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[120px] -mr-40 -mt-40"></div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row justify-between items-center gap-10"
                >
                    <div className="max-w-2xl text-center lg:text-left">
                        <span className="inline-block px-3 py-1 bg-[#FFC700] text-[#0B1B3D] text-[9px] font-black uppercase tracking-wider rounded-full mb-5">
                            Download Catalog
                        </span>
                        <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                            Get Export Brochure &amp; Datasheets
                        </h3>
                        <p className="text-white/80 text-base leading-relaxed font-medium">
                            Review our load test reports, dimensional diagrams, and material test properties — everything your engineering team needs for approval.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                        <a
                            href="/brochure.pdf"
                            download="Flortek_Export_Brochure.pdf"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-[#F5F5F5] text-[#1B8036] font-black uppercase tracking-wider text-xs rounded-xl transition-all gap-2 shadow-lg"
                        >
                            <FileText size={16} /> Download PDF Brochure
                        </a>
                        <button
                            onClick={openModal}
                            className="inline-flex items-center justify-center px-8 py-4 bg-[#FFC700] hover:bg-[#E6B200] text-[#0B1B3D] font-extrabold uppercase tracking-wider text-xs rounded-xl transition-all gap-2 shadow-lg"
                        >
                            Get a Quote <ArrowRight size={14} />
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default FRPCoverExporter;
