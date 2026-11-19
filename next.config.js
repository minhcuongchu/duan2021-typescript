/* eslint-disable */
const path = require('path')
const dotenv = require('dotenv')

const isProd = process.env.NODE_ENV === 'production'
if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: path.resolve(process.cwd(), '.env.production') })
} else {
  dotenv.config()
}

module.exports = {
  // Use the CDN in production and localhost for development.
  // assetPrefix: isProd ? `${process.env.BASE_URL}` : '',
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      { hostname: 'localhost' },
      { hostname: 'img.youtube.com' },
      { hostname: 'storage.googleapis.com' },
      { hostname: 'gravatar.com' },
      { hostname: '632466.sgp1.digitaloceanspaces.com' },
    ],
    // path: '/_next/image',
    loader: 'default',
  },
  i18n: {
    // These are all the locales you want to support in your application
    locales: ['vi', 'en'],
    // This is the default locale you want to be used when visiting a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'vi',
  },
}
