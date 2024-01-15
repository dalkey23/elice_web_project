import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { login } from "../../apis/auth";
import * as SC from "../../styles/auth/LoginForm"

const LoginForm = () => {
    const navigate = useNavigate();
    const [userdata, setUserdata] = useState({
        email: "",
        password: "",
    });

    const changeHadler = (e) => {
        setUserdata((curUserdata) => {
            return { ...curUserdata, [e.target.id]: e.target.value };
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        login(userdata)
            .then((res) => {
                if (res.data.role === "admin") {
                    localStorage.setItem("adminToken", res.data.token);
                    alert("관리자 로그인 되었습니다");
                    navigate("/");
                } else {
                    localStorage.setItem("accessToken", res.data.token);
                    alert("로그인 완료");
                    navigate("/");
                }
            })
            .catch((err) => {
                // 아이디 비밀번호를 따로 에러 출력시 보안상 문제가 생길 수 있어 통합하여 alert
                console.log(err);
                alert("아이디, 비밀번호를 확인해주세요.");
            });
    };

    return (
        <SC.Login>
            <SC.LoginForm onSubmit={submitHandler}>
                <label>이메일</label>
                <SC.LoginInput
                    type="text"
                    id="email"
                    value={userdata.email}
                    onChange={changeHadler}
                />
                <label>비밀번호</label>
                <SC.LoginInput
                    type="password"
                    id="password"
                    value={userdata.password}
                    onChange={changeHadler}
                />
                <SC.ButtonDiv>
                    <SC.LoginButton type="submit">로그인</SC.LoginButton>
                    <Link to="/RegisterForm"><SC.LoginButton >회원가입</SC.LoginButton></Link>
                </SC.ButtonDiv>
            </SC.LoginForm>
        </SC.Login>
    );
};

export default LoginForm;