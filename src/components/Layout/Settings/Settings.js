import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'components/Theme';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import IconButton from 'components/IconButton';
import Switch from 'components/Switch';
import './Settings.scss';

class Settings extends React.Component {
    state = {
        isThemeDark: false,
    };

    toggleTheme = () => {
        const { theme } = this.props;

        this.setState({ isThemeDark: !this.state.isThemeDark }, () => {
            if (this.state.isThemeDark) theme.setTheme('dark');
            else theme.setTheme('light');
        });
    };

    setLightTheme = () => {
        if (this.state.isThemeDark)
            this.setState({ isThemeDark: false }, () =>
                this.props.theme.setTheme('light')
            );
    };

    setDarkTheme = () => {
        if (!this.state.isThemeDark)
            this.setState({ isThemeDark: true }, () =>
                this.props.theme.setTheme('dark')
            );
    };

    render() {
        const { theme, onClose, open } = this.props;

        return (
            <React.Fragment>
                <div
                    className="Settings-click-outside"
                    onClick={onClose}
                    style={{
                        visibility: open ? 'visible' : 'hidden',
                        opacity: open ? 1 : 0,
                    }}
                />
                <div
                    className="Settings-root"
                    style={{
                        background: theme.background.normal,
                        width: open ? theme.layout.sideNav.width : 0,
                    }}
                >
                    <div className="Settings-theme-switch">
                        <IconButton icon={faSun} onClick={this.setLightTheme} />
                        <Switch
                            checked={this.state.isThemeDark}
                            onChange={this.toggleTheme}
                            style={{
                                margin: '0 8px',
                            }}
                        />
                        <IconButton icon={faMoon} onClick={this.setDarkTheme} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

Settings.defaultProps = {
    onClose: () => {},
    open: false,
};

Settings.propTypes = {
    theme: PropTypes.object.isRequired,
    onClose: PropTypes.func,
    open: PropTypes.bool,
};

export default withTheme(Settings);
