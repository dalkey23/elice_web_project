import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { getProductList } from "../../apis/products.js";
import Pagination from "../../components/Body/bodyPages/Pagination.js";
import * as SC from "../../styles/product/productList.js";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    //categoryId 변경될 때 마다 상품목록 요청
    useEffect(() => {
        getProductList(categoryId)
            .then((response) => {
                setProducts(response.data.searchAll);
            })
            .catch((error) => {
                alert(error);
            });
    }, [categoryId]);

    // useState, useEffect 이용해서 게시글 불러와야 함
    // limit : 페이지당 게시물 수, page : 현재페이지 번호
    // const [ limit, setLimit ] = useState(8); -> 페이지당 게시글 수 사용자지정
    const limit = 8;
    const [page, setPage] = useState(1);
    //offset : 페이지의 첫 게시글 index
    const offset = (page - 1) * limit;

    return (
        <>
            <SC.ListContainer>
                {/* slice : offset부터 offset+limit 인덱스까지의 값을 복사하여 반환  */}
                {products.slice(offset, offset + limit).map((product) => {
                    return (
                        <Link to={`/itemInfo/${product.id}`} key={product.id}>
                            <SC.ListItems>
                                <SC.Item>
                                    <img
                                        src={product.imgUrl}
                                        alt="상품이미지"
                                    />
                                </SC.Item>
                                <SC.StringItems>
                                    <SC.Item> {product.productName} </SC.Item>
                                    <SC.Item> {product.price}원 </SC.Item>
                                </SC.StringItems>
                            </SC.ListItems>
                        </Link>
                    );
                })}
            </SC.ListContainer>
            <Pagination
                total={products.length}
                limit={limit}
                page={page}
                setPage={setPage}
            />
        </>
    );
};

export default ProductList;
