import React from "react";
import { NavLink } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { userAtom } from "../../recoil/userAtom.js";
import logo from "../../assets/logo.png";
import AdminHeader from "./AdminHeader.jsx";
import UserHeader from "./UserHeader.jsx";
import * as SC from "../../styles/Header.js";

const Header = () => {
    const userRole = useRecoilValue(userAtom);

    return (
        <SC.Container>
            <SC.LogoDiv>
                <NavLink to="/">
                    <img src={logo} alt="Logo" />
                </NavLink>
            </SC.LogoDiv>
            {userRole === "admin" ? <AdminHeader /> : <UserHeader />}
        </SC.Container>
    );
};

export default Header;
