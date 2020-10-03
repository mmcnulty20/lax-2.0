import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import library from "./icons/library";
import { loginUser, logoutCurrentUser } from "./actions/session_actions";
import { checkEmail } from "./utils/session_api_util";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root")

    let cUId
    let store
    if ( window.currentUser ){
        cUId = window.currentUser.id
        const preloadedState = {
            entities: {
                users: {
                    [cUId]: window.currentUser
                }
            },
            session: { id: cUId }
        }
        delete window.currentUser
        store = configureStore(preloadedState);
    } else {
        store = configureStore()
    }

    //testing
    
    // end testing
    
    ReactDOM.render(<Root store={ store } id={ cUId }/>, root);
})