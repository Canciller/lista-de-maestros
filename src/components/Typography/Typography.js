import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'components/Theme';
import styled from 'styled-components';

class Typography extends React.Component {
    render() {
        const { theme, component, children, color, ...props } = this.props;

        const fontColor = theme.colors[color] || theme.foreground;

        const BaseTypography = styled(component)`
            color: ${fontColor.normal};
            transition: all 150ms ease-in-out;
            margin: 0;
        `;

        return <BaseTypography {...props}>{children}</BaseTypography>;
    }
}

Typography.defaultProps = {
    component: 'p',
};

Typography.propTypes = {
    theme: PropTypes.object.isRequired,
    color: PropTypes.string,
    component: PropTypes.any,
    children: PropTypes.any,
};

export default withTheme(Typography);
