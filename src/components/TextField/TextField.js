import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'components/Theme';
import classNames from 'classnames';
import mergeStyles from 'utils/mergeStyles';
import './TextField.scss';

class TextField extends React.Component {
    render() {
        const { theme, style, id, label, className, ...props } = this.props;

        return (
            <div
                className={classNames('TextField-root', className)}
                style={style}
            >
                <input
                    className="TextField-input"
                    id={id}
                    style={{
                        color: theme.foreground.dark,
                    }}
                    {...props}
                ></input>
                <label
                    className="TextField-label"
                    for={id}
                    style={{
                        color: theme.foreground.normal,
                    }}
                >
                    {label}
                </label>
            </div>
        );
    }
}

TextField.propTypes = {
    theme: PropTypes.object.isRequired,
    style: PropTypes.object,
    id: PropTypes.string.isRequired,
    label: PropTypes.any,
};

export default withTheme(TextField);
