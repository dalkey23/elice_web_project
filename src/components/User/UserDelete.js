import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import axios from 'axios';
import styled from 'styled-components';

const UserDelete = () => {

    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    return (
        <div style = {{
            margin : '50px',
            display : 'column'
        }}>
        <Delete>
        <FloatingLabel controlId="floatingPassword" label="비밀번호" onChange={(e) => setPassword(e.target.value)}>
          <Form.Control type="password" />
        </FloatingLabel>
        </Delete>
        <button
          onClick={() => {
            axios
              .delete("http://localhost:8080/users/21/delete")
              .then(() => {
                alert("회원 탈퇴 되었습니다.");
                navigate("/");
              })
              .catch((err) => {
                alert(err);
              });
          }}
          style={{
            padding: "8px",
            borderRadius: "8px",
            borderColor: "white",
            backgroundColor: "red",
            color: "white",
          }}
        >
          회원 탈퇴
        </button>
      </div>
    )
}

const Delete = styled.div`
    display : flex;
    justify-content : center;
    padding : 150px;
`

export default UserDelete;