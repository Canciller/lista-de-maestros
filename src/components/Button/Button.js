import React from 'react';
import PropTypes from 'prop-types';
import mergeStyles from 'utils/mergeStyles';
import { withTheme } from 'components/Theme';
import BaseButton from 'shared/Button';

class Button extends React.Component {
    style = {
        transition: 'all 250ms ease-in-out',
        borderWidth: 0.5,
        borderStyle: 'solid',
    };

    render() {
        const { children, theme, variant, style, hover, ...props } = this.props;

        const color = theme.colors[variant] || theme.foreground;

        return (
            <BaseButton
                hover={mergeStyles(
                    {
                        borderColor: color.light,
                        boxShadow: `inset 6.5em 0 0 0 ${color.light}`,
                        color: theme.colors.white.normal,
                    },
                    hover
                )}
                style={mergeStyles(
                    {
                        borderColor: color.dark,
                        background: 'none',
                        color: color.dark,
                    },
                    this.style,
                    style
                )}
                {...props}
            >
                {children}
            </BaseButton>
        );
    }
}

Button.propTypes = {
    variant: PropTypes.string,
};

export default withTheme(Button);
