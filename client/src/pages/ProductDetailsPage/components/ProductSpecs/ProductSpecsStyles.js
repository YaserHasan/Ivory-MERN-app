import styled from 'styled-components';


export const Root = styled.section`
    margin-top: 4rem;
`;

export const Table = styled.table`
    width: 100%;
    --border: #BCBCBC solid 1px;
    border-collapse: collapse;
    background-color: #F9F9F9;
    border-top: var(--border);
    border-left: var(--border);
    border-right: var(--border);

    & td {
        width: 60%;
        padding: 1rem;
        border-bottom: var(--border);
        &:first-child {
            width: 40%;
        }
    }
`;