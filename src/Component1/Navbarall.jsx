
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BiMenu } from "react-icons/bi"
import "./navbarall.css"
import { Button } from 'bootstrap';
import cv from "./cv.png"

function Navbarall() {
  return (
   
    <>
    <div>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary main-nav">
      <Container fluid className='allnav'>
        <Navbar.Brand className='brand' href="#home">Nadil.</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{background:"white"}}/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto all-link">
            <Nav.Link className='active link' href="#home">Home</Nav.Link>
            <Nav.Link className='link' href="#about">About</Nav.Link>
            <Nav.Link className='link' href="#education">Education</Nav.Link>
            <Nav.Link className='link' href="#skills">Skills</Nav.Link>
            <Nav.Link className='link' href="#contact">Contact</Nav.Link>
            <Nav.Link href={cv} download=''><button className="down-btn"><span>Download CV</span></button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </>
  );
}


export default Navbarall