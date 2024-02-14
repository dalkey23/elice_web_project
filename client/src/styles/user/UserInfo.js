import styled from "styled-components";

export const Container = styled.div`
    margin: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & h1 {
        margin : 1rem;
    }
`;

export const UserInfoDiv = styled.div`
    width: 45%;
    border: 1px solid #ced4da;
    border-radius: 0.375rem;
    padding: 0.5rem;
    margin: 1rem;
    font-size: larger;
`;

export const ButtonDiv = styled.div`
    margin: 1rem;
    & a {
        text-decoration: none;
        border-radius: 0.375rem;
        background-color: grey;
        color: white;
        padding: 0.375rem;
        margin: 0.375rem;
    }
`;
