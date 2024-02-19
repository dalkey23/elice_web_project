import React, { useState, useEffect } from "react";

import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import { getCategories } from "../../apis/products";
import { deleteCategory } from "../../apis/admin";
import * as SC from "../../styles/admin/AdminCategories";

const AdminCategories = () => {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    const token = localStorage.getItem("adminToken");

    useEffect(() => {
        getCategories()
            .then((response) => {
                setCategories(response.data.searchAll);
            })
            .catch((error) => {
                alert(error);
            });
    }, []);

    const deleteHandler = (e) => {
        console.log(e.target.id);
        deleteCategory(e.target.id)
            .then((response) => {
                alert("카테고리 삭제 완료");
                window.location.href = "/adminCategories";
            })
            .catch((error) => {
                alert(error);
            });
    };

    const editHandler = (e) => {
        navigate(`/editCategory/${e.target.id}`);
    };

    return (
        <SC.Container>
            <SC.TitleDiv> 카테고리 관리 </SC.TitleDiv>
            <SC.AddDiv>
                <Link to="/addCategory"> 카테고리 추가 </Link>
            </SC.AddDiv>
            <SC.ListTable>
                <thead>
                    <tr>
                        <td>카테고리명</td>
                        <td>카테고리 설명</td>
                        <td>수정</td>
                        <td>삭제</td>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category) => {
                        return (
                            <SC.ItemTr key={category.categoryId}>
                                <td>
                                    <Link
                                        to={`/adminProducts/${category.categoryId}`}>
                                        <SC.NameDiv>{category.name}</SC.NameDiv>
                                    </Link>
                                </td>
                                <td>
                                    <SC.DecsDiv>
                                        {category.description}
                                    </SC.DecsDiv>
                                </td>
                                <td>
                                    <button
                                        id={category.categoryId}
                                        onClick={editHandler}>
                                        수정
                                    </button>
                                </td>
                                <td>
                                    <button
                                        id={category.categoryId}
                                        onClick={deleteHandler}>
                                        삭제
                                    </button>
                                </td>
                            </SC.ItemTr>
                        );
                    })}
                </tbody>
            </SC.ListTable>
        </SC.Container>
    );
};

export default AdminCategories;
