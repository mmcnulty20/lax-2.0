// Action types - Errors
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const PURGE_ERRORS = "PURGE_ERRORS"

// Action creators - Errors
export const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})
export const purgeErrors = () => ({ type: PURGE_ERRORS })

// Loading Actions
export const LOADING = "LOADING";
export const loadAction = () => ({ type: LOADING })
