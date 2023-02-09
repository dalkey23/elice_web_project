import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const OrderList = () => {

  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    axios
      .get("http://localhost:8080/users/orders", { headers: { Authorization: token } })
      .then((response) => {
        setOrders(Object.entries(response.data));
        
      })
      .catch((error) => {
        console.log(error)
        alert('에러가 발생했습니다. 다시 시도해주세요.')
      });
  }, [token]);

  console.log(typeof(orders))


  return (
    <OrderListDivUltra>
      <OrderListDiv>
        주문내역
      </OrderListDiv>
      <ContentDiv>
          {orders.map((order)=>{
            return <ul>
              <li>{order.date}</li>
              <li>{order.orderStatus}</li>
              <li><button>주문 취소</button></li>
            </ul>
          })}
      </ContentDiv>
    </OrderListDivUltra>
  )
}

const OrderListDivUltra = styled.div`
  display : flex;
  justify-content : center;
  padding : 50px;
  margin : 10px;
`

const OrderListDiv = styled.div`
  background-color : grey;
  width : 100px;
  height : 100px;
`

const ContentDiv = styled.div`
background-color : white;
`

export default OrderList;