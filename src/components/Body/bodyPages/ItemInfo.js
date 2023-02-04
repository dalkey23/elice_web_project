import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Product1 = [{
    productName: "제품명1", categoryId: 1, manufacturer: "제조사", shortDesc: "짧은 설명",
    detailDesc: "상세 설명", imgUrl: "이미지", totalstocks: "재고수", price: "가격",
    sku: "개수단위"
}, {
    productName: "제품명2", categoryId: 2, manufacturer: "제조사", shortDesc: "짧은 설명",
    detailDesc: "상세 설명", imgUrl: "이미지", totalstocks: "재고수", price: "가격",
    sku: "개수단위"
}, {
    productName: "제품명3", categoryId: 3, manufacturer: "제조사", shortDesc: "짧은 설명",
    detailDesc: "상세 설명", imgUrl: "이미지", totalstocks: "재고수", price: "가격",
    sku: "개수단위"
}, {
    productName: "제품명4", categoryId: 4, manufacturer: "제조사", shortDesc: "짧은 설명",
    detailDesc: "상세 설명", imgUrl: "이미지", totalstocks: "재고수", price: "가격",
    sku: "개수단위"
}]


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
    
    const navigate = useNavigate();
    
    const clickHandler = () => {
        alert("완료")
        
        localStorage.setItem('Product1', JSON.stringify(Product1));

    }

    const SubmitHandler = (e) => {
        e.preventDefault();
        navigate('/payments/order')
    }

    

    return <Container onSubmit={SubmitHandler}>
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
                <button>바로 구매하기</button>
            </ButtonWrapper>
        </Wrapper>
    </Container>
}

export default Details;