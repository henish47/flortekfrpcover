import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle, Loader } from 'lucide-react';
import Button from '../common/Button';

const InquiryModal = ({ isOpen, onClose }) => {
    const [status, setStatus] = useState('idle'); // idle, submitting, success

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const form = e.target;
        const name = form.elements.name.value.trim();
        const phone = form.elements.phone.value.trim();
        const email = form.elements.email.value.trim();
        const requirement = form.elements.requirement.value.trim();

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
        if (!requirement) {
            alert("Please enter your requirement.");
            return;
        }

        setStatus('submitting');

        const formData = new FormData(form);
        formData.append("access_key", "448d2ed5-cd76-47be-b441-3b9e6279a06c");
        formData.append("subject", "New Quote Request | FLORTEK INDUSTRIES PVT. LTD.");
        formData.append("from_name", "FLORTEK Industries PVT LTD");
        formData.append("message", requirement); // Prominent message field for Web3Forms

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setStatus('success');
                form.reset();
                setTimeout(() => {
                    onClose();
                    setStatus('idle');
                }, 5000);
            } else {
                setStatus('idle');
                alert(data.message || "Something went wrong. Please try again or call us directly.");
            }
        } catch (error) {
            setStatus('idle');
            console.error("Submission error:", error);
            alert("Connection error. Please try again later.");
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="px-6 py-4 border-b border-[#0B1B3D]/10 flex justify-between items-center bg-[#FFC700]">
                            <h3 className="text-xl font-black text-[#0B1B3D]">Get a Quote</h3>
                            <button onClick={onClose} className="p-2 hover:bg-[#E6B200] rounded-full transition-colors text-[#0B1B3D]">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-6">
                            {status === 'success' ? (
                                <div className="flex flex-col items-center justify-center py-8 text-center animate-fade-in">
                                    <div className="w-16 h-16 bg-[#1B8036] text-white rounded-full flex items-center justify-center mb-4 shadow-lg shadow-[#1B8036]/30">
                                        <CheckCircle size={32} />
                                    </div>
                                    <h4 className="text-xl font-black text-[#0B1B3D] mb-2">Quote Request Submitted Successfully!</h4>
                                    <p className="text-black mb-1 font-medium">Thank you for contacting FLORTEK INDUSTRIES PVT. LTD.</p>
                                    <p className="text-black text-sm">We'll contact you shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1">Name</label>
                                            <input required name="name" type="text" className="w-full px-4 py-2.5 rounded-xl border border-[#D9D9D9] focus:border-[#1B8036] focus:ring-1 focus:ring-[#1B8036] outline-none transition-all text-black font-medium" placeholder="John Doe" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1">Phone</label>
                                            <input required name="phone" type="tel" className="w-full px-4 py-2.5 rounded-xl border border-[#D9D9D9] focus:border-[#1B8036] focus:ring-1 focus:ring-[#1B8036] outline-none transition-all text-black font-medium" placeholder="+91..." />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1">Email</label>
                                            <input required name="email" type="email" className="w-full px-4 py-2.5 rounded-xl border border-[#D9D9D9] focus:border-[#1B8036] focus:ring-1 focus:ring-[#1B8036] outline-none transition-all text-black font-medium" placeholder="john@company.com" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1">Country</label>
                                            <select required name="country" className="w-full px-4 py-2.5 rounded-xl border border-[#D9D9D9] focus:border-[#1B8036] focus:ring-1 focus:ring-[#1B8036] outline-none transition-all bg-white text-black font-medium h-[44px]">
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
                                        <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1">Requirement</label>
                                        <textarea required name="requirement" rows="3" className="w-full px-4 py-2.5 rounded-xl border border-[#D9D9D9] focus:border-[#1B8036] focus:ring-1 focus:ring-[#1B8036] outline-none transition-all text-black font-medium" placeholder="Describe your requirement..."></textarea>
                                    </div>
                                    <Button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        variant="primary"
                                        className="w-full justify-center mt-2 font-black uppercase tracking-wider text-xs py-3.5"
                                    >
                                        {status === 'submitting' ? (
                                            <>
                                                <Loader size={18} className="animate-spin mr-2" /> Submitting...
                                            </>
                                        ) : (
                                            <>
                                                Send Request <Send size={18} className="ml-2" />
                                            </>
                                        )}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default InquiryModal;
