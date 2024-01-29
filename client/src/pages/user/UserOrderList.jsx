import React, { useState, useEffect } from "react";

import { getUserOrderList } from "../../apis/order.js";
import * as SC from "../../styles/order/OrderList.js";
const UserOrderList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getUserOrderList()
            .then((response) => {
                setOrders(response.data);
            })
            .catch((error) => {
                alert(error);
            });
    }, []);

    return (
        <SC.ContentDiv>
            {orders.map((order) => {
                return (
                    <SC.ItemDiv key={order.orderId}>
                        <SC.Item> {order.createdAt.substr(0, 10)} </SC.Item>
                        <SC.Item>
                            {order.products.map((prod) => {
                                return prod.productName;
                            })}
                        </SC.Item>
                        <SC.Item> {order.orderStatus} </SC.Item>
                    </SC.ItemDiv>
                );
            })}
        </SC.ContentDiv>
    );
};

export default UserOrderList;
