import React, { Component } from 'react';
import fetchAPI from 'util/fetchAPI';
import PropTypes from 'prop-types';

import withAuth from 'util/withAuth';
import withToast from 'util/withToast';

import View from 'components/View';
import Typography from 'components/Typography';
import TextField from 'components/TextField';
import Button from 'components/Button';

import { withRouter } from 'react-router-dom';

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
            .then(materia => {
                this.props.toast.success(
                    `La materia '${materia.name}' fue añadida exitosamente.`
                );

                this.props.history.goBack();
            })
            .catch(error => this.props.toast.error(error.message));
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const { location } = this.props;
        console.log(location);
        const initialValues = location.state || {};

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
                        initialValue={initialValues.materia}
                    />
                    <div
                        style={{
                            marginTop: 20,
                            display: 'flex',
                        }}
                    >
                        <Button
                            type="button"
                            variant="red"
                            style={{
                                flex: 1,
                            }}
                            onClick={() => {
                                this.props.history.goBack();
                            }}
                        >
                            Cancelar
                        </Button>
                        <Button
                            type="submit"
                            variant="green"
                            style={{
                                marginLeft: 8,
                                flex: 1,
                            }}
                        >
                            Añadir
                        </Button>
                    </div>
                </form>
            </View>
        );
    }
}

CreateMateria.propTypes = {
    toast: PropTypes.any,
};

export default withRouter(withToast(withAuth(CreateMateria)));
