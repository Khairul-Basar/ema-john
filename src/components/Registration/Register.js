import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const {googleSignIn} = useAuth()
    return (
        <div className="login-form">
            <div>
                <h2>Create Account</h2>
                <form action="">
                    <input type="text" placeholder="Your Full Name"/><br />
                    <input type="email" placeholder="Your Email"/><br />
                    <input type="password" placeholder="Your Password"/><br />
                    <input type="password" placeholder="Re-Enter Password"/><br />
                    <input type="submit" value="Registration" />
                </form>
                <p>Already have an account ? <Link to="/login">Sing in</Link></p>
                
                <p>- - - - - - - - or - - - - - - - -</p>
                <div className="product-info">
                    <button onClick={googleSignIn}>Google Sing in</button>
                </div>
            </div>
        </div>
    );
};

export default Register;