import React, { Component } from 'react';
import Typography from 'components/Typography';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './RadioButton.scss';

class RadioButton extends Component {
    render() {
        const { label, name, className, ...props } = this.props;
        return (
            <label className={classNames('RadioButton-root', className)}>
                <input type="radio" name={name} {...props} />
                <Typography className="RadioButton-label">{label}</Typography>
                <div className="RadioButton-checkmark"></div>
            </label>
        );
    }
}

RadioButton.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.any,
    className: PropTypes.string,
};

export default RadioButton;
