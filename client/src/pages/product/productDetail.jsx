import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getProduct } from "../../apis/products.js";
//key.js에서 WISHLIST_KEY설정
import { WISHLIST_KEY, CARTLIST_KEY } from "../../constants/key.js";
import * as SC from "../../styles/product/productDetail.js";

const ProductDetail = () => {
    const [data, setData] = useState("");
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
                setData(response.data.searchOne);
            })
            .catch((error) => {
                alert(error);
            });
    }, []);

    const clickCartHandler = () => {
        alert("장바구니 담기 완료!");
        const savedCartList = localStorage.getItem(CARTLIST_KEY);
        //'elice_wishlist' 값 가져오고
        const cartList = savedCartList ? JSON.parse(savedCartList) : [];
        //wishList 는 elice_wishlist 있으면 JSON.parse 아니면 빈배열로 data.push
        cartList.push(data);
        localStorage.setItem(CARTLIST_KEY, JSON.stringify(cartList));
        //push 후 'elice_wishlist'로 다시 setItem
    };

    const clickWishHandler = () => {
        alert("찜하기 완료!");

        const savedWishList = localStorage.getItem(WISHLIST_KEY);

        const wishList = savedWishList ? JSON.parse(savedWishList) : [];

        wishList.push(data);
        localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishList));
    };

    const SubmitHandler = (e) => {
        e.preventDefault();
        navigate("/payments/order");
    };

    return (
        <SC.Container onSubmit={SubmitHandler}>
            <SC.ProductImg>
                <img src={data.imgUrl} alt="상품이미지" />
                <SC.Wrapper>
                    <SC.ManufacturerInput
                        type="text"
                        name="manufacturer"
                        value={data.manufacturer}
                    />
                    <SC.ProductInput
                        type="text"
                        name="productName"
                        value={data.productName}
                    />
                    <SC.PriceInput
                        type="text"
                        name="price"
                        value={`${data.price}원`}
                    />
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
                <img src={data.shortDesc} alt="상품이미지" />
            </SC.DetailImg>
        </SC.Container>
    );
};

export default ProductDetail;
