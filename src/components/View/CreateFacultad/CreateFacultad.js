import React, { Component } from 'react';
import fetchAPI from 'util/fetchAPI';
import PropTypes from 'prop-types';

import withAuth from 'util/withAuth';
import withToast from 'util/withToast';

import View from 'components/View';
import Typography from 'components/Typography';
import TextField from 'components/TextField';
import Button from 'components/Button';

class CreateFacultad extends Component {
    state = {
        facultad: '',
        universidad: '',
    };

    onSubmit = event => {
        event.preventDefault();

        fetchAPI('/facultades', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.facultad,
                universidad: this.state.universidad,
            }),
        })
            .then(facultad =>
                this.props.toast.success(
                    `La facultad '${facultad.name}' fue añadida exitosamente.`
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
                <Typography component="h1">Añadir nueva facultad</Typography>
                <form onSubmit={this.onSubmit}>
                    <TextField
                        required
                        placeholder="Universidad"
                        label="Universidad"
                        name="universidad"
                        onChange={this.onChange}
                        value={this.state.universidad}
                    />
                    <TextField
                        required
                        placeholder="Facultad"
                        label="Facultad"
                        name="facultad"
                        onChange={this.onChange}
                        value={this.state.facultad}
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

CreateFacultad.propTypes = {
    toast: PropTypes.any,
};

export default withToast(withAuth(CreateFacultad));
