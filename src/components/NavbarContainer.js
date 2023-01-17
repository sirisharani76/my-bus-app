import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';


const NavbarContainer = () => {
  return (
    <Navbar className="nav" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand className="nav-cta" href="/">
          Star Bus Travels
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="nav-right">
          <Nav className="me-auto">
            <Nav.Link href="/" className="nav-links">
              Home
            </Nav.Link>
            <Nav.Link href="/buses" className="nav-links">
              All Buses
            </Nav.Link>
            {/* <NavDropdown
              title="Available routes"
              id="basic-nav-dropdown"
              className="nav-links"
            >
              <NavDropdown.Item href="#action/3.1">
                Chennai to Theni
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarContainer