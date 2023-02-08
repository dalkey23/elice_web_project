import React, { useState , useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Container = styled.form`
    display : flex;
    padding : 10px 80px;
`
const OrderInfo = styled.div`
    width : 60%;
    margin : 10px;
    padding : 10px;
    box-shadow: 0 5px 10px grey;
    & h3 {
        border-bottom: 1px grey solid;
        padding-bottom: 10px;
      }
    & label {
        display : block;
        padding-bottom : 20px;
    }

    & input {
        width : 80%;
    }

    & h6 {

        font-weight : bold;
        weight : 30%;

        
    }
`

const PaymentInfo = styled.div`
  box-shadow: 0 5px 10px grey;
  padding : 10px;
  width : 40%;
  margin : 10px;
  & h3 {
    border-bottom: 1px grey solid;
    padding-bottom: 10px;
  }

  & h4 {
    border-top: 1px grey solid;
    padding-top: 10px;
  }
  
  & button {
    width : 100%;
    height : 35px;
    background : grey;
    border : none;
    color : white;
  }
`


const OrderComplete = () => {

    const navigate = useNavigate();
    const [data, setData] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const token = localStorage.getItem("accessToken");

    useEffect(() => {
        axios
        .get("http://localhost:8080/users/mypage", { headers: { Authorization: token } })
        .then((response) => {
            setData(response.data);
        })
        .catch((error) => {
            alert(error);
        });
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();


        const formData = {
            name, phoneNumber, address
        }

        axios
        .post("http://localhost:8080/order", { ...formData }, { headers: { Authorization: token } })
        .then((res) => {
            console.log(res.data)
            alert("주문완료!")
            navigate('/payments/orderComplete')
        })
        .catch((error) => {
            alert(error);
        });
    }



    return  <Container onSubmit={submitHandler}>
        <OrderInfo>
            <h3>배송지 정보</h3>
            <label>
                <h6>이름</h6>
                <input type="text" value = {JSON.stringify(data.name)} />
            </label>
            <label>
                <h6>연락처</h6>
                <input type="tel" value = {JSON.stringify(data.phoneNumber)}/>
            </label>
            <label>
                <h6>주소</h6>
                <input type="text" value = {JSON.stringify(data.address)}/>
            </label>
            <label>
                <h6>요청사항</h6>
                <select>
                    <option>배송시 요청사항을 선택해 주세요.</option>
                    <option>직접 수령하겠습니다.</option>
                    <option>배송 전 연락바랍니다.</option>
                    <option>부재 시 경비실에 맡겨주세요.</option>
                    <option>부재 시 문 앞에 놓아주세요.</option>
                    <option>부재 시 택배함에 넣어주세요.</option>
                    <option>직접 입력</option>
                </select>
                <input type="hidden" />
            </label>
        </OrderInfo>
        <PaymentInfo>
            <h3>결제정보</h3>
            <h5>주문상품</h5>
            <h5>상품총액</h5>
            <h5>배송비</h5>
            <h4>총 결제금액</h4>
            <button onClick = {() => {
                setName(`${JSON.stringify(data.name)}`)
                setPhoneNumber(`${JSON.stringify(data.phoneNumber)}`)
                setAddress(`${JSON.stringify(data.name)}`)
            }}>결제하기</button>
        </PaymentInfo>
    </Container>
}

export default OrderComplete;