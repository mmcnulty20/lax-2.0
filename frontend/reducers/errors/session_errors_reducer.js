import { RECEIVE_CURRENT_USER } from "../../actions/session_actions";
import { PURGE_ERRORS, RECEIVE_SESSION_ERRORS } from "../../actions/ui_actions";

const SessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors
        case RECEIVE_CURRENT_USER:
            return [];
        case PURGE_ERRORS:
            return [];
        default:
            return state;
    }
}

export default SessionErrorsReducer;