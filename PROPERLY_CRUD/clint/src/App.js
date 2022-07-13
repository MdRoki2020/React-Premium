import {BrowserRouter as Router,Route,Link, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container,Form,FormControl,Nav,Button } from 'react-bootstrap';
import Home from "./components/Home";
import Add from "./components/Add";
import Edit from "./components/Edit";

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
                    <Nav.Link as={Link} to={'/add'}> ADD STUDENT</Nav.Link>
                    <Nav.Link as={Link} to={'/edit'}> UPDATE</Nav.Link> 

                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="edit/:id" element={<Edit />} />
        </Routes>
      </Router>
  );
}

export default App;
