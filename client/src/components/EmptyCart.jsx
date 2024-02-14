import React from "react";
import { Link } from "react-router-dom";

import * as SC from "../styles/order/EmptyCart.js"

const EmptyCart = () => {
    return (
        <SC.Container>
            <h2>장바구니에 담긴 상품이 없습니다.</h2>
            <Link to={"/"}>쇼핑 계속하기</Link>
        </SC.Container>
    );
};

export default EmptyCart;
