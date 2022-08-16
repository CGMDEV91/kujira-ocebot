import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'

const NavBar = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" className="nav-component" variant="dark">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand >Kujira-Track
                    <img 
                        className="ml-2 img-brand"
                        alt="logo"
                        src="https://assets.coingecko.com/coins/images/20685/large/kuji-200x200.png?1637557201" />
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/dashboard">
                            <Nav.Link>Dashboard</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <Nav.Link>Contact</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Outlet />
        </>
    );
  };
  
  export default NavBar;