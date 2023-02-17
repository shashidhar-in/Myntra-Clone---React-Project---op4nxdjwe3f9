import { Image, InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../myntra-logo.png"
import { BiSearchAlt } from 'react-icons/bi';
import { HiOutlineShoppingBag } from "react-icons/hi";import "./css/Nav.css"


function NavBar() {
  return (
    <Navbar className='shadow' bg="light" expand="lg" style={{ height: "80px" }}>
      <Container fluid className='d-flex align-items-center'>
        <Navbar.Brand ><div className='icon-holder'><Image src={logo} style={{ width: "65px" }} /></div></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" style={{textAlign:"end"}}/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 py-3"
            navbarScroll
          >
            <Nav.Link ><h6>MEN</h6></Nav.Link>
            <Nav.Link ><h6>WOMEN</h6></Nav.Link>
            <Nav.Link ><h6>KIDS</h6></Nav.Link>


          </Nav>
          <div className='d-flex '><InputGroup className='search-box'>
            <Form.Control aria-label="search-box" placeholder='Search' />
            <Button className='search-button bg-light' style={{ border: "1px solid #ced4da" }}><BiSearchAlt size={"1.5rem"} id='search-icon' /></Button>
          </InputGroup><HiOutlineShoppingBag size={"2.5rem"} className="cart-icon mx-3"/></div>
          
        </Navbar.Collapse>
        
      </Container>
      
    </Navbar>
  );
}

export default NavBar;