import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from "../../actions/session_actions";

const defaultState = {
    id: null
}

const SessionReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch ( action.type ) {
        case RECEIVE_CURRENT_USER:
            return { id: action.user.id };
        case LOGOUT_CURRENT_USER:
            return defaultState;
        default:
            return state;
    }
}

export default SessionReducer