import Link from 'next/link'
import getConfig from 'next/config'

const { basePath } = getConfig().publicRuntimeConfig

export default ({ children, href, ...props }) => (
  <Link href={`${basePath}${href}`} {...props}>
    <a>{children}</a>
  </Link>
)
