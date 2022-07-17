import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container,Form,FormControl,Nav,Button } from 'react-bootstrap';
import {BrowserRouter as Router,Route,Link, Routes} from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

function App() {
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

                    <Nav.Link as={Link} to={'/'}> HOME</Nav.Link>
                    <Nav.Link as={Link} to={'/about'}>ABOUT</Nav.Link>
                    <Nav.Link as={Link} to={'/contact'}>CONTACT</Nav.Link> 

                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
  );
}

export default App;
