import React from 'react';

import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';


function ProtectedRoute(props) {
    const { inAuth, children, ...restOfProps } = props;
    const { user } = useSelector(state => state.auth);

    return (
        <Route {...restOfProps} render={props => {
            if (inAuth) {
                if (user)
                    return <Redirect to="/" />;
                return children;
            }
                 
            if (!user)
                return <Redirect to="/login" />;
            return children;
        }} />
    )
}

export default ProtectedRoute;
