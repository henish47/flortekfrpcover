import { products } from './src/data/products.js';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://flortekfrpcover.vercel.app';

const generateSitemap = () => {
    // 1. Static Routes
    const staticRoutes = [
        { url: '', changefreq: 'weekly', priority: 1.0 },
        { url: '/about', changefreq: 'monthly', priority: 0.8 },
        { url: '/products', changefreq: 'daily', priority: 0.9 },
        { url: '/applications', changefreq: 'monthly', priority: 0.7 },
        { url: '/contact', changefreq: 'yearly', priority: 0.6 },
    ];

    // 2. Dynamic Product Routes
    const productRoutes = products.map(product => ({
        url: `/products/${product.id}`,
        changefreq: 'weekly',
        priority: 0.8
    }));

    const allRoutes = [...staticRoutes, ...productRoutes];

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
