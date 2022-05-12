import React, { Component } from 'react'
import { Navbar,Container,Nav,Form,FormControl,Button } from 'react-bootstrap';
import {BrowserRouter as Router,Route,Link, Routes} from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Admin from './Admin';
import Dashboard from './Dashboard';
import ContactUpdate from './ContactUpdate';

export default class Navigationbar extends Component {
  render() {
    return (
      <Router>
        <div>
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">REACT</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Form className="d-flex me-auto">
                    <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
                    <Button variant="outline-success">Search</Button>
                </Form>
                <Nav className="">
                    <Nav.Link as={Link} to={'/'}> About</Nav.Link>
                    <Nav.Link as={Link} to={'/contact'}> Contact</Nav.Link>
                    <Nav.Link as={Link} to={'/admin'}> Admin</Nav.Link>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>

        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contactUpdate/:id" element={<ContactUpdate />} />
        </Routes>
      </Router>
    )
  }
}
