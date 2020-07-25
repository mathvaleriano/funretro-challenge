const sitemap = require('nextjs-sitemap-generator');

sitemap({
  baseUrl: 'https://funretro-challenge.vercel.app/',
  ignoredPaths: ['api', '_app.tsx'],
  pagesDirectory: __dirname + "/src/pages",
  targetDirectory: 'public/',
  ignoredExtensions: [
    'png',
    'jpg'
  ],
  sitemapStylesheet: [
    {
      type: "text/css",
      styleFile: "/test/styles.css"
    },
    {
      type: "text/xsl",
      styleFile: "test/test/styles.xls"
    }
  ]
});