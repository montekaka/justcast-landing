const Sitemap = {}
//https://www.hacksparrow.com/nodejs/generate-xml-sitemap.html

Sitemap.generateXml = (urls) => {  
  const priority = 0.5;
  const freq = 'monthly';
  const sitemaps = urls.map((url) => {
    return `<url><loc>${url}</loc><changefreq>${freq}</changefreq><priority>${priority}</priority></url>`;
  })

  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemaps.join('')}</urlset>`
  return xml;
}

module.exports = Sitemap;