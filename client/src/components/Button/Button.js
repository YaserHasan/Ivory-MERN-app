import styled from "styled-components";

import { BREAKPOINTS } from '../../constants/responsive_breakPoints';


const Button = styled.button`
    display: block;
    width: 100%;
    text-align: center;
    padding: 1rem 4rem;
    font-size: ${props => props.small ? '2rem' : '2.6rem'};
    font-weight: 700;
    border-radius: 7px;
    color: white;
    background-color: ${props => props.danger ? 'var(--error-color)' : 'var(--accent-color)'};
    border: none;
    cursor: pointer;
    transition: var(--transition-time);

    &:hover {
        filter: brightness(0.80);
    }

    // responsive
    @media ${BREAKPOINTS.smallScreensAndLaptops} {
        & {
            font-size: 2.4rem;
        }

        ${props => props.small && `
            & {
                font-size: 1.8rem;
            }
        `}
    }

    @media ${BREAKPOINTS.iPadsAndTablets} {
        & {
            font-size: 2.2rem;
        }

        ${props => props.small && `
            & {
                font-size: 1.6rem;
            }
        `}
    }
`;

export default Button;