import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'components/Theme';
import Typography from 'components/Typography';
import TextField from 'components/TextField';
import Button from 'components/Button';
import View from 'components/View';
import './Login.scss';

class Login extends React.Component {
    state = {};

    onChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value,
        });
    };

    onSubmit = event => {
        event.preventDefault();
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
                        variant="blue"
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
};

export default withTheme(Login);
