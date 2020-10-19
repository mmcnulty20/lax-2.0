import React from "react";
import { Route, Switch } from "react-router-dom";

import { AuthRoute } from "../../utils/route_util"
import LogoButtonFigure from "../misc/logo_button_fig";
import LoginNav from "./login_nav";
import SplashBar from "./splash/splash_menu";

export default ({ location: { pathname } }) => (
    <div className={pathname === "/welcome" ? "splash" : "login"}>
        <LogoButtonFigure />
        <nav className="header-nav">
            <ul className="nav-list">
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
            <Switch>
                <AuthRoute path="/login" component={ LoginNav } />
                <Route path="/welcome" component={ SplashBar } />
            </Switch>
        </nav>
    </div>
)