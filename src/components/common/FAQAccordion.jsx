import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const faqs = [
    {
        question: "What is an FRP Cover?",
        answer: "FRP stands for Fiber Reinforced Plastic. An FRP manhole cover is a lightweight, high-strength composite cover made of glass fibers, thermosetting resin, and special additives. It is engineered to replace traditional heavy cast iron or concrete covers, offering superior durability and ease of handling."
    },
    {
        question: "Why are FRP Covers better than Cast Iron Covers?",
        answer: "FRP covers are superior to Cast Iron covers because they are corrosion-resistant, significantly lighter (reducing handling injuries), have zero scrap value (which eliminates the risk of theft), are non-conductive, and offer a much longer service life without requiring maintenance or painting."
    },
    {
        question: "What are the advantages of FRP Manhole Covers?",
        answer: "Key advantages include an outstanding strength-to-weight ratio, longevity (30+ years), excellent weathering and UV resistance, non-slip textured surfaces, chemical inertness, cost-efficiency, and the ability to customize size, shape, and surface embossing."
    },
    {
        question: "What load capacities are available?",
        answer: "We manufacture covers conforming to international BS EN 124 load standards: A15 (1.5 Tons) for pedestrian zones, B125 (12.5 Tons) for car parks and residential driveways, C250 (25 Tons) for service stations and commercial vehicles, and D400 (40 Tons) for highways and heavy municipal roads."
    },
    {
        question: "Are custom sizes available?",
        answer: "Yes, we specialize in custom composite solutions. We can manufacture covers with custom dimensions, clear opening sizes, specific colors, load ratings, and custom company name/logo embossing to align with your project specifications."
    },
    {
        question: "Are FRP Covers corrosion resistant?",
        answer: "Yes, FRP is inherently non-corrosive. Our covers are completely immune to sewer gases, chemical wastewater, acids, alkalis, saltwater, and harsh weather conditions, making them ideal for petrochemical, wastewater, and coastal installations."
    },
    {
        question: "Where can FRP Covers be used?",
        answer: "They are suitable for municipal drainage networks, residential townships, commercial buildings, industrial factories, fuel stations, cable trenches, rainwater harvesting systems, and utility chambers."
    },
    {
        question: "How long do FRP Covers last?",
        answer: "Flortek FRP covers are designed for a service life exceeding 30 years. Our UV-stabilized resin mix prevents structural degradation from sunlight exposure, ensuring long-term strength and stability."
    },
    {
        question: "Are Flortek FRP Covers suitable for industrial applications?",
        answer: "Absolutely. Our heavy-duty composite designs are manufactured specifically to handle chemical runoff, fuel exposure, high-impact forces, and heavy commercial wheel loads in logistics yards and factory floors."
    },
    {
        question: "How can I request a quotation?",
        answer: "You can click the 'Get Quote' button on our website and fill out the inquiry form, contact us directly on WhatsApp at +91 80008 88620, or email your requirements to flortekindustries@gmail.com. We respond to all queries within 24 hours."
    }
];

const FAQAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="max-w-4xl mx-auto px-4">
            <div className="divide-y divide-[#D9D9D9] border-t border-b border-[#D9D9D9]">
                {faqs.map((faq, index) => {
                    const isOpen = activeIndex === index;
                    return (
                        <div key={index} className="py-5">
                            <button
                                className="w-full flex justify-between items-center text-left focus:outline-none group"
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={isOpen}
                            >
                                <span className="text-base md:text-lg font-bold text-black transition-colors duration-200 group-hover:text-black/70">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    size={20}
                                    className={`text-black shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                                />
                            </button>
                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-sm md:text-base text-[#333333] leading-relaxed pt-3 pr-8">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FAQAccordion;
