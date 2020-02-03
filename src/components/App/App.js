import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import BaseLayout from 'components/BaseLayout';
import Home from 'components/routes/Home';
import Login from 'components/routes/Login';
import List from 'components/routes/List';
import theme from 'utils/theme';
import './App.scss';

function App() {
    return (
        <ThemeProvider theme={theme.default}>
            <Router>
                <BaseLayout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/list" component={List} />
                        <Route exact path="/login" component={Login} />
                    </Switch>
                </BaseLayout>
            </Router>
        </ThemeProvider>
    );
}

export default App;
