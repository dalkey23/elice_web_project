import React from "react";
import { Link } from "react-router-dom";

import * as SC from "../../styles/order/OrderComplete.js"

const OrderComplete = () => {
    return (
        <SC.Container>
            <h2>주문이 완료되었습니다!</h2>
            <Link to={"/OrderList"}>주문 내역 보기</Link>
            <Link to={"/"}>쇼핑 계속하기</Link>
        </SC.Container>
    );
};

export default OrderComplete;
