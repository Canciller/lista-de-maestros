import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import mergeStyles from 'utils/mergeStyles';
import { withTheme } from 'components/Theme';

const Root = styled.div`
    position: relative;
`;

const Input = styled.input`
    border: none;
    width: 100%;
    outline: none;
    padding: 10px;
    padding-top: 15px;
    padding-bottom: 7px;
    font-size: 12px;
    background: ${props => props.background};
    transition: 0.25s;
    color: ${props => props.color};
    border-bottom-color: ${props => props.borderColor.normal};
    border-bottom-width: 1px;
    border-bottom-style: solid;

    :hover,
    :focus {
        border-bottom-color: ${props => props.borderColor.active};
    }
`;

const Placeholder = styled.span`
    position: absolute;
    left: 10px;
    top: 12px;
    font-size: 12px;
    user-select: none;
    color: ${props => props.color.normal};
    transition: all 0.2s;

    ${props => {
        const active = `{
            top: 2px;
            font-size: 10px;
            color: ${props.color.active};
        }`;

        return `
            ${Root}:hover & ${active}
            ${(props.focus || props.active) && active}
        `;
    }};
`;

const Helper = styled.span`
    font-size: 10px;
    color: ${props => props.color};
    margin-left: 10px;
`;

const Icon = styled(FontAwesomeIcon)`
    position: absolute;
    right: 10px;
    top: 12px;
    color: ${props => props.color.normal};
    transition: all 0.2s;
    font-size: 12px;

    ${props => {
        const active = `{
            color: ${props.color.active};
        }`;

        return `
            ${Root}:hover & ${active}
            ${(props.focus || props.active) && active}
        `;
    }};
`;

class TextField extends React.Component {
    state = {
        focus: false,
        active: false,
    };

    onFocus = e => {
        this.setState({ focus: true }, () => this.props.onFocus(e));
    };

    onBlur = e => {
        this.setState({ focus: false }, () => this.props.onBlur(e));
    };

    onChange = e => {
        this.setState({ active: e.target.value !== '' }, () =>
            this.props.onChange(e)
        );
    };

    render() {
        const {
            theme,
            variant,
            helper,
            placeholder,
            icon,
            onFocus,
            onBlur,
            onChange,
            style,
            ...props
        } = this.props;
        const { focus, active } = this.state;

        const variantColor = theme.colors[variant] || {};

        return (
            <Root style={mergeStyles(style)}>
                <Input
                    borderColor={{
                        normal: theme.foreground.light,
                        active: variantColor.light,
                    }}
                    color={theme.foreground.dark}
                    background={theme.background.light}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onChange={this.onChange}
                    {...props}
                />
                {placeholder && (
                    <Placeholder
                        focus={focus}
                        active={active}
                        color={{
                            normal: theme.foreground.light,
                            active: variantColor.light,
                        }}
                    >
                        {placeholder}
                    </Placeholder>
                )}
                {helper && (
                    <Helper color={theme.foreground.light}>{helper}</Helper>
                )}
                <Icon
                    size="lg"
                    icon={icon}
                    color={{
                        normal: theme.foreground.light,
                        active: variantColor.light,
                    }}
                    focus={focus}
                    active={active}
                />
            </Root>
        );
    }
}

TextField.defaultProps = {
    variant: 'blue',
    onChange: e => {},
    onBlur: e => {},
    onFocus: e => {},
};

TextField.propTypes = {
    theme: PropTypes.object.isRequired,
    variant: PropTypes.string,
};

export default withTheme(TextField);
