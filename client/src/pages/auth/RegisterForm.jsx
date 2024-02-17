import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../apis/auth";
import * as SC from "../../styles/auth/RegisterForm"

const RegisterForm = () => {
    const navigate = useNavigate();
    const [userdata, setUserdata] = useState({
        email: "",
        name: "",
        password: "",
        phoneNumber: "",
        address: "",
    });

    const [confirmPw, setConfirmPW] = useState("")

    const changeHandler = (e) => {
        setUserdata((curUserdata) => {
            return { ...curUserdata, [e.target.id]: e.target.value };
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();

        createUser(userdata)
            .then(() => {
                alert("회원가입이 완료되었습니다.");
                navigate("/LoginForm");
            })
            .catch((err) => {
                alert(err.response.data.message)
            });
    };

    return (
        <SC.Register>
            <SC.RegisterForm onSubmit={submitHandler}>
                <label>이메일</label>
                <SC.RegisterInput
                    type="text"
                    id="email"
                    value={userdata.email}
                    onChange={changeHandler}
                />
                <label>이름</label>
                <SC.RegisterInput
                    type="text"
                    id="name"
                    value={userdata.name}
                    onChange={changeHandler}
                />
                <label>비밀번호</label>
                <SC.RegisterInput
                    type="password"
                    id="password"
                    value={userdata.password}
                    onChange={changeHandler}
                />
                <label>비밀번호 확인</label>
                <SC.RegisterInput
                    type="password"
                    id="passwordConfirm"
                    value={confirmPw}
                    onChange={(e)=>{setConfirmPW(e.target.value)}}
                />
                <label>연락처</label>
                <SC.RegisterInput
                    type="text"
                    id="phoneNumber"
                    value={userdata.phoneNumber}
                    onChange={changeHandler}
                />
                <label>주소</label>
                <SC.RegisterInput
                    type="text"
                    id="address"
                    value={userdata.address}
                    onChange={changeHandler}
                />
                <SC.RegisterButton type="submit">회원가입</SC.RegisterButton>
            </SC.RegisterForm>
        </SC.Register>
    );
};

export default RegisterForm;
