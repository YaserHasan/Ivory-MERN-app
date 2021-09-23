import styled from "styled-components";

import { BREAKPOINTS } from '../../../../constants/responsive_breakPoints';
import Card from '../../../../components/Card';


export const Root = styled(Card)`
    width: 100%;
    padding: 1.5rem;

    // responsive
    @media ${BREAKPOINTS.mobileDevices} {
        & {
            padding: 1rem;
        }
    }
`;

export const OrderInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 3rem;

    // responsive
    @media ${BREAKPOINTS.smallScreensAndLaptops} {
        & {
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
        }
    }
`;

export const OrderInfoRow = styled.div`
    display: flex;
    justify-content: start;
    flex-wrap: wrap;

    & h3:first-child {
        margin-right: 1rem;
    }
`;

export const AlignLeft = styled.div`
    display: flex;
    justify-content: start;

    & ${OrderInfoRow}:first-child {
        margin-right: 3rem;
    }

    // responsive
    @media ${BREAKPOINTS.smallScreensAndLaptops} {
        & {
            flex-direction: column;
            justify-content: start;
            align-items: flex-start;
        }

        & ${OrderInfoRow}:first-child {
            margin: 1rem 0;
        }
    }
`;

export const ProductsSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    row-gap: 2rem;
`;