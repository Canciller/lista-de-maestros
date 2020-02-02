import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import BaseLayout from 'components/BaseLayout';
import Home from 'components/routes/Home';
import Login from 'components/routes/Login';
import './App.scss';

function App() {
    return (
        <Router>
            <BaseLayout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                </Switch>
            </BaseLayout>
        </Router>
    );
}

export default App;
