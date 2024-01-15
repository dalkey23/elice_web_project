import styled from "styled-components";

export const Register = styled.div`
    padding: 5rem;
`;

export const RegisterForm = styled.form`
    width: 75%;
    display: flex;
    margin: auto;
    flex-direction: column;
    & label {
        width : 60%;
        display: block;
    }
`;

export const RegisterInput = styled.input`
    border: 1px solid #ced4da;
    border-radius: 0.375rem;
    margin: 1rem 0rem;
    width: 100%;
    height : 2rem;
    font-size: 1rem;
    font-weight: 400;
`;



export const RegisterButton = styled.button`
    border-radius: 0.375rem;
    border: none;
    color: white;
    background-color: #808080;
    text-align: center;
    width: 5em;
    padding : 0.5em;
    margin : 0.5rem;
    align-self : flex-end;
`;