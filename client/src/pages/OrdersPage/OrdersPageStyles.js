import styled from 'styled-components';

import Container from '../../components/Container';


export const Root = styled(Container)`
    & h1 {
        margin-bottom: 2rem;
    }
`;

export const OrdersSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    row-gap: 3rem;
`;