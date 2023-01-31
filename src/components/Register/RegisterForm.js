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
  // 값이 적절하지 않은 경우 빨간 테두리 로직 (Form.Control.Feedback 로직)
  return (
    <Register>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
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
        <Form.Group as={Col} lg="4" controlId="validationCustom02">
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
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="*****"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom02">
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
        <Form.Group as={Col} md="4" controlId="validationCustom02">
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
      <Button type="submit">회원가입</Button>
    </Form>
    </Register>
  );
}

// 리액트 부트스트랩의 값을 styled-component로 감싸서 css 처리
// 현재 우측으로 정렬이 되지 않음
const Register = styled.div`
    padding : 20px; 900px;
`

export default RegisterForm;