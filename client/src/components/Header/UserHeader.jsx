import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { getCategories } from "../../apis/products.js";
import { userAtom } from "../../recoil/userAtom.js";
import Members from "./Members.jsx";
import NonMembers from "./NonMembers.jsx";
import * as SC from "../../styles/Header.js";

const UserHeader = () => {
    const [categories, setCategories] = useState([]);
    const userRole = useRecoilValue(userAtom);

    useEffect(() => {
        getCategories()
            .then((response) => {
                setCategories(response.data.searchAll);
            })
            .catch((error) => {
                alert(error);
            });
    }, []);

    return (
        <>
            <SC.NavUl>
                {categories.map((category) => {
                    return (
                        <li key={category.categoryId}>
                            <NavLink to={`/categories/${category.categoryId}`}>
                                {category.name}
                            </NavLink>
                        </li>
                    );
                })}
            </SC.NavUl>
            <SC.IconUl>
                {userRole === "user" && <Members />}
                {userRole === "" && <NonMembers />}
            </SC.IconUl>
        </>
    );
};

export default UserHeader;
