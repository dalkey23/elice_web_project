import React from 'react'
import styled from 'styled-components';
import {Button, Container} from 'react-bootstrap';
import BodySlides from '../bodySlides';

const Home = () => {
  return (
    <div style = {{
      padding : '100px'
    }}>
      <Container className="d-flex flex-column min-vh-50">
          <BodySlides />

          <div className = "d-flex justify-content-around"
          style = {{
            padding : '50px'
          }}>
          <Button href="/parenting" variant="success"
          style = {{
            height : '100px',
            width : '100px'
          }}><p style = {{
            padding : '30px 0 0 0'
          }}>육아</p></Button>{' '}
          <Button href="/living" variant="danger"
          style = {{
            height : '100px',
            width : '100px'
          }}><p style = {{
            padding : '30px 0 0 0'
          }}>생활</p></Button>{' '}
          <Button href="/sports" variant="warning"
          style = {{
            height : '100px',
            width : '100px'
          }}><p style = {{
            padding : '30px 0 0 0'
          }}>스포츠</p></Button>{' '}
          <Button href="/fassion" variant="dark"
          style = {{
            height : '100px',
            width : '100px'
          }}><p style = {{
            padding : '30px 0 0 0'
          }}>패션</p></Button>{' '}
          <Button href="/furniture" variant="info"
          style = {{
            height : '100px',
            width : '100px'
          }}><p style = {{
            padding : '30px 0 0 0'
          }}>가구</p></Button>{' '}
          </div>
      </Container>
    </div>
  )
}

export default Home