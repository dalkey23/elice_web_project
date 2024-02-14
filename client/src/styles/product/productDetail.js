import styled from "styled-components";

export const Container = styled.form `
    align-items : center;
    padding : 20px;
    
    `
export const ProductImg = styled.div `
    display : flex;
    flex-grow: 1;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    & img{
        width: 430px;
    }
`
export const DetailImg = styled.div `
    width : 100px;
    & img{
        width: 860px;
    }

`
export const Wrapper = styled.div `
    padding : 10px;
    width : 50%;
`

export const ManufacturerDiv = styled.div `
    display : block;
    width : 30%;
    margin : 10px;
    border : none;

`

export const ProductDiv = styled.div `
    display : block;
    width : 75%;
    margin : 10px;
    border : none;
    font-size : 30px;


`

export const PriceDiv = styled.div `
    display : block;
    width : 30%;
    margin : 10px;
    border : none;
    font-size : 30px;
    font-weight : bold;


`
export const SkuDiv = styled.div `
    margin : 10px;
    & input {
        width: 50px;
    }
`
export const ButtonWrapper = styled.div `
    & button {
        color : white;
        background : grey;
        border : grey;
        width :30%;
        margin : 10px;
    }

`