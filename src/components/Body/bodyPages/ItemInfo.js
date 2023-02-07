import React, { useState, useEffect} from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';



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
    
    const [data, setData] = useState('');
    const { productName } = useParams();
   

    useEffect(() => {
      axios
      .get(`http://localhost:8080/products/${productName}`)
      .then((response) => {
        setData(response.data.serchOne)
      })
      .catch((error) => {
        alert(error)
      })
    }, [])

    const navigate = useNavigate();
    
    const clickHandler = () => {
        alert("완료")
        // key부분에 각 상품마다 달라지는 값을 `${변수}`로 담아서 지정 하면
        // key가 각자 달라서 쌓일듯
        localStorage.setItem(`elice_whishlist_${data.name}`,JSON.stringify(data));
    }

    const SubmitHandler = (e) => {
        e.preventDefault();
        navigate('/payments/order')
    }

    

    return <Container onSubmit={SubmitHandler}>
        {/* <ProductImg name="imgUrl">{Product1.imgUrl}</ProductImg> */}
        <Wrapper>
            <Items type="text" name="manufacturer" value={data.manufacturer}/>
            <Items type="text" name="productName" value={data.productName} />
            <Items type="text" name="price" value={data.price} />
            <Items type="text" name="detailDesc" value={data.detailDesc} /> 
            {/* <SkuDiv><input type="number" name="sku" />&nbsp;{data.sku}</SkuDiv> */}
            <ButtonWrapper>
                <button type="button" onClick={clickHandler}>장바구니 추가하기</button>
                <button>바로 구매하기</button>
            </ButtonWrapper>
        </Wrapper>
    </Container>
}

export default Details;