import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { loginDemo } from "../../actions/session_actions";

const SplashLowerBtns = ({ channel }) => {
    const loggedIn = useSelector(state => Boolean(state.session.id) )
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
                <button 
                    onClick={ () => {
                        if (!loggedIn) {
                            dispatch(loginDemo())
                                .then(() => { history.push(`/c/${channel}`) })
                        } else {
                            history.push("/")
                        }
                    } }
                    className="btn-transp">
                    SEE THE DEMO
                </button>
            </nav>
        </section>
    </section>
)}

export default SplashLowerBtns