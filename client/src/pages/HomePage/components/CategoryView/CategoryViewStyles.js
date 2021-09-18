import styled from "styled-components";


export const Root = styled.div`
    padding: 1rem;
    height: 100%;
    border-radius: 15px;
    background-color: #EDF1F4;
    text-align: center;
    cursor: pointer;
    transition: var(--transition-time);

    &:hover {
        background-color: var(--primary-color);
    }

    &:hover {
        color: white;
    }

    & img {
        max-height: 80px;
        margin-bottom: 0.5rem;
    }
`;