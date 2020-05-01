/* eslint-disable no-constant-condition */
import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Typography from 'components/Typography';
import View from 'components/View';
import Loading from 'components/View/Loading';
import { withUser } from 'components/User';
import fetchAPI from 'util/fetchAPI';

class Profile extends React.Component {
    state = {};

    componentDidMount() {
        const { username } = this.props.match.params;

        fetchAPI(`/users/${username}`)
            .then(user => this.setState({ loaded: true, user }))
            .catch(error => this.setState({ loaded: true, error }));
    }

    render() {
        const { user, loaded } = this.state;

        if (!loaded) return <Loading />;

        if (!user) return <Redirect to="/404" />;

        return (
            <View>
                <Typography component="h1">{user.username}</Typography>
                <Typography component="h2">{user.role}</Typography>
                <Typography>{user.email}</Typography>
            </View>
        );
    }
}

Profile.propTypes = {
    user: PropTypes.any.isRequired,
    match: PropTypes.any,
};

export default withUser(Profile);
