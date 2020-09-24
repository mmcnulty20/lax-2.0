import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { handleBackendErrors } from "../../utils/auth_form_helper";
import LogoButtonFigure from "../misc/logo_button_fig";
import SignupForm from "./signup_form";


const SignupStructure = props => (
    <div className="auth-page signup">
        <LogoButtonFigure />
        <div>
            <SignupForm 
                errors={ handleBackendErrors(useSelector(state => state.errors.session)) }/>
            <p>If you already have a Lax account, you can <Link to="/login" >sign in</Link>.</p>
        </div>
        <ul className="footer-container">
            <li>
                <a href="https://slack.com/">
                    Slack
                </a>
            </li>
            <li>
                <a href="https://github.com/mmcnulty20/">
                    Github
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/megan-mcnulty-26a2641b1/">
                    LinkedIn
                </a>
            </li>
        </ul>
    </div>
)

export default SignupStructure;