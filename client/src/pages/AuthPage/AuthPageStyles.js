import styled from 'styled-components';

import Card from '../../components/Card';
import Container from '../../components/Container';
import OrgMessage from './components/Message';


export const Root = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: var(--free-space-size);
`;

export const MainCard = styled(Card)`
    width: 500px;
    padding: 0 !important;
`;

export const Form = styled.form`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: start;

    & .custom-input {
        margin-bottom: 1.5rem;
    }
`;

export const Title = styled.h1`
    text-align: center;
    margin: 2rem 0;
`;

export const Message = styled(OrgMessage)`
    margin-bottom: 1rem;
`;