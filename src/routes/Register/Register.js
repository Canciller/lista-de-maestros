import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'components/Theme';
import sentenceCase from 'util/sentenceCase';
import Typography from 'components/Typography';
import TextField from 'components/TextField';
import Button from 'components/Button';
import View from 'components/View';
import Config from 'Config';
import Routes from 'routes';
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
        this.setState({
            [name]: value,
        });
    };

    onSubmit = event => {
        event.preventDefault();

        fetch(`${Config.apiUrl}/auth/register`, {
            method: 'POST',
            body: JSON.stringify({
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                repeatPassword: this.state.repeatPassword,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(json => {
                if (json.error) throw new Error(json.error.message);
                this.props.history.push(Routes.login.path);
            })
            .catch(error => {
                this.setState({ error });
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
                        label="Nombre de Usuario"
                        placeholder="username"
                        name="username"
                        id="username"
                        required
                    />
                    <TextField
                        value={this.state.email}
                        onChange={this.onChange}
                        label="Email"
                        placeholder="email"
                        name="email"
                        id="email"
                        required
                    />
                    <TextField
                        value={this.state.password}
                        onChange={this.onChange}
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
                        label="Repetir Contraseña"
                        placeholder="repeatPassword"
                        name="repeatPassword"
                        id="repeatPassword"
                        type="password"
                        required
                    />
                    <Typography color="red" className="Register-error">
                        {(this.state.error &&
                            sentenceCase(this.state.error.message)) || (
                            <span
                                style={{
                                    userSelect: 'none',
                                }}
                            >
                                &nbsp;
                            </span>
                        )}
                    </Typography>
                    <Button
                        className="Register-button"
                        type="submit"
                        fullWidth
                        variant="blue"
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
    history: PropTypes.any,
};

export default withTheme(Register);
