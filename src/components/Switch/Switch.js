import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withTheme } from 'components/Theme';
import mergeStyles from 'util/mergeStyles';

const Input = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
`;

const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: ${props => `${props.borderRadius}px`};
    ${props => props.checked && `background-color: ${props.color};`};

    :before {
        position: absolute;
        content: '';
        ${props => `
            height: ${props.size - 8}px;
            width: ${props.size - 8}px;
        `}
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 50%;
        ${props =>
            props.checked &&
            `
                    box-shadow: 0 0 1px ${props.color};
                    transform: translateX(${props.translate - props.size}px);
            `}
    }
`;

class Switch extends React.Component {
    styles = {
        root: {},
        switch: {
            position: 'relative',
            display: 'inline-block',
        },
    };

    state = {
        checked: false,
    };

    render() {
        const {
            theme,
            style,
            styles,
            variant,
            width,
            height,
            checked,
            ...props
        } = this.props;

        const color = theme.colors[variant] || {};

        return (
            <div style={mergeStyles(this.styles.root, styles.root, style)}>
                <label
                    style={mergeStyles(
                        { width, height },
                        this.styles.switch,
                        styles.switch
                    )}
                >
                    <Input type="checkbox" checked={checked} {...props} />
                    <Slider
                        color={color.light}
                        checked={checked}
                        translate={width}
                        size={height}
                        borderRadius={height}
                    />
                </label>
            </div>
        );
    }
}

Switch.defaultProps = {
    styles: {},
    width: 60,
    height: 32,
    variant: 'blue',
    onChange: () => {},
};

Switch.propTypes = {
    theme: PropTypes.object.isRequired,
    styles: PropTypes.object,
    variant: PropTypes.string,
    width: PropTypes.any,
    height: PropTypes.any,
    onChange: PropTypes.func,
    style: PropTypes.object,
    checked: PropTypes.bool,
};

export default withTheme(Switch);
