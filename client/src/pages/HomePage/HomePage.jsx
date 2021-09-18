import React, {  useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getCategories, getFeaturedProducts, getMostPopularProducts } from '../../redux/products/productsActions';
import Container from '../../components/Container';
import Loading from '../../components/Loading';
import ErrorView from '../../components/ErrorView';
import CategoriesSection from './components/CategoriesSection';
import ProductsSection from './components/ProductsSection';


function HomePage() {
    const state = useSelector(state => state.products);
    const dispatch = useDispatch();

    // created this function to know if all the
    // data needed by this page is loaded or not
    function isDoneLoading() {
        return state.categories && state.featuredProducts && state.mostPopularProducts;
    }

    async function fetchData() {
        // to prevent unnecessary data fetching
        // and to prevent data fetching when changing pages
        if (isDoneLoading()) {
            return;
        }
        
        // to stop fetching data if one fails,
        // otherwise the next request will reset the state
        // and the app won't catch the error
        const categoriesResponse = await dispatch(getCategories());
        if (categoriesResponse.error) return;
        const featuredProductsResponse = await dispatch(getFeaturedProducts());
        if (featuredProductsResponse.error) return;
        const mostPopularProductsResponse = await dispatch(getMostPopularProducts());
        if (mostPopularProductsResponse.error) return;
        
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Container expand centerVertically={(!isDoneLoading() || state.error)} centerHorizontally={(!isDoneLoading() || state.error)}>
            {(!isDoneLoading() && !state.error) && <Loading />}
            {(!state.loading && state.error) && <ErrorView errorMesasge={state.error} />}

            {(isDoneLoading() && !state.error) &&
                <>
                    <CategoriesSection categories={state.categories} />
                    <ProductsSection title='Featured Products' products={state.featuredProducts} />
                    <ProductsSection title='Most popular Products' products={state.mostPopularProducts} />
                </>
            }
        </Container>
    );
}

export default HomePage;
