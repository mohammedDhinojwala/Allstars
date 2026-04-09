function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

     <url>
       <loc>https://www.alllstars.com</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <priority>1.0</priority>
     </url>

     <url>
       <loc>https://www.alllstars.com/about</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <priority>0.8</priority>
     </url>

     <url>
       <loc>https://www.alllstars.com/blog</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <priority>0.9</priority>
     </url>

     <url>
       <loc>https://www.alllstars.com/blog/what-is-spidering-in-seo</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <priority>0.8</priority>
     </url>

     <url>
       <loc>https://www.alllstars.com/contact</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <priority>0.7</priority>
     </url>

     <url>
       <loc>https://www.alllstars.com/work</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <priority>0.7</priority>
     </url>

   </urlset>`;
}

export default function SiteMap() {
  return null;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return { props: {} };
}