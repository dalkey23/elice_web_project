import React from 'react'
import {Container, Navbar, Row, Col} from 'react-bootstrap';

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
            <Row className="text-light w-100 h-50">
                <Col >벌써 12시</Col>
                <Col >Help</Col>
                <Col >Follow</Col>
                <Col >CONTACT US</Col>
            </Row>
        </Container>
    </Navbar>
  )
}

export default Footer