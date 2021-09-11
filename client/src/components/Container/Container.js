import styled from "styled-components";


const Container = styled.div`
    margin: 0 auto;
    max-width: 1100px;

    @media (max-width: 1140px) {
        & {
            margin: 0 2rem;
        }
    }
`;

export default Container;