import styled from 'styled-components';

import { BREAKPOINTS } from '../../../../constants/responsive_breakPoints';
import Loading from '../../../../components/Loading';


export const Root = styled.section`
    display: flex;
    justify-content: start;

    // responsive
    @media ${BREAKPOINTS.iPadsAndTablets} {
        & {
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            text-align: center;
        }
    }
`;

export const ImageContainer = styled.div`
    flex: 4;
    margin-right: 2rem;
    max-width: 40%;

    & img {
        width: 100%;
        max-height: 500px;
        object-fit: contain;
    }

    // responsive
    @media ${BREAKPOINTS.iPadsAndTablets} {
        & {
            flex: 1;
            max-width: 999999px;
            margin: 0;
            margin-bottom: 2rem;
        }

        & img {
            max-height: 300px;
        }
    }

    @media ${BREAKPOINTS.mobileDevices} {
        & img {
            max-height: 200px;
        }
    }
`;

export const Description = styled.p`
    margin: 3rem 0;
    color: var(--subtitle-color);

    // responsive
    @media ${BREAKPOINTS.smallScreensAndLaptops} {
        & {
            margin: 2rem 0;
        }
    }
`;

export const TextInfo = styled.div`
    flex: 6;

    & button,
    & ${Loading} {
        margin-top: 5rem;
    }

    // responsive
    @media ${BREAKPOINTS.smallScreensAndLaptops} {
        & ${Description} {
            margin: 2rem 0;
        }

        & button,
        & ${Loading} {
            margin-top: 3rem;
        }
    }

    @media ${BREAKPOINTS.iPadsAndTablets} {
        & {
            flex: 1;
        }
    }

    @media ${BREAKPOINTS.mobileDevices} {
        & button,
        & ${Loading} {
            margin-top: 2rem;
        }
    }
`;