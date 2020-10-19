import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';

import { loginDemo } from '../../actions/session_actions';
import { useLoggedIn } from '../../utils/hook_util';

const LoginDemoButton = ({ className, children }) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const loggedIn = useLoggedIn()

    return (
        <button onClick={() => dispatch(loginDemo()).then(() => history.push("/")) }
            className={ className }>
                {children}
        </button>
)}

export default LoginDemoButton;