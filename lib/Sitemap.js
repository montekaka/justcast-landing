const Sitemap = {}
//https://www.hacksparrow.com/nodejs/generate-xml-sitemap.html

Sitemap.generateXml = (urls) => {
  const rootPath = process.env.REACT_APP_BASE_PATH;
  const priority = 0.5;
  const freq = 'monthly';
  const sitemaps = urls.map((url) => {
    return `<url><loc>${rootPath}/${url}</loc><changefreq>${freq}</changefreq><priority>${priority}</priority></url>`;
  })

  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemaps.join('')}</urlset>`
  return xml;
}

module.exports = Sitemap;