import Document, { Html, Head, Main, NextScript } from 'next/document'
import Link from 'common/Link'
import glob from 'glob'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const files = await new Promise((resolve, reject) => {
      glob('pages/**/*.{md,mdx}', (err, files) =>
        err ? reject(err) : resolve(files)
      )
    })
    return {
      ...initialProps,
      articles: files.map(filename =>
        filename.replace(/^pages/, '').replace(/\.\w+$/, '')
      )
    }
  }
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/3.0.1/github-markdown.min.css"
          />
          <style>{`.markdown-body {
              width: 600px;
              margin: 0 auto;
            }`}</style>
        </Head>
        <body className="markdown-body">
          <ul>
            {this.props.articles.map((item, index) => (
              <li key={index}>
                <Link href={item}>{item}</Link>
              </li>
            ))}
          </ul>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
