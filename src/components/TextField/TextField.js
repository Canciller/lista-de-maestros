import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withTheme } from 'components/Theme';
import classNames from 'classnames';
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
    render() {
        const {
            theme,
            variant,
            id,
            label,
            style,
            className,
            required,
            ...props
        } = this.props;

        const baseColor = theme.colors[variant] || theme.foreground;

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
            </div>
        );
    }
}

TextField.propTypes = {
    theme: PropTypes.object.isRequired,
    id: PropTypes.string,
    variant: PropTypes.string,
    label: PropTypes.any,
};

export default withTheme(TextField);
