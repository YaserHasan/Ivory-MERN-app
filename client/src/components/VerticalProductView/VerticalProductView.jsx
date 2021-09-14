import React from 'react'

import { Link } from 'react-router-dom';
import * as Styles from './VerticalProductViewStyles';
import { formatPrice } from '../../utils/formatUtils';


function VerticalProductView(props) {
    const { imageURL, title, price } = props.product;

    return (
        <Link to="/">
            <Styles.Root hoverEffect>
                <img src={imageURL} alt="Product" />
                <p>{title}</p>
                <h2 dangerouslySetInnerHTML={{__html: formatPrice(price)}}></h2>
            </Styles.Root>
        </Link>
    )
}

export default VerticalProductView;