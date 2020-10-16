import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { loginDemo } from "../../actions/session_actions";
import LoginDemoButton from "../misc/login_demo_button";

const SplashLowerBtns = ({ channel }) => {
    const loggedIn = useSelector(state => Boolean(state.session.currentUserId) )
    const history = useHistory();
    const dispatch = useDispatch();

    return (
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
)}

export default SplashLowerBtns