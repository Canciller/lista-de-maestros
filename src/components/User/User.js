import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import fetchAPI from 'util/fetchAPI';

const UserContext = React.createContext();

class User extends React.Component {
    state = {};

    signIn = (user, callback) => this.setState({ user }, callback);

    signOut = () => {
        this.setState({ user: null }, () =>
            fetchAPI('/auth/logout', {
                method: 'POST',
            }).catch(error => console.log(error))
        );
    };

    current = () => this.state.user;

    isLoggedIn = () => this.state.user != undefined;

    componentDidMount() {
        fetchAPI('/users/me')
            .then(me => this.signIn(me))
            .catch(error => {});
    }

    render() {
        const { children } = this.props;
        const { signIn, signOut, current, isLoggedIn } = this;

        return (
            <UserContext.Provider
                value={{
                    signIn,
                    signOut,
                    current,
                    isLoggedIn,
                }}
            >
                {children}
            </UserContext.Provider>
        );
    }
}

User.propTypes = {
    children: PropTypes.any,
};

const withUser = Component => {
    // eslint-disable-next-line react/display-name
    return props => {
        return (
            <UserContext.Consumer>
                {context => {
                    return <Component {...props} user={context} />;
                }}
            </UserContext.Consumer>
        );
    };
};

export { withUser, UserContext };

export default User;
