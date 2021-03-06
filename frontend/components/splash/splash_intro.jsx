import React from "react";
import { Link } from "react-router-dom";

import LoginDemoButton from "../misc/login_demo_button";
import introImgUrl from "../../../app/assets/images/splash/splash_intro_img.svg"

const SplashIntro = () => (
    <div className="intro">
        <div className="intro-content">

        <section>
            <p>CHILL AT HOME</p>
            <h1>Lax brings you together, wherever you are</h1>
            <p>All of the communication tools you need to spend time with friends, plan time together, and embrace relaxation no matter where you are.</p>
            <nav>
                <Link to="/signup">
                    <button className="btn-blue">
                        <span>TRY LAX FOR FREE</span>
                    </button>
                </Link>
                <LoginDemoButton className="btn-white">
                    <span>SEE THE DEMO</span>
                </LoginDemoButton>
            </nav>
        </section>
        <figure className="intro-img">
            <img src={ introImgUrl } alt="stylized chat display image"/>
        </figure>
        </div>
    </div>
)
export default SplashIntro;