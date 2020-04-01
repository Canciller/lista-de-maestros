import React from 'react';
import Typography from 'components/Typography';
import TextField from 'components/TextField';

class Register extends React.Component {
    render() {
        return (
            <div>
                <Typography component="h1">Register</Typography>
                <div
                    style={{
                        height: 1000
                    }}
                >
                    <TextField
                        label="Name"
                        placeholder="Name"
                        id="register_name"
                    />
                </div>
            </div>
        );
    }
}

export default Register;
