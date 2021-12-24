import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    const {user,logout} = useAuth()
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/order">Order Reviw</NavLink>
                <NavLink to="/inventory">Manage-Inventory-here</NavLink>
                {
                    user.email && <span style={{color:'white'}}>{user.email} </span>
                }
                {
                    user.email ? <button onClick={logout}>Logout</button>
                    : <NavLink to="/login">Login</NavLink>
                }
                
            </nav>
        </div>
    );
};

export default Header;