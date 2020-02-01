import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import BaseLayout from 'components/base-layout';
import Home from 'components/routes/home';
import Login from 'components/routes/login';
import './app.scss';

function App() {
    return (
        <Router>
            <BaseLayout>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
            </BaseLayout>
        </Router>
    );
}

export default App;
