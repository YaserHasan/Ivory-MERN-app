import styled from 'styled-components';


const Card = styled.div`
    padding: 1rem;
    border-style: solid;
    border-width: ${props => props.thick ? '3px' : '1px'};
    border-color: ${props => props.lightColor ? 'var(--divider-color)' : 'var(--card-border-color)'};

    ${props => props.hoverEffect && `
        transition: var(--transition-time);
        
        &:hover {
            border-color: var(--accent-color);
            transform: scale(1.03);
        }
    `};
`;

export default Card;