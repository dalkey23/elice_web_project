import styled from 'styled-components'

export const OrderListDivUltra = styled.div`
  display : flex;
  flex-direction : column;
  align-items: center;
  padding : 50px;
  margin : 10px;
`

export const OrderListDiv = styled.div`
  font-weight : bold;
  font-size : 50px;
  padding-bottom : 20px;
`

export const ContentDiv = styled.div`
  background-color : white;
`
export const ItemDiv = styled.div`
  display: flex;
  margin: 10px;
  padding: 10px;
  & button {
    border: none;
    background-color: gray;
    color: white;
    margin: 10px;
  }
`

export const Item = styled.div`
  margin-right : 30px;
`