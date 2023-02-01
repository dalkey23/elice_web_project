import React from 'react'
import {Button, Container} from 'react-bootstrap';
import BodySlides from '../bodySlides';

const Home = () => {
  return (
    <>
    <Container className="d-flex flex-column min-vh-100">
      <BodySlides />
        <div className = "d-flex justify-content-around"
        style = {{margin : '40px 0',height : 'auto', minHeight: '100%'}}>
        <Button href="/parenting" variant="success">육아</Button>{' '}
        <Button href="/living" variant="danger">생활</Button>{' '}
        <Button href="/sports" variant="warning">스포츠</Button>{' '}
        <Button href="/fassion" variant="dark">패션</Button>{' '}
        <Button href="/furniture" variant="info">가구</Button>{' '}
        </div>
    </Container>
    </>

  )
}

export default Home