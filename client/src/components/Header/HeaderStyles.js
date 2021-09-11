import styled from "styled-components";

import { Link } from 'react-router-dom';
import Container from '../Container';
import Divider from '../Divider';
import { breakPoints, devices } from '../../constants/responsive_breakPoints';


export const Root = styled.header`
    margin-bottom: 4rem;
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
    @media ${breakPoints.iPadsAndTablets} {
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
    @media ${breakPoints.iPadsAndTablets} {
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
    @media ${breakPoints.iPadsAndTablets} {
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
    ${props => props.menuBtn && `
        @media (min-width: calc(${devices.iPadsAndTablets} + 1px)) {
            & {
                display: none;
            }
        }
    `}
`;

export const MobileSearchWrapper = styled.div`
    max-width: 9999px;
    margin: 0;
    padding: 1rem;
`;

export const DropDownItems = styled.ul`
    position: absolute;
    width: 270px;
    left: 50%;
    transform: translateX(-50%);
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background-color: white;
    box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.15);
    list-style: none;
    border-radius: 8px;
    display: none;
    animation: account-menu-animation 300ms;

    @keyframes account-menu-animation {
        0% {
            opacity: 0;
            transform: translateX(-50%) translateY(-10px);
        }
        100% {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }

    &::before {
        content: '';
        position: absolute;
        width: 12px;
        height: 12px;
        background-color: white;
        top: -6px;
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
    }

    & li {
        transition: var(--transition-time);

        &:hover {
            background-color: rgba(13, 12, 34, 0.03);
        }

        & > * {
            display: block;
            cursor: pointer;
            padding: 1.5rem;
            font-size: 2rem;
            font-weight: 500;
            transition: var(--transition-time);
        }

        &:hover > * {
            color: var(--accent-color);
        }
    }
`;

export const DropDownLink = styled.div`
    height: 100%;
    position: relative;

    & a {
        margin: 0 !important;
    }

    &:hover > ${DropDownItems} {
        display: block;
    }
`;

export const MobileNav = styled.ul`
    position: absolute;
    top: 60px;
    right: 0;
    left: 0;
    z-index: 999;
    padding: 1rem;
    background-color: var(--divider-color);
    text-align: center;
    transition: var(--transition-time);
    opacity: 0;
    transform-origin: top;
    transform: scaleY(0);

    ${props => props.active && `
        transform: scaleY(1);
        opacity: 1;
    `}

    & a {
        display: block;
        cursor: pointer;
        font-size: 2rem;
        font-weight: 500;
        padding: 1rem;
        transition: var(--transition-time);
        &:active,
        &:hover {      
            background-color: var(--primary-color);
            color: white;
        }
    }
`;
