import styled from "styled-components";

export const Container = styled.div`
    display : flex;
    padding : 10px 80px;
`
export const CartInfo = styled.div`
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
export const CartItem = styled.div`
    border : 1px solid gray;
    & div {
        display : inline;
        margin :5px;
    }
    & input {
        width: 30px;
        margin : 5px;
    }
`

export const ImgDiv = styled.div`

    & img {
        width : 100px;
    }
`

export const FormPaymentInfo = styled.form`
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
export const DeleteAllBtn = styled.button`
    margin : 20px 0 0 0 ;
    padding : 10px;
    border-radius : 5px;
    border-color : white;
    background-color : grey;
    color : white;
`