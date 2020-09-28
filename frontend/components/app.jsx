import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBarAuthSplash from "./navbar/splash_auth_nav";
import NavBar from "./navbar/main_navbar";
import { AuthRoute } from "../utils/route_util";
import LoginForm from "./session/login_form";
import SignupStructure from "./session/signup_page_structure";
import SplashMain from "./splash/splash_main";

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
                <AuthRoute path="/signup" component={ SignupStructure } />
                <Route path="/welcome" component={ SplashMain } />
            </Switch>
        </>
    )
}

