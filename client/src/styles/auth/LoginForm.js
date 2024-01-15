import styled from "styled-components";

export const Login = styled.div`
    padding: 5rem;
`;

export const LoginForm = styled.form`
    width: 60%;
    display: flex;
    margin: auto;
    flex-direction: column;
    justify-content: center;

    & label {
        width: 60%;
        display: block;
        margin: auto;
    }
`;

export const LoginInput = styled.input`
    border: 1px solid #ced4da;
    border-radius: 0.375rem;
    margin: 1rem auto;
    width: 60%;
    height: 2rem;
    font-size: 1rem;
    font-weight: 400;
    aling-self: center;
`;

export const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
`;

export const LoginButton = styled.button`
    border-radius: 0.375rem;
    border: none;
    color: white;
    background-color: #808080;
    text-align: center;
    width: 5em;
    padding: 0.5em;
    margin: 0.5rem;
`;