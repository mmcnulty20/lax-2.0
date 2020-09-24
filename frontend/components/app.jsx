import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBarAuthSplash from "./navbar/splash_auth_nav";
import NavBar from "./navbar/main_navbar";

export default props => {
    console.log(props)
    return (
        <header>
            <Switch>
                <Route path={ ["/welcome", "/login"] } component={NavBarAuthSplash} />
                <Route path="/signup" render={ ()=>null } />
            </Switch>
        </header>
    )
}

