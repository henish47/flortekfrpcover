import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import { BookOpen, Calendar, Clock, ChevronRight, Home } from 'lucide-react';
import { motion } from 'framer-motion';

const blogPosts = [
    {
        id: 'top-10-manufacturers',
        title: 'Top 10 FRP Manhole Cover Manufacturers in India',
        slug: 'top-10-frp-manhole-cover-manufacturers-india',
        excerpt: 'An extensive evaluation of the top composite manhole cover manufacturers in India, examining factory certifications, load testing parameters, and wholesale pricing standards.',
        date: 'June 18, 2026',
        readTime: '8 min read',
        category: 'Industry Guide'
    },
    {
        id: 'industrial-applications',
        title: 'Best FRP Manhole Covers for Industrial Applications',
        slug: 'best-frp-manhole-covers-industrial-applications',
        excerpt: 'Analyze the chemical, physical, and thermal stresses that utility covers face in chemical plants, oil refineries, and logistic terminals, and find the best composite fits.',
        date: 'June 17, 2026',
        readTime: '7 min read',
        category: 'Technical Guide'
    },
    {
        id: 'frp-vs-cast-iron',
        title: 'FRP vs Cast Iron Manhole Covers: Complete Comparison',
        slug: 'frp-vs-cast-iron-manhole-covers-comparison',
        excerpt: 'A head-to-head comparison examining structural loading limits, theft prevention rates, manual handling weights, rust corrosion, and total cost of ownership.',
        date: 'June 15, 2026',
        readTime: '9 min read',
        category: 'Technical Comparison'
    },
    {
        id: 'how-to-choose',
        title: 'How to Choose the Right FRP Manhole Cover',
        slug: 'how-to-choose-right-frp-manhole-cover',
        excerpt: 'A comprehensive engineering handbook detailing clear opening sizing, frame seating, load classifications (A15 to D400), and custom color configurations.',
        date: 'June 12, 2026',
        readTime: '7 min read',
        category: 'Selection Guide'
    },
    {
        id: 'municipal-benefits',
        title: 'Benefits of FRP Covers for Municipal Projects',
        slug: 'benefits-frp-covers-municipal-projects',
        excerpt: 'Discover why civic municipal corporations are replacing concrete and metallic lids with composite covers to prevent open-manhole road hazards and support smart city IoT networks.',
        date: 'June 10, 2026',
        readTime: '6 min read',
        category: 'Public Works'
    },
    {
        id: 'price-guide',
        title: 'FRP Cover Price Guide in India',
        slug: 'frp-cover-price-guide-india',
        excerpt: 'A cost overview analyzing price ranges by cover sizes, load ratings, bulk volumes, custom logo moldings, and transport logistics amortization.',
        date: 'June 08, 2026',
        readTime: '6 min read',
        category: 'Price Guide'
    },
    {
        id: 'heavy-duty-features',
        title: 'Heavy Duty FRP Covers: Features and Applications',
        slug: 'heavy-duty-frp-covers-features-applications',
        excerpt: 'Uncover the structural formulation, fiberglass reinforcement layers, and high-pressure compression molds that allow heavy-duty covers to support up to 40 Tons of highway loading.',
        date: 'June 05, 2026',
        readTime: '7 min read',
        category: 'Engineering'
    },
    {
        id: 'why-replacing-cast-iron',
        title: 'Why FRP Covers are Replacing Cast Iron Covers',
        slug: 'why-frp-covers-replacing-cast-iron',
        excerpt: 'An investigation into the global transition from traditional cast iron to composite lids, highlighting theft prevention, rust resistance, and environmental carbon reduction.',
        date: 'June 01, 2026',
        readTime: '8 min read',
        category: 'Market Trends'
    }
];

