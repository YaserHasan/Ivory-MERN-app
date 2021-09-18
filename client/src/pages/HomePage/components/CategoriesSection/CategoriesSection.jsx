import React from 'react';

import * as Styles from './CategoriesSectionStyles';
import CategoryView from '../CategoryView';


function CategoriesSection({categories}) {
    return (
        <Styles.Root>
            {categories.map(category => (
                <CategoryView key={category.id} category={category}/>
            ))}
        </Styles.Root>
    );
}

export default CategoriesSection;
