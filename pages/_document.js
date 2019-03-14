import Document, { Html, Head, Main, NextScript } from 'next/document'
import Typography from 'typography'
import AltonTheme from 'typography-theme-alton'

const typography = new Typography(AltonTheme)

export default class BlogDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: typography.toString() }} />
        </Head>
        <body>
          <div style={{ width: 960, margin: '0 auto' }}>
            <Main />
          </div>
          <NextScript />
        </body>
      </Html>
    )
  }
}
