import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/x-orange.png'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" id="header">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={logo} alt="logo" height={50}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about" style={{color:"black", fontSize:"1.2rem"}}>About</Nav.Link>
              <Nav.Link href="#projects" style={{color:"black", fontSize:"1.2rem"}}>Projects</Nav.Link>
              <Nav.Link href="#contact" style={{color:"black", fontSize:"1.2rem"}}>Contact</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="https://www.linkedin.com/in/wenjun-x/" target="_blank">
                <FontAwesomeIcon icon={faLinkedinIn} size="lg"/>                
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    {/* <Navbar expand="lg" id="header">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" height={50}/>
            <Nav.Link href="#about" style={{color: "rgb(252, 103, 54)", fontSize:"1.2rem"}}>About</Nav.Link>
            <Nav.Link href="#projects" style={{color: "rgb(252, 103, 54)", fontSize:"1.2rem"}}>Projects</Nav.Link>
            <Nav.Link href="#contact" style={{color: "rgb(252, 103, 54)", fontSize:"1.2rem"}}>Contact</Nav.Link>
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '120px', position: 'absolute', right: '2rem'}}
            navbarScroll
          >
            <Nav.Link href="#about" style={{color: "rgb(252, 103, 54)", fontSize:"1.2rem"}}>About</Nav.Link>
            <Nav.Link href="#projects" style={{color: "rgb(252, 103, 54)", fontSize:"1.2rem"}}>Projects</Nav.Link>
            <Nav.Link href="#contact" style={{color: "rgb(252, 103, 54)", fontSize:"1.2rem"}}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}

    </>
  )
}

export default Header