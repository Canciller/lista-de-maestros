import React from 'react';
import { withTheme } from 'styled-components';
import { faCog, faBell } from '@fortawesome/free-solid-svg-icons';

import IconButton from 'components/IconButton';
import './Header.scss';

class Header extends React.Component {
    render() {
        const header = this.props.theme.header;
        const onSettingsClick = this.props.onSettingsClick;

        return (
            <div className="Header" style={header}>
                <div className="Header-section">
                    <IconButton
                        icon={faCog}
                        size="lg"
                        onClick={onSettingsClick}
                    />
                    <IconButton icon={faBell} size="lg" />
                </div>
                <div className="Header-separator" style={header.separator} />
                <div className="Header-section Profile" style={header.profile}>
                    <div className="Avatar" style={header.profile.avatar}></div>
                    <div className="User">
                        <div
                            className="User-name"
                            style={header.profile.username}
                        >
                            Gabriel Emilio
                        </div>
                        <div className="User-type" style={header.profile.type}>
                            Administrador
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withTheme(Header);
