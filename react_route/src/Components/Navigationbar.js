import React, { Component } from 'react'
import { Navbar,Container,Nav,Form,FormControl,Button } from 'react-bootstrap';
import {BrowserRouter as Router,Route,Link, Routes} from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';

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
                <Nav className="me-auto">
                    <Nav.Link as={Link} to={'/'}> About</Nav.Link>
                    <Nav.Link as={Link} to={'/contact'}> Contact</Nav.Link>
                    <Nav.Link as={Link} to={'/portfolio'}> Portfolio</Nav.Link>
                    
                </Nav>
                <Form className="d-flex">
                    <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
                    <Button variant="outline-success">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>

        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
    )
  }
}
