import styles from '../styles/Lorems.module.css'
import Head from 'next/dist/next-server/lib/head'
import DummyComp from '../components/DummyComp'
import { useEffect, useContext, useState } from 'react'
import AuthContext from '../stores/authContext'
import BuyCoffee from '../components/BuyCoffee'

export default function Lorems() {

  const { user, authReady, login } = useContext(AuthContext)
  const [lorems, setLorems] = useState(null)
  const [error, seterror] = useState(null)

  useEffect(() => {
    if (authReady) { //this is so that it can be sure if we are signed in or not before sending the fetch request
      fetch('/.netlify/functions/lorems', user && //so that this only runs of there is a user avialable, if it runs when there is no user, we get an error
      {
        headers: {
          Authorization: 'Bearer ' + user.token.access_token //what needs to be sent to netlify so they know a user is logged in
          //if the user token is not sent in when we make the fetch request, it would not know we are logged in
        }
      })
        .then(res => {
          if (!res.ok) { //if response is not ok, i.e if it is false, we should show an error message, because it means we are not authenticated
            login()
            throw Error('You gotta Log in to view the cool Lorem Ipsums')
          }
          return res.json() // if the reesponse is okay, we do not see an error message, and we return the json data we can actually use and carry on with the rest of the function, that is setting the state of lorems to be the data we get
        }) //turns it into json,something we can actually use
        .then(data =>
          setLorems(data), // if there is no error, then set the state of lorems to be the data we recieved
          seterror(null) //then make this null since there is no error
        )
        .catch(err => {
          seterror(err.message)
          setLorems(null) //when they log out, this should be re set back to null
        })
    }

  }, [user, authReady]) //so ths functions runs automatically if the user changes or our authentication status changes


  return (
    <>
      <Head>
        <title>The Lorems | Home Of Lorem Ipsum By Micky</title>
      </Head>
      <div className={styles.lorems}>
        <h2>All Lorem Ipsums</h2>
        {!authReady && <div>Loading...</div>}   {/* to show loading message if we do not know if we are logged in or not */}

        {error && (
          <div className={styles.error}>  {/* if we have an error, i.e, user is not logged in, display the error here. the if statement checks if there is an error first */}
            <p>{error}</p>
          </div>
        )}

        {/* Latstly, if we are logged in and there is no error, show the data */}
        {lorems && <BuyCoffee />}
        {lorems && lorems.map(lorem => (
          <div key={lorem.id} className={styles.card}>
            <h3>{lorem.lorem_name}</h3>
            <p>{lorem.lorem_body}</p>
          </div>
        ))}
      </div>

    </>
  )
}