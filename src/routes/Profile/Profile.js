import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'components/Typography';
import View from 'components/View';
import Config from 'Config';

class Profile extends React.Component {
    state = {};

    componentDidMount() {
        const { username } = this.props.match.params;

        fetch(`${Config.serverUrl}/api/user/${username}`, {
            credentials: 'include',
        })
            .then(res => res.json())
            .then(user => this.setState({ user }))
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <View>
                <Typography component="h1">Profile</Typography>
                <Typography>{JSON.stringify(this.state.user)}</Typography>
            </View>
        );
    }
}

Profile.propTypes = {
    match: PropTypes.any,
};

export default Profile;
