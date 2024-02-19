import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { userAtom } from "../../recoil/userAtom.js";
import * as SC from "../../styles/Header.js";

const AdminHeader = () => {
    const navigate = useNavigate();
    const setUserRole = useSetRecoilState(userAtom);

    return (
        <>
            <SC.NavUl>
                <NavLink to="/AdminMain">관리자페이지</NavLink>
            </SC.NavUl>
            <SC.IconUl>
                <SC.LogoutButton
                    onClick={() => {
                        localStorage.removeItem("adminToken");
                        setUserRole("");
                        alert("관리자 로그아웃 되었습니다.");
                        navigate("/");
                    }}>
                    관리자 로그아웃
                </SC.LogoutButton>
            </SC.IconUl>
        </>
    );
};

export default AdminHeader;
