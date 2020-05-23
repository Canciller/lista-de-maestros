import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withTheme } from 'components/Theme';
import classNames from 'classnames';
import Typography from 'components/Typography';

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
    };

    componentDidUpdate(prevProps) {
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
            ...props
        } = this.props;

        const hasError = error || this.state.requiredError;
        const hasErrorMessage = this.state.requiredError
            ? requiredMessage
            : error
            ? errorMessage
            : '';

        let baseColor = theme.colors[variant] || theme.foreground;
        baseColor = (hasError && theme.colors['red']) || baseColor;

        return (
            <div
                className={classNames('TextField-root', className)}
                style={style}
            >
                <Input
                    className="TextField-input"
                    id={id}
                    required={required}
                    baseColor={baseColor}
                    placeholder={placeholder}
                    {...props}
                />
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
    requiredMessage: PropTypes.string,
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
    value: PropTypes.string,
};

export default withTheme(TextField);
