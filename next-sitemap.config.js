/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.gabrielkochem.adv.br',
  generateRobotsTxt: true,
  exclude: ['/login', '/dashboard', '/dashboard/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/login', '/dashboard', '/dashboard/*'],
      },
    ],
  },
}
