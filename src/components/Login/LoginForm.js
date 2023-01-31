import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function LoginForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  // 값이 적절하지 않은 경우 빨간 테두리 (Form.Control.Feedback)
  return (
    <Login>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row>
        <Form.Group as={Col} md="15" controlId="validationCustom01">
          <Form.Label>아이디</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Elice@elice.com"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group> 
      </Row>
        <Row className="mb-3">
        <Form.Group as={Col} md="15" controlId="validationCustom02">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            required
            type="password"
            // type을 password로 해주어야 안보이게 타이핑 가능
            placeholder="*****"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Row>
      <LoginBtn>
        <Button type="submit" style = {{
            backgroundColor : 'grey',
            border : 'grey'
            }}>로그인
        </Button>
        <Button type="button" style = {{
            backgroundColor : 'grey',
            border : 'grey'
            }}>
            <a href='/RegisterForm' style = {{
                textDecoration : 'none',
                color : 'white'
                }}>회원가입
            </a>
        </Button>
      </LoginBtn>
    </Form>
    </Login>
  );
}

// 리액트 부트스트랩의 값을 styled-component로 감싸서 css 처리
// 현재 우측으로 정렬이 되지 않음
const Login = styled.div`
    display : flex;
    justify-content : space-around;
    padding : 200px;
`

const LoginBtn = styled.div`
    display : flex;
    justify-content : space-around;
`

export default LoginForm;