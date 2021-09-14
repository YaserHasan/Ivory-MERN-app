import React from 'react'

import { Link } from 'react-router-dom';
import CustomLink from './components/CustomLink';
import * as Styles from './HorizontalProductViewStyles';
import { formatPrice } from '../../utils/formatUtils';
import CartActions from './components/CartActions';


function HorizontalProductView(props) {
    const { imageURL, title, price } = props.product;
    const { inCart } = props;

    return (
        <CustomLink disabled={inCart} to="/">
            <Styles.Root hoverEffect={!inCart}>
                    <Styles.ImageSection>
                    <Link to="/"><img src={imageURL} alt="Product" /></Link>
                    </Styles.ImageSection>

                    <Styles.InfoSection>
                        <Styles.Title><Link to="/">{title}</Link></Styles.Title>
                        <Styles.Price dangerouslySetInnerHTML={{__html: formatPrice(price)}}></Styles.Price>

                        {inCart && <CartActions />}
                    </Styles.InfoSection>
            </Styles.Root>
        </CustomLink>
    )
}

export default HorizontalProductView;
