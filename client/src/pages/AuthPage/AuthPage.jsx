import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { login, register } from '../../redux/auth/authActions';
import { updatePageTitle } from '../../utils/metaTagsUtils';
import * as Styles from './AuthPageStyles';
import AuthNav from './components/AuthNav';
import Input from '../../components/Input';
import useInputController from '../../hooks/useInputController';
import Button from '../../components/Button';
import Loading from '../../components/Loading';


function AuthPage({ formType }) {
    const [loginSelected, setLoginSelected] = useState(formType === 'login');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const nameController = useInputController();
    const emailController = useInputController();
    const passwordController = useInputController();
    const passwordConfirmController = useInputController();
    const { loading, error, success } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    // if deleted the header auth links won't
    // work if the user is on the auth page
    useEffect(() => {
        setLoginSelected(formType === 'login');
    }, [formType]);

    useEffect(() => {
        setFormSubmitted(false);
        updatePageTitle(loginSelected ? 'Login' : 'Register');
    }, [loginSelected]);


    function onSubmit(e) {
        e.preventDefault();
        setFormSubmitted(true);
        const formData = {
            name: nameController.value,
            email: emailController.value,
            password: passwordController.value,
        };
        if (loginSelected)
            dispatch(login(formData));
        else
            dispatch(register(formData));
    }


    return (
        <Styles.Root expand>
            <Styles.MainCard thick lightColor>
                <AuthNav loginSelected={loginSelected} setLoginSelected={setLoginSelected}/>
                <Styles.Form noValidate onSubmit={onSubmit}>
                    <Styles.Title>{loginSelected ? 'LOGIN' : 'Register'}</Styles.Title>
                    
                    {!loginSelected && <Input
                        label="Full Name"
                        placeholder="Full Name"
                        type="text"
                        {...nameController}
                    />}
                    <Input
                        label="Email"
                        placeholder="Email"
                        type="email"
                        {...emailController}
                    />
                    <Input
                        label="Password"
                        placeholder="Password"
                        type="password"
                        {...passwordController}
                    />
                    {!loginSelected && <Input
                        label="Confirm Password"
                        placeholder="Confirm Password"
                        type="password"
                        {...passwordConfirmController}
                    />}

                    {(!loading && formSubmitted && !error) && <Styles.Message success>{success}</Styles.Message>}
                    {(!loading && formSubmitted && error) && <Styles.Message error>{error}</Styles.Message>}

                    {loading && <Loading med />}
                    {!loading && <Button small type="submit">{loginSelected ? 'LOGIN' : 'Register'}</Button>}
                </Styles.Form>
            </Styles.MainCard>
        </Styles.Root>
    );
}

export default AuthPage;
