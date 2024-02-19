import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin: 10px 80px;

    & a {
        text-decoration: none;
        color: black;
    }
`;
export const LogoDiv = styled.div`
    margin: 10px 50px;
    & img {
        width: 70px;
        height: 70px;
    }
`;

export const NavUl = styled.ul`
    align-self: center;
    list-style-type: none;
    & li {
        margin-right: 20px;
        display: inline;
    }
`;

export const IconUl = styled.ul`
    align-self: center;
    margin-left: auto;
    display: flex;
    list-style-type: none;
    & a {
        text-align: center;
        margin : 0.375em;
    }
`;

export const LogoutButton = styled.button`
    padding: 10px;
    border-radius : 1em;
    border : none;
    background-color : white;
`;
