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

    const [items, setItems] = useState([]);
    const [count, setCount] = useState(1);

  
    useEffect(() => {
      let newItems = [];

      for(let i=0;i<localStorage.length;i++){
        const key = localStorage.key(i);
        if(key.startsWith("elice_whishlist_")){
            console.log(JSON.parse(localStorage.getItem(key)))
            // for(let j = 0; j< localStorage.getItem(key).length;j++) {
            //     console.log(`${j}번 ${localStorage.getItem(key)}`)
            //     // newItems.push(JSON.parse(localStorage.getItem(key)));
            //     // console.log(localStorage.getItem(key)[0])
            //     // setItems(newItems)
            // }

        }
      }
    }, []);



    const ChanegeHandler = (e)=>{
        setCount(e.target.value)
    }

    const SubmitHandler = (e)=>{
        e.preventDefault();
    

        
        navigate('/payments/order')
    }

    return <>
    <FormContainer onSubmit={SubmitHandler}>
        <CartInfo>
            {items.map((item)=>{
                return <CartItem>
                    <ImgDiv><img src={item.imgUrl} alt="썸네일" /></ImgDiv>
                    <div>{item.productName}</div>
                    <div>{item.price}원</div>{" X "}
                    <input type="number" name="sku" onChange={ChanegeHandler} defaultValue={count}/>{" = "}
                    <div>{item.price*count}원</div>
                </CartItem>
            })}
        </CartInfo>
        <PaymentInfo>
            <h3>결제정보</h3>
            <h5>상품수   5 개</h5> 
            <h5>상품금액  27,000원</h5>
            <h5>배송비  3,000원</h5>
            <h4>총 결제금액 30,000원</h4>
            <button>구매하기</button>
        </PaymentInfo>
    </FormContainer>
    </>
}

export default Cart;