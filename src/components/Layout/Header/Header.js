import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faBell, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { withTheme, ThemeContext } from 'components/Theme';
import mergeStyles from 'utils/mergeStyles';
import Button from 'components/Button';
import IconButton from 'components/IconButton';

const defaultStyles = {
    root: {
        display: 'flex',
        justifyContent: 'flex-end',
        transition: 'all 150ms ease-in-out',
    },
    section: {
        padding: '0 20px',
        display: 'flex',
        alignItems: 'center',
    },
    separator: {
        margin: 'auto 0',
        borderLeftWidth: 1,
        borderLeftStyle: 'solid',
        height: '70%',
    },
    userSection: {
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
    actionsSection: {
        padding: '0 10px',
    },
    action: {
        margin: '0 5px',
    },
};

const NoUser = () => {
    return (
        <React.Fragment>
            <Button to="/login" variant="blue">
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
                variant="green"
                style={{
                    marginLeft: 3,
                }}
            >
                Register
            </Button>
        </React.Fragment>
    );
};

const User = ({ user }) => {
    const theme = useContext(ThemeContext);
    return (
        <React.Fragment>
            <div
                style={mergeStyles(
                    {
                        borderColor: theme.foreground.light,
                    },
                    defaultStyles.avatar
                )}
            ></div>
            <div style={mergeStyles(defaultStyles.user)}>
                <div
                    style={mergeStyles(
                        {
                            color: theme.foreground.normal,
                        },
                        defaultStyles.username
                    )}
                >
                    {user.name}
                </div>
                <div
                    style={mergeStyles(
                        {
                            color: theme.foreground.light,
                        },
                        defaultStyles.usertype
                    )}
                >
                    {user.type}
                </div>
            </div>
        </React.Fragment>
    );
};

const Action = ({ icon, onClick }) => {
    return (
        <IconButton
            icon={icon}
            size="lg"
            onClick={onClick}
            style={defaultStyles.action}
        />
    );
};

class Header extends React.Component {
    render() {
        const { theme, user, onOpenSettings, onOpenNotifications } = this.props;

        return (
            <div
                style={mergeStyles(
                    {
                        background: theme.background.light,
                    },
                    theme.layout.header,
                    defaultStyles.root
                )}
            >
                <div
                    style={mergeStyles(
                        defaultStyles.section,
                        defaultStyles.actionsSection
                    )}
                >
                    <Action icon={faCog} onClick={onOpenSettings} />
                    <Action icon={faBell} onClick={onOpenNotifications} />
                </div>
                <div
                    style={mergeStyles(
                        {
                            borderColor: theme.foreground.light,
                        },
                        defaultStyles.separator
                    )}
                ></div>
                <div
                    style={mergeStyles(
                        defaultStyles.section,
                        user
                            ? defaultStyles.userSection
                            : defaultStyles.noUserSection
                    )}
                >
                    {user ? <User user={user} /> : <NoUser />}
                </div>
            </div>
        );
    }
}

Header.defaultProps = {
    onOpenNotifications: () => {},
    onOpenSettings: () => {},
};

Header.propTypes = {
    user: PropTypes.object,
    theme: PropTypes.object.isRequired,
    onOpenNotifications: PropTypes.func,
    onOpenSettings: PropTypes.func,
};

export default withTheme(Header);
