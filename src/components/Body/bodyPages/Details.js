import React from "react";
import styled from "styled-components";

const Product1 = {
    productName : "제품명", categoryId : 1, manufacturer : "제조사", shortDesc : "짧은 설명",
    detailDesc  : "상세 설명", imgUrl : "이미지", totalstocks : "재고수", price : "가격", 
    sku : "개수단위"
}

const Container = styled.div`
    display : flex;
    align-items : center;
    padding : 20px;
    
    `
const ProductImg = styled.div`
    width : 50%;
    height : 200px;
    background : powderblue;

`
const Wrapper = styled.div`
    padding : 10px;
    width : 50%;
`
const Items = styled.div`
    margin : 10px;
`
const ButtonWrapper = styled.div`
    & button {
        color : white;
        background : grey;
        border : grey;
        width : 45%;
        margin : 10px;
    }

`    

const Details = ()=>{
    return <Container>
                <ProductImg>{Product1.imgUrl}</ProductImg>
                <Wrapper>
                    <Items>{Product1.manufacturer}</Items>
                    <Items>{Product1.productName}</Items>
                    <Items>{Product1.price}</Items>
                    <Items>{Product1.detailDesc}</Items>
                    <ButtonWrapper>
                        <button>장바구니 추가하기</button>
                        <button>바로 구매하기</button>
                    </ButtonWrapper>
                </Wrapper>
            </Container>
}

export default Details;