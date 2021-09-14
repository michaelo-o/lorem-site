// //This file Keeps track of the authentication state of the user
import { createContext, useState, useEffect } from 'react'
import netlifyIdentity from 'netlify-identity-widget'

const AuthContext = createContext({
    user: null,
    login: () => { },
    logout: () => { },
    authReady: false //keeps track of when we load up our app, takes time to identify if they are ligged in or not
})

// //Provider-provides context to app

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        // to change the value of user and change it by listeneing for a login event so we know we are logged in
        netlifyIdentity.on('login', (user)  => {
            setUser(user)
        } ) //listens for anyuser signing up or logging in and provides us with the user when they do



        // init netlify identity connection
        netlifyIdentity.init()
    }, [])

    const login = () => {
        netlifyIdentity.open()
    }

    const context = { user, login }

    return (
        <AuthContext.Provider value={context}>
            {/* Wraps our entire application cus it needs to wrap the components it wants to provide data to */}
            {children}
            {/* Children are basicall all the things on our page */}
        </AuthContext.Provider>
    )
}

export default AuthContext















