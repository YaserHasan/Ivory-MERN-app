import React from 'react'

import { Link } from 'react-router-dom';
import CustomLink from './components/CustomLink';
import * as Styles from './HorizontalProductViewStyles';
import { formatPrice } from '../../utils/formatUtils';
import CartActions from './components/CartActions';


function HorizontalProductView(props) {
    const { imageURL, name, price, id } = props.product;
    const { inCart, inOrders } = props;

    return (
        <CustomLink disabled={(inCart || inOrders)} to={`/product/${id}`}>
            <Styles.Root hoverEffect={(!inCart && !inOrders)}>
                    <Styles.ImageSection>
                        {(inCart || inOrders) ? <Link to={`/product/${id}`} target="_blank"><img src={imageURL} alt="Product" /></Link>
                        : <img src={imageURL} alt="Product" />}
                    </Styles.ImageSection>

                    <Styles.InfoSection>
                        <Styles.Title>
                            {(inCart || inOrders) ? <Link to={`/product/${id}`} target="_blank">{name}</Link> : name}
                        </Styles.Title>
                        <Styles.Price dangerouslySetInnerHTML={{__html: formatPrice(price)}}></Styles.Price>

                        {inCart && <CartActions product={props.product} />}
                    </Styles.InfoSection>
            </Styles.Root>
        </CustomLink>
    )
}

export default HorizontalProductView;
