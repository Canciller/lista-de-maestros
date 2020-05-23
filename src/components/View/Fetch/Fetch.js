import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Redirect, withRouter } from 'react-router-dom';

import View from 'components/View';
import Loading from 'components/View/Loading';
import Error from 'components/View/Error';

import fetchAPI from 'util/fetchAPI';

class Fetch extends Component {
    state = {
        loaded: false,
    };

    load = () => {
        fetchAPI(this.props.endpoint, this.props.options)
            .then(this.props.then)
            .catch(error => this.setState({ error }))
            .then(() => this.setState({ loaded: true }));
    };

    reload = () => {
        this.setState(
            {
                loaded: false,
                error: null,
            },
            this.load
        );
    };

    componentDidMount() {
        this.load();
    }

    render() {
        const { loaded, error } = this.state;

        const {
            then,
            endpoint,
            options,
            found,
            history,
            location,
            match,
            children,
            staticContext,
            ...props
        } = this.props;

        if (!loaded) return <Loading />;

        if (error)
            return (
                <Error
                    error={error}
                    onReturn={history.goBack}
                    onRetry={this.reload}
                />
            );

        if (!found) return <Redirect to="/404" />;

        return <View {...props}>{children}</View>;
    }
}

Fetch.defaultProps = {
    options: {},
    found: false,
};

Fetch.propTypes = {
    then: PropTypes.func.isRequired,
    endpoint: PropTypes.string.isRequired,
    options: PropTypes.object,
    found: PropTypes.bool,
    history: PropTypes.object.isRequired,
    location: PropTypes.any.isRequired,
    match: PropTypes.any.isRequired,
    children: PropTypes.any,
    staticContext: PropTypes.any,
};

export default withRouter(Fetch);
