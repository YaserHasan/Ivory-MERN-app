import styled from "styled-components";

import { breakPoints } from '../../../../constants/responsive_breakPoints';


export const Root = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
`;

export const QuantityActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
`;

export const ProductQuantity = styled.p`
    margin: 0 2rem;
`;

const BaseActionBtn = styled.button`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;

    &::after {
        position: relative;
        font-family: 'Font Awesome 5 Free';
        font-weight: 900;
        font-size: 1.6rem;
    }
`;

const BaseQuantityBtn = styled(BaseActionBtn)`
    height: 35px;
    width: 35px;
    background-color: var(--divider-color);
    border-radius: 50%;
`;

export const IncrementBtn = styled(BaseQuantityBtn)`
    &::after {
        content: '\f067';
    }
`;

export const DecrementBtn = styled(BaseQuantityBtn)`
    &::after {
        content: '\f068';
    }
`;

export const CartRemoveBtn = styled(BaseActionBtn)`
    height: 40px;
    width: 90px;
    background-color: var(--error-color);
    border-radius: 7px;

    &::after {
        content: '\f1f8';
        color: white;
        font-size: 2.4rem;
    }

    // responsive
    @media ${breakPoints.mobileDevices} {
        & {
            width: 40px;
            height: 40px;
            border-radius: 10px;
        }

        &::after {
            font-size: 2.4rem;
        }
    }
`;