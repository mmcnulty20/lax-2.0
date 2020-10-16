import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";

const mapStateToProps = ({ entities: { users: { redirectChannel } }, session: { currentUserId } }) => (
    {
        loggedIn: Boolean(currentUserId),
        channel: redirectChannel || 1
    }
)

const Auth = ({ path, loggedIn, onLeave, exact, component: Component }) => (
    <Route
        path={ path }
        onLeave={ onLeave }
        exact={ exact }
        render={ props => (
            loggedIn ? <Redirect to="/welcome" /> : <Component { ...props } />
        ) }
    />
)

const Protected = ({ path, loggedIn, onLeave, exact, component: Component }) => (
    <Route
        path={path}
        onLeave={onLeave}
        exact={exact}
        render={props => (
            loggedIn ? <Component {...props} /> : <Redirect to="/login" />
        )}
    />
)

const Root = ({ path, loggedIn, channel, onLeave, exact }) => (
    <Route
        path={path}
        onLeave={onLeave}
        exact={exact}
        render={ () => (
            loggedIn ? <Redirect to={`/c/${channel}`} /> : <Redirect to="/welcome" />
        )}
    />
)


export const AuthRoute = withRouter(connect(mapStateToProps)(Auth))
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected))
export const RootRoute = withRouter(connect(mapStateToProps)(Root))