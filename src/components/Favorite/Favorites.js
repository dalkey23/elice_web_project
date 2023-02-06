import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';

const GetDataLocalStorage = () => {
  const [items, setItems] = useState([]);
  const [data, setData] = useState('');

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('Product1'));
    console.log(items);
    if (items) {
      setItems(items);
    }

    axios
      .get("http://localhost:8080/users/21")
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        alert(error)
      })




  }, []);



  return <div>{data.name}{data.email}</div>
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