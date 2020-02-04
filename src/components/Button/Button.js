import React from 'react';
import PropTypes from 'prop-types';
import mergeStyles from 'utils/mergeStyles';
import { withTheme } from 'components/Theme';
import BaseButton from 'shared/Button';

class Button extends React.Component {
    render() {
        const {
            children,
            theme,
            colors,
            variant,
            style,
            ...props
        } = this.props;

        const button = variant ? theme.button[variant] : theme.button;
        const hover = button && button.hover;

        return (
            <BaseButton
                hover={hover}
                style={mergeStyles(button, style)}
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
