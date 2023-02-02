import React from 'react';
import logo from './logo.png';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header  = () => {
  return (    
    <>
    <div>
      <Navbar bg="white" variant="black">
        <Container>
          <div>
            <Navbar.Brand href="/">
              <img src = { logo } alt = 'Logo' style = {{
              height : '70px',
              margin : '10px'
            }}/>
            </Navbar.Brand>
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
              <Nav.Link href='/Favorites'>
              <span className="material-symbols-outlined">favorite</span>
              </Nav.Link>
              <Nav.Link href="/payments/cart">
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