import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import library from "./icons/library";
import { loginUser, logoutCurrentUser } from "./actions/session_actions";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root")

    
    let store
    if ( window.currentUser ){
        const preloadedState = {
            entities: {
                users: {
                    [window.currentUser.id]: window.currentUser
                }
            },
            session: { id: window.currentUser }
        }
        delete window.currentUser
        store = configureStore(preloadedState);
    } else {
        store = configureStore()
    }

    //testing
    window.login = user => store.dispatch(loginUser(user))
    window.logout = () => store.dispatch(logoutCurrentUser())
    // end testing
    
    ReactDOM.render(<Root store={ store } />, root);
})