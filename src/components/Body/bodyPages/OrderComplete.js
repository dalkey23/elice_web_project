import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display : flex;
    padding : 10px 80px;
`

const OrderComplete = () => {
    return <>
    <Container>
        <h3>주문이 완료되었습니다.</h3>
        <button>주문 내역 보기</button>
        <button>쇼핑 계속하기</button>
    </Container>
    </>
}

export default OrderComplete;