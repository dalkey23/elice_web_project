import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import styled from 'styled-components';

const UserDelete = () => {

    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();

      const onSubmit = () => {
        axios
        .delete("http://localhost:8080/users/delete/:userId", password)
        .then(() => {
          alert("회원 탈퇴 되었습니다.");
          navigate("/");
        })
        .catch((err) => {
          alert(err);
        });
      }
      onSubmit();
    }


    return (
        <div style = {{
            margin : '20%'
        }}>
        <Delete>
        <FloatingLabel controlId="floatingPassword" label="비밀번호"
        value = { password } onChange={(e) => setPassword(e.target.value)}>
          <Form.Control type="password" />
        </FloatingLabel>
        <div style = {{
            margin : '10px',
            display : 'flex',
            justifyContent : 'center'
        }}>
        <Button
          type = 'submit'
          onClick={ handleSubmit }
          style={{
            padding: "8px",
            borderRadius: "8px",
            borderColor: "white",
            backgroundColor: "red",
            color: "white",
          }}
        >
          회원 탈퇴
        </Button>
        </div>
        </Delete>
      </div>
    )
}

const Delete = styled.div`
    display : flex;
    justify-content : center;
`

export default UserDelete;