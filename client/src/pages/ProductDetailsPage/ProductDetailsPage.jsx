import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProductDetails } from '../../redux/products/productsActions';
import { clearSelectedProduct } from '../../redux/products/productsSlice';
import Container from '../../components/Container';
import Loading from '../../components/Loading';
import ErrorView from '../../components/ErrorView';
import ProductOverview from './components/ProductOverview';
import ProductSpecs from './components/ProductSpecs';


function ProductDetailsPage() {
    const { productID } = useParams();
    const { loading, error, selectedProduct } = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductDetails(productID));

        return () => dispatch(clearSelectedProduct());
    }, [])

    return (
        <Container as='main' expand centerVertically={(loading || error)} centerHorizontally={(loading || error)}>
            {(loading && !error) && <Loading />}
            {(!loading && error) && <ErrorView errorMesasge={error} />}

            {(!loading && !error && selectedProduct) && 
            <>
                <ProductOverview />
                <ProductSpecs />
            </>
            }
        </Container>
    );
}

export default ProductDetailsPage;
