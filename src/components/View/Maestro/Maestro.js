import React, { Component } from 'react';
import fetchAPI from 'util/fetchAPI';
import View from 'components/View';
import Error from 'components/View/Error';
import Loading from 'components/View/Loading';
import { Redirect } from 'react-router-dom';
import Typography from 'components/Typography';

class Maestro extends Component {
    state = {}

    componentDidMount() {
        const { id } = this.props.match.params;

        fetchAPI(`/maestros/${id}`)
            .then(maestro => this.setState({ loaded: true, maestro}))
            .catch(error => this.setState({ loaded: true, error }));
    }

    render() {
        const { maestro, loaded, error } = this.state;

        if(!loaded) return <Loading />

        if(error) return <Error error={error} />

        if(!maestro) return <Redirect to="/404" />

        console.log(maestro);

        return (
            <View className="Maestro-root">
                <Typography>{maestro.degree}</Typography>
                <Typography>{[maestro.firstname, maestro.lastname].join(' ')}</Typography>
            </View>
        );
    }
}

export default Maestro;