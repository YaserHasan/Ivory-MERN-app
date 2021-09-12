import styled from "styled-components";

import { breakPoints } from '../../constants/responsive_breakPoints';


const Input = styled.input`
    font-size: 2.2rem;
    font-weight: 400;
    padding: 1rem;
    border: none;
    color: black;
    background-color: #F3F3F4;
    border-radius: 10px;

    // responsive
    @media ${breakPoints.smallScreensAndLaptops} {
        & {
            font-size: 2.0rem;
        }
    }

    @media ${breakPoints.mobileDevices} {
        & {
            font-size: 1.8rem;
        }
    }
`;

export default Input;