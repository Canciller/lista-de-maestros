import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { withTheme } from 'components/Theme';
import mergeStyles from 'utils/mergeStyles';
import BaseIconButton from 'shared/IconButton';
import { faChargingStation } from '@fortawesome/free-solid-svg-icons';

class IconButton extends Component {
    render() {
        const { style, hover, theme, children, ...props } = this.props;

        return (
            <BaseIconButton
                hover={mergeStyles({ color: theme.foreground.light }, hover)}
                style={mergeStyles(
                    {
                        color: theme.foreground.dark,
                        transition: 'all 150ms ease-in-out',
                    },
                    style
                )}
                {...props}
            >
                {children}
            </BaseIconButton>
        );
    }
}

export default withTheme(IconButton);
