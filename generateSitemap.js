import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://www.flortekfrpcover.com';

const generateSitemap = () => {
    // 1. Static & SEO Landing Routes with associated high-res images
    const staticRoutes = [
        {
            url: '',
            changefreq: 'weekly',
            priority: 1.0,
            images: [
                { loc: `${BASE_URL}/flortek_logo_2.webp`, title: "FLORTEK INDUSTRIES PVT. LTD. - FRP Manhole Cover Manufacturer" },
                { loc: `${BASE_URL}/images/square/FRP-24x24-2.5T-FW.png`, title: "FRP 24x24 Square Manhole Cover" }
            ]
        },
        {
            url: '/about',
            changefreq: 'monthly',
            priority: 0.8,
            images: [
                { loc: `${BASE_URL}/flortek_logo_2.webp`, title: "FLORTEK Manufacturing Facility Rajkot Gujarat" }
            ]
        },
        {
            url: '/products',
            changefreq: 'daily',
            priority: 0.95,
            images: [
                { loc: `${BASE_URL}/images/square/FRP-18x18-2.5T-FW.png`, title: "18x18 FRP Square Manhole Cover" },
                { loc: `${BASE_URL}/images/square/FRP-24x24-2.5T-FW.png`, title: "24x24 FRP Manhole Cover" },
                { loc: `${BASE_URL}/images/circular/FRP-18-2.5T-FW.png`, title: "18 Inch FRP Circular Manhole Cover" },
                { loc: `${BASE_URL}/images/circular/Round 24 5T.jpg.jpeg`, title: "24 Inch FRP Circular Manhole Cover" },
                { loc: `${BASE_URL}/images/rectangular/24 X 36 FRP.PNG`, title: "24x36 Heavy Duty FRP Trench Cover" }
            ]
        },
        {
            url: '/sizes',
            changefreq: 'monthly',
            priority: 0.85,
            images: [
                { loc: `${BASE_URL}/images/square/FRP-24x24-2.5T-FW.png`, title: "FRP Manhole Cover Dimensions and Clear Openings Chart" }
            ]
        },
        {
            url: '/installation',
            changefreq: 'monthly',
            priority: 0.8
        },
        {
            url: '/applications',
            changefreq: 'monthly',
            priority: 0.8
        },
        {
            url: '/reviews',
            changefreq: 'monthly',
            priority: 0.7
        },
        {
            url: '/contact',
            changefreq: 'monthly',
            priority: 0.8
        },
        {
            url: '/sitemap',
            changefreq: 'monthly',
            priority: 0.5
        },
        {
            url: '/faq',
            changefreq: 'weekly',
            priority: 0.8
        },
        {
            url: '/frp-manhole-covers',
            changefreq: 'weekly',
            priority: 0.95,
            images: [
                { loc: `${BASE_URL}/images/square/FRP-24x24-2.5T-FW.png`, title: "FRP Manhole Covers Manufacturer in India" }
            ]
        },
        {
            url: '/frp-drain-covers',
            changefreq: 'weekly',
            priority: 0.95,
            images: [
                { loc: `${BASE_URL}/images/square/FRP-18x18-2.5T-FW.png`, title: "FRP Drain Covers and Storm Water Gratings" }
            ]
        },
        {
            url: '/frp-cable-trench-covers',
            changefreq: 'weekly',
            priority: 0.9,
            images: [
                { loc: `${BASE_URL}/images/rectangular/24 X 36 FRP.PNG`, title: "FRP Cable Trench Covers" }
            ]
        },
        {
            url: '/heavy-duty-frp-covers',
            changefreq: 'weekly',
            priority: 0.95,
            images: [
                { loc: `${BASE_URL}/images/circular/FRP 600 BS EN_124_B125.png`, title: "Heavy Duty FRP Covers BS EN 124 D400 C250" }
            ]
        },
        {
            url: '/frp-cover-exporter',
            changefreq: 'weekly',
            priority: 0.9
        },
        {
            url: '/frp-cover-manufacturer-india',
            changefreq: 'weekly',
            priority: 0.95,
            images: [
                { loc: `${BASE_URL}/flortek_logo_2.webp`, title: "Top FRP Manhole Cover Manufacturer India" }
            ]
        },
        {
            url: '/frp-cover-manufacturer-gujarat',
            changefreq: 'weekly',
            priority: 0.95,
            images: [
                { loc: `${BASE_URL}/flortek_logo_2.webp`, title: "FRP Manhole Cover Factory Rajkot Gujarat" }
            ]
        },
        {
            url: '/industrial-frp-covers',
            changefreq: 'weekly',
            priority: 0.9
        },
        {
            url: '/municipal-frp-covers',
            changefreq: 'weekly',
            priority: 0.9
        },
        {
            url: '/frp-vs-cast-iron-covers',
            changefreq: 'weekly',
            priority: 0.9
        },
        {
            url: '/blog',
            changefreq: 'weekly',
            priority: 0.9
        },
        {
            url: '/blog/top-10-frp-manhole-cover-manufacturers-india',
            changefreq: 'weekly',
            priority: 0.9
        },
        {
            url: '/blog/best-frp-manhole-covers-industrial-applications',
            changefreq: 'weekly',
            priority: 0.9
        },
        {
            url: '/blog/frp-vs-cast-iron-manhole-covers-comparison',
            changefreq: 'weekly',
            priority: 0.9
        },
        {
            url: '/blog/how-to-choose-right-frp-manhole-cover',
            changefreq: 'weekly',
            priority: 0.9
        },
        {
            url: '/blog/benefits-frp-covers-municipal-projects',
            changefreq: 'weekly',
            priority: 0.9
        },
        {
            url: '/blog/frp-cover-price-guide-india',
            changefreq: 'weekly',
            priority: 0.9
        },
        {
            url: '/blog/heavy-duty-frp-covers-features-applications',
            changefreq: 'weekly',
            priority: 0.9
        },
        {
            url: '/blog/why-frp-covers-replacing-cast-iron',
            changefreq: 'weekly',
            priority: 0.9
        }
    ];

    const allRoutes = [...staticRoutes];

    // 2. Generate XML with Image Sitemap extension
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${allRoutes.map(route => `  <url>
    <loc>${BASE_URL}${route.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>${route.images && route.images.length > 0 ? '\n' + route.images.map(img => `    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
    </image:image>`).join('\n') : ''}
  </url>`).join('\n')}
</urlset>`;

    // 3. Write to public/sitemap.xml
    const publicDir = path.resolve('public');
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir);
    }

    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent);
    console.log(`✅ Google Image-enabled Sitemap generated with ${allRoutes.length} URLs at public/sitemap.xml`);
};

generateSitemap();
