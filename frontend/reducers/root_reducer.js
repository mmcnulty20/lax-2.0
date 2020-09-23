import { combineReducers } from "redux";
import EntitiesReducer from "./top_level_reducers/entities_reducer";
import ErrorsReducer from "./top_level_reducers/errors_reducer";
import SessionReducer from "./top_level_reducers/session_reducer";

export default combineReducers({
    entities: EntitiesReducer,
    session: SessionReducer,
    errors: ErrorsReducer,
})