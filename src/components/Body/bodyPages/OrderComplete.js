import React from "react";
import styled from "styled-components";

const Container = styled.div`
    padding : 30px 80px;
    display : flex;
    flex-direction : column;
    align-items : center;

    & h3 {
        margin-bottom : 40px;
        font-weight : bold;
    }

    & button {
        margin : 10px;
        width : 50%;
        height : 40px;
        border : none;
        background : grey;
        color : white;
        
    }
 

`

const OrderComplete = () => {
    return <Container>
        <h3>주문이 완료되었습니다!</h3>
        <button>주문 내역 보기</button>
        <button>쇼핑 계속하기</button>
        
    </Container>
   
}

export default OrderComplete;