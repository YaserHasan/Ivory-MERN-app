import styled from 'styled-components';

import { Link as OrgLink } from 'react-router-dom';
import OrgDivider from '../../../Divider';
import OrgUserAvatar from '../UserAvatar';


export const Root = styled.div`
    position: fixed;
    z-index: 999;
    inset: 0;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    --transition-time: 400ms;
    
    &::before {
        content: ''; 
        position: absolute;
        z-index: -9;
        inset: 0;
        background-color: rgba(0,0,0,0.8);
        opacity: ${props => props.active ? '1' : '0'};
        transition: var(--transition-time) ease;
    }

    ${props => !props.active && `
        visibility: hidden;
        pointer-events: none;
    `}
`;

export const Main = styled.div`
    height: 100%;
    background-color: white;
    text-align: center;
    width: 80%;
    box-shadow: 4px 0 10px 0 rgb(0 0 0 / 40%);
    overflow-y: auto;
    transform: ${props => props.active ? 'translateX(0);' : 'translateX(-100%)'};
    transition: var(--transition-time) ease;

    & > * {
        margin: 0 2rem;
    }
`;

export const UserAvatar = styled(OrgUserAvatar)`
    margin: 0;
    margin-bottom: 2rem;
`;

export const Link = styled(OrgLink)`
    cursor: pointer;
    display: block;
    margin-bottom: 1rem;
    padding: 1rem;
    background-color: var(--divider-color);
    border-radius: 5px;
    font-size: 1.6rem;
    font-weight: 500;
    transition: var(--transition-time);

    &:active,
    &:hover {      
        background-color: var(--primary-color);
        color: white;
    }
`;

export const Divider = styled(OrgDivider)`
    margin: 2rem 0;
`;

export const CloseArea = styled.div`
    padding: 2rem;
    width: 20%;
    height: 100%;
    opacity: ${props => props.active ? '1' : '0'};
    transition: var(--transition-time) ease;
`;

export const CloseIcon = styled.div`
    text-align: center;

    &::after {
        content: '\f00d';
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        font-size: 3.2rem;
        color: white;
    }
`;