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
    }

    onChange = event => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    }

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
                        gender: this.state.gender
                    }}
                    onSuccess={maestro => {
                        console.log(maestro);
                    }}
                    failureMessage={MaestroStrings.create.failure}
                >
                    <TextField
                        onChange={this.onChange}
                        value={this.state.firstname}
                        label="Nombre"
                        placeholder="Nombre"
                        name="firstname"
                        required
                    />
                    <TextField
                        onChange={this.onChange}
                        value={this.state.lastname}
                        label="Apellido"
                        placeholder="Apellido"
                        name="lastname"
                        required
                    />
                    <TextField
                        onChange={this.onChange}
                        value={this.state.degree}
                        label="Título"
                        placeholder="Título"
                        name="degree"
                        required
                    />
                    <TextField
                        onChange={this.onChange}
                        value={this.state.gender}
                        label="Género"
                        placeholder="Género"
                        name="gender"
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
