import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { loginUser, loginDemo, purgeErrors } from "../../actions/session_actions";
import { useComponentWillUnmount } from "../../utils/hook_util";

const LoginForm = props => {
    const dispatch = useDispatch();
    useComponentWillUnmount(() => dispatch(purgeErrors()))
    
    const [user, setUser] = useState({ email: "", password: "" })
    const errors = useSelector(({ errors: { session } }) => session )
        .map( (err,i) => (<li key={i}>
            <FontAwesomeIcon icon="exclamation-triangle" />
            <p>{ err }</p>
        </li>) )

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(loginUser(user))
    }

    const handleChange = field => (
        e => setUser({ ...user, [field]: e.target.value })
    )
    
    return (
        <>
            <div className="auth-page login">
                { errors.length > 0 ? (
                <ul className="errors">
                    { errors }
                </ul>) : null }
                <div>
                    <div>
                        <h2>Sign in to Lax</h2>
                        <h4>welcome to lax.com</h4>

                        <h3>Enter your <strong>email address</strong> and <strong>password</strong></h3>
                        <form onSubmit={ handleSubmit }>

                            <label htmlFor="email">
                                <input type="email"
                                    id="email"
                                    value={ user.email }
                                    placeholder="you@example.com"
                                    onChange={ handleChange("email") }/>
                            </label>

                            <label htmlFor="password">
                                <input type="password"
                                    value={ user.password }
                                    placeholder="password"
                                    onChange={ handleChange("password") }
                                    id="password"/>
                            </label>
                            
                            <button>Sign in</button>
                        </form>
                    </div>
                    <button className="demo"
                        onClick={ () => dispatch(loginDemo()) }>
                        Log in as a demo user
                    </button>
                </div>
                <p>
                    If you don't have a Lax account, you can <Link to="/signup" >create an account</Link>.
                </p>
            </div>
            <div className="auth-footer-container">
                Just footer things
            </div>
        </>
    )
}

export default LoginForm