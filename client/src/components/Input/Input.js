import styled from "styled-components";


const Input = styled.input`
    font-size: 2.2rem;
    font-weight: 400;
    padding: 1rem;
    border: none;
    color: black;
    background-color: #F3F3F4;
    border-radius: 10px;

    & ::placeholder {
        color: #808080;
        opacity: 1;
    }
`;

export default Input;