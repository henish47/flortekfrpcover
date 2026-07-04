import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import { 
    Globe, Anchor, Box, Award, Shield, FileText, CheckCircle, 
    Send, Loader, ArrowRight, Home, Check, Building, ShieldCheck, MapPin
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FRPCoverExporter = () => {
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
        setStatus('submitting');

        try {
            const response = await fetch("https://formsubmit.co/ajax/flortekindustries@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    "Lead Source": "B2B Exporter Page Form",
                    "Customer Name": formData.name,
                    "Corporate Email": formData.email,
                    "Phone / WhatsApp": formData.phone,
                    "Company Name": formData.company,
                    "Destination Country": formData.country,
                    "Port of Discharge": formData.port || "Not Specified",
                    "Load Rating Class": formData.loadClass,
                    "Approximate Qty": formData.quantity,
                    "Project Requirements": formData.requirements,
                    _subject: `B2B International Inquiry: ${formData.company} (${formData.country})`,
                    _template: "table"
                })
            });

            if (response.ok) {
                setStatus('success');
                setFormData({
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
                "@type": "BreadcrumbList",
                "@id": "https://www.flortekfrpcover.com/frp-cover-exporter#breadcrumb",
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
                        "name": "FRP Cover Exporter",
                        "item": "https://www.flortekfrpcover.com/frp-cover-exporter"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.flortekfrpcover.com/frp-cover-exporter#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What standards do your export-quality FRP covers meet?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Our FRP composite manhole covers conform strictly to global BS EN 124 standards, ensuring safety, load bearing, and quality certifications from third-party inspection firms."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which countries do you ship to, and what are the freight terms?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We export worldwide to UAE, USA, Saudi Arabia, Oman, Qatar, Germany, and more. We offer flexible trade terms including FOB (Rajkot/Mundra Port), CIF, CFR, and DDP depending on client requirements."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen pt-24 md:pt-32 pb-20 font-sans">
            <SEO
                title="FRP Cover Exporter & Global B2B Supplier from India | Flortek"
                description="Flortek is a premium industrial FRP cover exporter and manufacturer. Supplying heavy-duty composite manhole covers to UAE, USA, Oman, Saudi Arabia, and Europe. BS EN 124 certified."
                keywords="FRP Cover Exporter, FRP Manhole Cover Manufacturer India, FRP Cover Supplier UAE, FRP Cover Supplier USA, Industrial FRP Covers Exporter, Composite Manhole Cover Export Quality"
                schema={pageSchema}
                canonicalUrl="https://www.flortekfrpcover.com/frp-cover-exporter"
            />

            {/* Breadcrumb Navigation */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
                <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#333333]/70">
                    <Link to="/" className="hover:text-black flex items-center gap-1 transition-colors">
                        <Home size={12} /> Home
                    </Link>
                    <span>/</span>
                    <span className="text-black">FRP Cover Exporter</span>
                </nav>
            </div>

            {/* Top Banner section */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-sm">
                        <Globe size={12} className="animate-spin-[10s]" /> Global B2B Export Solutions
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-black mb-6 uppercase tracking-tighter leading-none">
                        FRP Cover Exporter & Manufacturer India
                    </h1>
                    <p className="text-lg md:text-xl text-[#333333] max-w-4xl leading-relaxed">
                        Flortek Industries Private Limited is a premier engineering firm and certified **Industrial FRP Covers Exporter**. Operating out of our state-of-the-art facility in Rajkot, India, we ship BS EN 124 certified composite covers worldwide to municipal corporations, contractors, and civil distributors in the **UAE**, **USA**, and Middle-East regions.
                    </p>
                </motion.div>
            </div>

            {/* Two-Column Form & Main Copy */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
                
                {/* Left: SEO copywriting & Trust bullets */}
                <div className="lg:col-span-7 text-[#333333] space-y-8 leading-relaxed">
                    <section className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
                            Export-Grade Composite Manufacturing
                        </h2>
                        <p>
                            Industrial infrastructure demands materials that survive extreme environmental stresses. Our export-quality **Fiber Reinforced Polymer (FRP)** manhole covers provide a high-performing replacement for cast iron and concrete. Engineered with premium glass fibers and custom thermosetting resins, they deliver up to D400 load class performance with a zero-theft value.
                        </p>
                        <p>
                            For international buyers, Flortek provides customizable solutions including corporate logo embossing, specific dimensional tailoring, color matching (Standard Granite Grey, Coal Black, Grass Green, Sand Yellow), and custom load testing certification.
                        </p>
                    </section>

                    {/* Trust elements list */}
                    <div className="border border-[#D9D9D9] rounded-3xl p-6 md:p-8 bg-[#F5F5F5]/40 space-y-6">
                        <h3 className="text-lg font-bold text-black uppercase tracking-tight border-b border-[#D9D9D9] pb-3">
                            Trust Checklist for Overseas B2B Buyers
                        </h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { title: "Custom Logo Embossing", desc: "Embed your utility, municipal, or client brand name directly on the cover top." },
                                { title: "Pre-Dispatch Video Audit", desc: "Live webcam or recorded video load tests and dimension checks of your batch." },
                                { title: "Lab Reports With Shipment", desc: "Official test records for load-bearing capacity and deformation testing." },
                                { title: "Full Packing Compliance", desc: "Heat-treated ISPM-15 wooden pallets with high-tensile strapping & shrink wrap." },
                                { title: "Flexible Freight Options", desc: "FOB Mundra Port, CIF Port of Jebel Ali, CFR Houston Port, or customized DDP." },
                                { title: "Rapid Sample Dispatch", desc: "Air courier express delivery of structural material samples for engineering approvals." }
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-3">
                                    <div className="shrink-0 w-5 h-5 rounded-full bg-black text-white flex items-center justify-center mt-1">
                                        <Check size={12} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-black text-sm uppercase tracking-tight">{item.title}</h4>
                                        <p className="text-xs text-[#333333]/90 mt-0.5">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right: Request International Quote Form */}
                <div className="lg:col-span-5 relative" id="international-quote-form">
                    <div className="bg-[#F5F5F5] border border-[#D9D9D9] rounded-3xl p-6 md:p-8 sticky top-32 shadow-xl overflow-hidden">
                        
                        <div className="mb-6">
                            <span className="inline-block px-3 py-1 rounded bg-black text-white text-[9px] font-black uppercase tracking-wider mb-2">
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
                                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle size={32} />
                                </div>
                                <h4 className="text-2xl font-black uppercase tracking-tight text-black mb-2">Inquiry Submitted!</h4>
                                <p className="text-sm text-[#333333] max-w-xs mx-auto">
                                    Thank you. Our B2B Export Desk will review your project parameters and contact you via email or WhatsApp within 12 hours.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[10px] font-bold uppercase tracking-wider text-[#333333] mb-1">Your Name</label>
                                        <input required name="name" type="text" value={formData.name} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-[#D9D9D9] focus:border-black outline-none bg-white text-sm" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-bold uppercase tracking-wider text-[#333333] mb-1">Company Email</label>
                                        <input required name="email" type="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-[#D9D9D9] focus:border-black outline-none bg-white text-sm" placeholder="john@company.com" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[10px] font-bold uppercase tracking-wider text-[#333333] mb-1">Phone / WhatsApp</label>
                                        <input required name="phone" type="tel" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-[#D9D9D9] focus:border-black outline-none bg-white text-sm" placeholder="+971..." />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-bold uppercase tracking-wider text-[#333333] mb-1">Company Name</label>
                                        <input required name="company" type="text" value={formData.company} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-[#D9D9D9] focus:border-black outline-none bg-white text-sm" placeholder="Ex: Al-Futtaim Group" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[10px] font-bold uppercase tracking-wider text-[#333333] mb-1">Target Country</label>
                                        <select name="country" value={formData.country} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-[#D9D9D9] focus:border-black outline-none bg-white text-sm">
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
                                        <label className="block text-[10px] font-bold uppercase tracking-wider text-[#333333] mb-1">Port of Discharge (Opt.)</label>
                                        <input name="port" type="text" value={formData.port} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-[#D9D9D9] focus:border-black outline-none bg-white text-sm" placeholder="Ex: Port of Jebel Ali" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[10px] font-bold uppercase tracking-wider text-[#333333] mb-1">Load Rating Class</label>
                                        <select name="loadClass" value={formData.loadClass} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-[#D9D9D9] focus:border-black outline-none bg-white text-xs">
                                            <option value="D400 (Heavy Duty 40T)">D400 (Heavy Duty 40T)</option>
                                            <option value="C250 (Medium Traffic 25T)">C250 (Medium Traffic 25T)</option>
                                            <option value="B125 (Car Parking 12.5T)">B125 (Car Parking 12.5T)</option>
                                            <option value="A15 (Pedestrian 1.5T)">A15 (Pedestrian 1.5T)</option>
                                            <option value="Multiple Classes">Multiple Classes / Custom</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-bold uppercase tracking-wider text-[#333333] mb-1">Approx. Quantity</label>
                                        <select name="quantity" value={formData.quantity} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-[#D9D9D9] focus:border-black outline-none bg-white text-xs">
                                            <option value="50-100 pcs">50 - 100 pcs</option>
                                            <option value="100-500 pcs">100 - 500 pcs</option>
                                            <option value="500+ pcs">500+ pcs</option>
                                            <option value="1x20ft Container (FCL)">1x20ft Container (FCL)</option>
                                            <option value="Multiple Containers">Multiple Containers</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[10px] font-bold uppercase tracking-wider text-[#333333] mb-1">Custom Markings & Specifications</label>
                                    <textarea name="requirements" rows="2" value={formData.requirements} onChange={handleChange} className="w-full px-4 py-2 rounded-xl border border-[#D9D9D9] focus:border-black outline-none bg-white text-xs resize-none" placeholder="Provide dimensions, color, custom logo branding, or packaging instructions..."></textarea>
                                </div>

                                {status === 'error' && (
                                    <p className="text-xs text-red-500 text-center font-bold">Something went wrong. Please check fields or submit again.</p>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="w-full py-4 bg-black text-white rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-[#333333] transition-colors flex items-center justify-center gap-2 shadow-md"
                                >
                                    {status === 'submitting' ? (
                                        <>
                                            <Loader size={14} className="animate-spin" /> Submitting Request...
                                        </>
                                    ) : (
                                        <>
                                            Submit B2B Quote Request <Send size={14} />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            {/* Export Quality Badges Grid */}
            <div className="bg-[#F5F5F5] py-24 border-y border-[#D9D9D9]/50 mb-24">
                <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
                    <span className="text-black font-black uppercase tracking-widest text-xs mb-3 block">Certified Compliance</span>
                    <h2 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tight mb-4">Export Quality Badges</h2>
                    <div className="w-16 h-1 bg-black mx-auto rounded-full mb-12"></div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { icon: Award, title: "BS EN 124 Certified", desc: "Tested and certified to comply with the European Union Standard BS EN 124 covering pedestrian to heavy traffic load divisions." },
                            { icon: ShieldCheck, title: "SGS Quality Checked", desc: "Fully ready for third-party inspection agencies (SGS, TUV, Bureau Veritas) to inspect structural properties pre-shipping." },
                            { icon: Globe, title: "ISO 9001:2015", desc: "Manufactured at our ISO 9001 quality management certified unit ensuring continuous raw-material tracking and testing." },
                            { icon: Shield, title: "UV-Resistant Grade", desc: "Infused with high-grade UV stabilizers to ensure the composite survives intense tropical heat, desert climates, or sub-zero environments." }
                        ].map((badge, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl border border-[#D9D9D9] flex flex-col items-center hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center mb-6">
                                    <badge.icon size={22} />
                                </div>
                                <h3 className="font-bold text-black uppercase tracking-tight text-base mb-2">{badge.title}</h3>
                                <p className="text-xs text-[#333333] leading-relaxed font-medium">{badge.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Worldwide Shipping & Sea Ports Logistics */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5 space-y-6">
                        <span className="text-black font-black uppercase tracking-widest text-xs block">Logistics Excellence</span>
                        <h2 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tight leading-none">Worldwide Shipping & Container Loadings</h2>
                        <p className="text-[#333333] leading-relaxed font-medium">
                            Located close to **Mundra Port** (India’s largest private commercial container port), we arrange seamless maritime logistics. We coordinate standard shipping containers (20ft and 40ft FCL) to primary trade networks.
                        </p>
                        
                        <div className="space-y-4">
                            <div className="flex gap-3 items-start">
                                <div className="p-2 bg-[#F5F5F5] border border-[#D9D9D9] rounded-lg text-black mt-1">
                                    <Anchor size={18} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-black uppercase tracking-tight text-sm">Port-to-Port Direct Services</h4>
                                    <p className="text-xs text-[#333333] mt-0.5">Prompt sailing to UAE (Jebel Ali), USA (Houston/New York), Saudi Arabia (Dammam), Oman (Muscat).</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-start">
                                <div className="p-2 bg-[#F5F5F5] border border-[#D9D9D9] rounded-lg text-black mt-1">
                                    <Box size={18} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-black uppercase tracking-tight text-sm">Seaworthy Pallet Packing</h4>
                                    <p className="text-xs text-[#333333] mt-0.5">Heat-treated wooden pallets, wrapped in heavy-gauge stretch wrap, reinforced with steel strapping for absolute transit safety.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Logistics specs table */}
                    <div className="lg:col-span-7 bg-[#F5F5F5] border border-[#D9D9D9] rounded-3xl p-6 md:p-8">
                        <h3 className="text-lg font-bold text-black uppercase tracking-tight mb-4 border-b border-[#D9D9D9] pb-3">Standard FCL Loading Guidelines</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs">
                                <thead>
                                    <tr className="border-b border-[#D9D9D9] text-[#333333]/70 font-bold uppercase tracking-wider">
                                        <th className="pb-3 pr-2">Cover Type / Size</th>
                                        <th className="pb-3 px-2">Load Capacity</th>
                                        <th className="pb-3 px-2">Qty per 20ft FCL</th>
                                        <th className="pb-3 pl-2">Est. Transit (UAE)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#D9D9D9]/50 font-medium text-[#333333]">
                                    <tr>
                                        <td className="py-3 pr-2 font-bold text-black">Circular 600mm dia</td>
                                        <td className="py-3 px-2">D400 (40 Tons)</td>
                                        <td className="py-3 px-2">350 - 400 Sets</td>
                                        <td className="py-3 pl-2">6 - 8 Days</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-2 font-bold text-black">Square 600x600mm</td>
                                        <td className="py-3 px-2">C250 (25 Tons)</td>
                                        <td className="py-3 px-2">400 - 450 Sets</td>
                                        <td className="py-3 pl-2">6 - 8 Days</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-2 font-bold text-black">Square 450x450mm</td>
                                        <td className="py-3 px-2">B125 (12.5 Tons)</td>
                                        <td className="py-3 px-2">700 - 800 Sets</td>
                                        <td className="py-3 pl-2">6 - 8 Days</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-2 font-bold text-black">Recessed 600x600mm</td>
                                        <td className="py-3 px-2">B125 (12.5 Tons)</td>
                                        <td className="py-3 px-2">300 - 350 Sets</td>
                                        <td className="py-3 pl-2">6 - 8 Days</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-[10px] text-[#333333]/70 mt-4 leading-normal italic">
                            *Note: Quantities are approximate depending on custom packaging choices and gross weight limits of shipping lines.
                        </p>
                    </div>
                </div>
            </div>

            {/* International Projects Section */}
            <div className="bg-[#F5F5F5] py-24 border-y border-[#D9D9D9]/50 mb-24">
                <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
                    <span className="text-black font-black uppercase tracking-widest text-xs mb-3 block">Global Footprint</span>
                    <h2 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tight mb-4">International Projects & Supply History</h2>
                    <div className="w-16 h-1 bg-black mx-auto rounded-full mb-12"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        {[
                            {
                                country: "Dubai, United Arab Emirates (UAE)",
                                title: "Commercial Port Drainage Upgrade",
                                desc: "Supplied over 600 sets of D400 class circular composite covers with custom gas-tight locks for oil-storage drainage grids."
                            },
                            {
                                country: "Houston, Texas (USA)",
                                title: "Industrial Business Park Cabling Layout",
                                desc: "Supplied 400+ custom color-coded orange and grey FRP trench covers with anti-slip surface designs for heavy truck carriage bays."
                            },
                            {
                                country: "Muscat, Sultanate of Oman",
                                title: "Municipal Residential Township Grid",
                                desc: "Manufactured and dispatched 1,200 sets of pedestrian A15 and B125 square covers embossed with municipal logo seals."
                            }
                        ].map((project, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl border border-[#D9D9D9] flex flex-col justify-between hover:shadow-lg transition-shadow">
                                <div>
                                    <div className="flex items-center gap-2 text-xs font-bold text-black uppercase tracking-wider mb-3">
                                        <MapPin size={14} /> {project.country}
                                    </div>
                                    <h3 className="font-bold text-black text-lg mb-2 uppercase tracking-tight">{project.title}</h3>
                                    <p className="text-sm text-[#333333] leading-relaxed font-medium">{project.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Catalog Download Section (Lead Magnet) */}
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="bg-black text-white rounded-[32px] p-8 md:p-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-[90px] -mr-24 -mt-24 pointer-events-none" />
                    
                    <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12">
                        <div className="max-w-2xl">
                            <span className="inline-block px-3 py-1 bg-white text-black text-[9px] font-black uppercase tracking-wider rounded mb-4">
                                Download Catalog
                            </span>
                            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">
                                Get Flortek Export Brochure & Datasheets
                            </h3>
                            <p className="text-[#D9D9D9] text-base leading-relaxed font-medium">
                                Review our load test reports, dimensional diagrams, and material test properties. Provide your B2B email to immediately download the comprehensive documentation pack.
                            </p>
                        </div>

                        <div className="w-full lg:w-fit shrink-0">
                            <a
                                href="/brochure.pdf"
                                download="Flortek_Export_Brochure.pdf"
                                className="inline-flex items-center justify-center px-10 py-5 bg-white text-black font-bold uppercase tracking-wider text-xs rounded-xl hover:bg-[#F5F5F5] transition-all gap-2 w-full lg:w-auto text-center"
                            >
                                <FileText size={16} /> Download PDF Brochure
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FRPCoverExporter;
