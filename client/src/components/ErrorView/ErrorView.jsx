import React from 'react';

import * as Styles from './ErrorViewStyles';


function ErrorView({errorMesasge}) {
    return (
        <Styles.Root>
            <img src="assets/images/error.png" alt="error"/>
            <h2>{errorMesasge}</h2>
        </Styles.Root>
    )
}

export default ErrorView;
