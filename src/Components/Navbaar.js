import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export default function Navbaar() {
  return (
    <div>
      <Navbar sticky='top' bg='primary' variant='primary' expand="lg">
      <Container>
        <Navbar.Brand href='#home'>Conatct Form</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse />
        <Nav>
          <Nav.Link>

          </Nav.Link>
        </Nav>
      </Container>

      </Navbar>
        
    </div>
  )
}
