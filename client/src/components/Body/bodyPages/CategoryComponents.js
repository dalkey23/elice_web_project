import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Pagination from "./Pagination";
import { Link, useParams } from "react-router-dom";

import { getItemList } from "../../../apis/products";

const ListContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    & a {
        text-decoration: none;
        color: white;
        width: 25%;
        padding: 10px;
    }
`;

const ListItems = styled.div`
    flex: 1;
    background: white;
    width: 95%;
    height: 250px;
    margin: 10px;
`;

const StringItems = styled.div`
    float: right;
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 1rem;
    line-height: 1.5;
    border: 1px solid lightgray;
    color: ${(props) => props.color || "green"};
    background: ${(props) => props.background || "pink"};
`;

const Item = styled.div`
    & img {
        width: 70%;
    }
`;

function CategoryComponents() {
    const [items, setItems] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        getItemList(categoryId)
            .then((response) => {
                setItems(response.data.searchAll);
            })
            .catch((error) => {
                alert(error);
            });
    }, [categoryId]); //categoryId 변경될 때 마다

    // useState, useEffect 이용해서 게시글 불러와야 함
    // limit : 페이지당 게시물 수, page : 현재페이지 번호
    // const [ limit, setLimit ] = useState(8); -> 페이지당 게시글 수 사용자지정
    const limit = 8;
    const [page, setPage] = useState(1);
    //offset : 페이지의 첫 게시글 index
    const offset = (page - 1) * limit;

    return (
        <>
            <ListContainer>
                {" "}
                {/* slice : offset부터 offset+limit 인덱스까지의 값을 복사하여 반환  */}{" "}
                {items.slice(offset, offset + limit).map((listItem) => {
                    return (
                        <Link to={`/itemInfo/${listItem.id}`} key={listItem.id}>
                            <ListItems>
                                <Item>
                                    {" "}
                                    <img
                                        src={listItem.imgUrl}
                                        alt="상품이미지"
                                    />{" "}
                                </Item>{" "}
                                <StringItems>
                                    <Item> {listItem.productName} </Item>{" "}
                                    <Item> {listItem.price}원 </Item>{" "}
                                </StringItems>{" "}
                            </ListItems>{" "}
                        </Link>
                    );
                })}{" "}
            </ListContainer>{" "}
            <Pagination
                total={items.length}
                limit={limit}
                page={page}
                setPage={setPage}
            />{" "}
        </>
    );
}

export default CategoryComponents;
