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
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
