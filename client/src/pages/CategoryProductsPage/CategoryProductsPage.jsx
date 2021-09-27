import React, { useEffect } from 'react';

import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { getCategoryProducts } from '../../redux/products/productsActions';
import { clearSelectedCategory } from '../../redux/products/productsSlice';
import * as Styles from './CategoryProductsPageStyles';
import { updatePageTitle } from '../../utils/metaTagsUtils';
import ProductsListView from '../../components/ProductsListView';
import Loading from '../../components/Loading';
import ErrorView from '../../components/ErrorView';


function CategoryProductsPage() {
    const { categoryID } = useParams();
    const { loading, error, selectedCategory } = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategoryProducts(categoryID));

        return () => dispatch(clearSelectedCategory());
    }, []);

    useEffect(() => {
        if (selectedCategory)
            updatePageTitle(selectedCategory.categoryName);
    }, [selectedCategory]);

    return (
        <Styles.Root expand centerVertically={(loading || error)} centerHorizontally={(loading || error)}>
            {(loading && !error) && <Loading />}
            {(!loading && error) && <ErrorView errorMesasge={error} />}

            {(!loading && !error && selectedCategory) &&
            <>
                <h1>{selectedCategory.categoryName}</h1>
                <ProductsListView products={selectedCategory.categoryProducts} />
            </>
            }
        </Styles.Root>
    );
}

export default CategoryProductsPage;
