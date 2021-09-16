import styled from 'styled-components';


export const Root = styled.div`

`;

export const Nav = styled.nav`
    height: 5rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const NavLink = styled.a`
    cursor: pointer;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    transition: var(--transition-time);

    ${props => props.selected && `
        color: var(--accent-color);
    `}
`;

export const Indicator = styled.div`
    position: relative;
    width: 100%;
    height: 2px;
    background-color: var(--divider-color);

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: ${props => props.loginSelected ? '0' : '50%'};
        width: 50%;
        height: 2px;
        background-color: var(--accent-color);
        transition: var(--transition-time);
    }
`;