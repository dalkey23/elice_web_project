import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";


import { getCategories } from "../apis/products"
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
        <Container>
            <LogoDiv>
                <NavLink to="/">
                    <img src={logo} alt="Logo" />
                </NavLink>
            </LogoDiv>
            <NavUl>
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
            </NavUl>
            <IconUl>
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
                                </NavLink>
                                <NavLink to="/Favorites">
                                    <span
                                        className="material-symbols-outlined"
                                        style={{
                                            margin: "10px",
                                        }}>
                                        favorite
                                    </span>
                                </NavLink>
                                <NavLink to="/payments/cart">
                                    <span className="material-symbols-outlined">
                                        shopping_bag
                                    </span>
                                </NavLink>
                            </div>
                        ) : (
                            <div>
                                <NavLink to="/LoginForm">
                                    <span className="material-symbols-outlined">
                                        person
                                    </span>
                                </NavLink>
                                <NavLink to="/Favorites">
                                    <span
                                        className="material-symbols-outlined"
                                        style={{
                                            margin: "10px",
                                        }}>
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
                        <button
                            onClick={() => {
                                localStorage.removeItem("adminToken");
                                alert("관리자 로그아웃 되었습니다.");
                                window.location.href = "/";
                            }}
                            style={{
                                padding: "10px",
                                borderRadius: "5px",
                                borderColor: "white",
                                backgroundColor: "grey",
                                color: "white",
                            }}>
                            관리자 로그아웃
                        </button>
                    ) : (
                        <></>
                    )}
                </li>
            </IconUl>
        </Container>
    );
};

export default Header;

const Container = styled.div`
    display: flex;
    margin: 10px 80px;

    & a {
        text-decoration: none;
        color: black;
    }
`;
const LogoDiv = styled.div`
    margin: 10px 50px;
    & img {
        width: 70px;
        height: 70px;
    }
`;

const NavUl = styled.ul`
    align-self: center;
    list-style-type: none;
    & li {
        margin-right: 20px;
        display: inline;
    }
`;

const IconUl = styled.ul`
    align-self: center;
    margin-left: auto;
    display: flex;
    list-style-type: none;
    & li {
        display: inline;
    }
`;
