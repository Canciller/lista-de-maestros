import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'components/Theme';
import SideNav from './SideNav';
import Header from './Header';
import Settings from './Settings';
import './Layout.scss';

class Layout extends React.Component {
    state = {};

    constructor(props) {
        super(props);

        this.state = {
            isSettingsOpen: false,
            isSideNavOpen: false,
        };
    }

    openSettings = () => {
        this.setState({
            isSettingsOpen: true,
        });
    };

    closeSettings = () => {
        this.setState({
            isSettingsOpen: false,
        });
    };

    openSideNav = () => {
        this.setState({
            isSideNavOpen: true,
        });
    };

    closeSideNav = () => {
        this.setState({
            isSideNavOpen: false,
        });
    };

    render() {
        const { theme, children } = this.props;
        const { isSideNavOpen, isSettingsOpen } = this.state;

        return (
            <div className="Layout-root">
                <Settings open={isSettingsOpen} onClose={this.closeSettings} />
                <SideNav open={isSideNavOpen} onClose={this.closeSideNav} />
                <div className="Layout-container">
                    <Header
                        onOpenSettings={this.openSettings}
                        onOpenSideNav={() =>
                            isSideNavOpen
                                ? this.closeSideNav()
                                : this.openSideNav()
                        }
                    />
                    <div
                        className="Layout-content"
                        style={{
                            background: theme.background.dark,
                        }}
                    >
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

Layout.propTypes = {
    theme: PropTypes.object.isRequired,
    children: PropTypes.any,
};

export default withTheme(Layout);
