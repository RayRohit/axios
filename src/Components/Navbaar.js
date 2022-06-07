import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Contacts from './Contacts';
import Sub from './Sub';


export default function Navbaar() {
  return (
    <div>
    <BrowserRouter>
     <Navbar bg="primary" variant='dark' sticky='top' expand="lg">
  <Container>
    <Navbar.Brand>Contact Form</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" variant="light"/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto">
        <Nav.Link as={Link} to={'/contact'}>Contact </Nav.Link>
        <Nav.Link as={Link} to={'/sub'}>Form </Nav.Link>

       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<Routes>
  <Route path='/contact' element={<Contacts />}></Route>
  <Route path='/sub' element={<Sub />} ></Route>
</Routes>
        </BrowserRouter>
    </div>
  )
}
