import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RadioButton from 'components/RadioButton';
import './Scale.scss';

class Scale extends Component {
    createRadios = () => {
        const { name, max, ...props } = this.props;

        const radios = [];

        for (let value = 1; value <= max; ++value)
            radios.push(
                <RadioButton className="Scale-radio" key={value} name={name} label={value} />
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
