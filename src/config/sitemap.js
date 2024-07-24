// // import { NextResponse } from 'next/server';
// import { MetadataRoute } from "next";

// const baseUrl = 'https://abduganiev.uz'; // Replace with your site's URL

// // Static pages
// export default function sitemap() {
//   return [
//     { url: `${baseUrl}/`,lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
//     { url: `${baseUrl}/about`, lastModified: new Date(), chngeFrequency: 'monthly', priority: 0.8 },
//     { url: `${baseUrl}/dealers`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
//     { url: `${baseUrl}/news`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
//     { url: `${baseUrl}/dealers-center`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
//     { url: `${baseUrl}/drive`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
//     { url: `${baseUrl}/models`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.5 },
//   ]
// } 







// // // Combine static and dynamic pages
// // export async function GET() {
// //     // Uncomment and modify this if you have dynamic pages
// //     // const dynamicSlugs = await fetchDynamicSlugs();
// //     // const dynamicPages = dynamicSlugs.map(slug => ({
// //     //     url: `/models/${slug}`,
// //     //     lastModified: new Date(),
// //     //     changeFrequency: 'weekly',
// //     //     priority: 0.5,
// //     // }));

// //     const allPages = [...staticPages]; // Add dynamicPages if fetching dynamically

// //     const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
// //     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
// //         ${allPages.map(({ url, lastModified, changeFrequency, priority }) => `
// //             <url>
// //                 <loc>${baseUrl}${url}</loc>
// //                 <lastmod>${new Date(lastModified).toISOString()}</lastmod>
// //                 <changefreq>${changeFrequency}</changefreq>
// //                 <priority>${priority}</priority>
// //             </url>
// //         `).join('')}
// //     </urlset>`;

// //     return new NextResponse(sitemapXml, {
// //         headers: {
// //             'Content-Type': 'text/xml',
// //         },
// //     });
// // }


export default function sitemap() {
  return [
    {
      url: 'https://acme.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://acme.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://acme.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
}