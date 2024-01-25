import { NavLink } from "react-router-dom";

//비회원 메뉴 : 로그인, 장바구니
const NonMembers = () => {
    return (
        <>
            <NavLink to="/payments/cart">
                <span className="material-symbols-outlined">shopping_bag</span>
                <p>장바구니</p>
            </NavLink>

            <NavLink to="/LoginForm">
                <span className="material-symbols-outlined">person</span>
                <p>로그인</p>
            </NavLink>
        </>
    );
};

export default NonMembers;
