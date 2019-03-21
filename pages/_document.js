import Document, { Html, Head, Main, NextScript } from 'next/document'
import getConfig from 'next/config'
import Typography from 'typography'
import AltonTheme from 'typography-theme-alton'

const typography = new Typography(AltonTheme)

export default class BlogDocument extends Document {
  render() {
    const { publicRuntimeConfig } = getConfig()
    const { blogTitle } = publicRuntimeConfig
    return (
      <Html>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: typography.toString() }} />
          <title>{blogTitle}</title>
        </Head>
        <body>
          <div className="content">
            <Main />
          </div>
          <NextScript />
          <style jsx>{`
            .content {
              width: 960px;
              margin: 0 auto;
            }
          `}</style>
        </body>
      </Html>
    )
  }
}
