import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

function MyNavbar() {
    return (
        <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="#home">Actors DB</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form className="d-flex">
                <FormControl type="text" placeholder="Search actor" className="mr-sm-2" />
                <Button variant="outline-info"><FaSearch className='mt-n1'/></Button>
            </Form>
        </Navbar>
    )
}

export default MyNavbar;
