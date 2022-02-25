import React from 'react';
import { Navbar, Form } from 'react-bootstrap';
import logo from '../assets/logo192.png'

function MyNavbar(props) {
    return (
        <>
            <Navbar className='navbar-config' variant="dark" fixed="top">
                <Navbar.Brand href="/" className="mr-auto mt-1 d-flex">
                    <img src={logo} alt='logo' className='logo-nav'/>
                    <h4 className='page-title'>{props.title}</h4>
                </Navbar.Brand>
                <Form className="d-flex">
                    <input type="text" placeholder="🔍  Search actors" className="search-form mr-sm-2" />
                </Form>
            </Navbar>
            <hr className='hr-top' />
        </>
    )
}

export default MyNavbar;
