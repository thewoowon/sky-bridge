/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://skybrg.io",
  changefreq: "daily",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  priority: 1,
  exclude: ["/api/*",],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/*",],
      },
    ],
  },
};
