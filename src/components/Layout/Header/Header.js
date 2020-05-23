import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { withTheme, ThemeContext } from 'components/Theme';
import { withUser } from 'components/User';
import mergeStyles from 'util/mergeStyles';
import classNames from 'classnames';
import Button from 'components/Button';
import Routes from 'routes';

import { faCog, faBell, faBars } from '@fortawesome/free-solid-svg-icons';

import Action from './Action';
import User from './User';

import './Header.scss';
import Typography from 'components/Typography';
import { withRouter } from 'react-router-dom';

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

Separator.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

class Header extends React.Component {
    render() {
        const {
            theme,
            history,
            onOpenSideNav,
            onOpenSettings,
            onOpenNotifications,
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
                {user && (
                    <Section className="Header-Section-actions">
                        <Action
                            className="Header-action"
                            onClick={onOpenNotifications}
                            icon={faBell}
                        />
                        <Action
                            className="Header-action"
                            onClick={onOpenSettings}
                            icon={faCog}
                        />
                    </Section>
                )}
                {user && <Separator />}
                {/* User Section / Sign up Section or Register Section*/}
                <Section className="Header-Section-user">
                    {(user && <User user={user} />) || (
                        <div
                            style={{
                                display: 'flex',
                            }}
                        >
                            <Button
                                style={{
                                    fontSize: '1em',
                                }}
                                variant="green"
                                onClick={() => history.push(Routes.login.path)}
                            >
                                Ingresar
                            </Button>
                            <Button
                                style={{
                                    fontSize: '1em',
                                    marginLeft: 6,
                                }}
                                variant="blue"
                                onClick={() =>
                                    history.push(Routes.register.path)
                                }
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
