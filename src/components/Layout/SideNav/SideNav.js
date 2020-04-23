import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { withTheme, ThemeContext } from 'components/Theme';
import { withUser } from 'components/User';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Routes from 'routes';
import Logo from './Logo';
import Link from './Link';
import './SideNav.scss';

const Separator = () => {
    const theme = useContext(ThemeContext);

    return (
        <div
            className="SideNav-Separator"
            style={{
                borderColor: theme.colors.white.light,
            }}
        />
    );
};

class SideNav extends React.Component {
    render() {
        const { theme, user, onClose, open } = this.props;

        return (
            <React.Fragment>
                <div
                    className="SideNav-click-outside"
                    onClick={onClose}
                    style={{
                        visibility: open ? 'visible' : 'hidden',
                        opacity: open ? 1 : 0,
                    }}
                ></div>
                <div
                    className="SideNav-root"
                    style={{
                        background: theme.colors.green.normal,
                        width: open ? theme.layout.sideNav.width : 0,
                    }}
                >
                    <div className="SideNav-header" style={theme.layout.header}>
                        {/* Logo */}
                        <Logo />
                    </div>
                    <Separator />
                    {/* Menu */}
                    <div
                        style={{
                            marginTop: 20,
                        }}
                    >
                        {Object.keys(Routes).map(key => {
                            const route = Routes[key];
                            if (
                                !route.name ||
                                (route.hideWithUser && user.isLoggedIn())
                            )
                                return undefined;
                            return (
                                <Link to={route.path} key={key}>
                                    {route.icon && (
                                        <FontAwesomeIcon icon={route.icon} />
                                    )}
                                    <span
                                        style={{
                                            marginLeft: 18,
                                        }}
                                    >
                                        {route.name}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

SideNav.defaultProps = {
    styles: {},
    onClose: () => {},
    open: true,
};

SideNav.propTypes = {
    theme: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    onClose: PropTypes.func,
    open: PropTypes.bool,
};

export default withUser(withTheme(SideNav));
