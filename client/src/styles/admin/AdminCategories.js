import styled from "styled-components";


export const Container = styled.div`
    padding : 10px 80px;
    display : flex;
    flex-direction : column;
    & a {
        text-decoration : none;
        color : black;
    }
`

export const AddDiv = styled.div`
    background-color : gray;
    border-radius: 10px;   
    font-size : 15px;
    text-align : center;
    width : 200px;
    padding : 10px;
    margin : 10px;
    align-self : flex-end;

    
`

export const TitleDiv = styled.div`
    border-bottom : 1px solid gray;
    padding-bottom : 10px;
    font-size : 40px;
    font-weight : bold;

`

export const ListTable = styled.table`
    margin : 20px; 

    & thead {
        font-weight : bold;
        font-size : 25px;
        text-align : center;
    }

    & td {
        margin-right : 30px;
        text-align : center;
    }
`

export const ItemTr = styled.tr`
    margin : 10px;
    padding : 10px;
    & button {
        border : none;
        background-color : gray;
        color : white;
        margin : 10px;
    }

`

export const NameDiv = styled.div`
    padding : 10px;
    font-weight : bold;
    font-size : 20px;

`

export const DecsDiv = styled.div`
    padding : 10px;

`