import { useState } from "react";
import { Alert, Button, Container, Nav, Navbar, Offcanvas, } from "react-bootstrap";
import { Link } from 'react-router-dom';


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
            <Nav.Link as={Button} onClick={handleShowMenu}>
              
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>

            </Nav.Link>
            
            
          </Nav>
          <Navbar.Brand href="#home">Adsys Logo</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link as={Button}  onClick={handleShowAlert} >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
              </svg>  
            </Nav.Link>
            
          
          </Nav>
        </Container>
      </Navbar>
      <Offcanvas show={showMenu} onHide={handleCloseMenu} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
          <li><Link to="/">Home</Link></li>
            <li><Link to="/clientes/cadastrar">Cadastrar Cliente</Link></li>
            <li><a href="#">testando</a></li>
            <li><a href="#">testando</a></li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>

      <Offcanvas show={showAlert} onHide={handleCloseAlert} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Notificações </Offcanvas.Title>
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