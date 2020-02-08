import React from 'react';
import PropTypes, { func } from 'prop-types';
import mergeStyles from 'utils/mergeStyles';
import { withTheme } from 'components/Theme';
import BaseButton from 'shared/Button';

function defaultStyle(color) {
    return {
        borderColor: color,
        background: 'none',
        color: color,
    };
}

class Button extends React.Component {
    render() {
        const { children, theme, variant, style, ...props } = this.props;

        const color = theme.colors[variant] || theme.foreground;

        return (
            <BaseButton
                hover={defaultStyle(color.light)}
                style={mergeStyles(
                    defaultStyle(color.dark),
                    {
                        transition: 'all 150ms ease-in-out',
                        borderWidth: 1,
                        borderStyle: 'solid',
                    },
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
