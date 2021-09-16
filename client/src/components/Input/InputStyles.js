import styled from "styled-components";

import { BREAKPOINTS } from '../../constants/responsive_breakPoints';


export const Label = styled.label`
    display: block;
    margin-bottom: 1rem;
`;

export const Input = styled.input`
    width: 100%;
    font-size: 2.2rem;
    font-weight: 400;
    padding: 1rem;
    border: none;
    color: black;
    background-color: #F3F3F4;
    border-radius: 10px;

    // responsive
    @media ${BREAKPOINTS.smallScreensAndLaptops} {
        & {
            font-size: 2.0rem;
        }
    }

    @media ${BREAKPOINTS.mobileDevices} {
        & {
            font-size: 1.8rem;
        }
    }
`;