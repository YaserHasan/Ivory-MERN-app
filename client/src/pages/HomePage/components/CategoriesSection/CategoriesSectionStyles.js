import styled from 'styled-components';

import { BREAKPOINTS } from '../../../../constants/responsive_breakPoints';


export const Root = styled.main`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px 20px;

    //responsive
    @media ${BREAKPOINTS.smallScreensAndLaptops} {
        & {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    @media ${BREAKPOINTS.iPadsAndTablets} {
        & {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media ${BREAKPOINTS.mobileDevices} {
        & {
            grid-template-columns: repeat(2, 1fr);
        }
    }
`;