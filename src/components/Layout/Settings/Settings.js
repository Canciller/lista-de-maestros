import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'components/Theme';
import mergeStyles from 'utils/mergeStyles';
import { faTimes, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import Sidebar from 'components/Sidebar';
import IconButton from 'components/IconButton';
import Switch from 'components/Switch';

const defaultStyles = {
    root: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        overflowX: 'hidden',
        transition: 'all 150ms ease-in-out',
    },
    close: {},
    section: {
        display: 'flex',
        padding: '20px 30px',
        alignItems: 'center',
    },
    title: {
        fontSize: 12,
        marginBottom: 10,
    },
    mode: {
        fontSize: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
};
class Settings extends React.Component {
    state = {
        dark: false,
    };

    render() {
        const { width, onClose, style, theme } = this.props;
        const { dark } = this.state;

        return (
            <Sidebar
                width={width}
                style={mergeStyles(
                    {
                        background: theme.background.normal,
                    },
                    defaultStyles.root,
                    style
                )}
            >
                <Sidebar.Section style={defaultStyles.section}>
                    <IconButton
                        className="Settings-close"
                        icon={faTimes}
                        size="lg"
                        onClick={onClose}
                        style={defaultStyles.close}
                    />
                    <div style={defaultStyles.mode}>
                        <IconButton icon={faSun} size="lg" />
                        <Switch
                            onChange={e => {
                                this.setState({ dark: !dark }, () => {
                                    if (this.state.dark) theme.setTheme('dark');
                                    else theme.setTheme('light');
                                });
                            }}
                            style={{
                                margin: '0 8px',
                            }}
                        />
                        <IconButton icon={faMoon} />
                    </div>
                </Sidebar.Section>
            </Sidebar>
        );
    }
}

Settings.defaultProps = {
    onClose: () => {},
};

Settings.propTypes = {
    onClose: PropTypes.func,
};

export default withTheme(Settings);
