import React from "react";
import { useNavigate } from "react-router-dom";

import * as SC from "../../styles/user/Mypage.js";

const Mypage = () => {
    const navigate = useNavigate();

    return (
        <SC.UserMenuDiv>
            <SC.MypageBtn
                onClick={() => {
                    navigate("/UserInfo");
                }}>
                유저 정보
            </SC.MypageBtn>
            <SC.MypageBtn
                onClick={() => {
                    navigate("/OrderList");
                }}>
                주문 내역
            </SC.MypageBtn>
        </SC.UserMenuDiv>
    );
};

export default Mypage;
