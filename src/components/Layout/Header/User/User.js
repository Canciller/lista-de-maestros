import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'components/Theme';
import { Link, withRouter } from 'react-router-dom';
import Routes from 'routes';

import './User.scss';

class User extends React.Component {
    render() {
        const { theme, user, history } = this.props;

        const url = Routes.profile.path.concat(`/${user.username}`);

        return (
            <div className="Header-User-root">
                {/* User avatar */}
                <div
                    className="Header-User-avatar"
                    style={{
                        borderColor: theme.foreground.light,
                    }}
                    onClick={() => history.push(url)}
                />
                {/* User data */}
                <div className="Header-User-data">
                    <div
                        className="Header-User-username"
                        style={{
                            color: theme.foreground.normal,
                        }}
                    >
                        <Link
                            style={{
                                color: theme.foreground.normal,
                            }}
                            to={url}
                        >
                            {user.username}
                        </Link>
                    </div>
                    <div
                        className="Header-User-type"
                        style={{
                            color: theme.foreground.light,
                        }}
                    >
                        {user.role}
                    </div>
                </div>
            </div>
        );
    }
}

User.propTypes = {
    theme: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};

export default withRouter(withTheme(User));
