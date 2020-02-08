import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'components/Theme';
import mergeStyles from 'utils/mergeStyles';

class Typography extends React.Component {
    render() {
        const { theme, component, variant, style, size, children } = this.props;

        let Component = component;

        return (
            <Component
                style={mergeStyles(
                    {
                        fontSize: size,
                        color: theme.foreground.dark,
                    },
                    style
                )}
            >
                {children}
            </Component>
        );
    }
}

Typography.defaultProps = {
    component: 'p',
};

Typography.propTypes = {
    component: PropTypes.any,
    variant: PropTypes.string,
    theme: PropTypes.object,
};

export default withTheme(Typography);
