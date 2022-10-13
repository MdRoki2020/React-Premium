import React from 'react'
import {Navbar,Container,Nav,Form,Button,FormControl} from 'react-bootstrap';
import {Link} from "react-router-dom";
import '../Style/NavBar.css';

const NavBar = () => {
  return (
    
        <div>
        <Navbar expand="lg" className='fixed-top'>
            <Container fluid>
                <Navbar.Brand as={Link} to={'/'}>REACT</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Form className="d-flex me-auto">
                    <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
                    <Button variant="outline-success">Search</Button>
                </Form>
                <Nav>

                    <Nav.Link as={Link} to={'/'}> HOME</Nav.Link>
                    <Nav.Link as={Link} to={'/adminLogin'}> Admin</Nav.Link>

                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
  )
}

export default NavBar
