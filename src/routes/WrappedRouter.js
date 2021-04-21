import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import Dashboard from '../components/Dashboard';
import Home from '../components/Home';
import Settings from '../components/Settings';
import Topbar from '../components/Topbar';

const WrappedRouter = ({ user }) => {
    return (
        <Router>
            <Topbar />

            <Switch>
                {/* Home Route */}
                <Route exact path="/" component={user.isAuthenticated ? Dashboard : Home} />

                {/* Sign In Route */}
                {!user.isAuthenticated && (
                    <Route
                        exact
                        path="/signin"
                        render={props => <AuthForm {...props} routeType={0} />}
                    />
                )}

                {/* Sign Up Route */}
                {!user.isAuthenticated && (
                    <Route
                        exact
                        path="/signup"
                        render={props => <AuthForm {...props} routeType={1} />}
                    />
                )}

                {/* SettingsRoute */}
                {user.isAuthenticated && <Route exact path="/settings" component={Settings} />}

                <Redirect to="/" />
            </Switch>
        </Router>
    );
};

export default connect(state => {
    return {
        user: state.user,
    };
})(WrappedRouter);
