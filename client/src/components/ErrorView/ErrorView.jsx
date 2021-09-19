import React from 'react';

import * as Styles from './ErrorViewStyles';
import ErrorIcon from '../../assets/images/error.png';


function ErrorView({errorMesasge}) {
    return (
        <Styles.Root>
            <img src={ErrorIcon} alt="error"/>
            <h2>{errorMesasge}</h2>
        </Styles.Root>
    )
}

export default ErrorView;
