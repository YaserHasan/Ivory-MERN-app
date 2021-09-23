import React, { useState, useRef, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/authActions';
import * as Styles from './HeaderStyles';
import Logo from '../../assets/images/logo.png';
import Divider from '../Divider';
import SearchInput from './components/SearchInput';
import Loading from '../Loading';


function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { user, logoutLoading } = useSelector(state => state.auth);
    const mobileMenuRef = useRef();
    const dispatch = useDispatch();

    function toggleMobileMenu(e) {
        e.preventDefault();
        setMobileMenuOpen(prev => !prev);
    }

    // to close mobile menu on link click
    // this will run every time the auth changes
    // to add the event to the new links that gets added
    useEffect(() => {
        const links = mobileMenuRef.current.querySelectorAll('a');
        links.forEach(link =>
            link.addEventListener('click', e => {
                setMobileMenuOpen(false);
            })    
        );
    }, [user]);

    function buildInfoLinks(forMobile) {
        const links = [
            { name: 'about Ivory', path: '/' },
            { name: 'contact us', path: '/' },
        ];
        if (forMobile) 
            return links.map(link => (
                <li key={link.name}><Link to={link.path}>{link.name}</Link></li>
            ));
        
        return links.map(link => (
            <li key={link.name}><Link to={link.path}><h5>{link.name}</h5></Link></li>
        ));
    }

    function buildAccountLinks(forMobile) {
        let links = [];

        if (user) {
            if (forMobile)
                links.push(<li key='My Cart'><Link to='/cart'>My Cart</Link></li>);

            links = links.concat([
                <li key='My Orders'><Link to='/orders'>My Orders</Link></li>,
                <li key='Logout'><Link to='/' onClick={() => dispatch(logout())}>Logout</Link></li>,
            ]);
        }

        else {
            links = [
                <li key='Login'><Link to='/login'>Login</Link></li>,
                <li key='Register'><Link to='/register'>Register</Link></li>,
            ]
        }
        return links;
    }

    function preventNavigation(e) {
        e.preventDefault();
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
                <Link to="/"><img src={Logo} alt="logo"/></Link>

                <SearchInput />

                <Styles.Nav>
                    <Styles.NavLink className="clickable" to="/cart"><i className="fas fa-shopping-cart"></i></Styles.NavLink>
                    {logoutLoading && <Loading small />}
                    {!logoutLoading && <Styles.DropDownLink>
                        <Styles.NavLink className="clickable" onClick={preventNavigation}><i className="fas fa-user"></i></Styles.NavLink>
                        <Styles.DropDownItems>
                            {buildAccountLinks()}
                        </Styles.DropDownItems>
                    </Styles.DropDownLink>}
                </Styles.Nav>

                
                {/* Added '$' prefix on the prop name to avoid React Unknown Prop Warning */}
                <Styles.NavLink $menuBtn className="clickable" to="" onClick={toggleMobileMenu}>
                    {logoutLoading && <Loading small />}
                    {!logoutLoading && <i className={mobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>}
                </Styles.NavLink>
            </Styles.MainHead>

            <Divider />

            <Styles.MobileNav active={mobileMenuOpen} ref={mobileMenuRef}>
                <Styles.MobileSearchWrapper>
                    <SearchInput mobile />
                </Styles.MobileSearchWrapper>
                {buildAccountLinks(true).concat(buildInfoLinks(true))}
            </Styles.MobileNav>
        </Styles.Root>
    );
}

export default Header;
