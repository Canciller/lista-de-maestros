import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetchAPI from 'util/fetchAPI';

import Autocomplete from 'components/Autocomplete/Autocomplete';

class FetchAutocomplete extends Component {
    state = {
        suggestions: [],
    };

    static propTypes = {
        endpoint: PropTypes.string.isRequired,
        queryString: PropTypes.any,
        onChange: PropTypes.func,
    };

    static defaultProps = {
        onChange() {},
    };

    onChange = e => {
        const { value } = e.target;
        const { onChange, endpoint, queryString } = this.props;

        /*
        let queryStr = '';
        if (typeof queryString === 'string') queryStr = `?${queryString}`;
        if (queryString instanceof Function)
            queryStr = `?${queryString(value)}`;

        const url = `${endpoint}${queryStr}`;

        fetchAPI(url)
            .then(suggestions => this.setState({ suggestions }))
            .catch(error => console.log(error));
            */

        onChange(e);
    };

    componentDidMount() {
        const { endpoint } = this.props;

        fetchAPI(endpoint)
            .then(suggestions => this.setState({ suggestions }))
            .catch(error => console.log(error));
    }

    render() {
        const {
            onChange,
            props: { endpoint, queryString, ...props },
            state: { suggestions },
        } = this;

        return (
            <Autocomplete
                {...props}
                suggestions={suggestions}
                onChange={onChange}
            />
        );
    }
}

export default FetchAutocomplete;
