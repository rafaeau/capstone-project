import React from 'react';
import { Navbar, Form } from 'react-bootstrap';

function MyNavbar() {
    return (
        <>
            <Navbar className='navbar' variant="dark" fixed="top">
                <Navbar.Brand href="#home" className="mr-auto mt-1"><h4>Actors DB</h4></Navbar.Brand>
                <Form className="d-flex">
                    <input type="text" placeholder="🔍  Search actors" className="search-form mr-sm-2" />
                </Form>
            </Navbar>
            <hr className='hr-top' />
        </>
    )
}

export default MyNavbar;
