/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import withToast from 'util/withToast';
import fetchAPI from 'util/fetchAPI';
import Routes from 'config/Routes';
import Loading from 'components/View/Loading';
import { AuthStrings } from 'config/Strings';

export default function withAuth(ComponentToProtect) {
    return withToast(
        class extends Component {
            state = {
                loading: true,
                redirect: false,
            };

            componentDidMount() {
                fetchAPI('/auth/checkToken')
                    .catch(error =>
                        this.setState({ redirect: true }, () =>
                            this.props.toast.error(AuthStrings.unauthorized)
                        )
                    )
                    .then(() => this.setState({ loading: false }));
            }

            render() {
                const { loading, redirect } = this.state;

                if (loading) return <Loading />;

                if (redirect) return <Redirect to={Routes.login.path} />;

                return <ComponentToProtect {...this.props} />;
            }
        }
    );
}
