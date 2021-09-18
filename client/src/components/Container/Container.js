import styled from "styled-components";


const Container = styled.div`
    margin: 0 auto;
    max-width: 1100px;
    ${props => props.expand && 'flex-grow: 1'};
    ${props => (props.centerHorizontally || props.centerVertically) && `
        display: flex;
        justify-content: ${props.centerVertically ? 'center' : 'flex-start'};
        align-items: ${props.centerHorizontally ? 'center' : 'flex-start'};
    `}

    @media (max-width: 1140px) {
        & {
            margin: 0 2rem;
        }
    }
`;

export default Container;