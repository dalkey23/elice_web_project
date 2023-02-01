import React from "react";
import styled from "styled-components";

const ListContainer = styled.div`
    display : flex;
    align-items : center;
    flex-wrap : wrap;
    & a {
        text-decoration : none;
        color : white;
        width : 25%;
        padding : 10px;
    }

`

const ListItems = styled.div`
    flex : 1;
    background : gray;
    width : 95%;
    height : 200px;
    margin : 10px;
    
`

const Item = styled.div`
   
`

const listItems = [{
    productName: "육아1", categoryId: 1, manufacturer: "제조사", shortDesc: "짧은 설명",
    detailDesc: "상세 설명", imgUrl: "이미지", totalstocks: "재고수", price: "가격",
    sku: "개수단위"
}, {
    productName: "육아2", categoryId: 1, manufacturer: "제조사", shortDesc: "짧은 설명",
    detailDesc: "상세 설명", imgUrl: "이미지", totalstocks: "재고수", price: "가격",
    sku: "개수단위"
}, {
    productName: "육아3", categoryId: 1, manufacturer: "제조사", shortDesc: "짧은 설명",
    detailDesc: "상세 설명", imgUrl: "이미지", totalstocks: "재고수", price: "가격",
    sku: "개수단위"
}, {
    productName: "육아4", categoryId: 1, manufacturer: "제조사", shortDesc: "짧은 설명",
    detailDesc: "상세 설명", imgUrl: "이미지", totalstocks: "재고수", price: "가격",
    sku: "개수단위"
}, {
    productName: "육아5", categoryId: 1, manufacturer: "제조사", shortDesc: "짧은 설명",
    detailDesc: "상세 설명", imgUrl: "이미지", totalstocks: "재고수", price: "가격",
    sku: "개수단위"
}, {
    productName: "육아6", categoryId: 1, manufacturer: "제조사", shortDesc: "짧은 설명",
    detailDesc: "상세 설명", imgUrl: "이미지", totalstocks: "재고수", price: "가격",
    sku: "개수단위"
}, {
    productName: "육아7", categoryId: 1, manufacturer: "제조사", shortDesc: "짧은 설명",
    detailDesc: "상세 설명", imgUrl: "이미지", totalstocks: "재고수", price: "가격",
    sku: "개수단위"
}, {
    productName: "육아8", categoryId: 1, manufacturer: "제조사", shortDesc: "짧은 설명",
    detailDesc: "상세 설명", imgUrl: "이미지", totalstocks: "재고수", price: "가격",
    sku: "개수단위"
}, {
    productName: "육아9", categoryId: 1, manufacturer: "제조사", shortDesc: "짧은 설명",
    detailDesc: "상세 설명", imgUrl: "이미지", totalstocks: "재고수", price: "가격",
    sku: "개수단위"
}];


function Parenting() {


    return <ListContainer>

        {listItems.map((listItem) => {
            return <a href="/details">
                        <ListItems>
                            <Item>{listItem.imgUrl}</Item>
                            <Item>{listItem.productName}</Item>
                            <Item>{listItem.shortDesc}</Item>
                            <Item>{listItem.price}</Item>
                        </ListItems>
                    </a>

        })}

    </ListContainer>
}





export default Parenting;