import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Routes from 'routes';
import Layout from 'components/Layout';
import Theme from 'components/Theme';

import './App.scss';

function App() {
    return (
        <Theme>
            <Router>
                <Layout
                    //user={{ name: 'Gabriel Emilio', type: 'Administrador' }}
                >
                    <Switch>
                        {Object.keys(Routes).map(key => {
                            const route = Routes[key];
                            return (
                                <Route
                                    key={key}
                                    exact
                                    path={route.path}
                                    component={route.component}
                                />
                            );
                        })}
                    </Switch>
                </Layout>
            </Router>
        </Theme>
    );
}

export default App;
