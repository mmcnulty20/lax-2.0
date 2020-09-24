import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBarAuthSplash from "./navbar/splash_auth_nav";
import NavBar from "./navbar/main_navbar";
import { AuthRoute } from "../utils/route_util";
import LoginForm from "./session/login_form";
import SignupForm from "./session/signup_form";

export default props => {
    console.log(props)
    return (
        <>
            <header>
                <Switch>
                    <Route path={ ["/welcome", "/login"] } component={NavBarAuthSplash} />
                    <Route path="/signup" render={ ()=>null } />
                </Switch>
            </header>
            <Switch>
                <AuthRoute path="/login" component={ LoginForm } />
                <AuthRoute path="/signup" component={ SignupForm } />
            </Switch>
        </>
    )
}

