import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withTheme } from 'components/Theme';
import './User.scss';

class User extends React.Component {
    render() {
        const { theme, user, className, ...props } = this.props;

        return (
            <div className="Header-User-root">
                {/* User avatar */}
                <div
                    className="Header-User-avatar"
                    style={{
                        borderColor: theme.foreground.light,
                    }}
                />
                {/* User data */}
                <div className="Header-User-data">
                    <div
                        className="Header-User-username"
                        style={{
                            color: theme.foreground.normal,
                        }}
                    >
                        {user.username}
                    </div>
                    <div
                        className="Header-User-type"
                        style={{
                            color: theme.foreground.light,
                        }}
                    >
                        {user.type}
                    </div>
                </div>
            </div>
        );
    }
}

User.propTypes = {
    theme: PropTypes.object.isRequired,
    user: PropTypes.object,
};

export default withTheme(User);