import React from 'react';
import './Login.css';

import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((err) => alert(err.message));
    };

    return (
        <div className="login">
            <div className="login_container">
                <img src="https://image.flaticon.com/icons/png/512/2111/2111615.png" />
                <h1>Sign in to Slack Clone by Samarth</h1>
                <Button onClick={signIn}>Sign In With Google</Button>
            </div>
        </div>
    );
}

export default Login;
