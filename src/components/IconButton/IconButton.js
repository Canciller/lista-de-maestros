import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withTheme } from 'components/Theme';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BaseIconButton = styled.span`
    text-decoration: none;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    transition: all 150ms ease-in-out;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    font-size: ${({ size }) => size};
    height: ${({ dimension }) => dimension + 'px'};
    width: ${({ dimension }) => dimension + 'px'};
    color: ${({ color }) => color.dark};
    &:hover {
        background: rgba(0, 0, 0, 0.1);
    }
`;

class IconButton extends Component {
    state = {};

    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    componentDidMount() {
        if (this.ref && this.ref.current)
            this.setState({
                dimension: this.ref.current.clientHeight * 1.8,
            });
    }

    render() {
        const { theme, icon, size, variant, className, ...props } = this.props;

        return (
            <BaseIconButton
                ref={this.ref}
                color={theme.colors[variant] || theme.foreground}
                className={classNames(className)}
                size={size}
                dimension={this.state.dimension}
                {...props}
            >
                <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
            </BaseIconButton>
        );
    }
}

IconButton.defaultProps = {
    size: '1.5em',
};

IconButton.propTypes = {
    theme: PropTypes.object.isRequired,
    icon: PropTypes.any.isRequired,
    size: PropTypes.any,
    variant: PropTypes.string,
};

export default withTheme(IconButton);
