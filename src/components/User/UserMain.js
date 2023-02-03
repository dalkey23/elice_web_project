import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const UserMain = () => {

return (
    <div style = {{
        display : 'flex',
        justifyContent : 'center'
    }}>
        <UserMainDiv>
            <NavLink to="/UserInfo" style = {{
                textDecorationLine : 'none',
                display : 'flex',
                justifyContent : 'center'
            }}>
                <button style = {{
                    padding : '8px',
                    borderRadius : '5px',
                    backgroundColor : 'white'
                }}>유저 정보</button>
            </NavLink>
            <NavLink to="/UserInfo" style = {{
                textDecorationLine : 'none',
                display : 'flex',
                justifyContent : 'center',
            }}>
                <button style = {{
                    padding : '8px',
                    margin : '50px',
                    borderRadius : '5px',
                    backgroundColor : 'white'
                }}>주문 내역</button>
            </NavLink>
            <div style = {{
                display : 'flex',
                justifyContent : 'center'
            }}>
            <button style = {{
                    padding : '8px',
                    width : '15%',
                    borderRadius : '5px',
                    backgroundColor : 'white'
            }}>로그아웃</button>
            </div>
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
    background-color : grey;
`

export default UserMain;