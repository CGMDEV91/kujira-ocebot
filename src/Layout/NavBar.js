import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'
import logo from '../assets/images/whale.png'; 

const NavBar = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" className="nav-component bg-dark" variant="dark">
            <Container>
                <LinkContainer to="/">
                    
                    <Navbar.Brand >
                         Kujira-Track <span className="pt-2 text-danger">鯨</span>
                    </Navbar.Brand>
                </LinkContainer>
                
            </Container>
        </Navbar>
        <Outlet />
        </>
    );
  };

  //UNDER LINK CONTAINER
  /*<Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Dashboard</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>*/
  
  export default NavBar;