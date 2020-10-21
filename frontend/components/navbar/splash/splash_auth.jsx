import React from "react";
import { Link } from "react-router-dom";

export default () => (
    <nav className="nav-btns logged-out">
        <Link to="/login">
            Sign in
        </Link>
        <Link to="/signup">
            <button className="btn-blue">
                GET STARTED
            </button>
        </Link>
    </nav>
)