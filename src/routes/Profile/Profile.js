import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'components/Typography';
import View from 'components/View';
import Config from 'Config';
import { withUser } from 'components/User';

class Profile extends React.Component {
    state = {};

    componentDidMount() {
        const { username } = this.props.match.params;

        fetch(`${Config.apiUrl}/users/${username}`, {
            credentials: 'include',
        })
            .then(res => res.json())
            .then(json => {
                if(json.error) throw new Error(json.error.message);
                this.setState({ user: json });
            })
            .catch(error => console.log(error));
    }

    render() {
        const { user } = this.state;

        if(!user) return null;

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
