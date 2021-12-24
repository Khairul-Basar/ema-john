import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const {googleSignIn} = useAuth()
    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.from || '/shop'
    // console.log(location.state?.from)

    const handleGoogleAuth = () => {
        googleSignIn()
        .then(result=> {
            history.push(redirect_url)
        })
    }

    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form action="">
                    <input type="email" placeholder="Your Email"/><br />
                    <input type="password" placeholder="Your Password"/><br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New to Ema-John ? <Link to="/register">Create Account</Link></p>
                
                <p>- - - - - - - - or - - - - - - - -</p>
                <div className="product-info">
                    <button onClick={handleGoogleAuth}>Google Sing in</button>
                </div>
            </div>
        </div>
    );
};

export default Login;