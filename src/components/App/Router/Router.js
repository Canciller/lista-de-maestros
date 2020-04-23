import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Routes from 'routes';
import Layout from 'components/Layout';

function Router(props) {
    return (
        <BrowserRouter {...props}>
            <Layout>
                <Switch>
                    {Object.keys(Routes).map(key => {
                        const route = Routes[key];
                        const path = route.param ? route.path.concat(`/:${route.param}`): route.path;
                        return (
                            <Route
                                key={key}
                                exact
                                path={path}
                                component={route.component}
                            />
                        );
                    })}
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default Router;
