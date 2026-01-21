import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

export default function Mynavbar() {
   const location = useLocation();
 // If on /login → do not show navbar
   if (location.pathname === '/') {
     return null;
   } 
  return (



    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Welcome</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/home" style={{ marginRight: '10px' }}>Home</Link>
            <Link to="/studentlist" style={{ marginRight: '10px' }}>Studentlist</Link>
            <Link to="/contact" style={{ marginRight: '10px' }}>Contact</Link>

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
