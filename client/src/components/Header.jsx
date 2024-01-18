import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";



import { getCategories } from "../apis/products"
import * as SC from "../styles/Header.js"
import logo from "../assets/logo.png"

const Header = () => {
    const Token = localStorage.getItem("accessToken");
    const AdminToken = localStorage.getItem("adminToken");
    const [categories, setCategories] = useState([]);

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
                {/* admin일때 사람아이콘 출력 x , 유저일때 usermain, 비회원일때 loginForm >> 삼항 연산자에 삼항 연산자를 넣어서 코드의 가독성이 조금 떨어 질 것 같아서 고민 */}
                {AdminToken || !AdminToken === "null" ? (
                    <></>
                ) : (
                    <li>
                        {Token || !Token === "null" ? (
                            <div>
                                <NavLink to="/UserMain">
                                    <span className="material-symbols-outlined">
                                        person
                                    </span>
                                    <p>마이페이지</p>
                                </NavLink>
                                <NavLink to="/Favorites">
                                    <span
                                        className="material-symbols-outlined"
                                        >
                                        favorite
                                    </span>
                                    <p>찜하기</p>
                                </NavLink>
                                <NavLink to="/payments/cart">
                                    <span className="material-symbols-outlined">
                                        shopping_bag
                                    </span>
                                    <p>장바구니</p>
                                </NavLink>
                            </div>
                        ) : (
                            <div>
                                <NavLink to="/LoginForm">
                                    <span className="material-symbols-outlined">
                                        person
                                    </span>
                                    <p>로그인</p>
                                </NavLink>
                                <NavLink to="/Favorites">
                                    <span
                                        className="material-symbols-outlined">
                                        favorite
                                    </span>
                                </NavLink>
                                <NavLink to="/payments/cart">
                                    <span className="material-symbols-outlined">
                                        shopping_bag
                                    </span>
                                </NavLink>
                            </div>
                        )}
                    </li>
                )}
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

