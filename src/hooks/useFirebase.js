import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth'
import { useEffect, useState } from 'react'
import initializeAuth from '../Firebase/firebase.init'

initializeAuth()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const auth = getAuth()

    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user)
            }
        })
    },[])

    const googleSignIn = () =>{
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth,googleProvider)
    }

    const logout = () => {
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    }

    return {
        user,
        googleSignIn,
        logout
    }

}

export default useFirebase;