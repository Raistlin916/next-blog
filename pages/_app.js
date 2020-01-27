import App from 'next/app'
import Head from 'next/head'
import getConfig from 'next/config'
import { useRouter } from 'next/router'
import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import path from 'path'
import Typography from 'typography'
import AltonTheme from 'typography-theme-alton'

const typography = new Typography(AltonTheme)

function importAll(r) {
  let images = {}
  r.keys().map(key => {
    images[key.replace(/^\./, '')] = r(key)
  })
  return images
}
const images = importAll(require.context('./', true, /\.(png|jpe?g|svg)$/))

const Image = ({ src, ...rest }) => {
  const router = useRouter()
  src = images[path.join(router.pathname, src).replace(/\\/g, '/')]
  console.log(router.pathname, src, images)
  return <img {...rest} src={src} />
}

export default class BlogApp extends App {
  render() {
    const { Component, pageProps } = this.props
    const { publicRuntimeConfig } = getConfig()
    const { blogTitle } = publicRuntimeConfig
    const components = {
      img: props => <Image {...props} />
    }

    return (
      <>
        <Head>
          <title>{blogTitle}</title>
          <style dangerouslySetInnerHTML={{ __html: typography.toString() }} />
        </Head>
        <div className="content">
          <MDXProvider components={components}>
            <Component {...pageProps} />
          </MDXProvider>
        </div>
        <style jsx>{`
          .content {
            width: 960px;
            margin: 0 auto;
            padding: 10px 20px;
          }
        `}</style>
      </>
    )
  }
}
