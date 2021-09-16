import styled from 'styled-components';

import { BREAKPOINTS } from '../../constants/responsive_breakPoints';


const VerticalProductViewGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 25px 25px;

    // responsive
    @media ${BREAKPOINTS.smallScreensAndLaptops} {
        & {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media ${BREAKPOINTS.iPadsAndTablets} {
        & {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media ${BREAKPOINTS.mobileDevices} {
        & {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default VerticalProductViewGrid;