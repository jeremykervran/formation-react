import { Navbar as BootstrapNavbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
      <BootstrapNavbar bg="primary" data-bs-theme="dark">
        <Container>
          <BootstrapNavbar.Brand href="#home">Home</BootstrapNavbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#thumbnail">Thumbnail</Nav.Link>
            <Nav.Link href="#new">New</Nav.Link>
            <Nav.Link href="#edit">Edit/0</Nav.Link>
          </Nav>
        </Container>
      </BootstrapNavbar>
  );
}

export default Navbar;