import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const validEmail = str => {
    const valid = str.search(/^[a-zA-Z0-9][\w-.]*[@][a-zA-Z0-9][\w-]*[.][\w-]*[a-zA-Z0-9]$/)
    return valid !== -1
}

export const validName = name => {
    const vaild = name.search(/^[\w-.]+[\w-.\s]*[\w-.]*$/);
    return vaild !== -1;
}

export const handleBackendErrors = ( errors = [] ) => {
    const formatted = [];
    
    const nameErrs = errors.find( err => err.includes("name") );
    formatted.push(nameErrs || null);

    const emailErrs = errors.find( err => err.includes("email") );
    formatted.push(emailErrs || null);

    const pwErrs = errors.find( err => err.includes("password") );
    formatted.push(pwErrs || null);

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
            if ( email.length === 0 ) {
                errMsg = "This is required — you’ll need to enter an email.";
            } else if ( inUse ) {
                errMsg = "That email is already in use.";
            } else if ( !validEmail(email) ) {
                errMsg = "It looks like that isn’t a valid email address.";
            }
            break;
        case 2: //if the current field is the password
            value = value.length;
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
        console.log(msg)
        return msg
    }
}