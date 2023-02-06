import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const ListContainer = styled.div`
    display : flex;
    align-items : center;
    flex-wrap : wrap;
    padding : 10px 80px;
    & a {
        text-decoration : none;
        color : black;
        width : 30%;
        padding : 10px;
    }

`


const ListItem = styled.div`
    flex : 1;
    display : flex;
    flex-direct : column;
    border : 1px solid red;
    width : 95%;
    height : 250px;
    margin : 10px;
    
`

const MenuIcon = styled.div`
    border : 1px solid green;
    width : 30%

    & .material-symbols-outlined {
        font-variation-settings:
        'FILL' 0,
        'wght' 600,
        'GRAD' 0,
        'opsz' 48
      }

    }
`
const MenuDesc = styled.div`
    border : 1px solid orange;
    padding : 20px;
    & span {
        font-size : 30px;
        font-weight : bold;
    }
`



const AdminMain = () => {


    return <ListContainer>
        <Link to="/adminOrders"><ListItem><MenuIcon>
            <span class="material-symbols-outlined" style={{width:"20px"}}>
                shopping_cart
            </span>
        </MenuIcon><MenuDesc><span>주문 관리</span><p>모든 주문 내역을 확인 및 관리할 수 있습니다.</p></MenuDesc></ListItem></Link>
        <Link to="/adminCategories"><ListItem><span class="material-symbols-outlined">
            view_cozy
        </span>카테고리관리</ListItem></Link>
        <Link to="/adminUsers"><ListItem><span class="material-symbols-outlined">
            groups
        </span>회원관리</ListItem></Link>
        <Link to="/adminProducts"><ListItem><span class="material-symbols-outlined">
            inventory_2
        </span>제품관리</ListItem></Link>
    </ListContainer>
}

export default AdminMain;
