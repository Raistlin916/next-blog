const path = require('path')

const withMDX = require('@zeit/next-mdx')({
  extension: /.mdx?$/
})
const basePath = process.env.NEXT_ENV === 'production' ? '/next-blog' : ''
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  assetPrefix: basePath,
  publicRuntimeConfig: {
    basePath
  },
  // assetPrefix: '/next-blog',
  webpack(config) {
    config.resolve.alias['pages'] = path.join(__dirname, 'pages')
    config.resolve.alias['common'] = path.join(__dirname, 'common')
    return config
  }
})
