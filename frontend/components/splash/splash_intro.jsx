import React from "react";
import { useHistory } from "react-router-dom";

const SplashIntro = props => {
    const history = useHistory();

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
                <Link to="#"> 
                    <button onClick={this.handleDemo}
                        className="btn-white">
                        <span>SEE THE DEMO</span>
                    </button>
                </Link>
            </section>
        </div>
    )
}

export default SplashIntro