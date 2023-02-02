import React from "react";
import styled from "styled-components";

const Product1 = {
    productName: "제품명", categoryId: 1, manufacturer: "제조사", shortDesc: "짧은 설명",
    detailDesc: "상세 설명", imgUrl: "이미지", totalstocks: "재고수", price: "가격",
    sku: "개수단위"
}

const Container = styled.form`
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
const Items = styled.input`
    width : 70%;
    margin : 10px;
    border : none;
`
const SkuDiv = styled.div`
    margin : 10px;
`
const ButtonWrapper = styled.div`
    & button {
        color : white;
        background : grey;
        border : grey;
        width :30%;
        margin : 10px;
    }

`


const Details = () => {
    
    const clickHandler = () => {
        alert("완료")
        localStorage.setItem('Product1', JSON.stringify(Product1));
    }

    return <Container>
        <ProductImg name="imgUrl">{Product1.imgUrl}</ProductImg>
        <Wrapper>
            <Items type="text" name="manufacturer" value={Product1.manufacturer}/>
            <Items type="text" name="productName" value={Product1.productName} />
            <Items type="text" name="price" value={Product1.price} />
            <Items type="text" name="detailDesc" value={Product1.detailDesc} /> 
            <SkuDiv><input type="number" name="sku" />&nbsp;{Product1.sku}</SkuDiv>
            <ButtonWrapper>
                <button type="button" onClick={clickHandler}>장바구니 추가하기</button>
                <button type="button" onClick={clickHandler}>찜 하기</button>
                <button formAction="/payments/order" >바로 구매하기</button>
            </ButtonWrapper>
        </Wrapper>
    </Container>
}

export default Details;