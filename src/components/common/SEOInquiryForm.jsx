import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Loader, MessageSquare, CheckCircle } from 'lucide-react';
import Button from './Button';

const SEOInquiryForm = ({ subject = "SEO Landing Page Inquiry" }) => {
    const [status, setStatus] = useState('idle'); // idle | submitting | success | error
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        city: '',
        requirement: ''
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
                    "Lead Source": subject,
                    "Customer Name": formData.name,
                    "Mobile Number": formData.phone,
                    "Email Address": formData.email,
                    "City / Location": formData.city,
                    "Project Requirements": formData.requirement,
                    _subject: `${subject}: ${formData.name} (${formData.city})`,
                    _template: "table"
                })
            });

            if (response.ok) {
                setStatus('success');
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    city: '',
                    requirement: ''
                });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
            console.error("Form submit error:", error);
        }
    };

    const handleWhatsApp = () => {
        const text = encodeURIComponent(`Hello Flortek, I am visiting your website and need a quote for FRP Covers. Please assist.`);
        window.open(`https://wa.me/918000888620?text=${text}`, '_blank');
    };

    return (
        <div className="bg-[#F5F5F5] border border-[#D9D9D9] rounded-[2rem] p-6 md:p-8 shadow-xl relative overflow-hidden font-sans text-black" id="seo-quote-form">
            <div className="mb-6">
                <span className="inline-block px-3 py-1 rounded-full bg-black text-white text-[9px] font-black uppercase tracking-wider mb-2">
                    Quick Inquiry
                </span>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-black leading-tight">
                    Need FRP Covers?
                </h3>
                <p className="text-xs md:text-sm text-[#333333] mt-1 font-bold">
                    Get Factory Direct Pricing from FLORTEK INDUSTRIES PVT. LTD.
                </p>
            </div>

            <AnimatePresence mode="wait">
                {status === 'success' ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="text-center py-12"
                    >
                        <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                            <CheckCircle size={32} />
                        </div>
                        <h4 className="text-2xl font-black uppercase tracking-tight text-black mb-2">Thank You!</h4>
                        <p className="text-sm text-[#333333] max-w-xs mx-auto leading-relaxed">
                            Your quotation request has been sent. Our technical sales desk will get back to you with custom pricing in a short while.
                        </p>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-[10px] font-black uppercase tracking-wider text-[#333333] mb-1">Your Name *</label>
                            <input
                                required
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 rounded-xl border border-[#D9D9D9] focus:border-black outline-none bg-white text-sm font-medium transition-all"
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-wider text-[#333333] mb-1">Mobile Number *</label>
                                <input
                                    required
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 rounded-xl border border-[#D9D9D9] focus:border-black outline-none bg-white text-sm font-medium transition-all"
                                    placeholder="Enter 10-digit mobile number"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-wider text-[#333333] mb-1">Email Address *</label>
                                <input
                                    required
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 rounded-xl border border-[#D9D9D9] focus:border-black outline-none bg-white text-sm font-medium transition-all"
                                    placeholder="you@company.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-[10px] font-black uppercase tracking-wider text-[#333333] mb-1">City / Location *</label>
                            <input
                                required
                                name="city"
                                type="text"
                                value={formData.city}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 rounded-xl border border-[#D9D9D9] focus:border-black outline-none bg-white text-sm font-medium transition-all"
                                placeholder="E.g. Rajkot, Dubai, Houston"
                            />
                        </div>

                        <div>
                            <label className="block text-[10px] font-black uppercase tracking-wider text-[#333333] mb-1">Requirement Details *</label>
                            <textarea
                                required
                                name="requirement"
                                rows="3"
                                value={formData.requirement}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 rounded-xl border border-[#D9D9D9] focus:border-black outline-none bg-white text-xs font-medium resize-none transition-all"
                                placeholder="Specify sizes, quantities, loading classes (E.g. A15, B125, C250, D400)..."
                            ></textarea>
                        </div>

                        {status === 'error' && (
                            <p className="text-xs text-red-500 text-center font-bold">
                                Error sending inquiry. Please try again or contact us directly.
                            </p>
                        )}

                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <Button
                                type="submit"
                                disabled={status === 'submitting'}
                                variant="primary"
                                className="w-full justify-center py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-black hover:bg-[#333333] text-white transition-colors"
                            >
                                {status === 'submitting' ? (
                                    <>
                                        <Loader size={14} className="animate-spin mr-2" /> Sending...
                                    </>
                                ) : (
                                    <>
                                        Get Free Quote <Send size={14} className="ml-2" />
                                    </>
                                )}
                            </Button>
                            <button
                                type="button"
                                onClick={handleWhatsApp}
                                className="w-full py-3.5 border border-[#D9D9D9] hover:bg-[#EAEAEA] text-black text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 bg-white"
                            >
                                <MessageSquare size={14} /> WhatsApp Inquiry
                            </button>
                        </div>
                    </form>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SEOInquiryForm;
