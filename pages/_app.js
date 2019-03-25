import App, { Container } from 'next/app'
import Head from 'next/head'
import getConfig from 'next/config'
import dynamic from 'next/dynamic'
import React from 'react'
import shiba from './test-1-2/shiba.png'

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
        <Component {...pageProps} components={{ img: props => {
          return <img {...props} src={shiba} />
        }}} />
      </Container>
    )
  }
}
