import styled from 'styled-components';

import { Link } from 'react-router-dom';


export const Root = styled(Link)`
    display: block;
    width: 100%;
    padding: 2rem;
    ${props => props.mobile && 'background-color: var(--primary-color);'}
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const AvatarIcon = styled.div`
    margin-right: 1rem;
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    background-color: var(--accent-color);
    display: flex;
    justify-content: center;
    align-items: center;

    &::after {
        content: '\f007';
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        font-size: 1.8rem;
        color: white;
    }
`;

export const AccountInfo = styled.div`
    text-align: start;
    ${props => props.mobile && 'color: white;'}
`;

export const Title = styled.h4`
    ${props => props.mobile && 'color: white;'}
`;