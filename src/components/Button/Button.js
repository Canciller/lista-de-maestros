import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import mergeStyles from 'utils/mergeStyles';

const defaultStyle = {
    root: {
        display: 'inlineBlock',
        textDecoration: 'none',
    },
};

class Button extends React.Component {
    state = {};

    onMouseEnter = () => {
        this.setState({ hover: this.props.hover });
    }

    onMouseLeave = () => {
        this.setState({ hover: undefined });
    }

    render() {
        const {
            children,
            borderRadius,
            padding,
            margin,
            style,
            styles,
            ...props
        } = this.props;

        const { hover } = this.state;

        return (
            <Link
                {...props}
                style={mergeStyles(
                    defaultStyle.root,
                    styles.root,
                    {
                        padding,
                        borderRadius,
                    },
                    style,
                    hover
                )}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
            >
                {children}
            </Link>
        );
    }
}

Button.defaultProps = {
    styles: {},
    padding: '5px 8px',
    margin: 0,
    borderRadius: 0,
};

Button.propTypes = {
    styles: PropTypes.object,
    padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Button;
