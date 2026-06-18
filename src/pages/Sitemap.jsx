import React from 'react';
import { Link } from 'react-router-dom';
import { Map, ChevronRight, ExternalLink } from 'lucide-react';
import SEO from '../components/common/SEO';
import { products } from '../data/products';

const Sitemap = () => {
    // Group products by category
    const productsByCategory = products.reduce((acc, product) => {
        const category = product.category;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(product);
        return acc;
    }, {});

    const mainLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Our Products', path: '/products' },
        { name: 'Applications', path: '/applications' },
        { name: 'Contact Us', path: '/contact' },
        { name: 'Reviews', path: '/reviews' },
        { name: 'Size Chart', path: '/sizes' },
        { name: 'Installation', path: '/installation' },
        { name: 'FAQ Support', path: '/faq' },
        { name: 'FRP Manhole Covers Guide', path: '/frp-manhole-covers' },
        { name: 'FRP Drain Covers Guide', path: '/frp-drain-covers' },
        { name: 'FRP Cable Trench Covers Guide', path: '/frp-cable-trench-covers' },
        { name: 'Heavy Duty FRP Covers Guide', path: '/heavy-duty-frp-covers' },
        { name: 'FRP Cover Exporter Guide', path: '/frp-cover-exporter' },
        { name: 'FRP Cover Manufacturer India Guide', path: '/frp-cover-manufacturer-india' },
        { name: 'FRP Cover Manufacturer Gujarat Guide', path: '/frp-cover-manufacturer-gujarat' },
        { name: 'Industrial FRP Covers Guide', path: '/industrial-frp-covers' },
        { name: 'Municipal FRP Covers Guide', path: '/municipal-frp-covers' },
        { name: 'FRP vs Cast Iron Covers Comparison', path: '/frp-vs-cast-iron-covers' },
        { name: 'Flortek Knowledge Hub / Blog', path: '/blog' },
        { name: 'Blog: Top 10 FRP Manhole Cover Manufacturers in India', path: '/blog/top-10-frp-manhole-cover-manufacturers-india' },
        { name: 'Blog: Best FRP Manhole Covers for Industrial Applications', path: '/blog/best-frp-manhole-covers-industrial-applications' },
        { name: 'Blog: FRP vs Cast Iron Manhole Covers: Complete Comparison', path: '/blog/frp-vs-cast-iron-manhole-covers-comparison' },
        { name: 'Blog: How to Choose the Right FRP Manhole Cover', path: '/blog/how-to-choose-right-frp-manhole-cover' },
        { name: 'Blog: Benefits of FRP Covers for Municipal Projects', path: '/blog/benefits-frp-covers-municipal-projects' },
        { name: 'Blog: FRP Cover Price Guide in India', path: '/blog/frp-cover-price-guide-india' },
        { name: 'Blog: Heavy Duty FRP Covers: Features and Applications', path: '/blog/heavy-duty-frp-covers-features-applications' },
        { name: 'Blog: Why FRP Covers are Replacing Cast Iron Covers', path: '/blog/why-frp-covers-replacing-cast-iron' },
    ];

    return (
        <div className="bg-white min-h-screen pt-24 pb-16 font-sans">
            <SEO
                title="Sitemap | Flortek Industries Private Limited"
                description="Navigate through Flortek Industries Private Limited's complete website structure. Find links to all our products, categories, and company information."
                keywords="Flortek Sitemap, Site Map, Website Navigation, Product List"
                canonicalUrl="https://flortekfrpcover.vercel.app/sitemap"
            />

            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-black text-black mb-4 flex items-center justify-center gap-3">
                        <Map className="text-black" size={40} />
                        Sitemap
                    </h1>
                    <p className="text-lg text-[#333333] max-w-2xl mx-auto">
                        Overview of Flortek Industries Private Limited website content and structure.
                    </p>
                    <div className="h-1 w-24 bg-black mx-auto mt-6 rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Main Navigation */}
                    <div className="bg-[#F5F5F5] rounded-2xl p-8 border border-[#D9D9D9] h-fit">
                        <h2 className="text-xl font-bold text-black mb-6 flex items-center gap-2 border-b border-[#D9D9D9] pb-4">
                            <span className="w-2 h-8 bg-black rounded-full" />
                            Main Pages
                        </h2>
                        <ul className="space-y-4">
                            {mainLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="flex items-center gap-3 text-[#333333] hover:text-black transition-colors group"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-black border border-[#D9D9D9]/50 group-hover:bg-black group-hover:text-white transition-colors">
                                            <ChevronRight size={16} />
                                        </div>
                                        <span className="font-medium group-hover:translate-x-1 transition-transform">{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Product Categories */}
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {Object.entries(productsByCategory).map(([category, items]) => (
                            <div key={category} className="bg-[#F5F5F5] rounded-2xl p-8 border border-[#D9D9D9] break-inside-avoid">
                                <h2 className="text-xl font-bold text-black mb-6 flex items-center gap-2 border-b border-[#D9D9D9] pb-4">
                                    <span className="w-2 h-8 bg-[#333333] rounded-full" />
                                    {category}
                                </h2>
                                <ul className="space-y-3">
                                    {items.map((product) => (
                                        <li key={product.id}>
                                            <Link
                                                to="/products"
                                                className="block text-[#333333] hover:text-black hover:underline text-sm transition-colors py-1 pl-4 border-l-2 border-transparent hover:border-black"
                                            >
                                                {product.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Additional Resources */}
                <div className="mt-12 bg-black rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Need detailed specifications?</h3>
                            <p className="text-[#D9D9D9] max-w-xl">
                                Download our comprehensive product brochure or technical data sheets for detailed load ratings and dimensions.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="/brochure.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-[#F5F5F5] transition-colors flex items-center gap-2"
                            >
                                <ExternalLink size={18} />
                                Download Brochure
                            </a>
                            <Link
                                to="/contact"
                                className="px-6 py-3 bg-black border-2 border-white text-white font-bold rounded-xl hover:bg-[#333333] transition-colors"
                            >
                                Contact Sales
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sitemap;
