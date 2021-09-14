import styled from 'styled-components';

import Card from '../Card';


export const Root = styled(Card)`
    padding: 1rem;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: var(--transition-time);

    &  p {
        margin: 1.5rem 0;
    }

    &  img {
        max-height: 150px;
        max-width: 100%;
    }
`;