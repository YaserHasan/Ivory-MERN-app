import React from 'react';
import { createPortal } from 'react-dom';

import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../../redux/auth/authActions';
import * as Styles from './MobileNavStyles';


function MobileNav(props) {
    const { active, closeMenu } = props;
    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    if (active) {
        document.body.style.position = 'fixed';
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.position = '';
        document.body.style.overflow = '';
    }

    return createPortal(
        <Styles.Root active={active}>
            <Styles.Main active={active}>
                <Styles.UserAvatar mobile />
                {user ?
                <>
                    <Styles.Link to="/cart">My Cart</Styles.Link>
                    <Styles.Link to="/orders">My Orders</Styles.Link>
                    <Styles.Link to="" onClick={() => dispatch(logout())}>Logout</Styles.Link>
                </> :
                <>
                    <Styles.Link to="/login">Login</Styles.Link>
                    <Styles.Link to="/register">Register</Styles.Link>
                </>}
                <Styles.Divider />
                <Styles.Link to="/">about Ivory</Styles.Link>
                <Styles.Link to="/">contact us</Styles.Link>
            </Styles.Main>

            <Styles.CloseArea onClick={closeMenu} active={active}>
                <Styles.CloseIcon />
            </Styles.CloseArea>
        </Styles.Root>,
        document.querySelector('#mobile-menu')
    );
}

export default MobileNav;
