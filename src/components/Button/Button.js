import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withTheme } from 'components/Theme';
import { Link } from 'react-router-dom';

const BaseButton = styled(Link)`
    display: inline-block;
    text-decoration: none;
    font-size: 1em;
    white-space: nowrap;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    transition: all 240ms ease-in-out;
    border-width: 1px;
    border-style: solid;
    border-radius: 0;
    padding: 5px 8px;
    border-color: ${({ color }) => color.dark};
    color: ${({ color }) => color.dark};
    background: none;
    &:active,
    &:focus {
        border-width: 1px;
        border-style: solid;
    }
    &:hover,
    &:active {
        border-color: ${({ color }) => color.light};
        box-shadow: inset ${({ width }) => width}px 0 0 0
            ${({ color }) => color.light};
        color: ${({ color }) => color.foreground};
    }
`;

class Button extends React.Component {
    state = {};

    constructor() {
        super();
        this.ref = React.createRef();
    }

    componentDidMount() {
        if (this.ref && this.ref.current)
            this.setState({
                width: this.ref.current.clientWidth + 10,
            });
    }

    render() {
        const { theme, variant, children, ...props } = this.props;

        return (
            <BaseButton
                to=""
                {...props}
                ref={this.ref}
                color={theme.colors[variant] || theme.foreground}
                width={this.state.width}
            >
                {children}
            </BaseButton>
        );
    }
}

Button.propTypes = {
    theme: PropTypes.object.isRequired,
    variant: PropTypes.string,
};

export default withTheme(Button);
