import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { withTheme, ThemeContext } from 'components/Theme';
import { withUser } from 'components/User';
import mergeStyles from 'util/mergeStyles';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Routes from 'routes';

import { faCog, faBell, faBars } from '@fortawesome/free-solid-svg-icons';

import Action from './Action';
import User from './User';

import './Header.scss';

const Section = ({ className, children, ...props }) => {
    return (
        <div className={classNames('Header-Section', className)} {...props}>
            {children}
        </div>
    );
};

Section.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
}

const Separator = ({ className, style, ...props }) => {
    const theme = useContext(ThemeContext);

    return (
        <div
            className={classNames('Header-Separator', className)}
            style={mergeStyles(
                {
                    borderColor: theme.foreground.light,
                },
                style
            )}
            {...props}
        />
    );
};

Separator.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
}

class Header extends React.Component {
    render() {
        const {
            theme,
            onOpenSideNav,
            onOpenSettings,
            //onOpenNotifications,
        } = this.props;

        const user = this.props.user.current();

        return (
            <div
                className="Header-root"
                style={mergeStyles(
                    {
                        background: theme.background.light,
                    },
                    theme.layout.header
                )}
            >
                {/* Open SideNav */}
                <Section
                    style={{
                        flex: 1,
                    }}
                >
                    <Action onClick={onOpenSideNav} icon={faBars} />
                </Section>
                {/* Open Settings and Open Notifications */}
                <Section className="Header-Section-actions">
                    <Action className="Header-action" icon={faBell} />
                    <Action
                        className="Header-action"
                        onClick={onOpenSettings}
                        icon={faCog}
                    />
                </Section>
                <Separator />
                {/* User Section / Sign up Section or Register Section*/}
                <Section className="Header-Section-user">
                    <User
                        user={
                            (user && {
                                username: (
                                    <Link
                                        style={{
                                            color: theme.foreground.normal,
                                        }}
                                        to={Routes.profile.path.concat(
                                            `/${user.username}`
                                        )}
                                    >
                                        {user.username}
                                    </Link>
                                ),
                                role: user.role,
                            }) || {
                                username: (
                                    <React.Fragment>
                                        <Link
                                            style={{
                                                color: theme.foreground.normal,
                                            }}
                                            to={Routes.login.path}
                                        >
                                            Ingresar
                                        </Link>{' '}
                                        o{' '}
                                        <Link
                                            style={{
                                                color: theme.foreground.normal,
                                            }}
                                            to={Routes.register.path}
                                        >
                                            Registrarse
                                        </Link>
                                    </React.Fragment>
                                ),
                                role: 'Invitado',
                            }
                        }
                    />
                </Section>
            </div>
        );
    }
}

Header.defaultProps = {
    onOpenSettings: () => {},
    onOpenSideNav: () => {},
    onOpenNotifications: () => {},
};

Header.propTypes = {
    theme: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    onOpenSettings: PropTypes.func,
    onOpenSideNav: PropTypes.func,
    onOpenNotifications: PropTypes.func,
};

export default withUser(withTheme(Header));
