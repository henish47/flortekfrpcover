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
        requirements: ''
    });
    const [status, setStatus] = useState('idle'); // idle | submitting | success | error

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
                    "Customer Name": formData.name,
                    "Phone Number": formData.phone,
                    "Email Address": formData.email,
                    "Company Name": formData.company,
                    "Project Requirements": formData.requirements,
                    _subject: `New Project Enquiry: ${formData.name}`,
                    _template: "table"
                })
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', company: '', requirements: '' });
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
                title="Contact Flortek | Architectural & Industrial Solutions"
                description="Connect with Flortek Industries for premium FRP manhole covers and drainage solutions. Rajkot-based manufacturing with pan-India delivery."
                keywords="contact flortek, get quote manhole covers, industrial composite suppliers"
            />

            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Get in Touch</h1>
                <p className="text-lg text-slate-600 max-w-2xl">
                    We'd love to hear from you. Please fill out the form below or contact us directly for any inquiries regarding our FRP & BMC solutions.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* --- LEFT: Contact Info --- */}
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-2">Contact Information</h3>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-50 p-3 rounded-lg text-primary mt-1">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900">Address</h4>
                                        <p className="text-slate-600 leading-relaxed mt-1">
                                            Radhe Industrial Zone, Survey No.99/1-2,<br />
                                            Plot No.4/37, Veraval Shapar,<br />
                                            Rajkot - 360024, Gujarat, India
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-50 p-3 rounded-lg text-primary mt-1">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900">Phone & WhatsApp</h4>
                                        <p className="text-slate-600 mt-1">+91 80008 88620</p>
                                        <p className="text-sm text-slate-400 mt-1">Mon-Sat, 9am - 6pm IST</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-50 p-3 rounded-lg text-primary mt-1">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900">Email</h4>
                                        <a href="mailto:flortekindustries@gmail.com" className="text-slate-600 hover:text-primary transition-colors mt-1 block">
                                            flortekindustries@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map or Image Placeholder - simplified */}
                        <div className="rounded-2xl overflow-hidden h-64 bg-slate-100 border border-slate-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1847.7647341195748!2d70.81020776387265!3d22.143908995990042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDA4JzM4LjEiTiA3MMKwNDgnNDAuOSJF!5e0!3m2!1sen!2sin!4v1769320386252!5m2!1sen!2sin"
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
                    <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm relative">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">My Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white"
                                        placeholder="+91 00000 00000"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white"
                                        placeholder="you@company.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name</label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white"
                                        placeholder="Your organization"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Message / Requirements</label>
                                <textarea
                                    name="requirements"
                                    rows="4"
                                    required
                                    value={formData.requirements}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white resize-none"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className={`w-full py-4 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2 ${status === 'submitting'
                                        ? 'bg-slate-400 cursor-not-allowed'
                                        : 'bg-primary hover:bg-emerald-600 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 active:scale-[0.98]'
                                    }`}
                            >
                                {status === 'submitting' ? 'Sending...' : (
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
                                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                                        <CheckCircle size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                                    <p className="text-slate-500 text-center max-w-xs">We have received your enquiry and will get back to you shortly.</p>
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
