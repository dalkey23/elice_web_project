import React, { useState, useEffect } from "react";

import { useNavigate, useLocation } from "react-router-dom";

import { formatCurrency } from "../../lib/utils.js";
import { CARTLIST_KEY } from "../../constants/key.js";
import { getUserInfo } from "../../apis/auth.js";
import { createOrder } from "../../apis/order.js";
import * as SC from "../../styles/order/Order.js";

const Order = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    // useLocation으로 전달 받은 key호출
    const location = useLocation();
    const TotalCount = location.state.ItemTotalCount;
    const ItemPrice = location.state.ItemPrice;
    const ShippingFee = location.state.ItemShippingFee;
    const ItemList = location.state.ItemList;
    // 값의 계산식을 위하여 parseInt로 계산
    const TotalItemPrice = parseInt(ItemPrice) + parseInt(ShippingFee);

    const products = ItemList.reduce((acc, current) => {
        acc.push({
            productName: current.productInfo.productName,
            quantity: current.count,
        });

        return acc;
    }, []);

    useEffect(() => {
        getUserInfo()
            .then((response) => {
                setName(response.data.name);
                setPhoneNumber(response.data.phoneNumber);
                setAddress(response.data.address);
            })
            .catch((error) => {
                alert(error);
            });
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = {
            name,
            phoneNumber,
            address,
            products,
            total: TotalItemPrice,
        };

        createOrder(formData)
            .then((res) => {
                console.log(res.data);
                localStorage.removeItem(CARTLIST_KEY);
                alert("주문완료!");
                navigate("/orderComplete");
            })
            .catch((error) => {
                console.log(error);
                alert("에러가 발생했습니다. 다시 시도해 주세요.");
            });
    };

    return (
        <SC.Container onSubmit={submitHandler}>
            <SC.OrderInfo>
                <h3> 배송지 정보 </h3>
                <label>
                    {" "}
                    {/* placeholder로 정보를 보이게 한 후 같은 값의 value를 post로 전송 */}
                    <h6> 이름 </h6>
                    <input type="text" placeholder={name} />
                </label>
                <label>
                    <h6> 연락처 </h6>
                    <input type="tel" placeholder={phoneNumber} />
                </label>
                <label>
                    <h6> 주소 </h6>
                    <input type="text" placeholder={address} />
                </label>
            </SC.OrderInfo>
            <SC.PaymentInfo>
                {" "}
                {/* 풀어서 전달된 값을 저장한 후 formatCurrency */}
                <h3> 결제정보 </h3>
                <h5> 상품수 {TotalCount}개 </h5>
                <h5> 상품금액 {formatCurrency(ItemPrice)}원 </h5>
                <h5> 배송비 {formatCurrency(ShippingFee)}원 </h5>
                <h4> 총 결제금액 {formatCurrency(TotalItemPrice)}원</h4>
                <button>구매하기</button>
            </SC.PaymentInfo>
        </SC.Container>
    );
};

export default Order;
