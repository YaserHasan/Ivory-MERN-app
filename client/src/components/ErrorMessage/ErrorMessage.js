import styled from "styled-components";

import { BREAKPOINTS } from '../../constants/responsive_breakPoints';


const ErrorMessage = styled.p`
    margin-top: 1rem;
    color: ${props => props.success ? 'var(--success-color)' : 'var(--error-color)'};
    font-size: ${props => !props.large ? '2.2rem' : '2.4rem'};
    font-weight: 500;

    // responsive
    @media ${BREAKPOINTS.smallScreensAndLaptops} {
        & {
            font-size: ${props => !props.large ? '2rem' : '2.2rem'};
        }
    }

    @media ${BREAKPOINTS.iPadsAndTablets} {
        & {
            font-size: ${props => !props.large ? '1.8rem' : '2rem'};
        }
    }
`;

export default ErrorMessage;