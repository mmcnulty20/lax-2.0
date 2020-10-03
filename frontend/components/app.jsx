import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NavBarAuthSplash from "./navbar/splash_auth_nav";
import NavBar from "./navbar/main_navbar";
import { AuthRoute, ProtectedRoute } from "../utils/route_util";
import LoginForm from "./session/login_form";
import SignupStructure from "./session/signup_page_structure";
import SplashMain from "./splash/splash_main";
import ChannelShow from "./channel/channel_show";

export default (props) => {
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
                <ProtectedRoute path="/c" component={ ChannelShow } />
                <Redirect from="/" to={`/welcome`} />
            </Switch>
        </>
    )
}

