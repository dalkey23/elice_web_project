import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { getUserInfo } from "../../apis/auth";
import * as SC from "../../styles/user/UserInfo.js"

const UserInfo = ()=>{

    const [data, setData] = useState("");

    useEffect(() => {
        getUserInfo()
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
                alert("에러가 발생했습니다. 다시 시도해주세요.");
            });
    }, []);



    return (
        <SC.Container>
            <h1>{`${data.name}님 환영합니다!`}</h1>
            <SC.UserInfoDiv>
                이메일 : {data.email}
            </SC.UserInfoDiv>
            <SC.UserInfoDiv>
                이름 : {data.name}
            </SC.UserInfoDiv>
            <SC.UserInfoDiv>
                전화번호 : {data.phoneNumber}
            </SC.UserInfoDiv>
            <SC.UserInfoDiv>
                주소 : {data.address}
            </SC.UserInfoDiv>
            <SC.ButtonDiv>
                <NavLink to="/UserUpdate">정보수정</NavLink>
                <NavLink to="/UserDelete">회원탈퇴</NavLink>
            </SC.ButtonDiv>
        </SC.Container>
    )

};



export default UserInfo;