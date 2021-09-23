import styled from 'styled-components';

import Container from '../../components/Container';
import { BREAKPOINTS } from '../../constants/responsive_breakPoints';


export const Root = styled(Container)`
    flex-direction: column;
    text-align: center;

    & h1 {
        margin: 2rem 0;
    }

    & button {
        margin-top: 3rem;
        max-width: 330px !important;
    }
`;

export const SuccessIcon = styled.img`
    max-width: 150px;
    max-height: 150px;

    // responsive
    @media ${BREAKPOINTS.iPadsAndTablets} {
        & {
            max-width: 100px;
            max-height: 100px;
        }
    }
`;

