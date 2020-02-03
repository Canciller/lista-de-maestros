import React from 'react';
import { withTheme } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faStream,
    faHeart,
    faEye,
} from '@fortawesome/free-solid-svg-icons';

import Logo from './Logo';
import NavLink from './NavLink';
import Separator from './Separator';
import './Sidebar.scss';

class Sidebar extends React.Component {
    render() {
        const sidebar = this.props.theme.sidebar;

        return (
            <div className="Sidebar" style={sidebar}>
                <div className="Sidebar-header" style={sidebar.header}>
                    <Logo />
                </div>
                <Separator />
                <div className="Sidebar-nav" style={sidebar.nav}>
                    <NavLink to="/">
                        <FontAwesomeIcon icon={faHome} />
                        <span>Inicio</span>
                    </NavLink>
                    <NavLink to="/lista">
                        <FontAwesomeIcon icon={faStream} />
                        <span>Lista</span>
                    </NavLink>
                    <NavLink>
                        <FontAwesomeIcon icon={faHeart} />
                        <span>Mis aportes</span>
                    </NavLink>
                    <NavLink>
                        <FontAwesomeIcon icon={faEye} />
                        <span>Revision</span>
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default withTheme(Sidebar);
