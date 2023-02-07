import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserDelete = () => {

    const navigate = useNavigate();

    return (
        <div>
        <FloatingLabel controlId="floatingPassword" label="비밀번호" onChange={(e) => setPassword(e.target.value)}>
          <Form.Control type="password" />
        </FloatingLabel>
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

export default UserDelete;