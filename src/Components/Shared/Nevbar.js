import React from 'react';

import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Nevbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };

    const menuItems = <>

        <li><Link to="/">HOME</Link></li>
        <li><Link to="/shops">SHOP</Link></li>
        <li><Link to="/aboutus">ABOUT US</Link></li>
        <li><Link>PAGE</Link>
            <ul className="p-2  bg-blue-900">
                <li> <Link to="/team">OUR TEAM</Link></li>
                <li> <Link to="/faq">FAQ</Link></li>
            </ul>
        </li>
        <li><Link to="/blog">BLOG</Link>
            <ul className="p-2  bg-blue-900">
                <li> <Link to="/blog">BLOG</Link></li>
                <li> <Link to="/blog">SINGLE POST</Link></li>
            </ul>
        </li>
        <li><Link to="/contact">CONTACT</Link></li>
        {
            user && <li><Link to="/dashboard">DASHBOARD</Link></li>
        }
        <li>{user ? <button className="btn btn-ghost" onClick={logout}>Sign Out</button> : <Link to="login">LOGIN</Link>}</li>
    </>

    return (
        <div className='sticky top-0 z-50'>


            <div className="navbar bg-blue-900 lg:px-12  ">
                <div className="navbar-start">
                    <div>
                        <a className="btn btn-ghost normal-case text-xl hidden  lg:flex"><img src={Logo} alt="pic" className='w-56  bg-slate-50' /></a>
                    </div>

                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content text-white mt-3 p-2 shadow bg-blue-900  w-52">
                            {menuItems}
                        </ul>
                    </div>

                </div>
                <div className=" hidden  lg:flex ">
                    <ul className="menu menu-horizontal px-1  font-bold text-white ">
                        {menuItems}
                    </ul>
                </div>
                <div className='ml-60 lg:ml-0'>
                    <label tabIndex={1} htmlFor="dashboard-sidebar" className="btn btn-ghost text-white lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Nevbar;