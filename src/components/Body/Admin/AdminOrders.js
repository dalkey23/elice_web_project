import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin : 30px;
`
const TitleDiv = styled.div`
    border-bottom : 1px solid grey;
    padding-bottom : 10px;
    font-size : 20px;
`
const CountDiv = styled.div`
    display : flex;

`
const AdminOrders = () => {

    return <Container>
            <TitleDiv>주문 관리</TitleDiv>
            <CountDiv>
                <div>총 주문수</div>
                <div>상품 준비중</div>
                <div>상품 배송중</div>
                <div>배송완료</div>
            </CountDiv>
        </Container>

}

export default AdminOrders;