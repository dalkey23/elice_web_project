import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function RegisterForm() {
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
    <Register>
    <Form noValidate validated={validated} onSubmit={handleSubmit}
        style = {{ width : 600 }}>
      <Row className="mb-3" >
        <Form.Group as={Col} md="12" controlId="validationCustom01">
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
        <Form.Group as={Col} controlId="validationCustom02">
          <Form.Label>이름</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="엘리스"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} controlId="validationCustom02">
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
        <Row className="mb-3">
        <Form.Group as={Col} controlId="validationCustom02">
          <Form.Label>전화번호</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="010-1234-5678"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} controlId="validationCustom02">
          <Form.Label>주소</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="서울특별시 광진구 화양동 123-456 1동 2호"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Row>
        <div style={{
          display : 'flex',
          justifyContent : 'flex-end'
        }}>
          <Button type="submit" style = {{
            backgroundColor : 'grey',
            border : 'grey',
          }}>회원가입</Button>
      </div>
    </Form>
    </Register>
  );
}

const Register = styled.div`
    display : flex;
    justify-content : space-around;
    padding : 100px;
`

export default RegisterForm;