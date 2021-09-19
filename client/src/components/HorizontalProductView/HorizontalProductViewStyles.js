import styled from 'styled-components';

import Card from '../Card';


export const Root = styled(Card)`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: flex-start;
`;

export const ImageSection = styled.div`
    flex: 3;
    max-width: 170px;

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const InfoSection = styled.div`
    flex: 7;
    margin-left: 1rem;
`;

export const Title = styled.h4`
    font-weight: 400;
`;

export const Price = styled.h3`
    margin: 1rem 0;
    font-weight: 500;
`;


