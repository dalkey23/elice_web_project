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
  
  return (
    <div style = {{
      display : 'flex',
      justifyContent : 'center'
    }}>
    <Login>
      <FloatingLabel
        controlId="floatingInput"
        label="이메일"
        className="mb-3">
        <Form.Control type="email"/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="비밀번호">
        <Form.Control type="password"/>
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
  </div>
  );
}

const Login = styled.div`
    padding : 200px;
    width : 60%;
`

export default LoginForm;