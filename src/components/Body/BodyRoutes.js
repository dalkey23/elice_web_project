import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router,
    Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import logo from '../Header/logo.png'
import Home from './bodyPages/Home';
import Parenting from './bodyPages/Parenting';
import Living from './bodyPages/Living';
import Sports from './bodyPages/Sports';
import Fassion from './bodyPages/Fassion';
import Furniture from './bodyPages/Furniture';
import RegisterForm from '../Register/RegisterForm';
import LoginForm from '../Login/LoginForm';
import ItemInfo from './bodyPages/ItemInfo';
import Favorite from '../Favorite/Favorites';
import Payments from "./bodyPages/Payments"
import Cart from './bodyPages/Cart'
import Order from './bodyPages/Order'
import OrderComplete from './bodyPages/OrderComplete';
import OrderList from './bodyPages/OrderList';
import UserMain from '../User/UserMain';
import UserInfo from '../User/UserInfo';
import UserUpdate from '../User/UserUpdate';
import AdminMain from './Admin/AdminMain';
import AdminOrders from './Admin/AdminOrders';
import AdminCategories from './Admin/AdminCategories'
import AdminProducts from './Admin/AdminProducts'
import UserDelete from '../User/UserDelete';

const Container = styled.div`
    display : flex;
    margin : 10px 80px;
    
    & a {
        text-decoration : none;
        color : black;
    }
`
const LogoDiv = styled.div`
    margin : 10px 50px;
    & img {
        width : 70px;
        height : 70px;
    }
    
`

const NavUl = styled.ul`
    align-self : center; 
    list-style-type : none;
    & li {
        margin-right : 20px;
        display : inline
    }
`

const IconUl = styled.ul`
    align-self : center;
    margin-left: auto;
    list-style-type : none;
    & li {
        margin-right : 20px;
        display : inline
    }
`

const BodyRoutes = () => {

    const Token = localStorage.getItem("accessToken")
    const AdminToken = localStorage.getItem("role")
    const [ categories, setCategories] = useState([])

    useEffect(() => {
        axios
        .get(`http://localhost:3000/categories`)
        .then((response) => {
            setCategories(response.data.searchAll)
        })
        .catch((error) => {
          alert(error)
        })
      }, [])

    return (<div>
        <Router>
            <Container>
                <LogoDiv>
                  <NavLink to="/"><img src = { logo } alt = 'Logo' /></NavLink>
                </LogoDiv>
                <NavUl>
                    {categories.map((category)=>{
                        return <li><NavLink to={`/categories/${category.categoryId}`}>{category.name}</NavLink></li>
                    })}
                    {/* AdminToken이 admin값일때 관리자페이지 노출 */}
                    {/* <></>이 아닌 다른 방법으로 노출을 조정할 수 있을지 고민 */}
                    <li>
                        { AdminToken === 'admin' ? <NavLink to="/AdminMain">관리자페이지</NavLink>
                    : <></> }
                    </li>
                </NavUl>
                <IconUl>

                    {/* 삼항 연산자에 삼항 연산자를 넣어서 코드의 가독성이 조금 떨어 질 것 같아서 고민 */}
                    { AdminToken === 'admin' ? <></>
                    : <li>
                    { Token || !Token === 'null' ? <NavLink to="/UserMain"><span className="material-symbols-outlined">person</span></NavLink>
                    : <NavLink to="/LoginForm"><span className="material-symbols-outlined">person</span></NavLink> }
                    </li>}
            
                    <li>{ AdminToken === 'admin' ? <button 
                    onClick = {() => {
                        localStorage.removeItem('role')
                        alert('관리자 로그아웃 되었습니다.')
                        window.location.href = '/'
                    }}
                    style = {{
                        padding : '10px',
                        borderRadius : '5px',
                        borderColor : 'white',
                        backgroundColor : 'grey',
                        color : 'white'
                    }}
                    >관리자 로그아웃</button>
                    :<NavLink to="/payments/cart"><span className="material-symbols-outlined">shopping_bag</span></NavLink>}</li>
                </IconUl>
            </Container>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/OrderList" element={<OrderList />} />
                <Route path="/UserUpdate" element={<UserUpdate />} />
                <Route path="/UserDelete" element={<UserDelete />} />
                <Route path="/UserInfo" element={<UserInfo />} />
                <Route path="/UserMain" element={<UserMain />} />
                <Route path="/Favorites" element={<Favorite />} />
                <Route path="/LoginForm" element={<LoginForm />} />
                <Route path="/RegisterForm" element={<RegisterForm />} />
                <Route path="/categories/:categoryId" element = { <Parenting /> } />
                <Route path="/itemInfo/:id" element={<ItemInfo />} />
                <Route path="/payments/*" element={<Payments />} >
                    <Route path="cart" element={<Cart />} />
                    <Route path="order" element={<Order />} />
                    <Route path="orderComplete" element={<OrderComplete />} /> 
                </Route>
                {/* 관리자페이지 */}
                <Route path="/AdminMain" element={<AdminMain />} />
                <Route path="/adminOrders" element={<AdminOrders />} />
                <Route path="/adminCategories" element={<AdminCategories />} />
                <Route path="/adminProducts" element={<AdminProducts />} />
            </Routes>
        </Router>
    </div>
    )
}

export default BodyRoutes;