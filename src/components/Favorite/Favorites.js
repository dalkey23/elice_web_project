import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';

const GetDataLocalStorage = () => {
  const [items, setItems] = useState([]);
  const [data, setData] = useState('');

  useEffect(() => {
    
    let newItems = [];

    for(let i=0;i<localStorage.length;i++){
      const key = localStorage.key(i);
      if(key.startsWith("elice_cartlist_")){
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



  return <div>{data}</div>
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