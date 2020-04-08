import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'components/Theme';
import styled from 'styled-components';

class Typography extends React.Component {
    render() {
        const { theme, component, children, ...props } = this.props;

        const BaseTypography = styled(component)`
            color: ${theme.foreground.normal};
            transition: all 150ms ease-in-out;
        `;

        return <BaseTypography {...props}>{children}</BaseTypography>;
    }
}

Typography.defaultProps = {
    component: 'p',
};

Typography.propTypes = {
    theme: PropTypes.object.isRequired,
    component: PropTypes.any,
    children: PropTypes.any,
};

export default withTheme(Typography);
