import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../components/Header/Header";
import Favorites from "../components/Favorite/Favorites";
import Main from "../components/Body/bodyPages/Main";
// import CategoryComponents from "../components/Body/bodyPages/CategoryComponents";
// import RegisterForm from "../components/Register/RegisterForm";
// import LoginForm from "../components/Login/LoginForm";
// import ItemInfo from "../components/Body/bodyPages/ItemInfo";
// import Payments from "../components/Body/bodyPages/Payments";
// import Cart from "../components/Body/bodyPages/Cart";
// import Order from "../components/Body/bodyPages/Order";
// import OrderComplete from "../components/Body/bodyPages/OrderComplete";
// import OrderList from "../components/Body/bodyPages/OrderList";
// import UserMain from "../components/User/UserMain";
// import UserInfo from "../components/User/UserInfo";
import UserUpdate from "../components/User/UserUpdate";
import UserDelete from "../components/User/UserDelete";
import AdminMain from "../components/Body/Admin/AdminMain";
import AdminOrders from "../components/Body/Admin/AdminOrders";
import AdminCategories from "../components/Body/Admin/AdminCategories";
import AdminProducts from "../components/Body/Admin/AdminProducts";
import AddCategory from "../components/Body/Admin/AddCategory";
import AddProduct from "../components/Body/Admin/AddProduct";
import EditCategory from "../components/Body/Admin/EditCategory";
import EditProduct from "../components/Body/Admin/EditProduct";
// import DirectOrder from "../components/Body/bodyPages/DirectOrder";
// import DirectPayments from "../components/Body/bodyPages/DirectPayment";
import Footer from "../components/Footer/Footers";


//auth
import RegisterForm from "./auth/RegisterForm";
import LoginForm from "./auth/LoginFrom";

//user
import Mypage from "./user/Mypage";
import UserInfo from "./user/UserInfo";
import UserOrderList from "./user/UserOrderList";

//product
import ProductList from "./product/productList.jsx";
import ProductDetail from "./product/productDetail.jsx";

//order
import Payments from "./order/Payments";
import Cart from "./order/Cart";
import Order from "./order/Order";
import OrderComplete from "./order/OrderComplete.js"
import DirectOrder from "./order/DirectOrder";
import DirectPayments from "./order/DirectPayment";

const Home = () => {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/OrderList" element={<UserOrderList />} />
                    <Route path="/Favorites" element={<Favorites />} />
                    <Route path="/UserUpdate" element={<UserUpdate />} />
                    <Route path="/UserDelete" element={<UserDelete />} />
                    <Route path="/UserInfo" element={<UserInfo />} />
                    <Route path="/Mypage" element={<Mypage />} />
                    <Route path="/LoginForm" element={<LoginForm />} />
                    <Route path="/RegisterForm" element={<RegisterForm />} />
                    <Route
                        path="/categories/:categoryId"
                        element={<ProductList />}
                    />
                    <Route path="/itemInfo/:id" element={<ProductDetail />} />
                    <Route path="orderComplete" element={<OrderComplete />} />
                    <Route path="/payments/*" element={<Payments />}>
                        <Route path="cart" element={<Cart />} />
                        <Route path="order" element={<Order />} />
                    </Route>
                    <Route
                        path="/DirectPayments/*"
                        element={<DirectPayments />}>
                        <Route path="DirectOrder" element={<DirectOrder />} />
                    </Route>
                    {/* 관리자페이지 */}
                    <Route path="/AdminMain" element={<AdminMain />} />
                    <Route path="/adminOrders" element={<AdminOrders />} />
                    <Route
                        path="/adminCategories"
                        element={<AdminCategories />}
                    />
                    <Route path="/addCategory" element={<AddCategory />} />
                    <Route
                        path="/editCategory/:categoryId"
                        element={<EditCategory />}
                    />
                    <Route
                        path="/adminProducts/:categoryId"
                        element={<AdminProducts />}
                    />
                    <Route path="/addProduct" element={<AddProduct />} />
                    <Route path="/editProduct/:id" element={<EditProduct />} />
                </Routes>
            </Router>
            <Footer />
        </>
    );
};

export default Home;
