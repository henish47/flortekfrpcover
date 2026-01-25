import React from 'react';
import Section from '../components/common/Section';
import SEO from '../components/common/SEO';
import { Star, Quote, User, ThumbsUp } from 'lucide-react';

const Reviews = () => {
    const reviews = [
        {
            name: "Rajesh Kumar",
            role: "Civil Engineer",
            company: "BuildCon Pvt Ltd",
            rating: 5,
            date: "October 12, 2024",
            text: "We have been using Flortek's FRP manhole covers for our township projects in Ahmedabad. The quality is consistent, and the load capacity is exactly as specified. Much easier to handle than the old cast iron ones.",
            verified: true
        },
        {
            name: "Amit Shah",
            role: "Project Manager",
            company: "Urban Infrastructure",
            rating: 5,
            date: "September 28, 2024",
            text: "Excellent service from Flortek industries. We needed a custom size for a drainage project, and they delivered within a week. The fit and finish are perfect.",
            verified: true
        },
        {
            name: "Sneha Patel",
            role: "Landscape Architect",
            company: "Green Spaces Design",
            rating: 5,
            date: "November 5, 2024",
            text: "Aesthetically, these are the best covers available. The stone finish options blend seamlessly with our paving designs. Highly recommended for premium residential projects.",
            verified: true
        },
        {
            name: "Vikram Singh",
            role: "Contractor",
            company: "Singh Developers",
            rating: 4,
            date: "August 15, 2024",
            text: "Good robust product. We used the heavy-duty variants for the main driveway. No cracking or issues after 6 months of heavy traffic.",
            verified: true
        },
        {
            name: "Mehul Mehta",
            role: "Facility Manager",
            company: "Corporate Park",
            rating: 5,
            date: "December 01, 2024",
            text: "Switched all our society covers to Flortek. The best part is they don't get stolen like the iron ones, and they don't rust. Very happy with the decision.",
            verified: true
        },
        {
            name: "Anjali Gupta",
            role: "Procurement Officer",
            company: "City Municipal Corp",
            rating: 5,
            date: "July 20, 2024",
            text: "Standard compliant (IS 1726) products. We appreciate the transparency in load testing. Will definitely procure again for future phases.",
            verified: true
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen ">
            <SEO
                title="Client Reviews & Testimonials | Flortek Industries"
                description="Read what engineers, architects, and contractors say about Flortek's FRP Manhole Covers and composite solutions."
            />

            {/* Header */}
            <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#109148]/20 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-black mb-6">What Our Clients Say</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Trusted by industry leaders for quality, durability, and reliability.
                    </p>
                </div>
            </section>

            {/* Reviews Grid */}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex text-yellow-400 gap-1">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} size={18} fill="currentColor" />
                                    ))}
                                </div>
                                <span className="text-xs text-slate-400 font-medium">{review.date}</span>
                            </div>

                            <div className="mb-6 flex-grow">
                                <Quote className="text-[#109148]/20 mb-3 rotate-180" size={40} />
                                <p className="text-slate-600 leading-relaxed italic">"{review.text}"</p>
                            </div>

                            <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-50">
                                <div className="bg-slate-100 p-3 rounded-full text-slate-500">
                                    <User size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800">{review.name}</h4>
                                    <div className="text-xs text-[#109148] font-bold uppercase tracking-wider">{review.role}</div>
                                    <div className="text-xs text-slate-400">{review.company}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* CTA */}
            <Section className="bg-white">
                <div className="bg-[#109148] rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 mix-blend-overlay"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-black mb-6">Join Our Satisfied Clients</h2>
                        <p className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto">
                            Experience the difference of premium quality FRP covers. Get a quote for your project today.
                        </p>
                        <a href="/contact" className="inline-block bg-white text-[#109148] px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-50 hover:scale-105 transition-all shadow-xl">
                            Start Your Project
                        </a>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Reviews;
