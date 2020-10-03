import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { loginDemo } from "../../actions/session_actions";

const SplashIntro = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const errs = useSelector(state => state.errors.session)

    return (
        <div className="intro">
            <ul>
                {errs}
            </ul>
            <section>
                <p>CHILL AT HOME</p>
                <h1>Lax brings you together, wherever you are</h1>
                <p>All of the communication tools you need to spend time with friends, plan time together, and embrace relaxation no matter where you are.</p>
                <Link to="/signup">
                    <button className="btn-blue">
                        <span>TRY LAX FOR FREE</span>
                    </button>
                </Link>
                <Link to="#"> 
                    <button onClick={ () => {
                            dispatch(loginDemo());
                            history.push("/")
                        }}
                        className="btn-white">
                        <span>SEE THE DEMO</span>
                    </button>
                </Link>
            </section>
        </div>
    )
}

export default SplashIntro