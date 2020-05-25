/* eslint-disable react/prop-types */
import React from 'react';
import Theme from 'components/Theme';
import User from 'components/User';
import Router from './Router';
import { ToastProvider, DefaultToast } from 'react-toast-notifications';

import './App.scss';

export const CustomToast = ({ children, appearance, ...props }) => {
    return (
        <DefaultToast
            {...props}
            appearance={appearance}
            style={{
                boxShadow: 'none',
            }}
        >
            {children}
        </DefaultToast>
    );
};

function App() {
    return (
        <Theme>
            <ToastProvider
                autoDismiss
                placement="bottom-center"
                components={{ Toast: CustomToast }}
            >
                <User>
                    <Router />
                </User>
            </ToastProvider>
        </Theme>
    );
}

export default App;
