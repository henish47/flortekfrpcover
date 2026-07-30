import React from 'react';
import Section from '../components/common/Section';
import SEO from '../components/common/SEO';
import GoogleReviews from '../components/home/GoogleReviews';
import { Star, Quote, User, ExternalLink } from 'lucide-react';

const Reviews = () => {
    return (
        <div className="bg-white min-h-screen font-sans pt-0">
            <SEO
                title="Client Reviews & Testimonials | FLORTEK INDUSTRIES PVT. LTD."
                description="Read what engineers, architects, and contractors say about Flortek's FRP Manhole Covers and composite solutions."
            />

            {/* Hero Section */}
            <section className="bg-[#1B8036] text-white py-20 relative overflow-hidden border-b border-[#145C27]">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">What Our Clients Say</h1>
                    <p className="text-lg md:text-xl text-white/90 font-medium max-w-2xl mx-auto leading-relaxed">
                        Trusted by industry leaders for quality, durability, and reliability.
                    </p>
                    <div className="mt-8">
                        <a
                            href="https://g.page/r/CXduO0ff9Z7oEAE/review"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#FFC700] hover:bg-[#E6B200] text-[#0B1B3D] font-extrabold uppercase tracking-wider text-xs rounded-xl transition-all shadow-lg active:scale-95"
                        >
                            Review Us On Google <ExternalLink size={16} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Main Google Business Reviews Component */}
            <GoogleReviews />

            {/* CTA Section */}
            <Section className="bg-white py-16">
                <div className="bg-[#1B8036] rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-xl border border-[#145C27]">
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tight">Join Our Satisfied Clients</h2>
                        <p className="text-white/90 text-base md:text-lg mb-10 font-medium leading-relaxed">
                            Experience the difference of premium quality FRP covers. Get a quote for your project today.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a href="/contact" className="inline-block bg-[#FFC700] text-[#0B1B3D] px-8 py-4 rounded-xl font-extrabold text-xs uppercase tracking-wider hover:bg-[#E6B200] transition-all shadow-md">
                                Get a Fast Quote
                            </a>
                            <a
                                href="https://g.page/r/CXduO0ff9Z7oEAE/review"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-white text-[#0B1B3D] px-8 py-4 rounded-xl font-extrabold text-xs uppercase tracking-wider hover:bg-[#F5F5F5] transition-all shadow-md"
                            >
                                Leave Google Review <ExternalLink size={14} />
                            </a>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Reviews;
