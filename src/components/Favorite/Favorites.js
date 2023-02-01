import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

const Favorite = () => {
  return (
    <Container style = {{display : 'flex', justifyContent : 'center', margin : '150px 75px'}}>
      <Row style = {{
        backgroundColor : 'grey',
        height : '250px',
        width : '800px'
        }}>
        <Col style = {{display : 'flex', justifyContent : 'center', margin : '100px 0 0 0'}}><span  class="material-symbols-outlined"  style = {{display : 'flex', justifyContent : 'center'}}>diagnosis</span><br/>찜한 상품이 없습니다.</Col>
      </Row>

    </Container>
  );
}

export default Favorite;