import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import * as Styles from './HeaderStyles';
import Divider from '../Divider';
import SearchInput from './components/SearchInput';


function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    function toggleMobileMenu() {
        setMobileMenuOpen(prev => !prev);
    }

    const infoLinks = [
        {name: 'about Ivory', path: '/'},
        {name: 'contact us', path: '/'},
    ];

    function buildAccountLinks() {
        // Placeholder for auth check
        if (false)
            return [
                {name: 'My Orders', path: '/'},
                {name: 'Logout', path: '/'},
            ];

        return [
            {name: 'Login', path: '/'},
            {name: 'Register', path: '/'},
        ]
    }

    return (
        <Styles.Root>
            <Styles.TopHead>
                <ul>
                    {infoLinks.map((link, i) => <li><Link to={link.path} key={i}>{link.name}</Link></li>)}
                </ul>
            </Styles.TopHead>

            <Divider />

            <Styles.MainHead>
                <Link to="/"><img src="/assets/images/logo.png" alt="logo"/></Link>

                <SearchInput />

                <Styles.Nav>
                    <Styles.NavLink className="clickable" to="/"><i class="fas fa-shopping-cart"></i></Styles.NavLink>
                    <Styles.DropDownLink>
                        <Styles.NavLink className="clickable" to="/"><i class="fas fa-user"></i></Styles.NavLink>
                        <Styles.DropDownItems>
                            {buildAccountLinks().map((link, i) => <li><Link to={link.path} key={i}>{link.name}</Link></li>)}
                        </Styles.DropDownItems>
                    </Styles.DropDownLink>
                </Styles.Nav>

                <Styles.NavLink menuBtn className="clickable" to="/" onClick={toggleMobileMenu}>
                    <i class={mobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
                </Styles.NavLink>
            </Styles.MainHead>

            <Divider />

            <Styles.MobileNav active={mobileMenuOpen}>
                <Styles.MobileSearchWrapper>
                    <SearchInput mobile />
                </Styles.MobileSearchWrapper>
                {buildAccountLinks().concat(infoLinks).map(
                    (link, i) => <li><Link to={link.path} key={i}>{link.name}</Link></li>
                )}
            </Styles.MobileNav>
        </Styles.Root>
    );
}

export default Header;
