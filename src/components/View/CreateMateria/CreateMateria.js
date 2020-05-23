import React, { Component } from 'react';
import fetchAPI from 'util/fetchAPI';
import PropTypes from 'prop-types';

import withAuth from 'util/withAuth';
import withToast from 'util/withToast';

import View from 'components/View';
import Typography from 'components/Typography';
import TextField from 'components/TextField';
import Button from 'components/Button';

class CreateMateria extends Component {
    state = {
        materia: '',
    };

    onSubmit = event => {
        event.preventDefault();

        fetchAPI('/materias', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: this.state.materia }),
        })
            .then(universidad =>
                this.props.toast.success(
                    `La materia '${universidad.name}' fue añadida exitosamente.`
                )
            )
            .catch(error => this.props.toast.error(error.message));
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <View>
                <Typography component="h1">Añadir nueva materia</Typography>
                <form onSubmit={this.onSubmit}>
                    <TextField
                        required
                        placeholder="Materia"
                        label="Materia"
                        name="materia"
                        onChange={this.onChange}
                        value={this.state.materia}
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
                </form>
            </View>
        );
    }
}

CreateMateria.propTypes = {
    toast: PropTypes.any,
};

export default withToast(withAuth(CreateMateria));
