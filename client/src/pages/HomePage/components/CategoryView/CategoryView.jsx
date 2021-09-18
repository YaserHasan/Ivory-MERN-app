import React from 'react';

import { Link } from 'react-router-dom';
import * as Styles from './CategoryViewStyles';


function CategoryView({category}) {
    return (
        <Link to="/">
            <Styles.Root>
                    <img src={category.imageURL} alt="category"/>
                    <h3>{category.name}</h3>
            </Styles.Root>
        </Link>
    );
}

export default CategoryView;
