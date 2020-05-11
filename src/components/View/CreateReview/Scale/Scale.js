import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Scale.scss';
import Typography from 'components/Typography';

class Scale extends Component {
    createRadios = () => {
        const { name, max, ...props } = this.props;

        const radios = [];

        for (let value = 1; value <= max; ++value)
            radios.push(
                <label key={value} className="Scale-radio-label">
                    <Typography>{value}</Typography>
                    <input
                        className="Scale-radio"
                        type="radio"
                        name={name}
                        {...props}
                    />
                </label>
            );

        return radios;
    };

    render() {
        return <div className="Scale-root">{this.createRadios()}</div>;
    }
}

Scale.defaultProps = {
    max: 5,
};

Scale.propTypes = {
    name: PropTypes.string.isRequired,
    max: PropTypes.number,
};

export default Scale;
