import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/dist/next-server/lib/head'

export default function Navbar() {
  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/logo-favicon.png" />
      </Head>
      <nav>
        <Image src="/logo-favicon.png" width={50} height={48} />
        <Link href="/"><a><h1>Home Of Lorem Ipsum</h1></a></Link>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/lorems"><a>Lorem Ipsums</a></Link></li>
        </ul>
      </nav>
    </div>
  )
}
