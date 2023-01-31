import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header  = () => {
  return (    
    <>
    <div className = "row d-flex justify-content-between">
      <Navbar bg="dark" variant="dark">
        <Container>
          <div className = "col-md-3">
          <Navbar.Brand href="/">벌써 12시</Navbar.Brand>
          </div>

          <div className = "col-md-5">
          <Nav className="me-auto1">
            <Nav.Link href="/RegisterForm">회원가입테스트</Nav.Link>
            <Nav.Link href="/parenting">육아</Nav.Link>
            <Nav.Link href="/living">생활</Nav.Link>
            <Nav.Link href="/sports">스포츠</Nav.Link>
            <Nav.Link href="/fassion">패션</Nav.Link>
            <Nav.Link href="/furniture">가구</Nav.Link>
          </Nav>
          </div>

          <div className = "col-md-4">
          <Nav className="me-auto2">
            <Nav.Link href="#pricing"><span className="material-symbols-outlined">
vpn_key</span></Nav.Link>
            <Nav.Link href="#home"><span className="material-symbols-outlined">
person_add</span></Nav.Link>
            <Nav.Link href="#features"><span class="material-symbols-outlined">
shopping_cart</span></Nav.Link>
            <Nav.Link href="#pricing"><span className="material-symbols-outlined">
redeem</span></Nav.Link>
          </Nav>
          </div>
        </Container>
      </Navbar>
    </div>


    </>
    )
}

export default Header 