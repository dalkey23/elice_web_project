import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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

    const [items, setItems] = useState([]);

  
    useEffect(() => {
      let newItems = [];

      for(let i=0;i<localStorage.length;i++){
        const key = localStorage.key(i);
        if(key.startsWith("elice_whishlist_")){
            newItems = [...items];
            newItems.push(localStorage.getItem(key));
            setItems(newItems)
            console.log(newItems)
        }
      }
    }, []);



    console.log(items)
    const listItems = [{
    productName: "육아1", categoryId: 1, manufacturer: "제조사", shortDesc: "짧은 설명",
    detailDesc: "상세 설명", imgUrl: "이미지", totalstocks: "재고수", price: 5000,
    sku: "묶음", count : 1
}, {
    productName: "육아2", categoryId: 1, manufacturer: "제조사", shortDesc: "짧은 설명",
    detailDesc: "상세 설명", imgUrl: "이미지", totalstocks: "재고수", price: 3000,
    sku: "개", count : 2
}]

    const SubmitHandler = (e)=>{
        e.preventDefault();
        console.log("s");

        
        navigate('/payments/order')
    }

    return <>
    <FormContainer onSubmit={SubmitHandler}>
        <CartInfo>
            {listItems.map((item)=>{
                return <CartItem>
                    <div>{item.imgUrl}</div>
                    <div>{item.productName}</div>
                    <div>{item.price}원</div>{" X "}
                    <div>{item.count}{item.sku}</div>{" = "}
                    <div>{item.count*item.price}원</div>
                </CartItem>
            })}
        </CartInfo>
        <PaymentInfo>
            <h3>결제정보</h3>
            <h5>상품수   {listItems.length} 개</h5> 
            <h5>상품금액 </h5>
            <h5>배송비  3,000원</h5>
            <h4>총 결제금액</h4>
            <button>구매하기</button>
        </PaymentInfo>
    </FormContainer>
    </>
}

export default Cart;