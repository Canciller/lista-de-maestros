import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { withTheme } from 'components/Theme';
import mergeStyles from 'utils/mergeStyles';
import BaseIconButton from 'shared/IconButton';

class IconButton extends Component {
    render() {
        const { style, hover, theme, children, ...props } = this.props;

        return (
            <BaseIconButton
                hover={mergeStyles(
                    {
                        transition: 'all 150ms ease-in-out',
                        background: 'rgba(0, 0, 0, 0.1)',
                    },
                    hover
                )}
                style={mergeStyles(
                    {
                        padding: 5,
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
