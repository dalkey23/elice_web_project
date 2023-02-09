import React, {useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Container = styled.div`
    padding : 10px 80px; 
    border : 1px black solid;

`
const AdminProducts = () => {
    
    const [items, setItems] = useState([])
    const { categoryId } = useParams();
    
    useEffect(()=>{
        axios
        .get(`http://localhost:8080/products/all/${categoryId}`)
        .then((response) => {
            setItems(response.data.searchAll)
            console.log('items', items)
        })
        .catch((error) => {
          alert(error)
        })
    },[])



    return (
        <Container>
            <div>
                {items.map((item)=>{
                   return  <ul>
                        <li>{item.productName}</li>
                        <li>{item.manufacturer}</li>
                        <li>{item.id}</li>
                    </ul>
                })}
            </div>
        </Container>
    )
}

export default AdminProducts;