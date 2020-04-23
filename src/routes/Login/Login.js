import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'components/Theme';
import { withUser } from 'components/User';
import Typography from 'components/Typography';
import TextField from 'components/TextField';
import Button from 'components/Button';
import View from 'components/View';
import { Redirect } from 'react-router-dom';
import sentenceCase from 'util/sentenceCase';
import './Login.scss';
import Config from 'Config';

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

        fetch(`${Config.apiUrl}/auth/login`, {
            method: 'POST',
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        })
            .then(res => res.json())
            .then(json => {
                if (json.error) throw new Error(json.error.message);
                this.props.user.signIn({
                    username: json.username,
                    role: json.role,
                });
            })
            .catch(error => this.setState({ error }));
    };

    render() {
        if (this.props.user.isLoggedIn()) return <Redirect exact to="/" />;

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
                        label="Email o Nombre de Usuario"
                        placeholder="username"
                        name="username"
                        id="username"
                        value={this.state.username}
                        onChange={this.onChange}
                        required
                    />
                    <TextField
                        label="Contraseña"
                        placeholder="password"
                        name="password"
                        id="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        required
                    />
                    <Typography color="red" className="Login-error">
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
                        className="Login-button"
                        type="submit"
                        fullWidth
                        variant="green"
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
    history: PropTypes.any,
};

export default withUser(withTheme(Login));
