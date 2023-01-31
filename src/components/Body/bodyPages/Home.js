import React from 'react'
import {Button, Container} from 'react-bootstrap';
import BodySlides from '../bodySlides';

const Home = () => {
  return (
    <>
    <Container>
      <BodySlides />
        <div className = "d-flex justify-content-around">
        <Button variant="success">육아</Button>{' '}
        <Button variant="danger">생활</Button>{' '}
        <Button variant="warning">스포츠</Button>{' '}
        <Button variant="dark">패션</Button>{' '}
        <Button variant="info">가구</Button>{' '}
        </div>
    </Container>
    </>

  )
}

export default Home