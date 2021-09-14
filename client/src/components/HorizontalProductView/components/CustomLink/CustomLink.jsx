import React from 'react';

import { Link } from 'react-router-dom';


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
        <Link {...props}>
            {children}
        </Link>
    );
}

export default CustomLink;
