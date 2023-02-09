import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { WISHLIST_KEY } from '../../constants/key'

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

// const ChanegeHandler = (e)=>{
//   setCount(e.target.value)
// }

const deleteHandler = () => {
  alert("삭제하기 완료!")
  
  const savedWishList = localStorage.removeItem(WISHLIST_KEY)

  const wishList = savedWishList ? JSON.parse(savedWishList) : []

  wishList.push(data)
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishList));
}

const Favorite = () => {
  const [items, setItems] = useState([]);
  const [countObject, setCountObject] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    
    const savedWishList = localStorage.getItem(WISHLIST_KEY)

    const wishList = savedWishList ? JSON.parse(savedWishList) : []

    setItems(wishList)


    // count가 각 1개씩 들어가도록 초기세팅
    const newCountObject = wishList.reduce((acc, current) => {
        acc[current.id] = 1

        return acc
    }, {})

    setCountObject(newCountObject)

    // setLoaded(true)
  }, []);
  
  const ItemsTrue = () => {
    return (
      
    <CartInfo>
            {items.map((item)=>{
                return <CartItem>
                    <ImgDiv><img src={item.imgUrl} alt="썸네일" /></ImgDiv>
                    <div>{item.productName}</div>
                    <button onClick = {(e) => {
                        e.preventDefault();
                        navigate(`/Iteminfo/${item.id}`)
                    }}>구매하기</button>
                 <button onClick = {deleteHandler}>삭제하기</button>
                </CartItem>
            })}
    </CartInfo>
    );
  }
    const ItemsFalse = () => {
      return  (
      <Container style={{ display: 'flex', justifyContent: 'center', margin: '200px' }}>
          <Row style={{
            backgroundColor: 'grey',
            height: '300px',
            width: '60%',
            margin: '50px'
          }}>
            <Col style={{ display: 'flex', justifyContent: 'center', margin: '100px 0 0 0px' }}>
              <span class="material-symbols-outlined" style={{ display: 'flex', justifyContent: 'center' }}>diagnosis</span>
              <div>찜한 상품이 없습니다.</div>
            </Col>
          </Row>
        </Container>
        );
    }
      
  return (
    <div>
    {items.length ? <ItemsTrue/> : <ItemsFalse/>}
    </div>
  )
}

export default Favorite;