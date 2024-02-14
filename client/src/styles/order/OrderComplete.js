import styled from "styled-components";

export const Container = styled.div`
    padding: 30px 80px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & h2 {
        padding: 2em;
    }

    & a {
        padding: 0.5em;
        margin: 0.5em;
        border: none;
        border-radius: 0.5em;
        background: grey;
        color: white;
        text-decoration: none;
        text-align: center;
    }
`;
