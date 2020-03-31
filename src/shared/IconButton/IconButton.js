import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import mergeStyles from 'utils/mergeStyles';

const defaultStyles = {
    root: {
        textDecoration: 'none',
        cursor: 'pointer',
        borderRadius: '50%',
        fontSize: '1.5em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'none',
        height: 40,
        width: 40,
    },
};

class IconButton extends Component {
    state = {};

    onMouseEnter = () => {
        this.setState({ hover: this.props.hover });
    };

    onMouseLeave = () => {
        this.setState({ hover: undefined });
    };

    render() {
        const { style, styles, children, icon, size, ...props } = this.props;

        const { hover } = this.state;

        return (
            <span
                style={mergeStyles(
                    defaultStyles.root,
                    styles.root,
                    style,
                    hover
                )}
                {...props}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
            >
                <FontAwesomeIcon
                    style={mergeStyles(defaultStyles.icon, styles.icon)}
                    icon={icon}
                    size={size}
                />
                <span
                    style={mergeStyles(defaultStyles.children, styles.children)}
                >
                    {children}
                </span>
            </span>
        );
    }
}

IconButton.defaultProps = {
    styles: {},
};

IconButton.propTypes = {
    styles: PropTypes.object,
    icon: PropTypes.any.isRequired,
};

export default IconButton;
