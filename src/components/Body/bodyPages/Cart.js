import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { CARTLIST_KEY, NO_SHIPPING_FEE_PRICE } from '../../../constants/key'
import { formatCurrency } from '../../../lib/utils'


const FormContainer = styled.form`
    display : flex;
    padding : 10px 80px;
`
const CartInfo = styled.div`
    width : 60%;
    margin : 10px;
    padding : 10px;
    box-shadow: 0 5px 10px grey;
    & h3 {
        border-bottom: 1px grey solid;
        padding-bottom: 10px;
      }
    & label {
        display : block;
        padding-bottom : 20px;
    }

    & input {
        width : 80%;
    }

    & h6 {

        font-weight : bold;
        weight : 30%;

        
    }
`
const CartItem = styled.div`
    border : 1px solid gray;
    & div {
        display : inline;
        margin : 15px;
    }
`

const ImgDiv = styled.div`
    border : 1px solid red;

    & img {
        width : 100px;
    }
`

const PaymentInfo = styled.div`
  box-shadow: 0 5px 10px grey;
  padding : 10px;
  width : 40%;
  margin : 10px;
  & h3 {
    border-bottom: 1px grey solid;
    padding-bottom: 10px;
  }

  & h4 {
    border-top: 1px grey solid;
    padding-top: 10px;
  }
  
  & button {
    width : 100%;
    height : 35px;
    background : grey;
    border : none;
    color : white;
  }
`
const Cart = ()=>{
    const navigate = useNavigate();
    const Token = localStorage.getItem("accessToken");
    const [items, setItems] = useState([]);
    const [isLoaded, setLoaded] = useState(false);
    const [countObject, setCountObject] = useState({});

  
    useEffect(() => {

        const savedCartList = localStorage.getItem(CARTLIST_KEY)

        const cartList = savedCartList ? JSON.parse(savedCartList) : []

        setItems(cartList)


        // count가 각 1개씩 들어가도록 초기세팅
        const newCountObject = cartList.reduce((acc, current) => {
            acc[current.id] = 1

            return acc
        }, {})

        setCountObject(newCountObject)

        setLoaded(true)
    }, []);

    const totalCount = useMemo(() => {
        return  Object.values(countObject).reduce((acc, current) => {
            acc = acc + parseInt(current)
            return acc
        }, 0)
    }, [countObject])

    const totalItemPrice = useMemo(() => {
        return items.reduce((acc, current) => {
            acc = acc + (parseInt(current.price) * parseInt(countObject[current.id]))

            return acc
        }, 0)
    }, [countObject, items])

    const shippingFee = useMemo(() => {
        return totalItemPrice >= NO_SHIPPING_FEE_PRICE ? 0 : 3000
    }, [totalItemPrice])

    const totalPrice = useMemo(() => totalItemPrice + shippingFee, [totalItemPrice, shippingFee])

    
    const SubmitHandler = (e)=>{
        e.preventDefault();
        
        { Token || !Token === "null" ? navigate('/payments/order') : 
                    navigate('/LoginForm') }
    }
    if (!isLoaded) return <></>

    return <>
    <FormContainer onSubmit={SubmitHandler}>
        <CartInfo>
            {items.map((item)=>{
                return <CartItem>
                    <ImgDiv><img src={item.imgUrl} alt="썸네일" /></ImgDiv>
                    <div>{item.productName}</div>
                    <div>{item.price}원</div>{" X "}
                     <input type="number" name="sku" onChange={(e) => {
                        const newCountObject = {...countObject}

                        newCountObject[item.id] = e.target.value

                        setCountObject(newCountObject)
                    }} defaultValue={countObject[item.id]}/>{" = "}
                    <div>{item.price*countObject[item.id]}원</div>
                </CartItem>
            })}
        </CartInfo>
        <PaymentInfo>
            <h3>결제정보</h3>
            <h5>상품수   {totalCount} 개</h5>
            <h5>상품금액  {formatCurrency(totalItemPrice)}원</h5>
            <h5>배송비  {formatCurrency(shippingFee)}원</h5>
            <h4>총 결제금액 {formatCurrency(totalPrice)}원</h4>
            <button>구매하기</button>
        </PaymentInfo>
    </FormContainer>
    </>
}

export default Cart;