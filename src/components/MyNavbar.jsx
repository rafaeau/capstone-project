import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

function MyNavbar() {
    return (
        <Navbar className='navbar' variant="dark" fixed="top">
            <Navbar.Brand href="#home" className="mr-auto">Actors DB</Navbar.Brand>
            
            <Form className="d-flex">
                <FormControl type="text" placeholder="Search actor" className="mr-sm-2" />
                <Button variant="outline-info"><FaSearch className='mt-n1'/></Button>
            </Form>
        </Navbar>
    )
}

export default MyNavbar;
