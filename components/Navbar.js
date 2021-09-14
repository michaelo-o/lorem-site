import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'
import AuthContext from '../stores/authContext'
import Head from 'next/head'


export default function Navbar() {
  const { user, login } = useContext(AuthContext)
  console.log(user)

  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/logo-favicon.png" />
      </Head>
      <nav className="navbar">
        <div className="logo-sitename">
          <Image src="/logo-favicon.png" width={85} height={75} />
          <Link href="/"><a><h1>Home Of Lorem Ipsum</h1></a></Link>
        </div>
          <div className="links">
          <p><Link href="/"><a>Home</a></Link></p>
          <p><Link href="/lorems"><a>Lorem Ipsums</a></Link></p>
          <p onClick={login} className="btn">Login/Signup</p>
          </div>
      </nav>

    </div >
  )
}





