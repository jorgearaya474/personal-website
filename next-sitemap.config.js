// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://jorgearaya.com',
  generateRobotsTxt: true,
  transform: async (config, path) => {
    const priorities = {
      '/': 1.0,
      '/about': 0.8,
      '/contact': 0.8,
      '/projects': 0.8,
      '/blog': 0.7,
      '/recent-work': 0.5,
    };

    const changefreqs = {
      '/': 'weekly',
      '/blog': 'weekly',
    };

    return {
      loc: path,
      changefreq: changefreqs[path] ?? 'monthly',
      priority: priorities[path] ?? 0.6,
      lastmod: new Date().toISOString(),
    };
  },
};
