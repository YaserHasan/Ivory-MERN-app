import React from 'react';

import { useHistory } from 'react-router-dom';
import * as Styles from './SearchInputStyles';
import Input from '../../../Input';


function SearchInput(props) {
    const history = useHistory();

    function navigateToSearchPage() {
        history.push('/');
    }

    return (
        <Styles.Root {...props}>
            <Input type="text" placeholder="Search"/>
            <Styles.Icon className="clickable" onClick={navigateToSearchPage}>
                <i className="fas fa-search"></i>
            </Styles.Icon>
        </Styles.Root>
    );
}

export default SearchInput;
