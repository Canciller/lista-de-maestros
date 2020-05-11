import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Routes from 'config/Routes';
import NotFound from 'components/View/NotFound';
import Layout from 'components/Layout';

function Router(props) {
    return (
        <BrowserRouter {...props}>
            <Layout>
                <Switch>
                    {Object.keys(Routes).map(key => {
                        const route = Routes[key];
                        const path = route.param
                            ? route.path.concat(`/:${route.param}`)
                            : route.path;
                        return (
                            <Route
                                key={key}
                                exact
                                path={path}
                                component={route.component}
                            />
                        );
                    })}
                    <Route exact path="/404" component={NotFound} />
                    <Redirect to="/404" />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default Router;
