import styled from "styled-components";

import { BREAKPOINTS } from '../../../../constants/responsive_breakPoints';
import Card from "../../../../components/Card";
import Divider from "../../../../components/Divider";


export const Root = styled.section`
    flex: 3;

    // responsive
    @media ${BREAKPOINTS.iPadsAndTablets} {
        & {
            flex: 1;
            width: 100%;
        }
    }
`;

export const OrderInfoCard = styled(Card)`
    margin-left: 4rem;
    padding: 2rem 1.5rem;

    & h3 {
        margin-bottom: 1.5rem;
    }

    & ${Divider} {
        margin: 3rem 0 1.5rem 0;
    }

    & button {
        margin-top: 2rem;
    }

    // responsive
    @media ${BREAKPOINTS.iPadsAndTablets} {
        & {
            margin-left: 0;
            margin-top: 2rem;
            width: 100%;
        }
    }
`;

export const OrderInfoRow = styled.div`
    margin: 0.7rem 0;
    display: flex;
    justify-content: space-between;
`;