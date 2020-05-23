import React, { Component } from 'react';
import withAuth from 'util/withAuth';
import withToast from 'util/withToast';
import { withTheme } from 'components/Theme';
import fetchAPI from 'util/fetchAPI';

import Typography from 'components/Typography';
import Button from 'components/Button';
import TextField from 'components/TextField';
import View from 'components/View';
import Form from 'components/Form';

import { MaestroStrings } from 'config/Strings';

class CreateMaestro extends Component {
    state = {
        firstname: '',
        lastname: '',
        degree: '',
        gender: '',
        facultad: '',
    };

    onChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        });
    };

    render() {
        return (
            <View>
                <Typography component="h1">Añadir nuevo maestro</Typography>
                <Form
                    action="/maestros"
                    body={{
                        firstname: this.state.firstname,
                        lastname: this.state.lastname,
                        degree: this.state.degree,
                        gender: this.state.gender,
                        facultad: this.state.facultad,
                    }}
                    onSubmit={callback =>
                        this.setState(
                            {
                                firstnameError: false,
                                lastnameError: false,
                                degreeError: false,
                                genderError: false,
                                facultadError: false,
                            },
                            callback
                        )
                    }
                    onFailure={error => {
                        error.message instanceof Object &&
                            Object.keys(error.message).forEach(key =>
                                this.setState({
                                    [`${key}Error`]: true,
                                    [`${key}ErrorMessage`]: error.message[key],
                                })
                            );
                    }}
                    failureMessage={MaestroStrings.create.failure}
                    successMessage={MaestroStrings.create.success}
                >
                    <TextField
                        onChange={this.onChange}
                        value={this.state.firstname}
                        error={this.state.firstnameError}
                        errorMessage={this.state.firstnameErrorMessage}
                        label="Nombre"
                        placeholder="Nombre"
                        name="firstname"
                        required
                    />
                    <TextField
                        onChange={this.onChange}
                        value={this.state.lastname}
                        error={this.state.lastnameError}
                        errorMessage={this.state.lastnameErrorMessage}
                        label="Apellido"
                        placeholder="Apellido"
                        name="lastname"
                        required
                    />
                    <TextField
                        onChange={this.onChange}
                        value={this.state.degree}
                        error={this.state.degreeError}
                        errorMessage={this.state.degreeErrorMessage}
                        label="Título"
                        placeholder="Título"
                        name="degree"
                        required
                    />
                    <TextField
                        onChange={this.onChange}
                        value={this.state.gender}
                        error={this.state.genderError}
                        errorMessage={this.state.genderErrorMessage}
                        label="Género"
                        placeholder="Género"
                        name="gender"
                        required
                    />
                    <TextField
                        onChange={this.onChange}
                        value={this.state.facultad}
                        error={this.state.facultadError}
                        errorMessage={this.state.facultadErrorMessage}
                        label="Facultad"
                        placeholder="Facultad"
                        name="facultad"
                        required
                    />
                    <Button
                        variant="green"
                        style={{
                            marginTop: 20,
                        }}
                        fullWidth
                    >
                        Añadir
                    </Button>
                </Form>
            </View>
        );
    }
}

export default withAuth(withTheme(CreateMaestro));
