import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'components/IconButton';
import { withTheme, ThemeContext } from 'components/Theme';

class Fab extends React.Component {
    render() {
        const { theme, variant, ...props } = this.props;

        return (
            <IconButton
                fontColor={theme.background}
                background={theme.colors[variant] || theme.foreground}
                {...props}
            />
        );
    }
}

Fab.propTypes = {
    theme: PropTypes.object.isRequired,
    variant: PropTypes.string,
};

export default withTheme(Fab);
