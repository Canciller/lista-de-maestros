import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Routes from 'routes';
import Layout from 'components/Layout';
import Theme from 'components/Theme';
import User from 'components/User';

import './App.scss';
import withAuth from 'util/withAuth';

function App() {
    return (
        <User>
            <Theme>
                <Router>
                    <Layout>
                        <Switch>
                            {Object.keys(Routes).map(key => {
                                const route = Routes[key];
                                return (
                                    <Route
                                        key={key}
                                        exact
                                        path={route.path}
                                        component={
                                            route.withAuth
                                                ? withAuth(route.component)
                                                : route.component
                                        }
                                    />
                                );
                            })}
                        </Switch>
                    </Layout>
                </Router>
            </Theme>
        </User>
    );
}

export default App;
