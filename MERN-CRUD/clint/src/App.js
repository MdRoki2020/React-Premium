import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Container,Nav,Form,Button} from 'react-bootstrap';
import {BrowserRouter as Router,Route,Link, Routes} from "react-router-dom";
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';

function App() {
  return (
    <Router>
    <div className="">

      <Navbar bg="light" variant="light">
      <Container>
      <Navbar.Brand as={Link} to={'/'}>Navbar</Navbar.Brand>

          <Form className="d-flex me-auto">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
            <Button variant="outline-success">Search</Button>
          </Form>
          
          <Nav>
            <Nav.Link as={Link} to={'/'}>Login</Nav.Link>
            <Nav.Link as={Link} to={'/dashboard'}>Dashboard</Nav.Link>
          </Nav>
          
        </Container>
      </Navbar>


      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
