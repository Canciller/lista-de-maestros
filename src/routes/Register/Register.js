import React from 'react';
import Typography from 'components/Typography';
import TextField from 'components/TextField';
import Button from 'components/Button';

class Register extends React.Component {
    render() {
        return (
            <div>
                <Typography component="h1">Register</Typography>
                <div>
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
                        style={{
                            width: '100%',
                            marginTop: 20,
                            paddingTop: 10,
                            paddingBottom: 10,
                            textAlign: 'center',
                        }}
                        variant="green"
                    >
                        Register
                    </Button>
                </div>
            </div>
        );
    }
}

export default Register;
