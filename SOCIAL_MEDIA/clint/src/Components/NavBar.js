import React from 'react'
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
import {Button,Navbar,Container,Form,FormControl,Nav} from 'react-bootstrap';
import Home from '../Pages/Home';
import ErrorPage from '../Pages/ErrorPage';
import Register from '../Pages/Register';
import Login from '../Pages/Login';

export default function NavBar() {
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
                    <Nav.Link as={Link} to={'/register'}> Register</Nav.Link>
                    <Nav.Link as={Link} to={'/login'}> Login</Nav.Link>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="*" element={<ErrorPage/>} />
          
        </Routes>
      </Router>
  )
}
