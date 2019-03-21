import getConfig from 'next/config'
import Link from 'common/Link'

export default function IndexPage() {
  const { publicRuntimeConfig } = getConfig()
  const { articles, blogTitle } = publicRuntimeConfig
  return (
    <div>
      <h1>{blogTitle}</h1>
      <ul>
        {articles.map((item, index) => (
          <li key={index}>
            <Link href={item}>
              {item}
            </Link>
          </li>
        ))}
      </ul>

      <style jsx>{`
        ul {
          list-style-type: none;
        }
      `}</style>
    </div>
  )
}
