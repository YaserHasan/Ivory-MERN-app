import React, { useState, useEffect } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/authActions';
import * as Styles from './HeaderStyles';
import Logo from '../../assets/images/logo.png';
import Divider from '../Divider';
import SearchInput from './components/SearchInput';
import Loading from '../Loading';
import UserAvatar from './components/UserAvatar';
import MobileNav from './components/MobileNav';


function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [accountMenuOpen, setAccountMenuOpen] = useState(false);
    const { user, logoutLoading } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const history = useHistory();

    function toggleMobileMenu(e) {
        e.preventDefault();
        setMobileMenuOpen(prev => !prev);
    }

    function toggleAccountMenu(e) {
        e.preventDefault();
        setAccountMenuOpen(prev => !prev);
    }

    // to close mobile menu and account menu on link click
    useEffect(() => {
        history.listen(location => {
            setMobileMenuOpen(false);
            setAccountMenuOpen(false);
        });
    }, []);

    return (
        <Styles.Root>
            <Styles.TopHead>
                <ul>
                    <li><Link to="/"><h5>about Ivory</h5></Link></li>
                    <li><Link to="/"><h5>contact us</h5></Link></li>
                </ul>
            </Styles.TopHead>

            <Divider />

            <Styles.MainHead>
                <Link to="/"><img src={Logo} alt="logo"/></Link>
                <SearchInput />
                <Styles.Nav>
                    <Styles.NavLink to="/cart" className="clickable"><i className="fas fa-shopping-cart"></i></Styles.NavLink>
                    {logoutLoading && <Loading small />}
                    {!logoutLoading && <Styles.DropDownLink>
                        <Styles.NavLink id="accountBtn" to="" className="clickable" onClick={toggleAccountMenu}><i className="fas fa-user"></i></Styles.NavLink>
                        <Styles.DropDownItems active={accountMenuOpen}>
                            {user ?
                            <>
                                <UserAvatar />
                                <Styles.DropDownItem><Link to='/orders'>My Orders</Link></Styles.DropDownItem>
                                <Styles.DropDownItem><Link to='/' onClick={() => dispatch(logout())}>Logout</Link></Styles.DropDownItem>
                            </> :
                            <>
                                <Styles.DropDownItem><Link to='/login'>Login</Link></Styles.DropDownItem>
                                <Styles.DropDownItem><Link to='/register'>Register</Link></Styles.DropDownItem>
                            </>}
                        </Styles.DropDownItems>
                    </Styles.DropDownLink>}
                </Styles.Nav>
                {/* Added '$' prefix on the prop name to avoid React Unknown Prop Warning */}
                <Styles.NavLink id="menuBtn" to="" $menuBtn className="clickable" onClick={toggleMobileMenu}>
                    {logoutLoading && <Loading small />}
                    {!logoutLoading && <i className="fas fa-bars"></i>}
                </Styles.NavLink>
            </Styles.MainHead>
            
            <Divider />
            
            <MobileNav active={mobileMenuOpen} closeMenu={toggleMobileMenu} />
        </Styles.Root>
    );
}

export default Header;
