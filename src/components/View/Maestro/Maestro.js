import React, { Component, Fragment } from 'react';
import Typography from 'components/Typography';
import Fetch from 'components/View/Fetch';
import PropTypes from 'prop-types';

class Maestro extends Component {
    state = {
        found: false,
        maestro: {},
    };

    render() {
        const { found, maestro } = this.state;

        const { id } = this.props.match.params;

        return (
            <Fetch
                found={found}
                endpoint={`/maestros/${id}`}
                then={maestro => this.setState({ maestro, found: true })}
            >
                <Typography>{maestro.degree}</Typography>
                <Typography>
                    {[maestro.firstname, maestro.lastname].join(' ')}
                </Typography>
            </Fetch>
        );
    }
}

Maestro.propTypes = {
    match: PropTypes.any.isRequired,
};

export default Maestro;
