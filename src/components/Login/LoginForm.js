import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import axios from "axios";

// 아직 사용 안하는 import 그룹
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";

const LoginForm = () => {
  const [isRedirect, setIsRedirect] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // 유효성 검사 로직 보류
  const [validated, setValidated] = useState(false);

  // email, password를 보내는 post 요청
  const handleSubmit = (e) => {
    e.preventDefault();

    const formdata = { email, password };

    const onSubmit = () => {
      axios
        .post("http://localhost:8080/login", { ...formdata })
        .then((res) => {
          if (email === 'admin@admin.com') {
            localStorage.setItem('role', 'admin')
            alert('관리자 로그인 되었습니다')
          // 로컬스토리지에 토큰이 들어온 상태를 인식시키기 위하여 새로고침으로 href로 이동
          window.location.href = '/'
          } else {
            localStorage.setItem("accessToken", res.data)
            axios.defaults.headers.common["Authorization"] = res.data;
            alert('로그인 되었습니다')
          // 로컬스토리지에 토큰이 들어온 상태를 인식시키기 위하여 새로고침으로 href로 이동
          window.location.href = '/'
          }
        })
        .catch((err) => {
          alert(err);
        });
    };

    onSubmit();
  };

  // const handleSubmitCorrect = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }
  //   setValidated(true);
  // };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Login>
        <FloatingLabel controlId="floatingInput" label="이메일" className="mb-3" onChange={(e) => setEmail(e.target.value)}>
          <Form.Control type="email" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="비밀번호" onChange={(e) => setPassword(e.target.value)}>
          <Form.Control type="password" />
        </FloatingLabel>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "20px",
          }}
        >
          <Button
            type="submit"
            style={{
              borderRadius: "5px",
              backgroundColor: "grey",
              borderColor: "grey",
            }}
            onClick={handleSubmit}
          >
            로그인
          </Button>
          <Button
            style={{
              marginLeft: "5px",
              borderRadius: "5px",
              backgroundColor: "grey",
              borderColor: "grey",
            }}
          >
            <Link
              to="/RegisterForm"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              회원가입
            </Link>
          </Button>
        </div>
      </Login>
    </div>
  );
};

const Login = styled.div`
  padding: 300px;
`;

export default LoginForm;
