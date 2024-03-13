import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/x-orange.png'
import '../App.css'

const Header = () => {
  return (
    <>
      {/* <Navbar id="header">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="logo" height={50}/>
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Item>
              <Nav.Link href="#about" style={{color: "rgb(252, 103, 54)"}}>About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#projects" style={{color: "rgb(252, 103, 54)"}}>Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#contact" style={{color: "rgb(252, 103, 54)"}}>Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar> */}
    <Navbar expand="lg" id="header">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" height={50}/>
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
    </Navbar>

    </>
  )
}

export default Header