import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Cart from "./Cart";
import Order from "./Order";
import OrderComplete from "./OrderComplete";

const TitleDiv = styled.div`
    border-bottom : 1px grey solid;
    padding-bottom : 10px;
  
  & ul {
    list-style-type : none;
    
  }

  & li {
    display : inline;
  }
`
const Container = styled.div`
    display : flex;
    padding : 10px 80px;
`

const Payments = () => {
    return <>
    <TitleDiv>
        <ul>
            <li><a href="/payments/cart">장바구니</a></li>{">"}
            <li><a href="/payments/order">주문결제</a></li>{">"}
            <li><a href="/payments/orderComplete">주문완료</a></li>
        </ul>
    </TitleDiv>
    <Container>
        <Routes>
            <Route path="cart" exact element={<Cart />} />
            <Route path="order" element={<Order />} />
            <Route path="orderComplete" element={<OrderComplete />} /> 
        </Routes>
    </Container>
    </>
}

export default Payments;