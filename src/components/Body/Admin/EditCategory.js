import React, {useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Container = styled.div`
    padding : 10px 80px; 
    border : 1px black solid;
    & label {
        display : block;

    }


`

const EditCategory = () => {

    const navigate = useNavigate();
    const [category, setCategory] = useState('')
    const {categoryId} = useParams();

    const token = localStorage.getItem("adminToken");

    useEffect(()=>{
        axios
        .get(`http://localhost:8080/categories/${categoryId}`)
        .then((response) => {
        setCategory(JSON.stringify(response.data.searchOne))
        })
        .catch((error) => {
          alert(error)
        })
    },[])

    const clickHandler = ()=>{

        // const formData = {
        //     name,
        //     description,
        //     imgUrl
        //   }
        
        // axios
        // .post("http://localhost:8080/categories/add", { ...formData }, { headers: { Authorization: token } })
        // .then(() => {
        //   alert('카테고리 수정 완료')
        //   navigate("/adminCategories")
        // })
        // .catch((err) => {
        //   alert(err)
        // })

    }




    return (
        <Container>
            <label>
                <h6>카테고리명</h6>
                <input type="text" name="name" />
            </label>
            <label>
                <h6>카테고리설명</h6>
                <input type="text" name="description" />
            </label>
            <label>
                <h6>카테고리이미지</h6>
                <input type="text" name="imgUrl" />
            </label>
            <button onClick={ clickHandler }>카테고리 수정하기</button>
        </Container>
    )
}

export default EditCategory;