import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { CARTLIST_KEY, NO_SHIPPING_FEE_PRICE } from "../../constants/key";
import { formatCurrency } from "../../lib/utils";
import * as SC from "../../styles/order/Cart.js";
import EmptyCart from "../../components/EmptyCart.jsx";

const Cart = () => {
    const navigate = useNavigate();
    const Token = localStorage.getItem("accessToken");
    const [items, setItems] = useState([]);
    const [isLoaded, setLoaded] = useState(false);
    const [countObject, setCountObject] = useState({});

    useEffect(() => {
        const savedCartList = localStorage.getItem(CARTLIST_KEY);

        const cartList = savedCartList ? JSON.parse(savedCartList) : [];

        setItems(cartList);

        // // count가 각 1개씩 들어가도록 초기세팅
        // const newCountObject = cartList.reduce((acc, current) => {
        //     acc[current.id] = 1

        //     return acc
        // }, {})

        // setCountObject(newCountObject)

        setLoaded(true);
    }, []);

    const deleteHandler = (id) => {
        const savedCartList = localStorage.getItem(CARTLIST_KEY);
        const cartList = savedCartList ? JSON.parse(savedCartList) : [];
        // 불러오고
        console.log(cartList);
        const filterCartList = cartList.filter((a) => a.productInfo.id !== id);

        console.log("filterCartList : ", filterCartList);

        setItems(filterCartList);
        localStorage.setItem(CARTLIST_KEY, JSON.stringify(filterCartList));
        alert("삭제하기 완료!");
    }; //선택삭제!!

    const totalCount = useMemo(() => {
        return items.reduce((acc, current) => {
            acc = acc + parseInt(current.count);
            return acc;
        }, 0);
    }, [items]);

    const totalItemPrice = useMemo(() => {
        return items.reduce((acc, current) => {
            acc =
                acc +
                parseInt(current.productInfo.price) * parseInt(current.count);

            return acc;
        }, 0);
    }, [items]);

    const shippingFee = useMemo(() => {
        return totalItemPrice >= NO_SHIPPING_FEE_PRICE ? 0 : 3000;
    }, [totalItemPrice]);

    const totalPrice = useMemo(
        () => totalItemPrice + shippingFee,
        [totalItemPrice, shippingFee]
    );

    const SubmitHandler = (e) => {
        e.preventDefault();

        // navigate에 state담아서 전달
        {
            Token || !Token === "null"
                ? navigate("/payments/order", {
                      state: {
                          // 값들이 formatCurrency로 변환되었으므로 풀어서 값을 전달
                          ItemTotalCount: totalCount,
                          ItemPrice: totalItemPrice,
                          ItemShippingFee: shippingFee,
                          ItemList : items
                      },
                  })
                : navigate("/LoginForm");
        }
    };
    if (!isLoaded) return <></>;
    if( items.length === 0) return <EmptyCart />

    return (
        <>
            <SC.Container>
                <SC.CartInfo>
                    {items.map((item) => {
                        return (
                            <SC.CartItem key={item.productInfo.id}>
                                <SC.ImgDiv>
                                    <img
                                        src={item.productInfo.imgUrl}
                                        alt="썸네일"
                                    />
                                </SC.ImgDiv>
                                <div>{item.productInfo.productName}</div>
                                <div>{item.productInfo.price}원</div>
                                {" X "}
                                <div>
                                    {/* type="number"
                                    name="sku"
                                    onChange={(e) => {
                                        const newCountObject = {
                                            ...countObject,
                                        };

                                        newCountObject[item.id] =
                                            e.target.value;

                                        setCountObject(newCountObject);
                                    }}
                                    defaultValue={item.count} */}
                                    {item.count}개
                                </div>
                                {" = "}
                                <div>
                                    {item.productInfo.price * item.count}원
                                </div>
                                <SC.DeleteAllBtn
                                    onClick={() =>
                                        deleteHandler(item.productInfo.id)
                                    }>
                                    삭제하기
                                </SC.DeleteAllBtn>
                            </SC.CartItem>
                        );
                    })}
                    <SC.DeleteAllBtn
                        onClick={() => {
                            localStorage.removeItem(CARTLIST_KEY);
                            alert("장바구니 목록이 모두 삭제되었습니다.");
                            // 로컬스토리지에 토큰이 삭제된 상태를 인식시키기 위하여 새로고침으로 href로 이동
                            window.location.href = "/payments/cart";
                        }}>
                        전체삭제
                    </SC.DeleteAllBtn>
                </SC.CartInfo>
                <SC.FormPaymentInfo onSubmit={SubmitHandler}>
                    <h3>결제정보</h3>
                    <h5>상품수 {totalCount} 개</h5>
                    <h5>상품금액 {formatCurrency(totalItemPrice)}원</h5>
                    <h5>배송비 {formatCurrency(shippingFee)}원</h5>
                    <h4>총 결제금액 {formatCurrency(totalPrice)}원</h4>
                    <button>구매하기</button>
                </SC.FormPaymentInfo>
            </SC.Container>
        </>
    );
};

export default Cart;
