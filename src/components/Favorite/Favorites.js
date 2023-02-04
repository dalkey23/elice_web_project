import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const GetDataLocalStorage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('product1'));
    console.log(items);
    if (items) {
      setItems(items);
    }

  }, []);

  return <div>{items.productName}</div>
}

const Favorite = () => {
  return (
    <>
      <GetDataLocalStorage />
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
    </>
  );
}

export default Favorite;