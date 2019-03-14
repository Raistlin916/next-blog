import getConfig from 'next/config'
import Link from 'common/Link'

export default function IndexPage() {
  const { publicRuntimeConfig } = getConfig()
  return (
    <div>
      <ul>
        {publicRuntimeConfig.articles.map((item, index) => (
          <li key={index}>
            <Link href={item}>{item}</Link>
          </li>
        ))}
      </ul>
      home{JSON.stringify(getConfig())}
    </div>
  )
}
