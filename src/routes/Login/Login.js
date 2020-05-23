import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'components/Theme';
import { withUser } from 'components/User';
import withToast from 'util/withToast';
import fetchAPI from 'util/fetchAPI';

import Typography from 'components/Typography';
import TextField from 'components/TextField';
import Button from 'components/Button';
import View from 'components/View';

import Routes from 'config/Routes';
import { LoginStrings } from 'config/Strings';

import './Login.scss';

class Login extends React.Component {
    state = {
        username: '',
        password: '',
    };

    onChange = event => {
        const { value, name } = event.target;

        this.setState({
            [name]: value,
        });
    };

    onSubmit = event => {
        event.preventDefault();

        fetchAPI('/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            }),
        })
            .then(user => {
                this.props.user.signIn(user, () => {
                    this.props.toast.success('Ingreso exitoso.');
                    this.props.history.push(Routes.home.path);
                });
            })
            .catch(error => {
                this.setState(
                    {
                        usernameError: false,
                        passwordError: false,
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
            <View className="Login-root">
                <form
                    onSubmit={this.onSubmit}
                    style={{
                        paddingBottom: this.props.theme.layout.header.height,
                    }}
                >
                    <Typography component="h1">Ingresar</Typography>
                    <TextField
                        value={this.state.username}
                        onChange={this.onChange}
                        error={this.state.usernameError}
                        errorMessage={this.state.usernameErrorMessage}
                        requiredMessage={LoginStrings.username.required}
                        label="Email o nombre de usuario"
                        placeholder="username"
                        name="username"
                        id="username"
                        required
                    />
                    <TextField
                        value={this.state.password}
                        onChange={this.onChange}
                        error={this.state.passwordError}
                        errorMessage={this.state.passwordErrorMessage}
                        requiredMessage={LoginStrings.password.required}
                        label="Contraseña"
                        placeholder="password"
                        name="password"
                        id="password"
                        type="password"
                        required
                    />
                    <Button
                        className="Login-button"
                        type="submit"
                        fullWidth
                        variant="green"
                        style={{
                            marginTop: 20,
                        }}
                    >
                        Ingresar
                    </Button>
                </form>
            </View>
        );
    }
}

Login.propTypes = {
    theme: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    toast: PropTypes.object.isRequired,
    history: PropTypes.any.isRequired,
};

export default withToast(withUser(withTheme(Login)));
