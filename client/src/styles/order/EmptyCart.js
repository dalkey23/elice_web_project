import styled from "styled-components";

export const Container = styled.div`
    margin: 8em;
    text-align: center;
    & h2 {
        padding: 2em;
    }
    & a {
        text-decoration: none;
        color: black;
        border: 1px solid grey;
        padding: 1em;
        border-radius: 0.75em;
    }
`;
