import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../actions/session_actions";

export default () => {
    const dispatch = useDispatch()
    return (
    <div className="nav-btns logged-in">
        Launch button here
        <button onClick={ () => dispatch(logoutUser()) }>
            logout
        </button>
    </div>
)}