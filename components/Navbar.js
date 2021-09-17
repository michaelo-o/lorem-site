import Link from 'next/link'
import Image from 'next/image'
import { useContext, useState, useRef, useEffect } from 'react'
import AuthContext from '../stores/authContext'
import Head from 'next/head'


export default function Navbar() {
  const { user, login, logout, authReady } = useContext(AuthContext) //context from the autthContext file
  // console.log(user)

  const outside = useRef()

  const [openProfile, setOpenProfile] = useState(false);
  const [dangerzone, setdangerzone] = useState(false)

  const handleClick = event => {
    if (outside.current.contains(event.target)) {  //.current is a method that useRef uses
      return
    }
    setOpenProfile(false)
  }

  useEffect(() => {
    const getClick = document.addEventListener('click', handleClick) //this watches for when we click outside so it will know to run the handleClick function
    //looks for a click event and calls handle click if we click it

    // return () => {
    //   getClick()
    // }
  }, [])



  function profile() {
    setOpenProfile(!openProfile)
  }
  function danger() {
    setdangerzone(!dangerzone)
  }
  function closeProfile() {
    setOpenProfile(false)
  }

  return (
    <div className="container" ref={outside}>
      <Head>
        <link rel="icon" href="/logo-favicon.png" />
      </Head>
      <nav className="navbar">
        <div className="logo-sitename" onClick={closeProfile}>
          <Image src="/logo-favicon.png" width={60} height={38} />
          <Link href="/"><a><h1>Home Of Lorem Ipsum</h1></a></Link>
        </div>
        <div className="links">
          <p onClick={closeProfile}><Link href="/"><a>Home</a></Link></p>
          <p onClick={closeProfile}><Link href="/lorems"><a>Lorem Ipsums</a></Link></p>

          {authReady &&
            <div className="links">
              {!user && <p onClick={login} className="btn">Login/Signup</p>}

              {user && <p className="textBeforeProfile">Logged in as <span onClick={profile} className="profileName">{user.user_metadata.full_name}</span></p>}


              {user && openProfile ? (

                <div>
                  <div className="profilemodal">
                    <button onClick={closeProfile} className="backbutton">
                      Close
                    </button>
                    <h2>Profile Info</h2>
                    <p>Username: {user.user_metadata.full_name}</p>
                    <p>Email: {user.email}</p>
                    <p>Date Created: {user.created_at}</p>
                    <p onClick={logout} className="btn">Log Out</p>

                    <h2 onClick={danger} className="dangerzone">DANGER ZONE!</h2>
                    {
                      dangerzone ? (
                        <div className="dangerzone">
                          <h2>Delete Account Button Will be Here</h2>
                        </div>
                      ) : null
                    }
                  </div>
                </div>

              ) : null
              }

              {user && <p onClick={logout} className="btn">Log Out</p>}
            </div>


          }

        </div>
      </nav>

    </div >
  )
}


