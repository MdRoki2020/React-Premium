import React from 'react';
import {Navbar,Nav,Button,Form,FormControl} from 'react-bootstrap';
import {BrowserRouter as Router,Link,Routes,Route} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';

const Header = () => {
  return (
  <Router>
      <div>

  <Navbar bg="light" expand="lg">

      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Form className="d-flex me-auto">
          <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search"/>
          <Button variant="outline-success">Search</Button>
        </Form>
        <Nav className="">
          <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
          <Nav.Link as={Link} to={'/about'}>About</Nav.Link>
          <Nav.Link as={Link} to={'/contact'}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>

  </Navbar>

    </div>
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/about'} element={<About />}/>
      <Route path={'/contact'} element={<Contact />}/>
    </Routes>
  </Router>
  )
}

export default Header;