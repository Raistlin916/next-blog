import getConfig from 'next/config'

export default function IndexPage() {
  return <div>home{JSON.stringify(getConfig())}</div>
}
