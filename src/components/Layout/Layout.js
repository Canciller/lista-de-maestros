import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'components/Theme';
import mergeStyles from 'utils/mergeStyles';
import SideNav from './SideNav';
import Header from './Header';
import Settings from './Settings';
import Button from 'components/Button';

const defaultStyles = {
    root: {
        minHeight: '100vh',
        display: 'flex',
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },
    content: {
        padding: 20,
        flex: 1,
        transition: 'all 150ms ease-in-out',
    },
};

class Layout extends React.Component {
    state = {};

    constructor(props) {
        super(props);

        const { theme } = props;

        this.state = {
            sideNavOpen: true,
            settings: {
                width: 0,
            },
            sideNav: {
                width: theme.layout.sideNav.width,
            },
        };
    }

    openSettings = () => {
        this.setState({
            settings: {
                width: this.props.theme.layout.settings.width,
            },
        });
    };

    closeSettings = () => {
        this.setState({
            settings: {
                width: 0,
            },
        });
    };

    toggleSideNav = () => {
        const { theme } = this.props;

        if (this.state.sideNavOpen)
            this.setState({
                sideNavOpen: false,
                sideNav: {
                    width: 0,
                },
                content: {
                    marginLeft: theme.layout.sideNav.width,
                },
            });
        else
            this.setState({
                sideNavOpen: true,
                sideNav: {
                    width: theme.layout.sideNav.width,
                },
                content: {
                    marginLeft: 0,
                },
            });
    };

    render() {
        const { theme, user, children } = this.props;
        const { settings, sideNav } = this.state;

        return (
            <div style={defaultStyles.root}>
                <SideNav style={sideNav} />
                <Settings width={settings.width} onClose={this.closeSettings} />
                <div style={defaultStyles.main}>
                    <Header
                        user={user}
                        onOpenSettings={this.openSettings}
                        onOpenSideNav={this.toggleSideNav}
                    />
                    <div
                        style={mergeStyles(defaultStyles.content, {
                            background: theme.background.dark,
                        })}
                    >
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

Layout.propTypes = {
    user: PropTypes.object,
};

export default withTheme(Layout);
