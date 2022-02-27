/* eslint-disable */
import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button, Carousel } from 'react-bootstrap';
import './App.css';
import Data from './data/shoes';

function App() {
  let [shoes, shoes변경] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://codingapple1.github.io/shop/shoes2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://codingapple1.github.io/shop/shoes3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* <div className='jumbotron'>
        <h1>20% Season Off</h1>
        <p>
          This is a Simeple
        </p>
        <p>
          <Button variant="primary">Lean More</Button>
        </p>
      </div> */}

      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <img src='https://codingapple1.github.io/shop/shoes1.jpg' width="100%" alt='first'></img>
            <h4>{ shoes[0].title }</h4>
            <p>{ shoes[0].content }</p>
          </div>
          <div className='col-md-4'>
            <img src='https://codingapple1.github.io/shop/shoes2.jpg' width="100%" alt='second'></img>
            <h4>{ shoes[1].title }</h4>
            <p>{ shoes[1].content }</p>
          </div>
          <div className='col-md-4'>
            <img src='https://codingapple1.github.io/shop/shoes3.jpg' width="100%" alt='third'></img>
            <h4>{ shoes[2].title}</h4>
            <p>{ shoes[2].content }</p>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
