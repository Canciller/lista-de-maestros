import React, { Component } from 'react';
import withAuth from 'util/withAuth';
import { withTheme } from 'components/Theme';

import Typography from 'components/Typography';
import Button from 'components/Button';
import TextField from 'components/TextField';
import FetchAutocomplete from 'components/AutocompleteDatabase';
import View from 'components/View';
import Form from 'components/Form';

import { MaestroStrings } from 'config/Strings';
import Autocomplete from 'components/Autocomplete';

import Routes from 'config/Routes';
import { withRouter } from 'react-router-dom';

const GoCreateButton = props => (
    <div
        style={{
            display: 'flex',
            justifyContent: 'flex-end',
        }}
    >
        {this.state.showCreateFacultad && <Button>Añadir facultad</Button>}
    </div>
);

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
        const initialValues = this.props.location.state || {};

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
                    id="createMaestro"
                >
                    <FetchAutocomplete
                        initialValue={initialValues.facultad}
                        hideClearIcon={true}
                        endpoint="/facultades"
                        onChange={this.onChange}
                        onSelect={facultad => this.setState({ facultad })}
                        getSuggestion={facultad => facultad.name}
                        noSuggestionsMessage={
                            <Button
                                fullWidth
                                variant="blue"
                                style={{
                                    marginTop: 8,
                                }}
                                onClick={() => {
                                    this.props.history.push({
                                        pathname: Routes.createFacultad.path,
                                        state: {
                                            facultad: this.state.facultad,
                                        },
                                    });
                                }}
                            >
                                Añadir facultad
                            </Button>
                        }
                        requiredMessage={MaestroStrings.facultad.required}
                        label="Facultad"
                        placeholder="Facultad"
                        name="facultad"
                        required
                    />
                    <TextField
                        initialValue={initialValues.firtname}
                        onChange={this.onChange}
                        value={this.state.firstname}
                        error={this.state.firstnameError}
                        errorMessage={this.state.firstnameErrorMessage}
                        requiredMessage={MaestroStrings.firstname.required}
                        label="Nombre"
                        placeholder="Nombre"
                        name="firstname"
                        required
                    />
                    <TextField
                        initialValue={initialValues.lastname}
                        onChange={this.onChange}
                        value={this.state.lastname}
                        error={this.state.lastnameError}
                        errorMessage={this.state.lastnameErrorMessage}
                        requiredMessage={MaestroStrings.lastname.required}
                        label="Apellido"
                        placeholder="Apellido"
                        name="lastname"
                        required
                    />
                    <Autocomplete
                        initialValue={initialValues.degree}
                        hideClearIcon={true}
                        onChange={this.onChange}
                        onSelect={degree => this.setState({ degree })}
                        requiredMessage={MaestroStrings.degree.required}
                        noSuggestionsMessage={MaestroStrings.degree.invalid}
                        suggestions={MaestroStrings.degree.enum}
                        label="Título"
                        placeholder="Título"
                        name="degree"
                        required
                    />
                    <Autocomplete
                        initialValue={initialValues.gender}
                        hideClearIcon={true}
                        onChange={this.onChange}
                        onSelect={gender => this.setState({ gender })}
                        requiredMessage={MaestroStrings.gender.required}
                        noSuggestionsMessage={MaestroStrings.gender.invalid}
                        suggestions={MaestroStrings.gender.enum}
                        label="Género"
                        placeholder="Género"
                        name="gender"
                        required
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
                </Form>
            </View>
        );
    }
}

export default withRouter(withAuth(withTheme(CreateMaestro)));
