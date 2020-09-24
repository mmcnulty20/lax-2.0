import * as sessionAPIUtil from "../utils/session_api_util";

// Action types - Auth
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
// export const RECEIVE_EMAIL_PRESENCE = "RECEIVE_EMAIL_PRESENCE";

// Action types - Errors
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const PURGE_ERRORS = "PURGE_ERRORS"


// Action creators - Auth
export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
})

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

// CONSIDER making .then on ajax request in component rather than put it into state
// export const receiveEmailPresence = bool => ({
    //     type: RECEIVE_EMAIL_PRESENCE,
    //     bool
// })    

// Action creators - Errors
export const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const purgeErrors = () => ({
    type: PURGE_ERRORS
})

// Thunk action creators
export const signUpUser = user => {
    return dispatch => (
        sessionAPIUtil.signUp(user)
            .then(
                res => dispatch(receiveCurrentUser(res)),
                errors => dispatch(receiveSessionErrors(errors))
            )
    )
}

export const loginUser = user => {
    return dispatch => (
        sessionAPIUtil.login(user)
            .then(
                res => dispatch(receiveCurrentUser(res)),
                ({ responseJSON: errors }) => dispatch(receiveSessionErrors(errors))
            )
    )
}

export const logoutUser = () => {
    return dispatch => (
        sessionAPIUtil.logout()
            .then(
                () => dispatch(logoutCurrentUser()),
                ({ responseJSON: errors }) => dispatch(receiveSessionErrors(errors))
            )
    )
}

export const loginDemo = () => {
    return dispatch => (
        sessionAPIUtil.login({ email: "demouser@demo.com", password: "password" })
            .then(
                res => dispatch(receiveCurrentUser(res)),
                ({ responseJSON: errors }) => dispatch(receiveSessionErrors(errors))
            )
    )
}