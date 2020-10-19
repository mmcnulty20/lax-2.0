import React from "react";
import { Link } from "react-router-dom";

export default props => (
    <nav className="auth-nav">
        <div className="nav-btns logged-out">
            <Link to="/login">
                Sign in
            </Link>
            <Link to="/signup">
                <button className="btn-blue">
                    GET STARTED
                </button>
            </Link>
        </div>
    </nav>
)