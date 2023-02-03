import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';

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
import UserMain from '../User/UserMain';
import UserInfo from '../User/UserInfo';

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
    return (<div>
        <Router>
            <Container>
                <LogoDiv>
                  <NavLink to="/"><img src = { logo } alt = 'Logo' /></NavLink>
                </LogoDiv>
                <NavUl>
                    <li><NavLink to="/UserMain">유저메인 테스트</NavLink></li>
                    <li><NavLink to="/parenting">육아</NavLink></li>
                    <li><NavLink to="/living">생활</NavLink></li>
                    <li><NavLink to="/sports">스포츠</NavLink></li>
                    <li><NavLink to="/fassion">패션</NavLink></li>
                    <li><NavLink to="/furniture">가구</NavLink></li>
                </NavUl>
                <IconUl>
                    <li><NavLink to="/LoginForm"><span className="material-symbols-outlined">person</span></NavLink></li>
                    <li><NavLink to="/Favorites"><span className="material-symbols-outlined">favorite</span></NavLink></li>
                    <li><NavLink to="/payments/cart"><span className="material-symbols-outlined">shopping_bag</span></NavLink></li>
                </IconUl>
            </Container>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/UserInfo" element={<UserInfo />} />
                <Route path="/UserMain" element={<UserMain />} />
                <Route path="/Favorites" element={<Favorite />} />
                <Route path="/LoginForm" element={<LoginForm />} />
                <Route path="/RegisterForm" element={<RegisterForm />} />
                <Route path="/parenting" element={<Parenting />} />
                <Route path="/living" element={<Living />} />
                <Route path="/sports" element={<Sports />} />
                <Route path="/fassion" element={<Fassion />} />
                <Route path="/furniture" element={<Furniture />} />
                <Route path="/itemInfo" element={<ItemInfo />} />
                <Route path="/payments/*" element={<Payments />} >
                    <Route path="cart" element={<Cart />} />
                    <Route path="order" element={<Order />} />
                    <Route path="orderComplete" element={<OrderComplete />} /> 
                </Route>
            </Routes>
        </Router>
    </div>
    )
}

export default BodyRoutes;