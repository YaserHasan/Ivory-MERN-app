import styled from 'styled-components';

import { BREAKPOINTS } from '../../../../constants/responsive_breakPoints';


const Message = styled.div`
    font-size: 2.2rem;
    font-weight: 500;
    width: 100%;
    border-radius: 5px;
    color: ${props => props.success ? 'var(--success-color)' : 'var(--error-color)'};

    //responsive
    @media ${BREAKPOINTS.smallScreensAndLaptops} {
        & {
            font-size: 2.0rem;
        }
    }

    @media ${BREAKPOINTS.iPadsAndTablets} {
        & {
            font-size: 1.8rem;
        }
    }
`;

export default Message;