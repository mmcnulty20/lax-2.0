import React from "react";
import { Link } from "react-router-dom";

export default props => (
    <div className="nav-btns logged-out">
        <Link to="/signup">
            <button className="auth signup">
                Create a new account
            </button>
        </Link>
        <Link to="/login">
            <button className="auth login">
                Sign in
            </button>
        </Link>
    </div>
)