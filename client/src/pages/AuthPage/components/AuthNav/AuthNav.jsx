import React from 'react';

import * as Styles from './AuthNavStyles';


function AuthNav(props) {
    const { loginSelected, setLoginSelected } = props;

    function selectLogin() {
        setLoginSelected(true);
    }

    function selectRegister() {
        setLoginSelected(false);
    }

    return (
        <Styles.Root>
            <Styles.Nav>
                <Styles.NavLink selected={loginSelected} onClick={selectLogin}>
                    <h4>LOGIN</h4>
                </Styles.NavLink>
                <Styles.NavLink selected={!loginSelected} onClick={selectRegister}>
                    <h4>Register</h4>
                </Styles.NavLink>   
            </Styles.Nav>
            
            <Styles.Indicator loginSelected={loginSelected}/>
        </Styles.Root>
    );
}

export default AuthNav;
