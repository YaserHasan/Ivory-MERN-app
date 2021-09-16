import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/authActions';
import * as Styles from './HeaderStyles';
import Divider from '../Divider';
import SearchInput from './components/SearchInput';
import Loading from '../Loading';


function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { user, logoutLoading } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    function toggleMobileMenu() {
        setMobileMenuOpen(prev => !prev);
    }

    function buildInfoLinks(forMobile) {
        const links = [
            { name: 'about Ivory', path: '/' },
            { name: 'contact us', path: '/' },
        ];
        if (forMobile) 
            return links.map(link => (
                <li><Link to={link.path}>{link.name}</Link></li>
            ));
        
        return links.map(link => (
            <li><Link to={link.path}><h5>{link.name}</h5></Link></li>
        ));
    }

    function buildAccountLinks() {
        if (user)
            return [
                <li><Link to='/'>My Orders</Link></li>,
                <li><Link to='/' onClick={() => dispatch(logout())}>Logout</Link></li>,
            ];

        return [
            <li><Link to='/login'>Login</Link></li>,
            <li><Link to='/register'>Register</Link></li>,
        ]
    }

    return (
        <Styles.Root>
            <Styles.TopHead>
                <ul>
                    {buildInfoLinks()}
                </ul>
            </Styles.TopHead>

            <Divider />

            <Styles.MainHead>
                <Link to="/"><img src="/assets/images/logo.png" alt="logo"/></Link>

                <SearchInput />

                <Styles.Nav>
                    <Styles.NavLink className="clickable" to="/protect"><i className="fas fa-shopping-cart"></i></Styles.NavLink>
                    {logoutLoading && <Loading small />}
                    {!logoutLoading && <Styles.DropDownLink>
                        <Styles.NavLink className="clickable" to="/"><i className="fas fa-user"></i></Styles.NavLink>
                        <Styles.DropDownItems>
                            {buildAccountLinks()}
                        </Styles.DropDownItems>
                    </Styles.DropDownLink>}
                </Styles.Nav>

                {/* Added '$' prefix on the prop name to avoid React Unknown Prop Warning */}
                <Styles.NavLink $menuBtn className="clickable" to="/" onClick={toggleMobileMenu}>
                    <i className={mobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
                </Styles.NavLink>
            </Styles.MainHead>

            <Divider />

            <Styles.MobileNav active={mobileMenuOpen}>
                <Styles.MobileSearchWrapper>
                    <SearchInput mobile />
                </Styles.MobileSearchWrapper>
                {buildAccountLinks().concat(buildInfoLinks(true))}
            </Styles.MobileNav>
        </Styles.Root>
    );
}

export default Header;
