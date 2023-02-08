import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const OrderList = () => {
  return (
    <OrderListDivUltra>
      <OrderListDiv>
        주문내역
      </OrderListDiv>
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

export default OrderList