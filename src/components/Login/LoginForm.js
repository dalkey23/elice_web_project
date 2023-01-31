import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

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
    <>
    <Login>
      <FloatingLabel
        controlId="floatingInput"
        label="이메일"
        className="mb-3">
        <Form.Control type="email" placeholder="exam@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="비밀번호">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
    <div style = {{
      display : 'flex',
      justifyContent : 'flex-end',
      padding : '20px'
    }}>
      <Button type = 'submit' style = {{
        borderRadius : '5px',
        backgroundColor : 'grey',
        borderColor : 'grey'
      }}>
          로그인
      </Button>
      <Button style = {{
        marginLeft : '5px',
        borderRadius : '5px',
        backgroundColor : 'grey',
        borderColor : 'grey'
      }}>
        <a href='/RegisterForm' style = {{
              textDecoration : 'none',
              color : 'white'
              }}>회원가입
        </a>
      </Button>
    </div>
    </Login>
  </>
  );
}

// 리액트 부트스트랩의 값을 styled-component로 감싸서 css 처리
// 현재 우측으로 정렬이 되지 않음
const Login = styled.div`
    padding : 200px;
    width : 70%;
`

export default LoginForm;