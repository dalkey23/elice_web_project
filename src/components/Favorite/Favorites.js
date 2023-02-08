import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import styled from "styled-components";

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

const Favorite = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    
    let newItems = [];
    for(let i=0;i<localStorage.length;i++){
      const key = localStorage.key(i);
      if(key.startsWith("elice_wishlist_")){
          newItems.push(JSON.parse(localStorage.getItem(key)));      
      }
    }
    setItems(newItems)
    console.log({items})
  }, []);
  
  const ItemsTrue = () => {
    return (
    <CartInfo>
            {items.map((item)=>{
                return <CartItem>
                    <ImgDiv><img src={item.imgUrl} alt="썸네일" /></ImgDiv>
                    <div>{item.productName}</div>
                    <div>{item.price}원</div>{" X "}
                    {/* <input type="number" name="sku" onChange={ChanegeHandler}/>
                    <div>{item.price*count}원</div> */}
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