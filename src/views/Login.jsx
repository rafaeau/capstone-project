import React from 'react'
import logo from '../assets/logo192.png'
import './Login.css';
import { Link } from "react-router-dom";

function Login() {
    return (
        <>
            <div className='wrap mt-5'>
                <div className='mt-5'>
                    <img src={logo} alt='logo' className='logo' />
                    <h3 style={{ fontWeight: '700' }}>Actors DB</h3>
                </div>
                <form>
                    <input type="text" placeholder="Username or email" className="login-form mt-2" /> <br />
                    <input type="password" placeholder="Password" className="login-form my-3" /> <br />
                    <Link to="/homepage">
                        <button className="btn-form">Sign In</button>
                    </Link>
                    <div id='login-checkbox'>
                        <div className='ml-2'>
                            <input type="checkbox" />
                            <label className='ml-1'>Remember me</label>
                        </div>
                        <p className='mr-2'>Help?</p>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login