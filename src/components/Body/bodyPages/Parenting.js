import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import axios from "axios";

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

    const [items, setItems] = useState([])

    useEffect(() => {
        axios
        .get("http://localhost:8080products/all/육아")
        .then((response) => {
            setItems(response.data.serchAll)
        })
        .catch((error) => {
          alert(error)
        })
      }, [])
      
      console.log(`items : ${items}, type: ${typeof(items)}`)
      
   
     

    // useState, useEffect 이용해서 게시글 불러와야 함
    // limit : 페이지당 게시물 수, page : 현재페이지 번호
    // const [ limit, setLimit ] = useState(8); -> 페이지당 게시글 수 사용자지정
    const limit = 8;
    const [ page, setPage ] = useState(1);
    //offset : 페이지의 첫 게시글 index
    const offset = (page - 1)*limit;


    return <><ListContainer>
        {/* slice : offset부터 offset+limit 인덱스까지의 값을 복사하여 반환 */}
        {items.slice(offset, offset+limit).map((listItem) => {
            return <Link to="/itemInfo/:`${listItem.productName}`">
                        <ListItems>
                            <Item>{listItem.imgUrl}</Item>
                            <Item>{listItem.productName}</Item>
                            <Item>{listItem.shortDesc}</Item>
                            <Item>{listItem.price}</Item>
                        </ListItems>
                    </Link>

        })}
    </ListContainer>
    <Pagination
          total={items.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
    </>
}





export default Parenting;