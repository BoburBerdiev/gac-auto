import { NextResponse } from 'next/server';

const baseUrl = 'https://yourwebsite.com'; // Replace with your site's URL

// Static pages
const staticPages = [
    { url: '/', lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: '/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: '/dealers', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: '/news', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: '/dealers-center', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: '/drive', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    { url: '/models', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.5 },
];

// Combine static and dynamic pages
export async function GET() {
    // // Fetch dynamic pages (if applicable)
    // const dynamicSlugs = await fetchDynamicSlugs();
    // const dynamicPages = dynamicSlugs.map(slug => ({
    //     url: `/models/${slug}`,
    //     lastModified: new Date(),
    //     changeFrequency: 'weekly',
    //     priority: 0.5,
    // }));

    // Combine static and dynamic pages
    const allPages = [...staticPages]; // Add dynamicPages if fetching dynamically

    // Generate XML
    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${allPages.map(({ url, lastModified, changeFrequency, priority }) => `
            <url>
                <loc>${baseUrl}${url}</loc>
                <lastmod>${new Date(lastModified).toISOString()}</lastmod>
                <changefreq>${changeFrequency}</changefreq>
                <priority>${priority}</priority>
            </url>
        `).join('')}
    </urlset>`;

    return new NextResponse(sitemapXml, {
        headers: {
            'Content-Type': 'text/xml',
        },
    });
}
