import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'components/Theme';
import mergeStyles from 'utils/mergeStyles';
import SideNav from './SideNav';
import Header from './Header';
import Settings from './Settings';

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
    },
};

class Layout extends React.Component {
    state = {};

    openSettings() {
        this.setState({ width: this.props.layout.settings.width });
    }

    closeSettings() {
        this.setState({ width: 0 });
    }

    render() {
        const { theme, user, children } = this.props;

        return (
            <div style={defaultStyles.root}>
                <SideNav />
                <div style={defaultStyles.main}>
                    <Header user={user} onOpenSettings={this.openSettings} />
                    <div
                        style={mergeStyles(
                            defaultStyles.content,
                            theme.content
                        )}
                    >
                        {children}
                    </div>
                </div>
            </div>
        );

        /*
        return (
            <div style={defaultStyles.root}>
                <SideNav />
                <Settings
                    width={this.state.settingsWidth}
                    onClose={this.toggleSettings}
                />
                <div style={defaultStyles.main}>
                    <Header onSettingsClick={this.toggleSettings} />
                    <div
                        style={mergeStyles(
                            defaultStyles.content,
                            theme.content
                        )}
                    >
                        {children}
                    </div>
                </div>
            </div>
        );
        */
    }
}

Layout.propTypes = {
    user: PropTypes.object,
};

export default withTheme(Layout);
