import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, name, type, schema, canonicalUrl }) => {
    const siteTitle = "Flortek Industries";
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const currentUrl = canonicalUrl || typeof window !== 'undefined' ? window.location.href : '';

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{fullTitle}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
            <link rel="canonical" href={currentUrl} />
            {/* End standard metadata tags */}

            {/* Facebook tags */}
            <meta property="og:type" content={type || "website"} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={currentUrl} />
            {/* End Facebook tags */}

            {/* Twitter tags */}
            <meta name="twitter:creator" content={name || siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            {/* End Twitter tags */}

            {/* Schema.org Structured Data */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
