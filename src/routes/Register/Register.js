import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'components/Theme';
import Typography from 'components/Typography';
import TextField from 'components/TextField';
import Button from 'components/Button';
import View from 'components/View';
import './Register.scss';

class Register extends React.Component {
    onSubmit = event => {
        event.preventDefault();
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
                    <Typography component="h1">Register</Typography>
                    <TextField
                        label="Username"
                        placeholder="Name"
                        id="register_name"
                        required
                    />
                    <TextField
                        label="Email"
                        placeholder="Email"
                        id="register_email"
                        required
                    />
                    <TextField
                        label="Password"
                        placeholder="Password"
                        id="register_password"
                        type="password"
                        required
                    />
                    <TextField
                        label="Repeat Password"
                        placeholder="Password"
                        id="register_repeat_password"
                        type="password"
                        required
                    />
                    <Button
                        className="Register-button"
                        type="submit"
                        fullWidth
                        variant="green"
                    >
                        Register
                    </Button>
                </form>
            </View>
        );
    }
}

Register.propTypes = {
    theme: PropTypes.object.isRequired,
};

export default withTheme(Register);
