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
    border : 1px solid red;
    width : 95%;
    height : 250px;
    margin : 10px;
    
`

const menuIcon = styled.div`
    border : 1px solid red;
`
const menuDesc = styled.div`
    border : 1px solid red;
`



const AdminMain = () => {


    return <ListContainer>
        <Link to="/adminOrders"><ListItem><span class="material-symbols-outlined">
            shopping_cart
        </span><menuDesc>주문관리</menuDesc></ListItem></Link>
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
