import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import BaseLayout from 'components/BaseLayout';
import Home from 'components/routes/Home';
import Login from 'components/routes/Login';
import './App.scss';

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
