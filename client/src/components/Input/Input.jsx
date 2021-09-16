import React from 'react';

import * as Styles from './InputStyles';

function Input(props) {
    const { label } = props;

    // if there's no label or errorMessage provided
    // return only input element, otherwise might do
    // some unnecessary problems
    if (!label) {
        return (
            <Styles.Input className="custom-input" {...props}/>
        )
    }

    return (
        <div className="custom-input">
            {label && <Styles.Label>{label}</Styles.Label>}
            <Styles.Input {...props} />
        </div>
    );
}

export default Input;
