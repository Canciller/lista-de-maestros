import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { withTheme, ThemeContext } from 'components/Theme';
import { withUser } from 'components/User';
import { withRouter } from 'react-router-dom';
import mergeStyles from 'util/mergeStyles';
import classNames from 'classnames';
import Button from 'components/Button';
import Routes from 'routes';

import {
    faCog,
    faBell,
    faBars,
    //faSignInAlt,
} from '@fortawesome/free-solid-svg-icons';

import Action from './Action';
import User from './User';
import Menu from './Menu';

import './Header.scss';

const Section = ({ className, children, ...props }) => {
    return (
        <div className={classNames('Header-Section', className)} {...props}>
            {children}
        </div>
    );
};

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

class Header extends React.Component {
    render() {
        const {
            theme,
            user,
            history,
            onOpenSideNav,
            onOpenSettings,
            //onOpenNotifications,
        } = this.props;

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
                    <Action
                        className="Header-action"
                        onClick={onOpenSettings}
                        icon={faCog}
                    />
                    <Action className="Header-action" icon={faBell} />
                </Section>
                <Separator />
                {/* User Section / Sign up Section or Register Section*/}
                <Section className="Header-Section-user">
                    {(user.isLoggedIn() && (
                        <React.Fragment>
                            <User user={user.current()} />
                            <Menu />
                        </React.Fragment>
                    )) || (
                        <div>
                            <Button
                                onClick={() => history.push(Routes.login.path)}
                                variant="green"
                            >
                                Ingresar
                            </Button>
                            <Button
                                className="Header-button-register"
                                onClick={() =>
                                    history.push(Routes.register.path)
                                }
                                variant="blue"
                            >
                                Registrarse
                            </Button>
                        </div>
                    )}
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
    history: PropTypes.object.isRequired,
    onOpenSettings: PropTypes.func,
    onOpenSideNav: PropTypes.func,
    onOpenNotifications: PropTypes.func,
};

export default withRouter(withUser(withTheme(Header)));
