import React, { Component } from 'react';
import fetchAPI from 'util/fetchAPI';
import PropTypes from 'prop-types';

import withAuth from 'util/withAuth';
import withToast from 'util/withToast';

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
            .then(universidad =>
                this.props.toast.success(
                    `La universidad '${universidad.name}' fue añadida exitosamente.`
                )
            )
            .catch(error => this.props.toast.error(error.message));
    };

    render() {
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

CreateUniversidad.propTypes = {
    toast: PropTypes.any,
};

export default withToast(withAuth(CreateUniversidad));
