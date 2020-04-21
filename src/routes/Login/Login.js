import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'components/Theme';
import { withUser } from 'components/User';
import Typography from 'components/Typography';
import TextField from 'components/TextField';
import Button from 'components/Button';
import View from 'components/View';
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
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(json => {
                if (json.error) throw new Error(json.error.message);
                localStorage.setItem('token', json.token);
                this.props.user.signIn({
                    username: json.username,
                    role: json.role,
                });
            })
            .catch(err => {
                console.error(err);
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
                        label="Email or Username"
                        placeholder="username"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChange}
                        required
                    />
                    <TextField
                        label="Password"
                        placeholder="password"
                        name="password"
                        id="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        required
                    />
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
