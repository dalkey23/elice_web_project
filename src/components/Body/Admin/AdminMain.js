import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

import inventory from '../../Header/inventory_2.png'
import categories from '../../Header/view_cozy.png'
import shopping_cart from '../../Header/shopping_cart.png'

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
    
    &:hover {
        background-color : skyblue;
    }

    
`

const MenuIcon = styled.div`

    }
`
const MenuDesc = styled.div`

    padding : 20px;

    & span {
        font-size : 30px;
        font-weight : bold;
    }
`



const AdminMain = () => {


    return <ListContainer>
        <Link to="/adminOrders"><ListItem>
            <MenuIcon><img src={shopping_cart} alt='shopping_cart' /></MenuIcon>
            <MenuDesc><span>주문 관리</span><p>모든 주문 내역을 확인 및 관리할 수 있습니다.</p></MenuDesc>
        </ListItem></Link>
        <Link to="/adminCategories"><ListItem>
            <MenuIcon><img src={categories} alt='categories' /></MenuIcon>
            <MenuDesc><span>카테고리관리</span><p>제품이 속할 수 있는, 카테고리정보를 관리할 수 있습니다.</p></MenuDesc>
        </ListItem></Link>
        <Link to="/adminProducts"><ListItem>
            <MenuIcon><img src={inventory} alt='inventory' /></MenuIcon>
            <MenuDesc><span>제품 관리</span><p>모든 제품 정보를 확인 및 관리할 수 있습니다.</p></MenuDesc>
            </ListItem></Link>
    </ListContainer>
}

export default AdminMain;
