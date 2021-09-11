import styled from "styled-components";

import { breakPoints } from '../../../../constants/responsive_breakPoints';

export const Root = styled.div`
    ${props => !props.mobile && 'margin: 0 2rem;'}
    display: flex;
    justify-content: center;
    ${props => !props.mobile && 'max-width: 500px;'}
    width: 100%;

    ${props => !props.mobile && `
        @media ${breakPoints.iPadsAndTablets} {
            & {
                display: none;
            }
        }
    `}

    & input {
        width: 90%;
        border-radius: 10px 0 0 10px;
        ${props => props.mobile && 'background-color: white'}
    }
`;

export const Icon = styled.div`
    cursor: pointer;
    width: 10%;
    background-color: var(--primary-color);
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 10px 10px 0;

    & i {
        color: white;
        font-size: 2rem;
    }
`;