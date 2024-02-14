import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getProduct } from "../../apis/products.js";
//key.js에서 WISHLIST_KEY설정
import { WISHLIST_KEY, CARTLIST_KEY } from "../../constants/key.js";
import * as SC from "../../styles/product/productDetail.js";

const ProductDetail = () => {
    const [product, setProduct] = useState("");
    const [count, setCount] = useState(1);
    const { id } = useParams();
    const Token = localStorage.getItem("accessToken");
    const navigate = useNavigate();

    const ChanegeHandler = (e) => {
        setCount(e.target.value);
    };

    useEffect(() => {
        getProduct(id)
            .then((response) => {
                setProduct(response.data.searchOne);
            })
            .catch((error) => {
                alert(error);
            });
    }, []);

    console.log(product);

    const clickCartHandler = () => {
        //장바구니에 저장할 상품id와 수량 저장
        const clickedProduct = { productInfo: product, count: count };

        //'elice_cartList' 값 가져오고
        const savedCartList = localStorage.getItem(CARTLIST_KEY);

        //cartList 는 elice_cartList 있으면 JSON.parse 아니면 빈배열
        const cartList = savedCartList ? JSON.parse(savedCartList) : [];

        //push 후 'elice_cartList'로 다시 setItem
        cartList.push(clickedProduct);
        localStorage.setItem(CARTLIST_KEY, JSON.stringify(cartList));

        alert("장바구니 담기 완료!");
    };

    const clickWishHandler = () => {
        const clickedProduct = { productId: id, count: count };

        const savedWishList = localStorage.getItem(WISHLIST_KEY);

        const wishList = savedWishList ? JSON.parse(savedWishList) : [];

        wishList.push(clickedProduct);
        localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishList));

        alert("찜하기 완료!");
    };

    const SubmitHandler = (e) => {
        e.preventDefault();
        navigate("/payments/order");
    };

    return (
        <SC.Container onSubmit={SubmitHandler}>
            <SC.ProductImg>
                <img src={product.imgUrl} alt="상품이미지" />
                <SC.Wrapper>
                    <SC.ManufacturerDiv>
                        {product.manufacturer}
                    </SC.ManufacturerDiv>
                    <SC.ProductDiv>{product.productName}</SC.ProductDiv>

                    <SC.PriceDiv>{product.price}원</SC.PriceDiv>

                    <SC.SkuDiv>
                        <input
                            type="number"
                            name="sku"
                            onChange={ChanegeHandler}
                            defaultValue={count}
                        />
                        &nbsp;개
                    </SC.SkuDiv>
                    <SC.ButtonWrapper>
                        <button type="button" onClick={clickCartHandler}>
                            장바구니 추가하기
                        </button>
                        <button type="button" onClick={clickWishHandler}>
                            찜하기
                        </button>
                        <button
                            onClick={() => {
                                Token || !Token === "null"
                                    ? navigate("/DirectPayments/DirectOrder")
                                    : navigate("/LoginForm");
                            }}>
                            바로 구매하기
                        </button>
                    </SC.ButtonWrapper>
                </SC.Wrapper>
            </SC.ProductImg>
            <SC.DetailImg>
                <img src={product.shortDesc} alt="상품이미지" />
            </SC.DetailImg>
        </SC.Container>
    );
};

export default ProductDetail;
