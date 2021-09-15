import Link from 'next/link'
import Image from 'next/image'
import { useContext, useState, useRef, useEffect } from 'react'
import AuthContext from '../stores/authContext'
import Head from 'next/head'


export default function Navbar() {
  const { user, login, logout } = useContext(AuthContext) //context from the autthContext file
  console.log(user)

  const outside = useRef()

  const [openProfile, setOpenProfile] = useState(false);


  const handleClick = e => {
    if (outside.current.contains(e.target)) {
      return
    }
    setOpenProfile(false)
  }

  useEffect(() => {
    const getClick = document.addEventListener('click', handleClick)

    // return () => {
    //   getClick()
    // }
  }, [])



  function profile() {
    setOpenProfile(!openProfile)
  }

  function useButton() {
    setOpenProfile(false)
  }

  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/logo-favicon.png" />
      </Head>
      <nav className="navbar" ref={outside}>
        <div className="logo-sitename">
          <Image src="/logo-favicon.png" width={60} height={38} />
          <Link href="/"><a><h1>Home Of Lorem Ipsum</h1></a></Link>
        </div>
        <div className="links">
          <p><Link href="/"><a>Home</a></Link></p>
          <p><Link href="/lorems"><a>Lorem Ipsums</a></Link></p>
          {!user && <p onClick={login} className="btn">Login/Signup</p>}

          {user && <p className="textBeforeProfile">Logged in as <span onClick={profile} className="profileName">{user.user_metadata.full_name}</span></p>}


          {user && openProfile ? (
            <div>
              <div className="profilemodal">
                <button onClick={useButton} className="backbutton">
                  Close
                </button>
                <h2>Profile Info</h2>
                <p>Username: {user.user_metadata.full_name}</p>
                <p>Email: {user.email}</p>
                <p onClick={logout} className="btn">Log Out</p>
              </div>
            </div>
          ) : null
          }


          {user && <p onClick={logout} className="btn">Log Out</p>}

        </div>
      </nav>

    </div >
  )
}





// {user && <p onClick={profile}>Logged in as <p className="tooltip">{user.user_metadata.full_name} <p className="tooltiptext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></p></p>}