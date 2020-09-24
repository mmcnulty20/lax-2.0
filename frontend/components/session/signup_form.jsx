import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { purgeErrors } from "../../actions/session_actions";
import { useComponentWillUnmount } from "../../utils/hook_util";
import LogoButtonFigure from "../misc/logo_button_fig";

const SignupForm = props => {
    const dispatch = useDispatch();
    useComponentWillUnmount(() => dispatch(purgeErrors));

    const [user, setUser] = useState({ username: "", email: "", password: "" })
    const stateErrors = useSelector(({ errors: { session } }) => session)

    return (
        <div className="auth-page signup">
            <LogoButtonFigure />
        </div>
    )
}

export default SignupForm