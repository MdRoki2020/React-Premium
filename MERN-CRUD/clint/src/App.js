import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Container,Nav,Form,Button,FormControl} from 'react-bootstrap';
import {BrowserRouter as Router,Route,Link, Routes} from "react-router-dom";
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';

function App() {
  return (
    <div>
      <Router>
        <div>
        <Navbar bg="light" expand="lg" className='fixed-top'>
            <Container fluid>
                <Navbar.Brand as={Link} to={'/'}>REACT</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Form className="d-flex me-auto">
                    <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
                    <Button variant="outline-success">Search</Button>
                </Form>
                <Nav className="">

                    <Nav.Link as={Link} to={'/'}> HOME</Nav.Link>
                    <Nav.Link as={Link} to={'/dashboard'}> ADD STUDENT</Nav.Link>

                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
      </Router>

    </div>













    // <Router>
    // <div className="">

    //   <Navbar bg="light" variant="light" className='fixed-top'>
    //   <Container>
    //   <Navbar.Brand as={Link} to={'/'}>Navbar</Navbar.Brand>

    //       <Form className="d-flex me-auto">
    //         <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
    //         <Button variant="outline-success">Search</Button>
    //       </Form>
          
    //       <Nav>
    //         <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
    //         <Nav.Link as={Link} to={'/dashboard'}>Dashboard</Nav.Link>
    //       </Nav>
          
    //     </Container>
    //   </Navbar>


    //   <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/Dashboard" element={<Dashboard />} />
    //   </Routes>
    // </div>
    // </Router>

  );
}

export default App;
