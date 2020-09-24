import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { purgeErrors, signUpUser } from "../../actions/session_actions";
import { checkEmail, handleFrontendErrors, validName } from "../../utils/auth_form_helper";
import { useComponentWillUnmount } from "../../utils/hook_util";

const defaultChecks = { 0: false, 1: false, 2: false }

const SignupForm = ({ errors }) => {
    const dispatch = useDispatch();
    useComponentWillUnmount(() => dispatch(purgeErrors));

    const [user, setUser] = useState({ username: "", email: "", password: "" });
    const [checks, setChecks] = useState(defaultChecks);
    let submitted = false

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(signUpUser(user));
        submitted = true; // will likely have issue with ASYNC timing!!
        setChecks(defaultChecks)
    }

    const handleFocus = field => (
        e => {
            if (errors[field]) {
                e.target.className = "focus-red"
            } else {
                e.target.className = "focus-blue"
            }
        }
    )

    const handleChange = field => (
        e => setUser({ ...user, [field]: e.target.value })
    )

    const handleLeave = field => (
        e => {
            e.target.className = "";
            const val = e.target.value;
            if ( errors.find(err => err !== null ) ) {
                switch ( field ) {
                    case 0:
                        if ( validName(val) ) {
                            errors[0] = null;
                            setChecks({ ...checks, 0: true })
                        } else {
                            errors[0] = handleFrontendErrors(field, val);
                            setChecks({ ...checks, 0: false })
                        }
                        break;
                    case 1:
                        checkEmail(val).then( result => {
                            errors[1] = result;
                            setChecks({ ...checks, 1: ( result ? false : true ) })
                        })
                        break;
                    case 2:
                        const pwLength = val.length
                        if ( pwLength > 5 && pwLength < 73 ) {
                            errors[2] = null;
                            setChecks({ ...checks, 2: true });
                        } else {
                            errors[2] = handleFrontendErrors(2, pwLength);
                            setChecks({ ...checks, 2: false });
                        }
                        break;
                    default:
                        break;
                }
            }
        }
    )

    return (
        <div>
            <h1>First, create your account</h1>
            <form onSubmit={ handleSubmit }>

                <label htmlFor="fullname">
                    <span>Name</span>
                    <div className={ errors[0] ? "signup-error" : "no-error" } >
                        <input type="text" 
                            autoComplete={ "off" }
                            value={ user.username }
                            placeholder="Your full name"
                            onFocus={ handleFocus(0) }
                            onBlur={ handleLeave(0) }
                            onChange={ handleChange("username") }
                            id="fullname"/>
                        { errors[0] }
                        { checks[0] ? <FontAwesomeIcon icon="check-circle" /> : null}
                    </div>
                </label>

                <label htmlFor="email">
                    <span>Email address</span>
                    <div className={errors[1] ? "signup-error" : "no-error"} >
                        <input type="text"
                            autoComplete={"off"}
                            value={user.email}
                            placeholder="name@work-email.com"
                            onFocus={ handleFocus(1) }
                            onBlur={ handleLeave(1) }
                            onChange={ handleChange("email") }
                            id="email" />
                        {errors[1]}
                        {checks[1] ? <FontAwesomeIcon icon="check-circle" /> : null}
                    </div>
                </label>

                <label htmlFor="password">
                    <span>Password</span>
                    <div className={errors[2] ? "signup-error" : "no-error"} >
                        <input type="password"
                            value={user.password}
                            placeholder="6 characters or more"
                            onFocus={ handleFocus(2) }
                            onBlur={ handleLeave(2) }
                            onChange={ handleChange("password") }
                            id="password" />
                        {errors[2]}
                        {checks[2] ? <FontAwesomeIcon icon="check-circle" /> : null}
                    </div>
                </label>

                <button disabled={ errors.some(e => e !== null) }>
                    Create Account
                </button>

            </form>
            <button className="demo"
                onClick={() => dispatch(loginDemo())}>
                Log in as a demo user
            </button>
        </div>

    )
}

export default SignupForm