import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";

const UserInfo = () => {
  const navigate = useNavigate();
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:8080/users/mypage")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <div
      style={{
        margin: "30px",
      }}
    >
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "10px",
        }}
      >{`${JSON.stringify(data.name)}님 환영합니다!`}</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            height: "50%",
            padding: "100px",
          }}
        >
          <Card className="mb-5">
            <Card.Body>이메일 : {JSON.stringify(data.email)}</Card.Body>
          </Card>
          <Card className="mb-5">
            <Card.Body>전화번호 : {JSON.stringify(data.phoneNumber)}</Card.Body>
          </Card>
          <Card className="mb-5">
            <Card.Body>주소 : {JSON.stringify(data.address)}</Card.Body>
          </Card>
          {/* 회원 정보 수정 탈퇴 버튼 */}
          <div
            style={{
              padding: "5px",
              margin: "20px",
            }}
          >
            <NavLink
              to="/UserUpdate"
              style={{
                textDecorationLine: "none",
              }}
            >
              <button
                style={{
                  padding: "8px",
                  borderRadius: "8px",
                  borderColor: "white",
                  backgroundColor: "grey",
                  color: "white",
                }}
              >
                정보 수정
              </button>
            </NavLink>
            <NavLink
              to="/"
              style={{
                textDecorationLine: "none",
                margin: "10px",
              }}
            >
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
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
