import App, { Container } from 'next/app'
import Head from 'next/head'
import getConfig from 'next/config'
import React from 'react'

export default class BlogApp extends App {
  render() {
    const { Component, pageProps } = this.props
    const { publicRuntimeConfig } = getConfig()
    const { blogTitle } = publicRuntimeConfig
    return (
      <Container>
        <Head>
          <title>{blogTitle}</title>
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}
