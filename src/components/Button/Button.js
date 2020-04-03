import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withTheme } from 'components/Theme';
import classNames from 'classnames';
import mergeStyles from 'utils/mergeStyles';
import { withRouter } from 'react-router-dom';
import './Button.scss';

const BaseButton = styled.button`
    ${({ baseColor }) => `
        border-color: ${baseColor.dark};
        color: ${baseColor.dark};

        &:focus,
        &:hover {
            border-color: ${baseColor.light};
            background: ${baseColor.light};
            color: ${baseColor.foreground};
        }

        &:disabled {
            opacity: 0.6;
        }

        &:disabled:hover {
            background: none;
            color: ${baseColor.dark}
        }
    `}
`;

class Button extends React.Component {
    render() {
        const {
            theme,
            variant,
            fullWidth,
            children,
            className,
            style,
            ...props
        } = this.props;

        console.log(this.props);

        return (
            <BaseButton
                style={mergeStyles(
                    {
                        width: fullWidth ? '100%' : undefined,
                    },
                    style
                )}
                className={classNames('Button-root', className)}
                baseColor={theme.colors[variant] || theme.foreground}
                {...props}
            >
                {children}
            </BaseButton>
        );
    }
}

Button.propTypes = {
    theme: PropTypes.object.isRequired,
    variant: PropTypes.string,
    fullWidth: PropTypes.bool,
};

export default withTheme(Button);
