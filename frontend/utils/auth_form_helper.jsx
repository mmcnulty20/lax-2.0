import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as sessionAPIUtil from "./session_api_util";

export const validEmail = str => {
    console.log(str)
    const valid = str.search(/^[a-zA-Z0-9][\w-.]*[@][a-zA-Z0-9][\w-]*[.][\w-]*[a-zA-Z0-9]$/)
    return valid !== -1
}

export const validName = name => {
    const vaild = name.search(/^[\w-.]+[\w-.\s]*[\w-.]*$/);
    return vaild !== -1;
}

export const checkEmail = email => (
    sessionAPIUtil.checkEmail(email)
        .then( ({ inUse }) => {
            if ( !inUse && validEmail(email) ) {
                return null
            } else {
                return handleFrontendErrors(1, email, inUse)
            }
        } )
)

export const handleBackendErrors = ( errors = [] ) => {
    const formatted = [];
    
    const nameErrs = errors.find( err => err.includes("name") );
    formatted.push( nameErrs ? nameErrs.slice(9) : null );
    // Slicing removes "Username " from beginning of error message

    const emailErrs = errors.find( err => err.includes("email") );
    formatted.push(emailErrs ? emailErrs.slice(6) : null);
    // Slicing removes "Email " from beginning of error message

    const pwErrs = errors.find( err => err.includes("password") );
    formatted.push(pwErrs ? pwErrs.slice(9) : null);
    // Slicing removes "Password " from beginning of error message

    return formatted.map( (err, i) => formatError(err,i) )
}

export const handleFrontendErrors = (i, value, inUse = false) => {
    let errMsg
    switch (i) {
        case 0: // If the current field is the username
            if ( value.length > 0 && validName(value) ) {
                errMsg = "Mostly, names can’t contain punctuation. (Apostrophes, spaces, and periods are fine.)";
            } else if ( value.length === 0 ) {
                errMsg = "This is required — you’ll need to enter a name.";
            }
            break;
        case 1: //if the current field is the email
            if ( value.length === 0 ) {
                errMsg = "This is required — you’ll need to enter an email.";
            } else if ( inUse ) {
                errMsg = "That email is already in use.";
            } else if ( !validEmail(value) ) {
                errMsg = "It looks like that isn’t a valid email address.";
            }
            break;
        case 2: //if the current field is the password ( value here is already the length )
            if ( value === 0 ) {
                errMsg = "This is required — you’ll need to enter a password.";
            } else if ( value > 0 && value < 6 ) {
                errMsg = "Your password must be at least 6 characters long.";
            } else if ( value > 72 ) {
                errMsg = "Your password can’t be more than 72 characters long.";
            }
            break;
        default:
            break;
    }
    return formatError( errMsg, i )
}

export const formatError = ( msg, i ) => {
    if ( typeof msg === "string" ) {
        return (
            <div key={i} className="error-msg">
                <FontAwesomeIcon icon="exclamation-triangle" />
                <p>{ msg }</p>
            </div>
        )
    } else {
        if ( msg !== null) console.log(msg)
        return msg
    }
}