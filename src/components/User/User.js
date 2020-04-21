import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import Config from 'Config';

const UserContext = React.createContext();

class User extends React.Component {
    state = {};

    signIn = user => this.setState({ user });

    signOut = () =>
        this.setState(
            { user: undefined },
            () => (localStorage.token = undefined)
        );

    current = () => this.state.user;

    isLoggedIn = () => this.state.user != undefined;

    componentDidMount() {
        const token = localStorage.token;
        fetch(`${Config.apiUrl}/users/me`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then(res => res.json())
            .then(json => {
                if (json.error) throw new Error(json.error.message);
                this.signIn(json);
            })
            .catch(err => {
                console.error(err);
            });
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
