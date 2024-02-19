import { NavLink, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { userAtom } from "../../recoil/userAtom.js";
import * as SC from "../../styles/Header.js";

//회원 메뉴 : 마이페이지, 찜하기, 장바구니, 로그아웃
const Members = () => {
    const navigate = useNavigate();
    const setUserRole = useSetRecoilState(userAtom);

    return (
        <>
            <NavLink to="/Mypage">
                <span className="material-symbols-outlined">person</span>
                <p>마이페이지</p>
            </NavLink>
            <NavLink to="/Favorites">
                <span className="material-symbols-outlined">favorite</span>
                <p>찜하기</p>
            </NavLink>
            <NavLink to="/payments/cart">
                <span className="material-symbols-outlined">shopping_bag</span>
                <p>장바구니</p>
            </NavLink>
            <SC.LogoutButton
                onClick={() => {
                    localStorage.removeItem("accessToken");
                    setUserRole("");
                    alert("로그아웃 되었습니다.");
                    navigate("/");
                }}>
                로그아웃
            </SC.LogoutButton>
        </>
    );
};

export default Members;
