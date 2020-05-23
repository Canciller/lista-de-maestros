import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withTheme } from 'components/Theme';
import classNames from 'classnames';
import Typography from 'components/Typography';
import Icon from 'components/Icon';
import {
    faTimes,
    faChevronDown,
    faChevronUp,
} from '@fortawesome/free-solid-svg-icons';

import './TextField.scss';

const Input = styled.input`
    ${({ baseColor }) => `
        color: ${baseColor.light};
        border-color: ${baseColor.light};

        &:placeholder-shown {
            border-color: ${baseColor.dark};
        }

        &:hover, &:focus {
            color: ${baseColor.normal};
            border-color: ${baseColor.light};
        }
    `}
`;

const Label = styled.label`
    ${({ baseColor }) => `
        color: ${baseColor.light};

        ${Input}:placeholder-shown ~ & {
            color: ${baseColor.dark};
        }

        ${Input}:focus ~ &,
        ${Input}:hover ~ & {
            color: ${baseColor.light};
        }
    `}
`;

class TextField extends React.Component {
    state = {
        requiredError: false,
        currentValue: '',
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.value != this.props.value) {
            if (
                this.props.required &&
                typeof this.props.value === 'string' &&
                this.props.value.length === 0 &&
                !this.state.requiredError
            ) {
                this.setState({ requiredError: true });
            } else {
                this.setState({ requiredError: false });
            }
        }

        if (!prevProps.giveFocus && this.props.giveFocus)
            this.input.current.focus();

        if (
            this.state.requiredError != prevState.requiredError ||
            prevProps.error != this.props.error
        ) {
            if (this.hasError()) {
                this.props.onError();
            } else {
                this.props.onFixed();
            }
        }

        if (prevProps.value != this.props.value) {
            this.setState({ currentValue: this.props.value });
        }
    }

    componentDidMount() {
        if (this.props.initialValue)
            this.setState({ currentValue: this.props.initialValue }, () =>
                this.props.onChange({
                    target: {
                        name: this.props.name,
                        value: this.props.initialValue,
                    },
                })
            );
        else this.setState({ currentValue: this.props.value });
    }

    onOpen = () => this.setState({ open: !this.state.open }, this.props.onOpen);

    hasError = () => this.props.error || this.state.requiredError;

    constructor() {
        super();

        this.input = React.createRef();
    }

    render() {
        const {
            theme,
            variant,
            id,
            label,
            style,
            className,
            required,
            placeholder,
            error,
            errorMessage,
            requiredMessage,
            onClear,
            onOpen,
            open,
            children,
            hideClearIcon,
            onError,
            onFixed,
            value,
            initialValue,
            ...props
        } = this.props;

        const { currentValue } = this.state;

        const hasError = this.hasError();
        let hasErrorMessage = '';

        if (this.state.requiredError) hasErrorMessage = requiredMessage;
        else if (error) hasErrorMessage = errorMessage;

        let baseColor = theme.colors[variant] || theme.foreground;
        baseColor = (hasError && theme.colors['red']) || baseColor;

        const iconStyle = {
            cursor: 'pointer',
            color: baseColor.normal,
            margin: '0 8px',
        };

        return (
            <div
                className={classNames('TextField-root', className)}
                style={style}
            >
                <div
                    style={{
                        display: 'flex',
                    }}
                >
                    <Input
                        className="TextField-input"
                        id={id}
                        required={required}
                        baseColor={baseColor}
                        placeholder={placeholder}
                        type="text"
                        {...props}
                        value={currentValue}
                        ref={this.input}
                    />
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            borderBottom: '1px solid',
                            borderColor: baseColor.normal,
                        }}
                    >
                        {!hideClearIcon && onClear && (
                            <Icon
                                onClick={onClear}
                                icon={faTimes}
                                size="0.8em"
                                style={iconStyle}
                            />
                        )}
                        {onOpen && (
                            <Icon
                                onClick={this.onOpen}
                                icon={!open ? faChevronDown : faChevronUp}
                                size="1.2em"
                                style={{
                                    ...iconStyle,
                                    marginLeft: 0,
                                }}
                            />
                        )}
                    </div>
                    <Label
                        baseColor={baseColor}
                        className="TextField-label"
                        htmlFor={id}
                    >
                        <span>{label}</span>
                        {!required && (
                            <span className="TextField-optional">Opcional</span>
                        )}
                    </Label>
                </div>
                {children}
                {hasError && hasErrorMessage.length !== 0 && (
                    <Typography
                        color="red"
                        style={{
                            marginTop: 4,
                            fontSize: '0.8em',
                        }}
                    >
                        {hasErrorMessage}
                    </Typography>
                )}
            </div>
        );
    }
}

TextField.defaultProps = {
    errorMessage: '',
    requiredMessage: '',
    open: false,
    hideCleanIcon: false,
    giveFocus: false,
    onError() {},
    onFixed() {},
    onChange() {},
};

TextField.propTypes = {
    theme: PropTypes.object.isRequired,
    id: PropTypes.string,
    variant: PropTypes.string,
    label: PropTypes.any.isRequired,
    placeholder: PropTypes.string.isRequired,
    style: PropTypes.object,
    className: PropTypes.string,
    required: PropTypes.bool,
    requiredMessage: PropTypes.any,
    error: PropTypes.bool,
    errorMessage: PropTypes.any,
    value: PropTypes.string,
    onClear: PropTypes.func,
    onOpen: PropTypes.func,
    open: PropTypes.bool,
    clear: PropTypes.bool,
    hideClearIcon: PropTypes.bool,
    giveFocus: PropTypes.bool,
    children: PropTypes.any,
    onError: PropTypes.func,
    onFixed: PropTypes.func,
    initialValue: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string,
};

export default withTheme(TextField);
