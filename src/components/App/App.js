import React from 'react';
import Theme from 'components/Theme';
import User from 'components/User';
import Router from './Router';

import './App.scss';

function App() {
    return (
        <User>
            <Theme>
                <Router />
            </Theme>
        </User>
    );
}

export default App;
