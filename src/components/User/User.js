import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import Config from 'Config';

const UserContext = React.createContext();

class User extends React.Component {
    state = {};

    signIn = user => this.setState({ user });

    signOut = () => this.setState({ user: undefined }, () => {
        fetch(`${Config.apiUrl}/auth/logout`, {
            method: 'POST',
            credentials: 'include',
        })
            .catch(error => console.log(error));
    });

    current = () => this.state.user;

    isLoggedIn = () => this.state.user != undefined;

    componentDidMount() {
        fetch(`${Config.apiUrl}/users/me`, {
            credentials: 'include',
        })
            .then(res => res.json())
            .then(json => {
                if (json.error) throw new Error(json.error.message);
                this.signIn(json);
            })
            .catch(error => console.log(error));
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
