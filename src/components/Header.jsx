import { useState } from "react";
import { Alert, Button, Container, Nav, Navbar, Offcanvas, } from "react-bootstrap";


export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const handleCloseMenu = () => setShowMenu(false);
  const handleShowMenu = () => setShowMenu(true);
  const handleCloseAlert = () => setShowAlert(false);
  const handleShowAlert = () => setShowAlert(true);
  
  return (

    <header>
      <Navbar bg="primary" variant="dark">
        <Container fluid>
        <Nav className="mr-0">
            <Nav.Link as={Button} onClick={handleShowMenu}>Home </Nav.Link>
            
            
          </Nav>
          <Navbar.Brand href="#home">Adsys Logo</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link as={Button} onClick={handleShowAlert}>Notificações</Nav.Link>
            
          
          </Nav>
        </Container>
      </Navbar>
      <Offcanvas show={showMenu} onHide={handleCloseMenu} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <li><a href="#">testando</a></li>
            <li><a href="#">testando</a></li>
            <li><a href="#">testando</a></li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>

      <Offcanvas show={showAlert} onHide={handleCloseAlert} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Notificações</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <>
  {[
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ].map((variant) => (
    <Alert key={variant} variant={variant}>
      This is a {variant} alert—check it out!
    </Alert>
  ))}
</>
        </Offcanvas.Body>
      </Offcanvas>

    </header>

  );
}