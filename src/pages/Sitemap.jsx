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
    ];

    return (
        <div className="bg-slate-50 min-h-screen pt-24 pb-16">
            <SEO
                title="Sitemap | Flortek Industries"
                description="Navigate through Flortek Industries' complete website structure. Find links to all our products, categories, and company information."
                keywords="Flortek Sitemap, Site Map, Website Navigation, Product List"
                canonicalUrl="https://flortekfrpcover.vercel.app/sitemap"
            />

            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 flex items-center justify-center gap-3">
                        <Map className="text-[#FFC107]" size={40} />
                        Sitemap
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Overview of Flortek Industries website content and structure.
                    </p>
                    <div className="h-1 w-24 bg-[#109148] mx-auto mt-6 rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Main Navigation */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 h-fit">
                        <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2 border-b border-slate-100 pb-4">
                            <span className="w-2 h-8 bg-[#109148] rounded-full" />
                            Main Pages
                        </h2>
                        <ul className="space-y-4">
                            {mainLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="flex items-center gap-3 text-slate-600 hover:text-[#109148] transition-colors group"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#109148]/10 group-hover:text-[#109148] transition-colors">
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
                            <div key={category} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 break-inside-avoid">
                                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2 border-b border-slate-100 pb-4">
                                    <span className="w-2 h-8 bg-[#FFC107] rounded-full" />
                                    {category}
                                </h2>
                                <ul className="space-y-3">
                                    {items.map((product) => (
                                        <li key={product.id}>
                                            <Link
                                                to={`/products/${product.id}`}
                                                className="block text-slate-500 hover:text-[#109148] hover:underline text-sm transition-colors py-1 pl-4 border-l-2 border-transparent hover:border-[#F9C019]"
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
                <div className="mt-12 bg-[#109148] rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Need detailed specifications?</h3>
                            <p className="text-green-50 max-w-xl">
                                Download our comprehensive product brochure or technical data sheets for detailed load ratings and dimensions.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="/brochure.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-white text-[#109148] font-bold rounded-xl hover:bg-green-50 transition-colors flex items-center gap-2"
                            >
                                <ExternalLink size={18} />
                                Download Brochure
                            </a>
                            <Link
                                to="/contact"
                                className="px-6 py-3 bg-[#109148] border-2 border-white text-white font-bold rounded-xl hover:bg-[#0c7539] transition-colors"
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
