import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuth = () => {
    initializeApp(firebaseConfig)
}

export default initializeAuth

/*
Steps for Authentication 
-------------------------
Step-1 Initial Setup 
1. firebase: create project 
2. Create web app 
3. get Configuration 
4. initialize firebase 
5. Enable auth method 
---------------------------
Step-2  Setup Component
1.create Login Component
2. create Register Component
3. Create Router for Login and Register
--------------------

Step-3
1. setup google sing up method
2. setup google sign out method
3. user State
4. Special observer(onAuthStateChanged)
5 return necessary Methods and States from useFirebase
-----------------

Step-4  Create Auth context and hook (useAuth)
1.Create a Auth Context
2. Create Context Provider
3. set Context Provider context value
----------------------------

Step-5 
1. create private Route
2. set Private route

*/