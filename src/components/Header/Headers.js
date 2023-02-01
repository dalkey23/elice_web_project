import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header  = () => {
  return (    
    <>
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <div>
          <Navbar.Brand href="/">벌써 12시</Navbar.Brand>
          </div>
          
          {/* 카테고리 간격 조정 */}
          <div className = "col-md-8">
            <Nav>
              <Nav.Link href="/parenting">육아</Nav.Link>
              <Nav.Link href="/living">생활</Nav.Link>
              <Nav.Link href="/sports">스포츠</Nav.Link>
              <Nav.Link href="/fassion">패션</Nav.Link>
              <Nav.Link href="/furniture">가구</Nav.Link>
            </Nav>
          </div>
          {/* 아이콘 변경 */}
          <div>
            <Nav>
              {/* 로그인 아이콘 클릭시 로그인 폼으로 이동 (로그인 되어 있을 시 회원 정보) */}
              <Nav.Link href='/LoginForm'>
              <span className="material-symbols-outlined">person</span>
              </Nav.Link>
              <Nav.Link href="#pricing">
              <span className="material-symbols-outlined">shopping_bag</span>
              </Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </div>


    </>
    )
}

export default Header 