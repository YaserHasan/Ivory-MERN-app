import styled from "styled-components";

import { Link } from 'react-router-dom';
import { BREAKPOINTS, DEVICES } from '../../constants/responsive_breakPoints';
import Container from '../Container';
import Divider from '../Divider';


export const Root = styled.header`
    margin-bottom: 4rem;

    // responsive
    @media ${BREAKPOINTS.iPadsAndTablets} {
        & {
            margin-bottom: 2rem;
        }
    }
`;

export const TopHead = styled(Container)`
    padding: 1rem 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    & ul {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        & li {
            margin-right: 2rem;
            &:last-child {
                margin-right: 0;
            }
        }

        & a {
            display: inline-block;
            font-size: 1.8rem;
            font-weight: 500;
            transition: var(--transition-time);

            &:hover {
                color: var(--accent-color);
            }
        }
    }

    // responsive
    @media ${BREAKPOINTS.iPadsAndTablets} {
        &, & + ${Divider} {
            display: none;
        }
    }
`;

export const MainHead = styled(Container)`
    position: relative;
    height: 80px;
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & a {
        height: 100%;
    }

    & img {
        position: relative;
        height: 100%;
    }

    // responsive
    @media ${BREAKPOINTS.iPadsAndTablets} {
        & {
            height: 60px;
        }

        & a:first-child {
            margin-right: 0;
        }
    }
`;

export const Nav = styled.nav`
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;

    // responsive
    @media ${BREAKPOINTS.iPadsAndTablets} {
        & {
            display: none;
        }
    }
`;

export const NavLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;

    &:first-child {
        margin-right: 4rem;
    }

    & i {
        color: var(--primary-color);
        font-size: 3.2rem;
        cursor: pointer;
    }

    // hide the hamburger menu button if the size bigger than tablet and iPad size
    ${props => props.$menuBtn && `
        @media (min-width: calc(${DEVICES.iPadsAndTablets} + 1px)) {
            & {
                display: none;
            }
        }
    `}
`;

export const DropDownLink = styled.div`
    height: 100%;

    & a {
        margin: 0 !important;
    }
`;

export const DropDownItems = styled.ul`
    position: absolute;
    min-width: 250px;
    right: -1rem;
    background-color: white;
    box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.15);
    list-style: none;
    border-radius: 8px;
    display: ${props => props.active ? 'block' : 'none'};
    animation: account-menu-animation 300ms;
    --border: rgba(0,0,0,0.08) solid 1px;

    & > * {
        border-bottom: var(--border);
    }

    & > *:last-child {
        border-bottom: none;
    }

    @keyframes account-menu-animation {
        0% {
            opacity: 0;
            transform: translateY(-10px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

export const DropDownItem = styled.li`
    transition: var(--transition-time);

    &:hover {
        background-color: rgba(13, 12, 34, 0.03);
    }
    
    & > * {
        display: block;
        cursor: pointer;
        padding: 1.5rem 2rem;
        font-size: 2rem;
        font-weight: 500;
        transition: var(--transition-time);
    }

    &:hover > * {
        color: var(--accent-color);
    }

`;
