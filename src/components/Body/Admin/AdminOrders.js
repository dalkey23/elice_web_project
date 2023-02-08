import React, { useState,useEffect } from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";
import axios from "axios";


const Container = styled.div`
    padding : 10px 80px;
    display : flex;
    flex-direction : column;
`
const TitleDiv = styled.div`
    border-bottom : 1px solid gray;
    padding-bottom : 10px;
    font-size : 40px;
    font-weight : bold;
`
const CountDiv = styled.div`
    display : flex;
    align-self : center;
    & div {
        margin : 10px;
        padding : 10px;
    }

`

const ListDiv = styled.div`
    align-self : center;

`

const ItemDiv = styled.div`
    display : flex;
    margin : 10px;
    padding : 10px;
    & button {
        border : none;
        background-color : gray;
        color : white;
        margin : 10px;
    }

`

const AdminOrders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios
          .get(`http://localhost:8080/admin/orders`)
          .then((response) => {
            setOrders(response.data);
            console.log(orders)
          })
          .catch((error) => {
            alert(error);
          });
      }, []);

    return <Container>
            <TitleDiv>주문 관리</TitleDiv>
            <CountDiv>
                <div>총 주문수 {orders.length}</div>
                <div>상품 준비중</div>
                <div>상품 배송중</div>
                <div>배송완료</div>
            </CountDiv>
            <ListDiv>
                {orders.map((order)=>{
                    return <ItemDiv key={order.orderId}>
                            <div>{order.createdAt}</div>
                            <div>{order.total}</div>
                            <div>{order.orderStatus}</div>
                            <button>주문 취소</button>
                    </ItemDiv>
                })}
            </ListDiv>
        </Container>

}

export default AdminOrders;