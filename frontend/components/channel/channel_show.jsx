import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../actions/session_actions";

const ChannelShow = () => {
    const dispatch = useDispatch();
    return (
    <div>Channel
        <button onClick={ () => dispatch(logoutUser()) }>
            Logout
        </button>
    </div>
)}

export default ChannelShow;