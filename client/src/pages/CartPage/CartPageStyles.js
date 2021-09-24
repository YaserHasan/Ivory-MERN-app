import styled from 'styled-components';

import { BREAKPOINTS } from '../../constants/responsive_breakPoints';
import Container from '../../components/Container';
import VerticalFlexList from '../../components/VerticalFlexList';


export const Root = styled(Container)`
    & h1 {
        margin-bottom: 2rem;
    }
`;
Root.defaultProps = {
    as: 'main',
};

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

export const CartProductsSection = styled(VerticalFlexList)`
    flex: 5.3;

    // responsive
    @media ${BREAKPOINTS.iPadsAndTablets} {
        & {
            flex: 1;
        }
    }
`;
CartProductsSection.defaultProps = {
    as: 'section',
};

