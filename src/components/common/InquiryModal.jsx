import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle, Loader } from 'lucide-react';
import Button from '../common/Button';

const InquiryModal = ({ isOpen, onClose }) => {
    const [status, setStatus] = useState('idle'); // idle, submitting, success

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        const form = e.target;
        const formData = {
            name: form.elements.name.value,
            phone: form.elements.phone.value,
            email: form.elements.email.value,
            requirement: form.elements.requirement.value,
            _subject: "New Product Quote Request - Flortek Website"
        };

        try {
            const response = await fetch("https://formsubmit.co/ajax/henishpatel47@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setTimeout(() => {
                    onClose();
                    setStatus('idle');
                }, 3000);
            } else {
                setStatus('idle');
                alert("Something went wrong. Please try again or call us directly.");
            }
        } catch (error) {
            setStatus('idle');
            console.error("Submission error:", error);
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
                        <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                            <h3 className="text-xl font-bold text-primary">Get a Quote</h3>
                            <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-500">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-6">
                            {status === 'success' ? (
                                <div className="flex flex-col items-center justify-center py-8 text-center">
                                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                                        <CheckCircle size={32} />
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-800 mb-2">Request Sent!</h4>
                                    <p className="text-slate-500">We'll get back to you within 24 hours.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                                            <input required name="name" type="text" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all" placeholder="John Doe" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                                            <input required name="phone" type="tel" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all" placeholder="+91..." />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                        <input required name="email" type="email" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all" placeholder="john@company.com" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Requirement</label>
                                        <textarea required name="requirement" rows="3" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all" placeholder="Describe your requirement..."></textarea>
                                    </div>
                                    <Button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        variant="primary"
                                        className="w-full justify-center mt-2"
                                    >
                                        {status === 'submitting' ? (
                                            <>
                                                <Loader size={18} className="animate-spin mr-2" /> Sending...
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
