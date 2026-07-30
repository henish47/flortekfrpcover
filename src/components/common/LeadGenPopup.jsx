import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MessageSquare, CheckCircle, Loader } from 'lucide-react';

const LeadGenPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [status, setStatus] = useState('idle'); // idle | submitting | success | error
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        company: '',
        country: 'India',
        requirement: ''
    });

    useEffect(() => {
        // Trigger after 12 seconds on the website, only if not seen in current session
        const hasSeen = sessionStorage.getItem('flortek_lead_seen');
        if (!hasSeen) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 120000); // seconds delay
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        sessionStorage.setItem('flortek_lead_seen', 'true');
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    const validateForm = () => {
        const tempErrors = {};
        if (!formData.name.trim()) tempErrors.name = "Name is required";
        if (!formData.phone.trim()) {
            tempErrors.phone = "Phone number is required";
        } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone.trim())) {
            tempErrors.phone = "Please enter a valid phone number (10-15 digits)";
        }
        if (!formData.requirement.trim()) tempErrors.requirement = "Requirement description is required";
        
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        if (status === 'submitting') return;

        setStatus('submitting');
        
        const formDataObj = new FormData();
        formDataObj.append("access_key", "448d2ed5-cd76-47be-b441-3b9e6279a06c");
        formDataObj.append("subject", "New Quote Request | FLORTEK INDUSTRIES PVT. LTD.");
        formDataObj.append("from_name", "FLORTEK Industries PVT LTD");
        
        formDataObj.append("Lead Source", "Homepage Lead Popup");
        formDataObj.append("name", formData.name.trim());
        formDataObj.append("phone", formData.phone.trim());
        formDataObj.append("company", formData.company || "N/A");
        formDataObj.append("country", formData.country);
        formDataObj.append("requirement", formData.requirement.trim());
        formDataObj.append("message", formData.requirement.trim());

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataObj
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setStatus('success');
                sessionStorage.setItem('flortek_lead_seen', 'true');
                setFormData({
                    name: '',
                    phone: '',
                    company: '',
                    country: 'India',
                    requirement: ''
                });
                // Automatically close success modal after 5 seconds
                setTimeout(() => {
                    setIsVisible(false);
                }, 5000);
            } else {
                setStatus('error');
            }
        } catch (err) {
            console.error("Popup submit error:", err);
            setStatus('error');
        }
    };

    const handleWhatsApp = () => {
        sessionStorage.setItem('flortek_lead_seen', 'true');
        const text = encodeURIComponent(`Hello Flortek, I visited your website and I am interested in your FRP products. Please provide more details.`);
        window.open(`https://wa.me/918000888620?text=${text}`, '_blank');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={handleClose}
                    />

                    {/* Card Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="bg-white text-black p-6 md:p-8 rounded-3xl border border-[#D9D9D9] max-w-md w-full relative z-10 shadow-2xl overflow-hidden font-sans"
                    >
                        {/* Close button */}
                        <button
                            className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#F5F5F5] transition-colors text-black"
                            onClick={handleClose}
                            aria-label="Close modal"
                        >
                            <X size={20} />
                        </button>

                        {status === 'success' ? (
                            <div className="text-center py-8">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-16 h-16 bg-[#1B8036] text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#1B8036]/30"
                                >
                                    <CheckCircle size={32} />
                                </motion.div>
                                <h3 className="text-2xl font-black uppercase tracking-tight mb-2 text-[#0B1B3D]">Quote Request Submitted Successfully!</h3>
                                <p className="text-sm text-black max-w-xs mx-auto mb-1 font-medium">
                                    Thank you for contacting FLORTEK INDUSTRIES PVT. LTD.
                                </p>
                                <p className="text-sm text-black max-w-xs mx-auto font-medium">
                                    We'll contact you shortly.
                                </p>
                            </div>
                        ) : (
                            <div>
                                <div className="mb-6">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFC700]/20 border border-[#FFC700] text-black text-[9px] font-black uppercase tracking-wider mb-3">
                                        Exclusive Request
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-none mb-1 text-black">
                                        Need FRP Covers?
                                    </h3>
                                    <p className="text-xs text-black font-bold uppercase tracking-wide">
                                        Get Free Quotation Today.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your Name *"
                                            className={`w-full px-4 py-3 rounded-xl border text-sm font-medium bg-[#F5F5F5] focus:bg-white text-black transition-all outline-none ${errors.name ? 'border-red-500' : 'border-[#D9D9D9] focus:border-[#1B8036]'}`}
                                        />
                                        {errors.name && <p className="text-[10px] text-red-500 mt-1 font-bold">{errors.name}</p>}
                                    </div>

                                    <div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Mobile Number *"
                                            className={`w-full px-4 py-3 rounded-xl border text-sm font-medium bg-[#F5F5F5] focus:bg-white text-black transition-all outline-none ${errors.phone ? 'border-red-500' : 'border-[#D9D9D9] focus:border-[#1B8036]'}`}
                                        />
                                        {errors.phone && <p className="text-[10px] text-red-500 mt-1 font-bold">{errors.phone}</p>}
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            placeholder="Company (Opt.)"
                                            className="w-full px-4 py-3 rounded-xl border border-[#D9D9D9] focus:border-[#1B8036] text-sm font-medium bg-[#F5F5F5] focus:bg-white text-black transition-all outline-none"
                                        />
                                        <select
                                            name="country"
                                            value={formData.country}
                                            onChange={handleChange}
                                            className="w-full px-3 py-3 rounded-xl border border-[#D9D9D9] focus:border-[#1B8036] text-sm font-medium bg-[#F5F5F5] focus:bg-white text-black transition-all outline-none"
                                        >
                                            <option value="India">India</option>
                                            <option value="United Arab Emirates">UAE</option>
                                            <option value="United States">USA</option>
                                            <option value="Saudi Arabia">KSA</option>
                                            <option value="Oman">Oman</option>
                                            <option value="Qatar">Qatar</option>
                                            <option value="Kuwait">Kuwait</option>
                                            <option value="Bahrain">Bahrain</option>
                                            <option value="Germany">Germany</option>
                                            <option value="United Kingdom">UK</option>
                                            <option value="Canada">Canada</option>
                                            <option value="Australia">Australia</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <textarea
                                            name="requirement"
                                            value={formData.requirement}
                                            onChange={handleChange}
                                            placeholder="Specify Sizing / Suffix Requirements *"
                                            rows="3"
                                            className={`w-full px-4 py-3 rounded-xl border text-sm font-medium bg-[#F5F5F5] focus:bg-white text-black transition-all outline-none resize-none ${errors.requirement ? 'border-red-500' : 'border-[#D9D9D9] focus:border-[#1B8036]'}`}
                                        />
                                        {errors.requirement && <p className="text-[10px] text-red-500 mt-1 font-bold">{errors.requirement}</p>}
                                    </div>

                                    {status === 'error' && (
                                        <p className="text-xs text-red-500 text-center font-bold">
                                            Something went wrong. Please try again.
                                        </p>
                                    )}

                                    <div className="flex flex-col gap-2 pt-2">
                                        <button
                                            type="submit"
                                            disabled={status === 'submitting'}
                                            className="w-full py-3.5 bg-[#1B8036] hover:bg-[#145C27] text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-md disabled:bg-gray-400"
                                        >
                                            {status === 'submitting' ? (
                                                <>
                                                    <Loader className="animate-spin" size={14} /> Submitting...
                                                </>
                                            ) : (
                                                "Get Free Quote"
                                            )}
                                        </button>

                                        <button
                                            type="button"
                                            onClick={handleWhatsApp}
                                            className="w-full py-3.5 border border-[#1B8036] text-[#1B8036] hover:bg-[#1B8036]/10 text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2"
                                        >
                                            <MessageSquare size={14} /> Contact on WhatsApp
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default LeadGenPopup;
