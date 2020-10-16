import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { loginDemo } from '../../actions/session_actions';
import { useLoggedIn } from '../../utils/hook_util';

const LoginDemoButton = ({ className, children, auth }) => {
    const dispatch = useDispatch()

    const loggedIn = useLoggedIn()
    const [redirect, setRedirect] = useState(false)

    if ( redirect && loggedIn ) return <Redirect to="/" />
    return (
        <button onClick={() => dispatch(loginDemo()).then(() => { if (!auth) setRedirect(true) }) }
            className={ className }>
                {children}
        </button>
)}

export default LoginDemoButton;