const path = require('path')
const glob = require('glob')

const files = glob.sync('pages/**/*.{md,mdx}')
const articles = files.map(filename =>
  filename.replace(/^pages/, '').replace(/\.\w+$/, '')
)

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
