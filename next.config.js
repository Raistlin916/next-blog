const path = require('path')
const fm = require('front-matter')
const glob = require('glob')
const fs = require('fs')

const files = glob.sync('pages/**/*.{md,mdx}')
const articles = files.map(filename => {
  const content = fs.readFileSync(filename)
  const path = filename
    .replace(/^pages/, '')
    .replace(/\.[^.]+$/, '')
    .replace(/\/index$/, '')
  return {
    path,
    attributes: fm(String(content)).attributes
  }
})

const basePath = process.env.NEXT_ENV === 'production' ? '/next-blog' : ''

module.exports = {
  assetPrefix: basePath,
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  publicRuntimeConfig: {
    basePath,
    articles,
    blogTitle: 'Blog Title'
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader'
        },
        {
          loader: require.resolve('./loader')
        }
      ]
    })

    config.resolve.alias['pages'] = path.join(__dirname, 'pages')
    config.resolve.alias['common'] = path.join(__dirname, 'common')

    return config
  }
}
