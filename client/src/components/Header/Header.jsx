import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { getCategories } from "../../apis/products.js";
import { userAtom } from "../../recoil/userAtom.js";
import * as SC from "../../styles/Header.js";
import logo from "../../assets/logo.png";
import Members from "./Members.jsx";
import NonMembers from "./NonMembers.jsx";

const Header = () => {
    const Token = localStorage.getItem("accessToken");
    const AdminToken = localStorage.getItem("adminToken");
    const [categories, setCategories] = useState([]);
    const userRole = useRecoilValue(userAtom);

    useEffect(() => {
        getCategories()
            .then((response) => {
                setCategories(response.data.searchAll);
            })
            .catch((error) => {
                alert(error);
            });
    }, []);

    return (
        <SC.Container>
            <SC.LogoDiv>
                <NavLink to="/">
                    <img src={logo} alt="Logo" />
                </NavLink>
            </SC.LogoDiv>
            <SC.NavUl>
                {" "}
                {categories.map((category) => {
                    return (
                        <li key={category.categoryId}>
                            {" "}
                            {AdminToken || !AdminToken === "null" ? (
                                <> </>
                            ) : (
                                <NavLink
                                    to={`/categories/${category.categoryId}`}>
                                    {category.name}
                                </NavLink>
                            )}
                        </li>
                    );
                })}
                {/* AdminToken이 admin값일때 관리자페이지 노출 */}
                {/* <></>이 아닌 다른 방법으로 노출을 조정할 수 있을지 고민 */}
                <li>
                    {AdminToken || !AdminToken === "null" ? (
                        <NavLink to="/AdminMain">관리자페이지</NavLink>
                    ) : (
                        <></>
                    )}
                </li>
            </SC.NavUl>
            <SC.IconUl>
                {userRole === "user" && <Members />}
                {userRole === "" && <NonMembers />}
                
                <li>
                    {AdminToken || !AdminToken === "null" ? (
                        <SC.LogoutButton
                            onClick={() => {
                                localStorage.removeItem("adminToken");
                                alert("관리자 로그아웃 되었습니다.");
                                window.location.href = "/";
                            }}>
                            관리자 로그아웃
                        </SC.LogoutButton>
                    ) : (
                        <></>
                    )}
                </li>
            </SC.IconUl>
        </SC.Container>
    );
};

export default Header;
