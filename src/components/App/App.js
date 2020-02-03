import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from 'routes';

import Layout from 'components/Layout';
import Home from 'routes/Home';
import Login from 'routes/Login';
import Lista from 'routes/Lista';
import theme from 'utils/theme';

import './App.scss';

function App() {
    return (
        <ThemeProvider theme={theme.default}>
            <Router>
                <Layout>
                    <Switch>
                        {Object.keys(Routes).map(key => {
                            const route = Routes[key];
                            return <Route exact path={route.path} component={route.component} />
                        })}
                    </Switch>
                </Layout>
            </Router>
        </ThemeProvider>
    );
}

export default App;
