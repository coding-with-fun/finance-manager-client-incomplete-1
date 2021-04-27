import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import Budget from '../components/Budget';
import Dashboard from '../components/Dashboard';
import Home from '../components/Home';
import Investments from '../components/Investments';
import Settings from '../components/Settings';
import Topbar from '../components/Topbar';
import Transactions from '../components/Transactions';

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

                {/* BudgetRoute */}
                {user.isAuthenticated && <Route exact path="/budget" component={Budget} />}

                {/* InvestmentsRoute */}
                {user.isAuthenticated && (
                    <Route exact path="/investments" component={Investments} />
                )}

                {/* TransactionsRoute */}
                {user.isAuthenticated && (
                    <Route exact path="/transactions" component={Transactions} />
                )}

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
