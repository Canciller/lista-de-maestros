import React, { Component } from 'react';
import fetchAPI from 'util/fetchAPI';
import PropTypes from 'prop-types';

import withAuth from 'util/withAuth';
import withToast from 'util/withToast';
import { withRouter } from 'react-router-dom';

import View from 'components/View';
import Typography from 'components/Typography';
import TextField from 'components/TextField';
import Button from 'components/Button';

class CreateUniversidad extends Component {
    state = {
        universidad: '',
    };

    onSubmit = event => {
        event.preventDefault();

        fetchAPI('/universidades', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: this.state.universidad }),
        })
            .then(universidad => {
                this.props.toast.success(
                    `La universidad '${universidad.name}' fue añadida exitosamente.`
                );

                this.props.history.goBack();
            })
            .catch(error => this.props.toast.error(error.message));
    };

    render() {
        const { location } = this.props;

        const initialValues = location.state || {};

        return (
            <View>
                <Typography component="h1">Añadir nueva universidad</Typography>
                <form onSubmit={this.onSubmit}>
                    <TextField
                        required
                        placeholder="Universidad"
                        label="Universidad"
                        onChange={e =>
                            this.setState({ universidad: e.target.value })
                        }
                        value={this.state.universidad}
                        initialValue={initialValues.universidad}
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

CreateUniversidad.propTypes = {
    toast: PropTypes.any,
    history: PropTypes.any.isRequired,
    location: PropTypes.any.isRequired,
    match: PropTypes.any.isRequired,
};

export default withRouter(withToast(withAuth(CreateUniversidad)));
