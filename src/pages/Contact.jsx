import React, { useState } from 'react';
import SEO from '../components/common/SEO';
import { Phone, Mail, MapPin, CheckCircle, Send } from 'lucide-react';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        country: 'India',
        requirements: ''
    });
    const [status, setStatus] = useState('idle'); // idle | submitting | success | error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const name = formData.name.trim();
        const phone = formData.phone.trim();
        const email = formData.email.trim();
        const company = formData.company.trim();
        const country = formData.country;
        const requirements = formData.requirements.trim();

        if (status === 'submitting') return;

        // Validation checks
        if (!name) {
            alert("Please enter your name.");
            return;
        }
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        if (!phone || !/^\+?[0-9\s\-()]{7,20}$/.test(phone)) {
            alert("Please enter a valid phone number.");
            return;
        }
        if (!requirements) {
            alert("Please enter your message or requirements.");
            return;
        }

        setStatus('submitting');

        const formDataObj = new FormData();
        formDataObj.append("access_key", "448d2ed5-cd76-47be-b441-3b9e6279a06c");
        formDataObj.append("subject", "New Quote Request | FLORTEK INDUSTRIES PVT. LTD.");
        formDataObj.append("from_name", "FLORTEK Industries PVT LTD");
        
        formDataObj.append("name", name);
        formDataObj.append("phone", phone);
        formDataObj.append("email", email);
        formDataObj.append("company", company || "N/A");
        formDataObj.append("country", country);
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
                setFormData({ name: '', email: '', phone: '', company: '', country: 'India', requirements: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
            console.error("Form submission error:", error);
        }
    };

    return (
        <div className="bg-white min-h-screen font-sans pt-24 md:pt-32 pb-20">
            <SEO
                title="Buy FRP Manhole Covers Wholesale | Contact FLORTEK INDUSTRIES PVT. LTD."
                description="Get custom pricing & catalog list of Flortek composite FRP/GRP manhole covers. Contact our sales department in Rajkot, Gujarat for bulk wholesale quotes."
                keywords="contact FLORTEK INDUSTRIES PVT. LTD., buy FRP manhole covers wholesale, custom GRP cover enquiry, bulk drainage covers price, B2B composite cover manufacturer Rajkot, wholesale RF-friendly covers quote"
                schema={{
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "ContactPage",
                            "name": "Contact FLORTEK INDUSTRIES PVT. LTD.",
                            "description": "Get in touch with FLORTEK INDUSTRIES PVT. LTD. for bulk inquiries about FRP manhole covers.",
                            "url": "https://www.flortekfrpcover.com/contact",
                            "breadcrumb": {
                                "@id": "https://www.flortekfrpcover.com/contact#breadcrumb"
                            },
                            "mainEntity": {
                                "@type": "LocalBusiness",
                                "name": "FLORTEK INDUSTRIES PVT. LTD.",
                                "telephone": "+91-8000888620",
                                "email": "flortekindustries@gmail.com",
                                "address": {
                                    "@type": "PostalAddress",
                                    "streetAddress": "Radhe Industrial Zone, Survey No.99/1-2, Plot No.4/37, Veraval Shapar",
                                    "addressLocality": "Rajkot",
                                    "addressRegion": "Gujarat",
                                    "postalCode": "360024",
                                    "addressCountry": "IN"
                                }
                            }
                        }
                    ]
                }}
                canonicalUrl="https://www.flortekfrpcover.com/contact"
            />

            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight uppercase">Get in Touch</h1>
                <p className="text-lg text-black max-w-2xl font-medium leading-relaxed">
                    We'd love to hear from you. Please fill out the form below or contact us directly for any inquiries regarding our FRP & BMC solutions.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* --- LEFT: Contact Info --- */}
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-xl font-black text-black mb-6 border-b border-[#D9D9D9]/50 pb-2 uppercase tracking-tight">Contact Information</h3>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="bg-[#1B8036]/10 p-3 rounded-xl text-[#1B8036] border border-[#1B8036]/20 mt-1 shadow-sm">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-black uppercase tracking-tight text-sm">Address</h4>
                                        <p className="text-black font-medium leading-relaxed mt-1 text-sm">
                                            Radhe Industrial Zone, Survey No.99/1-2,<br />
                                            Plot No.4/37, Veraval Shapar,<br />
                                            Rajkot - 360024, Gujarat, India
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-[#1B8036]/10 p-3 rounded-xl text-[#1B8036] border border-[#1B8036]/20 mt-1 shadow-sm">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-black uppercase tracking-tight text-sm">Phone & WhatsApp</h4>
                                        <p className="text-black font-bold mt-1 text-sm">+91 80008 88620</p>
                                        <p className="text-xs text-black/70 font-medium mt-1 uppercase tracking-wider">Mon-Sat, 9am - 6pm IST</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-[#1B8036]/10 p-3 rounded-xl text-[#1B8036] border border-[#1B8036]/20 mt-1 shadow-sm">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-black uppercase tracking-tight text-sm">Email</h4>
                                        <a href="mailto:flortekindustries@gmail.com" className="text-black font-medium hover:text-[#1B8036] transition-colors mt-1 block text-sm">
                                            flortekindustries@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map or Image Placeholder - simplified */}
                        <div className="rounded-2xl overflow-hidden h-64 bg-[#F5F5F5] border border-[#D9D9D9]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10470.140782488901!2d70.79688149363858!3d22.150944967781953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f0786239eebca59%3A0xe89ef5df473b6e77!2sFlortek%20Industries!5e0!3m2!1sen!2sin!4v1769419594411!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>

                        </div>
                    </div>

                    {/* --- RIGHT: Contact Form --- */}
                    <div className="bg-[#F5F5F5] p-8 md:p-10 rounded-3xl border border-[#D9D9D9] relative">
                        <h3 className="text-2xl font-black text-black mb-6 uppercase tracking-tight">Send us a Message</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-black mb-2">My Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-[#D9D9D9] focus:outline-none focus:border-[#1B8036] focus:ring-1 focus:ring-[#1B8036] transition-all bg-white text-black font-medium"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-black mb-2">Phone Number *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-[#D9D9D9] focus:outline-none focus:border-[#1B8036] focus:ring-1 focus:ring-[#1B8036] transition-all bg-white text-black font-medium"
                                        placeholder="+91 00000 00000"
                                    />
                                </div>
                            </div>

                             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-black mb-2">Email Address *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-[#D9D9D9] focus:outline-none focus:border-[#1B8036] focus:ring-1 focus:ring-[#1B8036] transition-all bg-white text-black font-medium"
                                        placeholder="you@company.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-black mb-2">Company Name</label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-[#D9D9D9] focus:outline-none focus:border-[#1B8036] focus:ring-1 focus:ring-[#1B8036] transition-all bg-white text-black font-medium"
                                        placeholder="Your organization"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-black mb-2">Country</label>
                                    <select
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-[#D9D9D9] focus:outline-none focus:border-[#1B8036] focus:ring-1 focus:ring-[#1B8036] transition-all bg-white text-black font-medium h-[50px]"
                                    >
                                        <option value="India">India</option>
                                        <option value="United Arab Emirates">United Arab Emirates (UAE)</option>
                                        <option value="United States">United States (USA)</option>
                                        <option value="Saudi Arabia">Saudi Arabia (KSA)</option>
                                        <option value="Oman">Oman</option>
                                        <option value="Qatar">Qatar</option>
                                        <option value="Kuwait">Kuwait</option>
                                        <option value="Bahrain">Bahrain</option>
                                        <option value="Germany">Germany</option>
                                        <option value="United Kingdom">United Kingdom (UK)</option>
                                        <option value="Canada">Canada</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Other">Other Country</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-black mb-2">Message / Requirements *</label>
                                <textarea
                                    name="requirements"
                                    rows="4"
                                    required
                                    value={formData.requirements}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-[#D9D9D9] focus:outline-none focus:border-[#1B8036] focus:ring-1 focus:ring-[#1B8036] transition-all bg-white text-black font-medium resize-none"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className={`w-full py-4 rounded-xl font-black uppercase tracking-wider text-xs text-white transition-all flex items-center justify-center gap-2 ${status === 'submitting'
                                    ? 'bg-[#D9D9D9] text-black cursor-not-allowed'
                                    : 'bg-[#1B8036] hover:bg-[#145C27] shadow-md hover:shadow-lg active:scale-[0.98]'
                                    }`}
                            >
                                {status === 'submitting' ? 'Submitting...' : (
                                    <>
                                        Send Message <Send size={18} />
                                    </>
                                )}
                            </button>
                        </form>

                        <AnimatePresence>
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 bg-white/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center rounded-3xl"
                                >
                                    <div className="w-16 h-16 bg-[#1B8036] text-white rounded-full flex items-center justify-center mb-4 shadow-lg shadow-[#1B8036]/30">
                                        <CheckCircle size={32} />
                                    </div>
                                    <h3 className="text-xl font-black text-[#0B1B3D] mb-2 uppercase tracking-tight">Quote Request Submitted Successfully!</h3>
                                    <p className="text-black text-center max-w-xs mb-1 font-medium">Thank you for contacting FLORTEK INDUSTRIES PVT. LTD.</p>
                                    <p className="text-black text-center max-w-xs font-medium">We'll contact you shortly.</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
