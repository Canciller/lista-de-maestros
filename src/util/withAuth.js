import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Config from 'Config';

export default function withAuth(ComponentToProtect) {
    // eslint-disable-next-line react/display-name
    return class extends Component {
        constructor() {
            super();
            this.state = {
                loading: true,
                redirect: false,
            };
        }
        componentDidMount() {
            const token = localStorage.token;
            fetch(`${Config.apiUrl}/auth/checkToken`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(res => {
                    if (res.status === 200) {
                        this.setState({ loading: false });
                    } else {
                        throw Error(res.statusText);
                    }
                })
                .catch(error => {
                    console.error(error);
                    this.setState({ loading: false, redirect: true });
                });
        }
        render() {
            const { loading, redirect } = this.state;
            if (loading) {
                return null;
            }
            if (redirect) {
                return <Redirect to="/login" />;
            }
            return <ComponentToProtect {...this.props} />;
        }
    };
}
