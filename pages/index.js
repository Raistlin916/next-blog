import getConfig from 'next/config'
import Link from 'common/Link'
import dayjs from 'dayjs'

export default function IndexPage() {
  const { publicRuntimeConfig } = getConfig()
  const { articles, blogTitle } = publicRuntimeConfig
  return (
    <div>
      <h1>{blogTitle}</h1>
      <main>
        {articles.map((item, index) => (
          <article key={index}>
            <h2>
              <Link href={item.path}>
                {item.attributes.title || 'untitled'}
              </Link>
            </h2>
            <small>{dayjs(item.attributes.date).format('MMMM DD, YYYY')}</small>
          </article>
        ))}
      </main>

      <style jsx>{`
        h2 {
          margin-bottom: 2px;
        }
        ul {
          list-style-type: none;
          margin: 0;
          font-size: 24px;
        }
        article + article {
          margin-top: 20px;
        }
        small {
          font-size: 60%;
        }
      `}</style>
    </div>
  )
}
