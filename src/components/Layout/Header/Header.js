import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { withTheme, ThemeContext } from 'components/Theme';
import mergeStyles from 'util/mergeStyles';
import classNames from 'classnames';

import {
    faCog,
    faBell,
    faBars,
    //faSignInAlt,
} from '@fortawesome/free-solid-svg-icons';

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
                <Section>
                    <User
                        user={{
                            username: 'Gabriel Emilio',
                            type: 'Administrador',
                        }}
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
    onOpenSettings: PropTypes.func,
    onOpenSideNav: PropTypes.func,
    onOpenNotifications: PropTypes.func,
};

export default withTheme(Header);
