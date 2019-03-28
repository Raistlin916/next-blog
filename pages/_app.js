import App, { Container } from 'next/app'
import Head from 'next/head'
import getConfig from 'next/config'
import React from 'react'
import path from 'path'

function importAll(r) {
  let images = {}
  r.keys().map(key => {
    images[key.replace(/^\./, '')] = r(key)
  })
  return images
}
const images = importAll(require.context('./', true, /\.(png|jpe?g|svg)$/))

export default class BlogApp extends App {
  static async getInitialProps({ Component, ctx, router }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps, pathname: router.pathname }
  }
  render() {
    const { Component, pageProps, pathname } = this.props
    const { publicRuntimeConfig } = getConfig()
    const { blogTitle, articles } = publicRuntimeConfig
    const isArticle = !!articles.find(item => item.path === pathname)

    return (
      <Container>
        <Head>
          <title>{blogTitle}</title>
        </Head>
        <div className="content">
          {isArticle ? 1: 0}
          {pathname}
          <Component
            {...pageProps}
            components={{
              img: props => {
                const src =
                  images[path.join(pathname, props.src).replace(/\\/g, '/')]
                return <img {...props} src={src} />
              }
            }}
          />
        </div>
        <style jsx>{`
          .content {
            width: 960px;
            margin: 0 auto;
          }
        `}</style>
      </Container>
    )
  }
}
