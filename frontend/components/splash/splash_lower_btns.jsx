import React from "react";
import { Link } from "react-router-dom";

import LoginDemoButton from "../misc/login_demo_button";

const SplashLowerBtns = () => (
    <section className="splash-btns-container">
        <section>
            <h1>Choose the better way to play</h1>
            <nav>
                <Link to="/signup">
                    <button className="btn-white">
                        TRY LAX 
                    </button>
                </Link>
                <LoginDemoButton
                    className="btn-transp">
                        SEE THE DEMO
                </LoginDemoButton>
            </nav>
        </section>
    </section>
)

export default SplashLowerBtns