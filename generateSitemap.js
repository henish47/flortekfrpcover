import { products } from './src/data/products.js';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://www.flortekfrpcover.com';

const generateSitemap = () => {
    // 1. Static & SEO Landing Routes
    const staticRoutes = [
        { url: '', changefreq: 'weekly', priority: 1.0 },
        { url: '/about', changefreq: 'monthly', priority: 0.8 },
        { url: '/products', changefreq: 'daily', priority: 0.9 },
        { url: '/sizes', changefreq: 'monthly', priority: 0.8 },
        { url: '/installation', changefreq: 'monthly', priority: 0.8 },
        { url: '/applications', changefreq: 'monthly', priority: 0.8 },
        { url: '/reviews', changefreq: 'monthly', priority: 0.7 },
        { url: '/contact', changefreq: 'monthly', priority: 0.8 },
        { url: '/sitemap', changefreq: 'monthly', priority: 0.5 },
        { url: '/faq', changefreq: 'weekly', priority: 0.8 },
        { url: '/frp-manhole-covers', changefreq: 'weekly', priority: 0.9 },
        { url: '/frp-drain-covers', changefreq: 'weekly', priority: 0.9 },
        { url: '/frp-cable-trench-covers', changefreq: 'weekly', priority: 0.9 },
        { url: '/heavy-duty-frp-covers', changefreq: 'weekly', priority: 0.9 },
        { url: '/frp-cover-exporter', changefreq: 'weekly', priority: 0.9 },
        { url: '/frp-cover-manufacturer-india', changefreq: 'weekly', priority: 0.9 },
        { url: '/frp-cover-manufacturer-gujarat', changefreq: 'weekly', priority: 0.9 },
        { url: '/industrial-frp-covers', changefreq: 'weekly', priority: 0.9 },
        { url: '/municipal-frp-covers', changefreq: 'weekly', priority: 0.9 },
        { url: '/frp-vs-cast-iron-covers', changefreq: 'weekly', priority: 0.9 },
        { url: '/blog', changefreq: 'weekly', priority: 0.9 },
        { url: '/blog/top-10-frp-manhole-cover-manufacturers-india', changefreq: 'weekly', priority: 0.9 },
        { url: '/blog/best-frp-manhole-covers-industrial-applications', changefreq: 'weekly', priority: 0.9 },
        { url: '/blog/frp-vs-cast-iron-manhole-covers-comparison', changefreq: 'weekly', priority: 0.9 },
        { url: '/blog/how-to-choose-right-frp-manhole-cover', changefreq: 'weekly', priority: 0.9 },
        { url: '/blog/benefits-frp-covers-municipal-projects', changefreq: 'weekly', priority: 0.9 },
        { url: '/blog/frp-cover-price-guide-india', changefreq: 'weekly', priority: 0.9 },
        { url: '/blog/heavy-duty-frp-covers-features-applications', changefreq: 'weekly', priority: 0.9 },
        { url: '/blog/why-frp-covers-replacing-cast-iron', changefreq: 'weekly', priority: 0.9 },
    ];

    const allRoutes = [...staticRoutes];

    // 3. Generate XML
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `  <url>
    <loc>${BASE_URL}${route.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    // 4. Write to public/sitemap.xml
    const publicDir = path.resolve('public');
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir);
    }

    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent);
    console.log(`✅ Sitemap generated with ${allRoutes.length} URLs at public/sitemap.xml`);
};

generateSitemap();
