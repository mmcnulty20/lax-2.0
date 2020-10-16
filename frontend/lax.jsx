import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import library from "./icons/library";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root")

    let store
    if ( window.currentUser ){
        const cUId = window.currentUser.id
        const preloadedState = {
            entities: {
                users: {
                    [cUId]: window.currentUser
                }
            },
            session: { currentUserId: cUId }
        }
        delete window.currentUser
        store = configureStore(preloadedState);
    } else {
        store = configureStore()
    }

    //testing
    
    // end testing
    
    ReactDOM.render(<Root store={ store } />, root);
})