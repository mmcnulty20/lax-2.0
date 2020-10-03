import React from "react";
import { useDispatch } from "react-redux";
import { logoutCurrentUser } from "../../actions/session_actions";

const ChannelShow = () => {
    const dispatch = useDispatch();
    return (
    <div>Channel
        <button onClick={ () => dispatch(logoutCurrentUser()) }>
            Logout
        </button>
    </div>
)}

export default ChannelShow;