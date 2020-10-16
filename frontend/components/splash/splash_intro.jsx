import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import LoginDemoButton from "../misc/login_demo_button";

const SplashIntro = ({ channel }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    return (
        <div className="intro">
            <section>
                <p>CHILL AT HOME</p>
                <h1>Lax brings you together, wherever you are</h1>
                <p>All of the communication tools you need to spend time with friends, plan time together, and embrace relaxation no matter where you are.</p>
                <Link to="/signup">
                    <button className="btn-blue">
                        <span>TRY LAX FOR FREE</span>
                    </button>
                </Link>
                <LoginDemoButton className="btn-white">
                    <span>SEE THE DEMO</span>
                </LoginDemoButton>
            </section>
        </div>
    )
}

export default SplashIntro