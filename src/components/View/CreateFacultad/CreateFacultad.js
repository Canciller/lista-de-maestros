import React, { Component } from 'react';
import fetchAPI from 'util/fetchAPI';
import PropTypes from 'prop-types';

import withAuth from 'util/withAuth';
import withToast from 'util/withToast';

import View from 'components/View';
import Typography from 'components/Typography';
import TextField from 'components/TextField';
import Button from 'components/Button';
import AutocompleteDatabase from 'components/AutocompleteDatabase';

import Routes from 'config/Routes';
import { withRouter } from 'react-router-dom';

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
            .then(facultad => {
                this.props.toast.success(
                    `La facultad '${facultad.name}' fue añadida exitosamente.`
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

        const initialValues = location.state || {};

        return (
            <View>
                <Typography component="h1">Añadir nueva facultad</Typography>
                <form onSubmit={this.onSubmit}>
                    <AutocompleteDatabase
                        required
                        placeholder="Universidad"
                        label="Universidad"
                        name="universidad"
                        onChange={this.onChange}
                        onSelect={universidad => this.setState({ universidad })}
                        hideClearIcon={true}
                        endpoint="/universidades"
                        getSuggestion={universidad => universidad.name}
                        initialValue={initialValues.universidad}
                        noSuggestionsMessage={
                            <Button
                                fullWidth
                                variant="blue"
                                style={{
                                    marginTop: 8,
                                }}
                                onClick={() => {
                                    this.props.history.push({
                                        pathname: Routes.createUniversidad.path,
                                        state: {
                                            universidad: this.state.universidad,
                                        },
                                    });
                                }}
                            >
                                Añadir universidad
                            </Button>
                        }
                    />
                    <TextField
                        required
                        placeholder="Facultad"
                        label="Facultad"
                        name="facultad"
                        onChange={this.onChange}
                        value={this.state.facultad}
                        initialValue={initialValues.facultad}
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
                            onClick={() => this.props.history.goBack()}
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

CreateFacultad.defaultProps = {
    location: {
        state: {},
    },
};

CreateFacultad.propTypes = {
    toast: PropTypes.any.isRequired,
    history: PropTypes.any.isRequired,
    location: PropTypes.any.isRequired,
    match: PropTypes.any.isRequired,
};

export default withRouter(withToast(withAuth(CreateFacultad)));
