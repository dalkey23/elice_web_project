import styled from "styled-components";

export const Container = styled.form `
    display : flex;
    padding : 10px 80px;
`
export const OrderInfo = styled.div `
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

export const PaymentInfo = styled.div `
  box-shadow: 0 5px 10px grey;
  padding : 10px;
  width : 40%;
  margin : 10px;
  & h3 {
    border-bottom: 1px grey solid;
    padding-bottom: 10px;
  }

  & h4 {
    border-top: 1px grey solid;
    padding-top: 10px;
  }
  
  & button {
    width : 100%;
    height : 35px;
    background : grey;
    border : none;
    color : white;
  }
`