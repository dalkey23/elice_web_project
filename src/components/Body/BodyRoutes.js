import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

const BodyRoutes = () => {
    return (<div>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
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