import { LOADING } from "../../actions/ui_actions";

const defaultState = {
    loading: false
}

export default (state = defaultState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case LOADING:
            return { loading: true };
        default:
            return defaultState;
    }
}
