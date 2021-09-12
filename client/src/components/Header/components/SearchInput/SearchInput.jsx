import React from 'react';

import * as Styles from './SearchInputStyles';
import Input from '../../../Input';


function SearchInput(props) {
    return (
        <Styles.Root {...props}>
            <Input type="text" placeholder="Search"/>
            <Styles.Icon className="clickable">
                <i className="fas fa-search"></i>
            </Styles.Icon>
        </Styles.Root>
    );
}

export default SearchInput;
