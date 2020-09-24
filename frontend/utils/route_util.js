import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";

const mapStateToProps = ({ session: { currentUserId } }) => (
    { loggedIn: Boolean(currentUserId) }
)

const Auth = ({ path, loggedIn, onLeave, exact, component: Component }) => (
    <Route
        path={ path }
        onLeave={ onLeave }
        exact={ exact }
        render={ props => (
            loggedIn ? <Redirect to="/" /> : <Component { ...props } />
        ) }
    />
)

const Protected = ({ path, loggedIn, onLeave, exact, component: Component }) => (
    <Route
        path={path}
        onLeave={onLeave}
        exact={exact}
        render={props => (
            loggedIn ? <Component {...props} /> : <Redirect to="/" />
        )}
    />
)

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth))
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected))