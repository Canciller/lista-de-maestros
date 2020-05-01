import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withTheme } from 'components/Theme';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BaseIcon = styled(FontAwesomeIcon)`
    text-decoration: none;
    transition: all 150ms ease-in-out;
    font-size: ${({ fontSize }) => fontSize};
    color: ${({ color }) => color.normal};
`;

class Icon extends Component {
    render() {
        const { theme, size, variant, className, ...props } = this.props;

        return (
            <BaseIcon
                ref={this.ref}
                color={theme.colors[variant] || theme.foreground}
                fontSize={size}
                className={classNames(className)}
                {...props}
            />
        );
    }
}

Icon.defaultProps = {
    size: '1.5em',
};

Icon.propTypes = {
    theme: PropTypes.object.isRequired,
    icon: PropTypes.any.isRequired,
    size: PropTypes.any,
    variant: PropTypes.string,
    className: PropTypes.string,
};

export default withTheme(Icon);
