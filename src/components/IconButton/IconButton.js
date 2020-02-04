import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withTheme } from 'components/Theme';
import mergeStyles from 'utils/mergeStyles';

const defaultStyles = {
    root: {
        textDecoration: 'none',
        cursor: 'pointer',
    },
};

class IconButton extends Component {
    render() {
        const {
            theme,
            style,
            styles,
            children,
            icon,
            size,
            ...props
        } = this.props;

        return (
            <span
                style={mergeStyles(
                    theme.iconButton,
                    defaultStyles.root,
                    styles.root,
                    style
                )}
                {...props}
            >
                <FontAwesomeIcon icon={icon} size={size} />
                <span>{children}</span>
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

export default withTheme(IconButton);

/*
const IconButton = ({ icon, size, className, ...other }) => {
    return (
        <div className={classNames(className, 'IconButton')} {...other}>
            <FontAwesomeIcon icon={icon} size={size} />
        </div>
    );
};

export default styled(IconButton)`
    color: ${props => props.theme.icon.normal.color};
    cursor: pointer;
    transition: all 150ms ease-in-out;
    padding: 3px;
    :hover {
        color: ${props => props.theme.icon.hover.color};
    }
`;

*/
