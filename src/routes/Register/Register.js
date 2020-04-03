import React from 'react';
import Typography from 'components/Typography';
import TextField from 'components/TextField';
import Button from 'components/Button';
import './Register.scss';

class Register extends React.Component {
    render() {
        return (
            <div className="Register-root">
                <div className="Register-form">
                    <Typography component="h1">Register</Typography>
                    <TextField
                        label="Username"
                        placeholder="Name"
                        id="register_name"
                    />
                    <TextField
                        label="Email"
                        placeholder="Email"
                        id="register_email"
                    />
                    <TextField
                        label="Password"
                        placeholder="Password"
                        id="register_password"
                        type="password"
                    />
                    <TextField
                        label="Repeat Password"
                        placeholder="Password"
                        id="register_repeat_password"
                        type="password"
                    />
                    <Button
                        fullWidth
                        variant="green"
                        style={{
                            marginTop: 20,
                            padding: '10px 0',
                        }}
                    >
                        Register
                    </Button>
                </div>
            </div>
        );
    }
}

export default Register;
