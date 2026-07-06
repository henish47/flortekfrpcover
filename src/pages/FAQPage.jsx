import React from 'react';
import SEO from '../components/common/SEO';
import FAQAccordion, { faqs } from '../components/common/FAQAccordion';
import { HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FAQPage = () => {
    const faqSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer
                    }
                }))
            },
            {
                "@type": "WebPage",
                "name": "Frequently Asked Questions (FAQ) | Flortek Industries Private Limited",
                "description": "Find answers to common questions about FRP manhole covers, load capacities, dimensions, custom designs, and industrial certifications.",
                "url": "https://www.flortekfrpcover.com/faq",
                "breadcrumb": {
                    "@id": "https://www.flortekfrpcover.com/faq#breadcrumb"
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.flortekfrpcover.com/faq#breadcrumb",
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
                        "name": "FAQ",
                        "item": "https://www.flortekfrpcover.com/faq"
                    }
                ]
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen pt-24 md:pt-32 pb-20 font-sans">
            <SEO
                title="Frequently Asked Questions (FAQ) | Flortek Industries Private Limited"
                description="Find answers to common questions about FRP manhole covers, load capacities, dimensions, custom designs, and industrial certifications."
                keywords="FRP Cover FAQ, Composite Cover Questions, FRP Load Capacities, Custom Manhole Covers Gujarat, Flortek FAQ"
                schema={faqSchema}
                canonicalUrl="https://www.flortekfrpcover.com/faq"
            />

            {/* Header Section */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5F5F5] border border-[#D9D9D9] text-black text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                        Support & Guidance
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black text-black mb-6 tracking-tight flex items-center justify-center gap-3">
                        <HelpCircle className="text-black" size={36} />
                        Frequently Asked Questions
                    </h1>
                    <p className="text-lg text-[#333333] max-w-2xl mx-auto leading-relaxed">
                        Have questions about composite infrastructure solutions? Explore detailed answers regarding durability, load capacities, sizing, and standards.
                    </p>
                    <div className="h-1 w-24 bg-black mx-auto mt-8 rounded-full" />
                </motion.div>
            </div>

            {/* Accordion Component */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                <FAQAccordion />
            </motion.div>

            <div className="max-w-4xl mx-auto px-4 mt-16 text-center border-t border-[#D9D9D9]/50 pt-10">
                <p className="text-sm font-bold text-[#333333]/80">
                    Need further technical details or dimensional drawings? Visit our {" "}
                    <Link to="/products" className="underline text-black hover:text-[#333333] transition-colors">Product Catalogue</Link>
                    {" "} or review the {" "}
                    <Link to="/sizes" className="underline text-black hover:text-[#333333] transition-colors">Standard Size Chart</Link>.
                    For bulk manufacturing queries and wholesale quotes, please {" "}
                    <Link to="/contact" className="underline text-black hover:text-[#333333] transition-colors">Contact Our Sales Team</Link>.
                </p>
            </div>
        </div>

    );
};

export default FAQPage;
