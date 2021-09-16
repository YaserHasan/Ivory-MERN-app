import styled from 'styled-components';


export const Root = styled.div`
    ${props => !props.small && 'width: 100%;'}
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fade-in 800ms;
`;

export const LoadingElement = styled.div`
    display: block;
    width: ${props => props.small ? '40px' : '60px'};
    height: ${props => props.small ? '40px' : '60px'};

    &::after {
        content: "";
        display: block;
        width: ${props => props.small ? '32px' : '48px'};
        height: ${props => props.small ? '32px' : '48px'};
        border-radius: 50%;
        border: ${props => props.small ? '4px' : '6px'} solid #fff;
        border-color: var(--accent-color) transparent var(--primary-color) transparent;
        animation: lds-dual-ring 700ms linear infinite;
    }

    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;