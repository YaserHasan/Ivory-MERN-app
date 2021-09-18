import React from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';


const StyledLink = styled(Link)`
    display: block;
`;

function CustomLink(props) {
    const { disabled, children } = props;

     if (disabled)  {
        return (
            <>
               {children}
            </>
        );
     }
         
    return (
        <StyledLink {...props}>
            {children}
        </StyledLink>
    );
}

export default CustomLink;
