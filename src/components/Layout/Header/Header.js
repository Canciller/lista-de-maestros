import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCog,
    faBell,
    faSignInAlt,
    faHandPointRight,
} from '@fortawesome/free-solid-svg-icons';
import { withTheme, ThemeContext } from 'components/Theme';
import mergeStyles from 'utils/mergeStyles';
import Button from 'components/Button';
//import IconButton from 'components/IconButton';

const defaultStyles = {
    root: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    section: {
        padding: '0 20px',
        display: 'flex',
        alignItems: 'center',
    },
    separator: {
        margin: 'auto 0',
        width: 1,
        height: '80%',
        borderRadius: '50%',
    },
    profile: {
        display: 'flex',
        cursor: 'pointer',
    },
    avatar: {
        height: 35,
        width: 35,
        borderRadius: '50%',
        marginRight: 10,
        borderWidth: 1,
        borderStyle: 'solid',
    },
    user: {
        fontSize: 12,
    },
    usertype: {
        fontSize: '0.8em',
        marginTop: 2,
    },
    buttons: {},
};

const Profile = ({ user }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div
            style={mergeStyles(
                defaultStyles.section,
                user && defaultStyles.profile
            )}
        >
            {user !== undefined ? (
                <React.Fragment>
                    <div
                        style={mergeStyles(
                            theme.header.profile.avatar,
                            defaultStyles.avatar
                        )}
                    ></div>
                    <div style={mergeStyles(defaultStyles.user)}>
                        <div
                            style={mergeStyles(
                                theme.header.profile.username,
                                defaultStyles.username
                            )}
                        >
                            {user.name}
                        </div>
                        <div
                            style={mergeStyles(
                                theme.header.profile.type,
                                defaultStyles.usertype
                            )}
                        >
                            {user.type}
                        </div>
                    </div>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Button
                        hover={theme.button.blue.hover}
                        to="/login"
                        style={theme.button.blue}
                    >
                        <FontAwesomeIcon icon={faSignInAlt} />
                        <span
                            style={{
                                marginLeft: 5,
                            }}
                        >
                            Sign in
                        </span>
                    </Button>
                    <Button
                        to="/register"
                        hover={theme.button.green.hover}
                        style={mergeStyles(theme.button.green, {
                            marginLeft: 3,
                        })}
                    >
                        Register
                    </Button>
                </React.Fragment>
            )}
        </div>
    );
};

class Header extends React.Component {
    render() {
        const {
            theme,
            layout,
            user,
            onOpenSettings,
            onOpenNotifications,
        } = this.props;

        return (
            <div
                style={mergeStyles(
                    theme.header,
                    layout.header,
                    defaultStyles.root
                )}
            >
                <div></div>
                <div
                    style={mergeStyles(
                        theme.header.separator,
                        defaultStyles.separator
                    )}
                ></div>
                <Profile user={user} />
            </div>
        );
        /*
        return (
            <div className="Header" style={header}>
                <div className="Header-section">
                    <IconButton
                        icon={faCog}
                        size="lg"
                        onClick={onSettingsClick}
                    />
                    <IconButton icon={faBell} size="lg" />
                </div>
                <div className="Header-separator" style={header.separator} />
                <div className="Header-section Profile" style={header.profile}>
                    <div className="Avatar" style={header.profile.avatar}></div>
                    <div className="User">
                        <div
                            className="User-name"
                            style={header.profile.username}
                        >
                            Gabriel Emilio
                        </div>
                        <div className="User-type" style={header.profile.type}>
                            Administrador
                        </div>
                    </div>
                </div>
            </div>
        );
        */
    }
}

Header.defaultProps = {
    onOpenNotifications: () => {},
    onOpenSettings: () => {},
};

Header.propTypes = {
    user: PropTypes.object,
    onOpenNotifications: PropTypes.func,
    onOpenSettings: PropTypes.func,
};

export default withTheme(Header);
