import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'components/Theme';
import withToast from 'util/withToast';
import fetchAPI from 'util/fetchAPI';

import Typography from 'components/Typography';
import TextField from 'components/TextField';
import Button from 'components/Button';
import View from 'components/View';

import Routes from 'config/Routes';
import { RegisterStrings } from 'config/Strings';

import './Register.scss';

class Register extends React.Component {
    state = {
        username: '',
        email: '',
        password: '',
        repeatPassword: '',
    };

    onChange = event => {
        const { value, name } = event.target;

        let errors = {};

        switch (name) {
            case 'repeatPassword':
                if (value != this.state.password) {
                    errors['repeatPasswordError'] = true;
                    errors['repeatPasswordErrorMessage'] =
                        RegisterStrings.repeatPassword.noMatch;
                } else {
                    errors['repeatPasswordError'] = false;
                }
                break;
            case 'password':
                if (value != this.state.repeatPassword) {
                    errors['repeatPasswordError'] = true;
                    errors['repeatPasswordErrorMessage'] =
                        RegisterStrings.repeatPassword.noMatch;
                } else {
                    errors['repeatPasswordError'] = false;
                }
                break;
        }

        this.setState({
            [name]: value,
            ...errors,
        });
    };

    onSubmit = event => {
        event.preventDefault();

        fetchAPI('/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                repeatPassword: this.state.repeatPassword,
            }),
        })
            .then(() => {
                this.props.toast.success(
                    'Registro exitoso redirigiendo a pagina de ingreso.'
                );
                this.props.history.push(Routes.login.path);
            })
            .catch(error => {
                this.setState(
                    {
                        usernameError: false,
                        emailError: false,
                        passwordError: false,
                        repeatPasswordError: false,
                    },
                    () => {
                        if (error.message instanceof Object)
                            Object.keys(error.message).forEach(key =>
                                this.setState({
                                    [`${key}Error`]: true,
                                    [`${key}ErrorMessage`]: error.message[key],
                                })
                            );
                    }
                );

                this.props.toast.error(error.message);
            });
    };

    render() {
        return (
            <View className="Register-root">
                <form
                    onSubmit={this.onSubmit}
                    style={{
                        paddingBottom: this.props.theme.layout.header.height,
                    }}
                >
                    <Typography component="h1">Registrarse</Typography>
                    <TextField
                        onChange={this.onChange}
                        value={this.state.username}
                        error={this.state.usernameError}
                        errorMessage={this.state.usernameErrorMessage}
                        requiredMessage={RegisterStrings.username.required}
                        label="Nombre de Usuario"
                        placeholder="username"
                        name="username"
                        id="username"
                        required
                    />
                    <TextField
                        value={this.state.email}
                        onChange={this.onChange}
                        error={this.state.emailError}
                        errorMessage={this.state.emailErrorMessage}
                        requiredMessage={RegisterStrings.email.required}
                        placeholder="email"
                        label="Email"
                        name="email"
                        id="email"
                        required
                    />
                    <TextField
                        value={this.state.password}
                        onChange={this.onChange}
                        error={this.state.passwordError}
                        errorMessage={this.state.passwordErrorMessage}
                        requiredMessage={RegisterStrings.password.required}
                        label="Contraseña"
                        placeholder="password"
                        name="password"
                        id="password"
                        type="password"
                        required
                    />
                    <TextField
                        value={this.state.repeatPassword}
                        onChange={this.onChange}
                        error={this.state.repeatPasswordError}
                        errorMessage={this.state.repeatPasswordErrorMessage}
                        label="Repetir Contraseña"
                        placeholder="repeatPassword"
                        name="repeatPassword"
                        id="repeatPassword"
                        type="password"
                        required
                    />
                    <Button
                        className="Register-button"
                        type="submit"
                        fullWidth
                        variant="blue"
                        style={{
                            marginTop: 20,
                        }}
                    >
                        Registrarse
                    </Button>
                </form>
            </View>
        );
    }
}

Register.propTypes = {
    theme: PropTypes.object.isRequired,
    toast: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};

export default withToast(withTheme(Register));