const BlogIndex = () => {
    return (
        <div className="bg-white min-h-screen pt-24 md:pt-32 pb-20 font-sans">
            <SEO
                title="Knowledge Hub & Industrial Blog | Flortek"
                description="Explore technical articles, engineering guides, and product comparisons on Fiber Reinforced Polymer (FRP) manhole covers and composite drainage solutions."
                keywords="FRP Cover Blog, GRP Manhole Cover Articles, Composite Cover Guide, Indian Manhole Cover Market"
                schema={{
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "WebPage",
                            "name": "Knowledge Hub & Industrial Blog | Flortek",
                            "description": "Explore technical articles, engineering guides, and product comparisons on Fiber Reinforced Polymer (FRP) manhole covers and composite drainage solutions.",
                            "url": "https://www.flortekfrpcover.com/blog",
                            "breadcrumb": {
                                "@id": "https://www.flortekfrpcover.com/blog#breadcrumb"
                            }
                        },
                        {
                            "@type": "BreadcrumbList",
                            "@id": "https://www.flortekfrpcover.com/blog#breadcrumb",
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
                                    "name": "Blog",
                                    "item": "https://www.flortekfrpcover.com/blog"
                                }
                            ]
                        }
                    ]
                }}
                canonicalUrl="https://www.flortekfrpcover.com/blog"
            />

            {/* Breadcrumbs */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
                <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#333333]/70">
                    <Link to="/" className="hover:text-black flex items-center gap-1 transition-colors">
                        <Home size={12} /> Home
                    </Link>
                    <span>/</span>
                    <span className="text-black">Blog</span>
                </nav>
            </div>

            {/* Header section */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16 text-center md:text-left">
                <span className="inline-block px-3 py-1 rounded-full bg-[#F5F5F5] border border-[#D9D9D9] text-black text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                    Flortek Knowledge Center
                </span>
                <h1 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter mb-4">
                    Industrial Blog & Resources
                </h1>
                <p className="text-base md:text-lg text-[#333333] max-w-3xl leading-relaxed">
                    Access expert engineering articles, structural data sheets, materials comparative audits, and select sizing guides for Fiber Reinforced Polymer (FRP) and GRP utility covers.
                </p>
                <div className="h-1 w-24 bg-black rounded-full mt-6 hidden md:block" />
            </div>

            {/* Posts Grid */}
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, idx) => (
                        <motion.article 
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                            className="bg-white border border-[#D9D9D9] rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:shadow-xl transition-shadow relative overflow-hidden group"
                        >
                            <div>
                                <div className="flex items-center justify-between gap-2 mb-4">
                                    <span className="text-[9px] font-black uppercase tracking-widest bg-black text-white px-2.5 py-1 rounded-md">
                                        {post.category}
                                    </span>
                                    <div className="flex items-center gap-3 text-[11px] font-bold text-[#333333]/70">
                                        <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                                        <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                                    </div>
                                </div>
                                <h2 className="text-xl font-black text-black mb-3 group-hover:text-[#333333] transition-colors leading-tight uppercase tracking-tight">
                                    <Link to={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h2>
                                <p className="text-xs md:text-sm text-[#333333]/90 leading-relaxed mb-6 font-medium">
                                    {post.excerpt}
                                </p>
                            </div>
                            <Link 
                                to={`/blog/${post.slug}`}
                                className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-black hover:text-[#333333] transition-colors"
                            >
                                Read Full Article <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>

            {/* Banner Section */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mt-24">
                <div className="bg-[#F5F5F5] border border-[#D9D9D9] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                    <div>
                        <h3 className="text-2xl font-black uppercase tracking-tight text-black mb-2">Need a custom catalog?</h3>
                        <p className="text-sm text-[#333333] font-medium max-w-xl">
                            Our team provides custom engineering quotes, dimensions sizing details, loading certification tests, and color configurations for national and international projects.
                        </p>
                    </div>
                    <Link to="/contact" className="inline-flex items-center justify-center px-6 py-4 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#333333] transition-colors shrink-0">
                        Request Quote
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogIndex;
