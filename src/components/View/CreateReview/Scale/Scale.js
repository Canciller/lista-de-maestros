/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RadioButton from 'components/RadioButton';
import classNames from 'classnames';

import './Scale.scss';

class Scale extends Component {
    createRadios = () => {
        const { name, max, onChange, required, ...props } = this.props;

        const radios = [];

        for (let value = 1; value <= max; ++value)
            radios.push(
                <RadioButton
                    className="Scale-radio"
                    key={value}
                    value={value}
                    name={name}
                    label={value}
                    onChange={onChange}
                    required={required}
                />
            );

        return radios;
    };

    render() {
        const {
            props: { className, onChange, name, max, ...props },
        } = this;

        return (
            <div className={classNames(className, 'Scale-root')} {...props}>
                {this.createRadios()}
            </div>
        );
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
