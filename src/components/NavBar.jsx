import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HomeNavigation() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Row>
                    <Col lg={{ span: 4 }}>
                        <Navbar.Brand href="#home">Jesse Bradbury</Navbar.Brand>
                    </Col>
                    <Col lg={{ offset: 4 }}>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                    
                                <Nav.Link href="#resume">Resume</Nav.Link>
                    
                                <Nav.Link href="#contact">Contact Me</Nav.Link>
                                <NavDropdown title="Projects" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Project 1</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Project 2
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Project 3</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        See All
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
}

export default HomeNavigation;