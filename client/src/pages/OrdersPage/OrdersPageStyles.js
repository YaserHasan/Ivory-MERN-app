import styled from 'styled-components';

import Container from '../../components/Container';
import VerticalFlexList from '../../components/VerticalFlexList';


export const Root = styled(Container)`
    & h1 {
        margin-bottom: 2rem;
    }
`;
Root.defaultProps = {
    as: 'main',
};

export const OrdersSection = styled(VerticalFlexList)`
    width: 100%;
`;
OrdersSection.defaultProps = {
    as: 'section',
    gap: '3rem'
}