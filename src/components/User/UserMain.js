import React from "react";
import { NavLink , useNavigate } from "react-router-dom";
import styled from "styled-components";

const UserMain = () => {

    const navigate = useNavigate();

    return (
        <div style = {{
            display : 'flex',
            justifyContent : 'center'
        }}>
            <UserMainDiv>
                <NavLink 
                    to="/UserInfo"
                    style = {{
                    textDecorationLine : 'none',
                    display : 'flex',
                    justifyContent : 'center'
                }}>
                    <button style = {{
                        padding : '8px',
                        borderRadius : '5px',
                        borderColor : 'white',
                        backgroundColor : 'grey',
                        color : 'white'
                    }}>유저 정보</button>
                </NavLink>
                <NavLink 
                    to="/OrderList"
                    style = {{
                    textDecorationLine : 'none',
                    display : 'flex',
                    justifyContent : 'center',
                }}>
                    <button style = {{
                        padding : '8px',
                        margin : '40px',
                        borderRadius : '5px',
                        borderColor : 'white',
                        backgroundColor : 'grey',
                        color : 'white'
                    }}>주문 내역</button>
                </NavLink>
                <NavLink to="/" style = {{
                    textDecorationLine : 'none',
                    display : 'flex',
                    justifyContent : 'center',
                }}>
                    <button 
                    onClick = {() => {
                        localStorage.clear()
                        alert('로그아웃 되었습니다.')
                        navigate('/')
                    }}
                    style = {{
                        padding : '10px',
                        borderRadius : '5px',
                        borderColor : 'white',
                        backgroundColor : 'grey',
                        color : 'white'
                    }}

                    >로그아웃</button>
                </NavLink>
            </UserMainDiv>
        </div>
    )
}

const UserMainDiv = styled.div`
    width : 50%;
    padding : 100px;
    margin : 100px;
    display : flex;
    flex-direction : column;
    justify-content : center;
    background-color : white;
`

export default UserMain;