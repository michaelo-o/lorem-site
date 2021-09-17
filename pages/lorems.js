import styles from '../styles/Lorems.module.css'
import Head from 'next/dist/next-server/lib/head'
import DummyComp from '../components/DummyComp'
import { useEffect, useContext } from 'react'
import AuthContext from '../stores/authContext'

export default function Lorems() {

  const { user, authReady } = useContext(AuthContext)

  useEffect(() => {
    if (authReady) { //this is so that it can be sure if we are signed in or not before sending the fetch request
      fetch('/.netlify/functions/lorems', user && //so that this only runs of there is a user avialable, if it runs when there is no user, we get an error
       { 
        headers: {
          Authorization: 'Bearer ' + user.token.access_token //what needs to be sent to netlify so they know a user is logged in
          //if the user token is not sent in when we make the fetch request, it would not know we are logged in
        }
      })
        .then(res => res.json()) //turns it into json,something we can actually use
        .then(data => console.log(data))
    }

  }, [user, authReady]) //so ths functions runs automatically if the user changes or our authentication status changes


  return (
    <>
      <Head>
        <title>The Lorems | Home Of Lorem Ipsum By Micky</title>
      </Head>
      <div className={styles.lorems}>
        <h2>All Lorem Ipsums</h2>
        <p><DummyComp /></p>

      </div>

    </>
  )
}