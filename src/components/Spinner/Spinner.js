import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withTheme } from 'components/Theme';
import './Spinner.scss';

const BaseSpinner = styled.div`
    color: ${({ color }) => color.normal};
    &:after,
    &:before {
        background: ${({ background }) => background};
    }
`;

class Spinner extends React.Component {
    render() {
        const { theme, color, background, className, ...props } = this.props;

        return (
            <BaseSpinner
                className={classNames('Spinner-root', className)}
                color={theme.colors[color] || theme.foreground}
                background={background || theme.background.dark}
                {...props}
            />
        );
    }
}

Spinner.propTypes = {
    theme: PropTypes.object.isRequired,
    color: PropTypes.string,
    background: PropTypes.string,
    className: PropTypes.string,
};

export default withTheme(Spinner);
