import React  from 'react';
import {BrowserRouter as Router,Route,Link, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container,Form,FormControl,Nav,Button } from 'react-bootstrap';
import Home from "./components/Home";
import Add from "./components/Add";
import Edit from "./components/Edit";
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Registration from './components/Registration';

function App() {

  return (
    <div>
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
                    <Nav.Link as={Link} to={'/add'}> ADD STUDENT</Nav.Link>
                    <Nav.Link as={Link} to={'/login'}> Login</Nav.Link>
                    <Nav.Link as={Link} to={'/registration'}> Registration</Nav.Link>

                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="edit/:id" element={<Edit />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/registration" element={<Registration />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
