import React from 'react';
import { withTheme } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'

import './Header.scss';

class Header extends React.Component
{
    render() {
        const header = this.props.theme.header;
        const colors = this.props.theme.colors;

        return (
            <div className="Header" style={header}>
                <div className="Header-section">
                    <FontAwesomeIcon
                    style={{
                        color: colors.gray
                    }}
                    className="Header-settings-button" icon={faCog}/>
                </div>
                <div className="Header-section Profile" style={header.profile}>
                    <div className="Avatar">
                    </div>
                    <div className="User">
                        <div className="User-name">
                            Gabriel Emilio
                        </div>
                        <div className="User-type" style={{
                            color: colors.gray
                        }}>
                            Administrador
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withTheme(Header);
