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
    const { blogTitle } = publicRuntimeConfig

    return (
      <Container>
        <Head>
          <title>{blogTitle}</title>
        </Head>
        <Component
          {...pageProps}
          components={{
            img: props => {
              const src = images[path.join(pathname, props.src).replace(/\\/g, '/')]
              return (
                <img {...props} src={src} />
              )
            }
          }}
        />
      </Container>
    )
  }
}
