import styled from 'styled-components';

import { BREAKPOINTS } from '../../constants/responsive_breakPoints';
import Container from '../../components/Container';


export const Root = styled(Container)`
    & h1 {
        margin-bottom: 2rem;
    }
`;

export const FlexContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    
    // responsive
    @media ${BREAKPOINTS.iPadsAndTablets} {
        & {
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
        }
    }
`;

export const CartProductsSection = styled.section`
    flex: 5.3;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    row-gap: 2rem;

    // responsive
    @media ${BREAKPOINTS.iPadsAndTablets} {
        & {
            flex: 1;
        }
    }
`;

