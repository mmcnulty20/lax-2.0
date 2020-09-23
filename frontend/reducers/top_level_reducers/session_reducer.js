const defaultState = {
    id: null
}

const SessionReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch ( action.type ) {
        default:
            return state;
    }
}

export default SessionReducer