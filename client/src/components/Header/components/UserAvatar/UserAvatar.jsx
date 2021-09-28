import React from 'react';

import { useSelector } from 'react-redux';
import * as Styles from './UserAvatarStyles';


function UserAvatar(props) {
    const { mobile, className } = props;
    const user = useSelector(state => state.auth.user);

    return (
        // added className prop in order to be able to
        // modify component styles using styled components
        <Styles.Root className={className} to="/login" as={user ? 'div' : undefined} mobile={mobile}>
            <Styles.AvatarIcon />
           {user ? 
           <Styles.AccountInfo mobile={mobile}>
                <h4>{user.name}</h4>
                <p>{user.email}</p>
            </Styles.AccountInfo>
            :
            <Styles.Title mobile={mobile}>Login and Register</Styles.Title>}
        </Styles.Root>
    );
}

export default UserAvatar;
