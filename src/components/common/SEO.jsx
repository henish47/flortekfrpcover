import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { seoData } from '../../utils/seoData';

const SEO = ({ title: propTitle, description: propDescription, keywords: propKeywords, type, schema, canonicalUrl }) => {
    const location = useLocation();
    const pathname = location.pathname;
    const siteTitle = "Flortek Industries";
    const domain = "https://www.flortekfrpcover.com";

    // 1. Fetch metadata from centralized database or fall back to props
    const pageMeta = seoData[pathname] || {};
    const seoTitle = pageMeta.title || propTitle || "FRP Manhole Covers Manufacturer | Flortek Industries";
    const seoDescription = pageMeta.description || propDescription || "Flortek Industries is a premier manufacturer of high-quality FRP and composite manhole covers in Rajkot, Gujarat. Built for heavy-duty infrastructure.";
    const seoKeywords = pageMeta.keywords || propKeywords || "FRP Manhole Cover, BMC Manhole Cover, Steel Manhole Cover, Drainage Grating, Flortek";

    // 2. Generate clean canonical URL (remove trailing slash for consistency)
    const baseCanonical = canonicalUrl || `${domain}${pathname}`;
    const cleanUrl = baseCanonical.endsWith('/') && baseCanonical.length > domain.length 
        ? baseCanonical.slice(0, -1) 
        : baseCanonical;

    // 3. Build Schema Graph
    const graph = [];

    // WebSite Schema
    const websiteSchema = {
        "@type": "WebSite",
        "@id": `${domain}/#website`,
        "url": domain,
        "name": "Flortek Industries Private Limited",
        "description": "Manufacturer of high-quality FRP, BMC, & Steel Manhole Covers",
        "publisher": {
            "@id": `${domain}/#organization`
        },
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${domain}/products?search={search_term_string}`
            },
            "query-input": "required name=search_term_string"
        }
    };
    graph.push(websiteSchema);

    // Organization Schema
    const organizationSchema = {
        "@type": "Organization",
        "@id": `${domain}/#organization`,
        "name": "Flortek Industries Private Limited",
        "url": domain,
        "logo": {
            "@type": "ImageObject",
            "@id": `${domain}/#logo`,
            "url": `${domain}/images/logo.png`,
            "caption": "Flortek Industries Private Limited"
        },
        "image": {
            "@id": `${domain}/#logo`
        },
        "email": "flortekindustries@gmail.com",
        "telephone": "+91-8000888620",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Radhe Industrial Zone, Survey No.99/1-2, Plot No.4/37, Veraval Shapar",
            "addressLocality": "Rajkot",
            "addressRegion": "Gujarat",
            "postalCode": "360024",
            "addressCountry": "IN"
        },
        "sameAs": [
            "https://www.youtube.com/@flortekindustries7143",
            "https://wa.me/919724035200?text=Hello%20Flortek%2C%20I%20visited%20your%20website%20and%20am%20interested%20in%20your%20FRP%20products.%20Please%20provide%20more%20details.",
            "https://www.instagram.com/flortek_frp_manhole_cover?igsh=bTV6dDkzandraTgy"
        ]
    };
    graph.push(organizationSchema);

    // LocalBusiness Schema
    const localBusinessSchema = {
        "@type": "LocalBusiness",
        "@id": `${domain}/#localbusiness`,
        "name": "Flortek Industries Private Limited",
        "image": `${domain}/images/logo.png`,
        "url": domain,
        "telephone": "+91-8000888620",
        "email": "flortekindustries@gmail.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Radhe Industrial Zone, Survey No.99/1-2, Plot No.4/37, Veraval Shapar",
            "addressLocality": "Rajkot",
            "addressRegion": "Gujarat",
            "postalCode": "360024",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 22.1509449,
            "longitude": 70.7968815
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            "opens": "09:00",
            "closes": "18:00"
        }
    };
    graph.push(localBusinessSchema);

    // WebPage Schema
    const webpageSchema = {
        "@type": "WebPage",
        "@id": `${cleanUrl}/#webpage`,
        "url": cleanUrl,
        "name": seoTitle,
        "description": seoDescription,
        "isPartOf": {
            "@id": `${domain}/#website`
        },
        "publisher": {
            "@id": `${domain}/#organization`
        },
        "author": {
            "@id": `${domain}/#organization`
        },
        "creator": [
            {
                "@type": "Person",
                "name": "Naresh Savaliya",
                "jobTitle": "Co-Founder & Managing Director",
                "worksFor": {
                    "@id": `${domain}/#organization`
                }
            },
            {
                "@type": "Person",
                "name": "Nikunj Savaliya",
                "jobTitle": "Co-Founder & Director",
                "worksFor": {
                    "@id": `${domain}/#organization`
                }
            }
        ],
        "about": [
            {
                "@type": "Thing",
                "name": "Fiber Reinforced Plastic",
                "sameAs": "https://en.wikipedia.org/wiki/Fiber-reinforced_plastic"
            },
            {
                "@type": "Thing",
                "name": "Manhole Cover",
                "sameAs": "https://en.wikipedia.org/wiki/Manhole_cover"
            }
        ],
        "mentions": [
            {
                "@type": "Thing",
                "name": "Manufacturing",
                "sameAs": "https://en.wikipedia.org/wiki/Manufacturing"
            },
            {
                "@type": "Thing",
                "name": "Infrastructure",
                "sameAs": "https://en.wikipedia.org/wiki/Infrastructure"
            },
            {
                "@type": "Thing",
                "name": "Drainage",
                "sameAs": "https://en.wikipedia.org/wiki/Drainage"
            },
            {
                "@type": "Thing",
                "name": "Road Safety",
                "sameAs": "https://en.wikipedia.org/wiki/Road_safety"
            },
            {
                "@type": "Thing",
                "name": "Municipal Engineering",
                "sameAs": "https://en.wikipedia.org/wiki/Municipal_engineering"
            }
        ]
    };

    if (pathname !== '/') {
        webpageSchema.breadcrumb = {
            "@id": `${cleanUrl}/#breadcrumb`
        };
    }
    graph.push(webpageSchema);

    // BreadcrumbList Schema (for internal pages)
    if (pathname !== '/') {
        const pathSegments = pathname.split('/').filter(Boolean);
        const breadcrumbElements = [];

        // Step 1: Home
        breadcrumbElements.push({
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": domain
        });

        // Labels mapping
        const breadcrumbNames = {
            "about": "About Us",
            "products": "Products",
            "sizes": "Size Chart",
            "installation": "Installation",
            "applications": "Applications",
            "reviews": "Reviews",
            "contact": "Contact Us",
            "sitemap": "Sitemap",
            "faq": "FAQ Support",
            "frp-manhole-covers": "FRP Manhole Covers",
            "frp-drain-covers": "FRP Drain Covers",
            "frp-cable-trench-covers": "FRP Cable Trench Covers",
            "heavy-duty-frp-covers": "Heavy Duty FRP Covers",
            "frp-cover-exporter": "FRP Cover Exporter",
            "frp-cover-manufacturer-india": "FRP Cover Manufacturer India",
            "frp-cover-manufacturer-gujarat": "FRP Cover Manufacturer Gujarat",
            "industrial-frp-covers": "Industrial FRP Covers",
            "municipal-frp-covers": "Municipal FRP Covers",
            "frp-vs-cast-iron-covers": "FRP vs Cast Iron Covers",
            "blog": "Blog",
            "top-10-frp-manhole-cover-manufacturers-india": "Top 10 Manufacturers India",
            "best-frp-manhole-covers-industrial-applications": "Industrial Applications",
            "frp-vs-cast-iron-manhole-covers-comparison": "FRP vs Cast Iron Comparison",
            "how-to-choose-right-frp-manhole-cover": "How to Choose FRP Cover",
            "benefits-frp-covers-municipal-projects": "Municipal Benefits",
            "frp-cover-price-guide-india": "FRP Cover Price Guide",
            "heavy-duty-frp-covers-features-applications": "Heavy Duty Features",
            "why-frp-covers-replacing-cast-iron": "Replacing Cast Iron"
        };

        let accumulatedPath = "";
        pathSegments.forEach((segment, index) => {
            accumulatedPath += `/${segment}`;
            const label = breadcrumbNames[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
            breadcrumbElements.push({
                "@type": "ListItem",
                "position": index + 2,
                "name": label,
                "item": `${domain}${accumulatedPath}`
            });
        });

        const breadcrumbSchema = {
            "@type": "BreadcrumbList",
            "@id": `${cleanUrl}/#breadcrumb`,
            "itemListElement": breadcrumbElements
        };
        graph.push(breadcrumbSchema);
    }

    // Merge page-specific schemas if passed
    if (schema) {
        let items = [];
        if (schema["@graph"] && Array.isArray(schema["@graph"])) {
            items = schema["@graph"];
        } else if (Array.isArray(schema)) {
            items = schema;
        } else {
            items = [schema];
        }

        items.forEach(item => {
            const itemType = item["@type"];
            // Keep unique custom schemas (like FAQPage, ContactPage, etc.), skip standard/overridden ones
            if (itemType === "FAQPage" || itemType === "ContactPage" || !["WebPage", "BreadcrumbList", "Organization", "LocalBusiness", "WebSite"].includes(itemType)) {
                graph.push(item);
            }
        });
    }

    const finalSchema = {
        "@context": "https://schema.org",
        "@graph": graph
    };

    const ogImage = `${domain}/images/logo.png`;

    return (
        <Helmet>
            {/* Meta tags */}
            <title>{seoTitle}</title>
            <meta name="description" content={seoDescription} />
            {seoKeywords && <meta name="keywords" content={seoKeywords} />}
            <link rel="canonical" href={cleanUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type || "website"} />
            <meta property="og:title" content={seoTitle} />
            <meta property="og:description" content={seoDescription} />
            <meta property="og:url" content={cleanUrl} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:site_name" content="Flortek Industries" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seoTitle} />
            <meta name="twitter:description" content={seoDescription} />
            <meta name="twitter:image" content={ogImage} />

            {/* Structured Schema */}
            <script type="application/ld+json">
                {JSON.stringify(finalSchema)}
            </script>
        </Helmet>
    );
};

export default SEO;
